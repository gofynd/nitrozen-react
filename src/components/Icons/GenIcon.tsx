import React from "react";

export interface IconTree {
  tag: string;
  attr: { [key: string]: string };
  child?: IconTree[];
}
export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
  children?: React.ReactNode;
  size?: string | number;
  color?: string;
  title?: string;
}

function IconBase(props: IconBaseProps & { attr?: Record<string, string> }) {
  const { attr, size, title, ...svgProps } = props;
  const computedSize = size || "1em";
  let className;
  if (props.className)
    className = (className ? className + " " : "") + props.className;

  return (
    <svg
      {...svgProps}
      className={"nitrozen-svg-icon " + className}
      style={{
        color: props.color,
        ...props.style,
      }}
      height={computedSize}
      width={computedSize}
      xmlns="http://www.w3.org/2000/svg"
      {...attr}
    >
      {title && <title>{title}</title>}
      {props.children}
    </svg>
  );
}

function Tree2Element(
  tree: IconTree[] | undefined
): React.ReactElement[] | undefined {
  return tree?.map((node: IconTree, i: number) => {
    const keys = Object.keys(node.attr);
    const attrTemp = {} as any;
    keys.forEach((attrKey) => {
      if (attrKey === "style") {
        const temp = node.attr?.style.split(",");

        const obj = {} as any;
        temp.forEach((item: string) => {
          const [key, val] = item.split(":");

          obj[key] = val;
        });
        attrTemp.style = obj;
      } else {
        attrTemp[attrKey] = node.attr[attrKey];
      }
    });
    node.attr = attrTemp;
    return React.createElement(
      node.tag,
      { key: i, ...node.attr },
      Tree2Element(node.child)
    );
  });
}
export function GenIcon(data: IconTree) {
  // eslint-disable-next-line react/display-name
  return (props: IconBaseProps) => (
    <IconBase attr={{ ...data.attr }} {...props}>
      {Tree2Element(data.child)}
    </IconBase>
  );
}
