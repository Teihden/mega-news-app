import { type FC, useState } from "react";
import type { IHeaderNavProps } from "../config";
import * as S from "./styles";
import IconChevronDown from "@shared/assets/images/icons/icon-chevron-down.svg?react";
import { Title } from "@shared/ui/title";
import { Tooltip } from "react-tooltip";
import { Btn } from "@shared/ui/btn";
import { Stack } from "@bedrock-layout/primitives";
import { type UIMatch, useMatches } from "react-router";
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

  const matches = useMatches() as UIMatch<unknown, IRouteHandle>[];
  const currentTitle = [ ...matches ].reverse().find((m) => m.handle?.title)?.handle?.title ?? null;
  const [ isTooltipOpen, setIsTooltipOpen ] = useState(false);

  return (
    <S.HeaderNav>
      <S.Btn
        variant={"blank"}
        text={(
          <Title
            as={"p"}
            variantLevel={5}
            marginBlock={0}
          >
            {"Pages"}
          </Title>
        )}
        isInline={true}
        icon={<IconChevronDown />}
        iconSize={16}
        iconPosition={"right"}
        data-tooltip-id={"pages"}
        $isTooltipOpen={isTooltipOpen}
      />
      <Tooltip
        id={"pages"}
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
          {pages.map(({ href = "", label = "" }) => (
            <Btn
              key={label}
              variant={"blank"}
              text={(
                <Title
                  as={"p"}
                  variantLevel={6}
                  marginBlock={0}
                >
                  {label}
                </Title>
              )}
              href={href}
              isInline={true}
              isDisabled={label === currentTitle}
            />
          ))}
        </Stack>
      </Tooltip>

      <S.Btn
        variant={"blank"}
        text={(
          <Title
            as={"p"}
            variantLevel={5}
            marginBlock={0}
          >
            {"Contact Us"}
          </Title>
        )}
        isInline={true}
      />

      <S.Btn
        variant={"blank"}
        text={(
          <Title
            as={"p"}
            variantLevel={5}
            marginBlock={0}
          >
            {"About Us"}
          </Title>
        )}
        isInline={true}
      />
    </S.HeaderNav>
  );
};
