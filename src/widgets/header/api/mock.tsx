import { PAGES } from "@shared/config/constants";
import LogoIcon from "@shared/assets/images/logo/logo.svg?react";
import type { IHeaderProps } from "../config";

export const header: IHeaderProps = {
  logo: <LogoIcon height={48} width={120} />,
  pages: PAGES,
};
