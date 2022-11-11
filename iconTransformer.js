const fs = require("fs");
const path = require("path");
const cheerio = require("cheerio").default;
const rawGlob = require("glob-promise");

const UPPERCASE = /[\p{Lu}]/u;
const LOWERCASE = /[\p{Ll}]/u;
const LEADING_CAPITAL = /^[\p{Lu}](?![\p{Lu}])/gu;
const IDENTIFIER = /([\p{Alpha}\p{N}_]|$)/u;
const SEPARATORS = /[_.\- ]+/;

const LEADING_SEPARATORS = new RegExp("^" + SEPARATORS.source);
const SEPARATORS_AND_IDENTIFIER = new RegExp(
  SEPARATORS.source + IDENTIFIER.source,
  "gu"
);
const NUMBERS_AND_IDENTIFIER = new RegExp("\\d+" + IDENTIFIER.source, "gu");

const preserveCamelCase = (string, toLowerCase, toUpperCase) => {
  let isLastCharLower = false;
  let isLastCharUpper = false;
  let isLastLastCharUpper = false;

  for (let index = 0; index < string.length; index++) {
    const character = string[index];

    if (isLastCharLower && UPPERCASE.test(character)) {
      string = string.slice(0, index) + "-" + string.slice(index);
      isLastCharLower = false;
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = true;
      index++;
    } else if (
      isLastCharUpper &&
      isLastLastCharUpper &&
      LOWERCASE.test(character)
    ) {
      string = string.slice(0, index - 1) + "-" + string.slice(index - 1);
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = false;
      isLastCharLower = true;
    } else {
      isLastCharLower =
        toLowerCase(character) === character &&
        toUpperCase(character) !== character;
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper =
        toUpperCase(character) === character &&
        toLowerCase(character) !== character;
    }
  }

  return string;
};

const preserveConsecutiveUppercase = (input, toLowerCase) => {
  LEADING_CAPITAL.lastIndex = 0;

  return input.replace(LEADING_CAPITAL, (m1) => toLowerCase(m1));
};

const postProcess = (input, toUpperCase) => {
  SEPARATORS_AND_IDENTIFIER.lastIndex = 0;
  NUMBERS_AND_IDENTIFIER.lastIndex = 0;

  return input
    .replace(SEPARATORS_AND_IDENTIFIER, (_, identifier) =>
      toUpperCase(identifier)
    )
    .replace(NUMBERS_AND_IDENTIFIER, (m) => toUpperCase(m));
};

function camelcase(input, options) {
  if (!(typeof input === "string" || Array.isArray(input))) {
    throw new TypeError("Expected the input to be `string | string[]`");
  }

  options = {
    pascalCase: false,
    preserveConsecutiveUppercase: false,
    ...options,
  };

  if (Array.isArray(input)) {
    input = input
      .map((x) => x.trim())
      .filter((x) => x.length)
      .join("-");
  } else {
    input = input.trim();
  }

  if (input.length === 0) {
    return "";
  }

  const toLowerCase =
    options.locale === false
      ? (string) => string.toLowerCase()
      : (string) => string.toLocaleLowerCase(options.locale);

  const toUpperCase =
    options.locale === false
      ? (string) => string.toUpperCase()
      : (string) => string.toLocaleUpperCase(options.locale);

  if (input.length === 1) {
    if (SEPARATORS.test(input)) {
      return "";
    }

    return options.pascalCase ? toUpperCase(input) : toLowerCase(input);
  }

  const hasUpperCase = input !== toLowerCase(input);

  if (hasUpperCase) {
    input = preserveCamelCase(input, toLowerCase, toUpperCase);
  }

  input = input.replace(LEADING_SEPARATORS, "");
  input = options.preserveConsecutiveUppercase
    ? preserveConsecutiveUppercase(input, toLowerCase)
    : toLowerCase(input);

  if (options.pascalCase) {
    input = toUpperCase(input.charAt(0)) + input.slice(1);
  }

  return postProcess(input, toUpperCase);
}
function getDirectories(path) {
  return fs.readdirSync(path).filter(function (file) {
    return fs.statSync(path + "/" + file).isDirectory();
  });
}
let FOLDERS = [];
try {
  FOLDERS = getDirectories(path.join(__dirname, "src", "assets", "svgs"));
} catch (error) {
  console.log("---No Svgs found!----");
}

function iconRowTemplate(formattedName, iconData, type = "module") {
  switch (type) {
    case "module":
      return (
        `export function ${formattedName} (props : IconBaseProps) {\n` +
        `  return GenIcon(${JSON.stringify(iconData)})(props);\n` +
        `};\n`
      );
    default:
      throw new Error(`Unknown type: ${type}`);
  }
}
function glob(pattern) {
  return rawGlob(pattern.replace(/\\/g, "/")); // convert windows path
}
async function getIconFiles(content) {
  if (typeof content.files === "string") {
    const pattern = content.files.replace(/\\/g, "/"); // convert windows path
    return glob(pattern);
  }
  return content.files();
}

