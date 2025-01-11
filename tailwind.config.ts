import { getIconCollections, iconsPlugin } from "@egoist/tailwindcss-icons";
import type { Config } from "tailwindcss";

export default {
  plugins: [
    iconsPlugin({
      collections: getIconCollections(["mdi"]),
    }).handler,
  ],
} satisfies Config;
