import { type FC, useId, useState } from "react";
import type { IHeaderNavProps } from "../config";
import * as S from "./styles";
import IconChevronDown from "@shared/assets/images/icons/icon-chevron-down.svg?react";
import { Title } from "@shared/ui/title";
import { Tooltip } from "react-tooltip";
import { Btn } from "@shared/ui/btn";
import { Stack } from "@bedrock-layout/primitives";
import { Link, type UIMatch, useMatches } from "react-router";
import { useTranslation } from "react-i18next";
import type { IRouteHandle } from "@shared/types";

/**
 * Компонент HeaderNav.
 * @param props - Свойства компонента.
 * @param props.pages - - Массив объектов, содержащий информацию о страницах.
 * @returns Возвращает компонент.
 */
export const HeaderNav: FC<IHeaderNavProps> = (props) => {
  const {
    pages = [],
  } = props;
  const { t } = useTranslation([ "widgets" ]);
  const matches = useMatches() as UIMatch<unknown, IRouteHandle>[];
  const currentNavRouteId = [ ...matches ].reverse().find((match) => match.handle?.showInMenu)?.id ?? null;
  const [ isTooltipOpen, setIsTooltipOpen ] = useState(false);
  const tooltipId = useId();

  return (
    <S.HeaderNav>
      <S.NavBtn
        variant={"blank"}
        text={(
          <Title
            as={"p"}
            variantLevel={5}
            marginBlock={0}
          >
            {t(($) => $.header.pages)}
          </Title>
        )}
        isInline={true}
        icon={<IconChevronDown />}
        iconSize={16}
        iconPosition={"right"}
        data-tooltip-id={tooltipId}
        $isTooltipOpen={isTooltipOpen}
      />
      <Tooltip
        id={tooltipId}
        className={"custom-react-tooltip"}
        clickable={true}
        noArrow={true}
        place={"bottom-start"}
        offset={12}
        opacity={1}
        afterShow={() => setIsTooltipOpen(true)}
        afterHide={() => setIsTooltipOpen(false)}
      >
        <Stack
          gap={"size7"}
        >
          {pages.map(({ id, href, navLabelKey }) => (
            <Btn
              key={id}
              as={Link}
              to={href}
              variant={"blank"}
              text={(
                <Title
                  as={"p"}
                  variantLevel={6}
                  marginBlock={0}
                >
                  {t(navLabelKey)}
                </Title>
              )}
              isInline={true}
              isDisabled={id === currentNavRouteId}
            />
          ))}
        </Stack>
      </Tooltip>

      <Btn
        variant={"blank"}
        text={(
          <Title
            as={"p"}
            variantLevel={5}
            marginBlock={0}
          >
            {t(($) => $.header.contactUs)}
          </Title>
        )}
        isInline={true}
      />

      <Btn
        variant={"blank"}
        text={(
          <Title
            as={"p"}
            variantLevel={5}
            marginBlock={0}
          >
            {t(($) => $.header.aboutUs)}
          </Title>
        )}
        isInline={true}
      />
    </S.HeaderNav>
  );
};
