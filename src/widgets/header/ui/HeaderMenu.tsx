import { type FC, type MouseEvent, useRef, useState } from "react";
import type { IHeaderMenuProps } from "../config";
import * as S from "./styles";
import { Title } from "@shared/ui/title";
import { Btn } from "@shared/ui/btn";
import { Stack } from "@bedrock-layout/primitives";
import { BurgerBtn, type IBurgerBtnRef } from "@features/burgerBtn";
import { type UIMatch, useMatches } from "react-router";
import type { IRouteHandle } from "@shared/types";
import { WithIndicator } from "@entities/withIndicator";
import { useTranslation } from "react-i18next";

/**
 * Компонент HeaderNav.
 * @param props - Свойства компонента.
 * @param props.pages - - Массив объектов, содержащий информацию о страницах.
 * @returns Возвращает компонент.
 */
export const HeaderMenu: FC<IHeaderMenuProps> = (props) => {
  const {
    pages = [],
  } = props;
  const { t } = useTranslation([ "widgets" ]);
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);
  const headerInnerMenuRef = useRef<HTMLDivElement | null>(null);
  const burgerBtnRef = useRef<IBurgerBtnRef>(null);
  const matches = useMatches() as UIMatch<unknown, IRouteHandle>[];
  const currentTitleKey = [ ...matches ].reverse().find((m) => m.handle?.titleKey)?.handle?.titleKey ?? null;

  /**
   * Переключает состояние меню и изменяет возможность прокрутки страницы.
   */
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    document.documentElement.classList.toggle("no-scroll");
  };

  /**
   * Обработчик клика по оверлею.
   * @param e - Событие клика мыши.
   */
  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (headerInnerMenuRef.current?.contains(e.target as HTMLDivElement)) {
      return;
    }

    toggleMenu();
    isMenuOpen && burgerBtnRef.current?.setIsBurgerBtnActive(false);
  };

  return (
    <S.HeaderMenu>
      <BurgerBtn
        ref={burgerBtnRef}
        onClickCb={() => toggleMenu()}
      />
      <S.Overlay
        isVisible={isMenuOpen}
        onClick={handleOverlayClick}
      >
        <S.HeaderInnerMenu
          ref={headerInnerMenuRef}
          $isMenuOpen={isMenuOpen}
        >
          <Stack
            gap={"size9"}
            css={`
              width: 100%;
            `}
          >
            <S.Accordion
              btnProps={{
                text: (
                  <WithIndicator
                    variant={"primary"}
                  >
                    <Title level={2} variantLevel={4}>{t("header.pages")}</Title>
                  </WithIndicator>
                ),
              }}
            >
              <Stack
                gap={"size7"}
              >
                {pages.map(({ href = "", labelKey = "" }) => (
                  <Btn
                    key={labelKey}
                    variant={"blank"}
                    text={(
                      <Title
                        as={"p"}
                        variantLevel={6}
                        marginBlock={0}
                      >
                        {t(labelKey)}
                      </Title>
                    )}
                    href={href}
                    isInline={true}
                    isDisabled={labelKey === currentTitleKey}
                  />
                ))}
              </Stack>
            </S.Accordion>

            <S.MenuBtn
              variant={"blank"}
              text={(
                <Title
                  as={"p"}
                  variantLevel={5}
                  marginBlock={0}
                >
                  {t("header.contactUs")}
                </Title>
              )}
              isInline={true}
            />

            <S.MenuBtn
              variant={"blank"}
              text={(
                <Title
                  as={"p"}
                  variantLevel={5}
                  marginBlock={0}
                >
                  {t("header.aboutUs")}
                </Title>
              )}
              isInline={true}
            />
          </Stack>
        </S.HeaderInnerMenu>
      </S.Overlay>
    </S.HeaderMenu>
  );
};