function dirInit() {
  const write = (filePath, str) =>
    fs.writeFileSync(path.resolve(__dirname, ...filePath), str, "utf8");

  if (
    !fs.existsSync(path.resolve(__dirname, "src", "assets", "svg-components"))
  ) {
    fs.mkdirSync(path.resolve(__dirname, "src", "assets", "svg-components"));
  }

  for (let folder of FOLDERS) {
    folder = camelcase(folder, { pascalCase: true });
    if (
      !fs.existsSync(
        path.resolve(__dirname, "src", "assets", "svg-components", folder)
      )
    )
      fs.mkdirSync(
        path.resolve(__dirname, "src", "assets", "svg-components", folder)
      );
    if (
      !fs.existsSync(
        path.resolve(
          __dirname,
          "src",
          "assets",
          "svg-components",
          folder,
          "index.ts"
        )
      )
    )
      write(
        ["src", "assets", "svg-components", folder, "index.ts"],
        "// THIS FILE IS AUTO GENERATED\nimport { GenIcon, IconBaseProps } from '../../../components/Icons/GenIcon';\n"
      );
  }
}

dirInit();

async function convertIconData(svg) {
  const $svg = cheerio.load(svg, { xmlMode: true })("svg");

  // filter/convert attributes
  // 1. remove class attr
  // 2. convert to camelcase ex: fill-opacity => fillOpacity
  const attrConverter = (attribs, tagName) =>
    attribs &&
    Object.keys(attribs)
      .filter(
        (name) =>
          ![
            "class",
            ...(tagName === "svg"
              ? ["xmlns", "xmlns:xlink", "xml:space", "width", "height"]
              : []), // if tagName is svg remove size attributes
          ].includes(name)
      )
      .reduce((obj, name) => {
        const newName = camelcase(name);
        obj[newName] = attribs[name];
        switch (newName) {
          case "fill":
            if (attribs[name] === "#8F8F8F") {
              obj[newName] = "currentColor";
            }
            break;
          case "stroke":
            if (attribs[name] === "#8F8F8F") {
              obj[newName] = "currentColor";
            }
            break;

          default:
            obj[newName] = attribs[name];
            break;
        }
        return obj;
      }, {});

  // convert to [ { tag: 'path', attr: { d: 'M436 160c6.6 ...', ... }, child: { ... } } ]
  const elementToTree = (element) => {
    return element
      .filter((_, e) => e.tagName && !["style"].includes(e.tagName))
      .map((_, e) => ({
        tag: e.tagName,
        attr: attrConverter(e.attribs, e.tagName),
        child:
          e.children && e.children.length
            ? elementToTree(cheerio(e.children))
            : undefined,
      }))
      .get();
  };

  const tree = elementToTree($svg);

  return tree[0]; // like: [ { tag: 'path', attr: { d: 'M436 160c6.6 ...', ... }, child: { ... } } ]
}
let str = "";
let existingStr = "";
if (
  fs.existsSync(
    path.resolve(__dirname, "src", "assets", "svg-components", "index.ts")
  )
) {
  existingStr = fs.readFileSync(
    path.join(__dirname, "src", "assets", "svg-components", "index.ts"),
    "utf-8"
  );
}

const exists = new Set(); // for remove duplicate
FOLDERS.forEach((folder) => {
  const ct = {
    files: path.resolve(__dirname, "src", "assets", "svgs", folder, "./*.svg"),
  };
  folder = camelcase(folder, { pascalCase: true });
  if (!existingStr.includes(`export * from './${folder}'`))
    str += `export * from './${folder}';\n`;

  getIconFiles(ct)
    .then(async (files) => {
      for (const file of files) {
        const svgStrRaw = fs.readFileSync(file, "utf8");
        const svgStr = svgStrRaw;

        const iconData = await convertIconData(svgStr);

        const rawName = path.basename(file, path.extname(file));
        const pascalName = camelcase(rawName, { pascalCase: true });

        const name = "Svg" + pascalName;

        if (!exists.has(name)) {
          exists.add(name);
          const contents = fs.readFileSync(
            path.resolve(
              __dirname,
              "src",
              "assets",
              "svg-components",
              folder,
              "index.ts"
            ),
            "utf8"
          );
          if (!contents.includes(" " + name + " ")) {
            const modRes = iconRowTemplate(name, iconData, "module");

            fs.appendFileSync(
              path.resolve(
                __dirname,
                "src",
                "assets",
                "svg-components",
                folder,
                "index.ts"
              ),
              modRes,
              "utf8"
            );
          }
        }
      }
    })
    .catch(console.log);
});
if (
  fs.existsSync(
    path.resolve(__dirname, "src", "assets", "svg-components", "index.ts")
  )
)
  fs.appendFileSync(
    path.resolve(__dirname, "src", "assets", "svg-components", "index.ts"),
    str,
    "utf-8"
  );
else
  fs.writeFileSync(
    path.resolve(__dirname, "src", "assets", "svg-components", "index.ts"),
    str,
    "utf-8"
  );
