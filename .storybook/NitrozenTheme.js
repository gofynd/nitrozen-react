import { create } from "@storybook/theming";
import nitrozenIcon from "../src/assets/nitrozen.png";
export default create({
  base: "light",
  brandTitle: "Nitrozen",
  brandUrl: "https://opensource.gofynd.io/nitrozen-react",
  brandImage: nitrozenIcon,
  brandTarget: "https://opensource.gofynd.io/nitrozen-react",
  fontBase: "Inter, Helvetica",
  colorPrimary: "black",

  colorSecondary: "#9F38FF",
  barTextColor: "silver",
  barSelectedColor: "white",
  barBg: "linear-gradient(109.8deg, #9F38FF 0%, #2E31BE 100%)",
});
