import { SerializedStyles } from "@emotion/react";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      yellow_700: string;
      yellow_600: string;
      yellow: string;
      yellow_400: string;
      yellow_300: string;
      yellow_200: string;
      yellow_100: string;
      yellow_50: string;

      mint: string;
      mint_400: string;
      mint_300: string;
      mint_200: string;
      mint_100: string;

      gray_900: string;
      gray_800: string;
      gray_700: string;
      gray_600: string;
      gray_500: string;
      gray_400: string;
      gray_200: string;
      gray_100: string;
      gray_50: string;

      white: string;
      red: string;
      main_bg: string;
    };

    effects: {
      dimmed_40: string;
    };
  }
}
