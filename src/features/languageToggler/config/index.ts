import type { ICommonBtnProps } from "@shared/ui/btn";
import type { TLanguageMode } from "@shared/types";

export interface ILanguageTogglerProps {
  variant?: ICommonBtnProps["variant"];
}

export interface IStyledBtn {
  $isTooltipOpen?: boolean;
}

export const LANGUAGE_LABELS: Record<TLanguageMode, string> = {
  en: "EN",
  ru: "RU",
};
