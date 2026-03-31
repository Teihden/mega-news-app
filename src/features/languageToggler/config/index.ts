import type { ICommonBtnProps } from "@shared/ui/btn";
import type { TLanguage } from "@shared/types";

export interface ILanguageTogglerProps {
  variant?: ICommonBtnProps["variant"];
}

export interface IStyledBtn {
  $isTooltipOpen?: boolean;
}

export const LANGUAGE_LABELS: Record<TLanguage, string> = {
  en: "EN",
  ru: "RU",
};
