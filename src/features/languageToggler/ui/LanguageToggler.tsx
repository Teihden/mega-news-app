import { type FC, useId, useState } from "react";
import { type ILanguageTogglerProps, LANGUAGE_LABELS } from "../config";
import * as S from "./styles";
import { LANGUAGE_MODES } from "@shared/config/constants";
import type { TLanguageMode } from "@shared/types";
import { Tooltip } from "react-tooltip";
import { Stack } from "@bedrock-layout/primitives";
import IconChevronDown from "@shared/assets/images/icons/icon-chevron-down.svg?react";
import { useAppStore } from "@app/store";
import { Title } from "@shared/ui/title";

/**
 * Компонент LanguageToggler.
 * Отображает кнопку текущего языка и открывает tooltip со списком доступных языков.
 * @param props - Свойства компонента.
 * @param props.variant - Вариант отображения основной кнопки переключателя.
 * @returns Возвращает компонент переключателя языка.
 */
export const LanguageToggler: FC<ILanguageTogglerProps> = (props) => {
  const {
    variant = "blank",
  } = props;
  const language = useAppStore(({ languageMode }) => languageMode);
  const updateLanguage = useAppStore(({ updateLanguage }) => updateLanguage);
  const [ isTooltipOpen, setIsTooltipOpen ] = useState(false);
  const tooltipId = useId();

  /**
   * Обработчик события переключения языка.
   * Функция проверяет, отличается ли выбранный язык от текущего,
   * и если они различаются, обновляет язык приложения.
   * @param nextLanguage Новый язык, на который нужно переключиться.
   */
  const handleLanguageClick = (nextLanguage: TLanguageMode) => {
    if (nextLanguage === language) {
      return;
    }

    updateLanguage(nextLanguage);
  };

  return (
    <>
      <S.LanguageToggler
        variant={variant}
        text={(
          <Title
            as={"p"}
            variantLevel={5}
            marginBlock={0}
          >
            {LANGUAGE_LABELS[language]}
          </Title>
        )}
        isInline={true}
        icon={<IconChevronDown />}
        iconSize={16}
        iconPosition={"right"}
        data-tooltip-id={tooltipId}
        $isTooltipOpen={isTooltipOpen}
        aria-label={`Current language is ${LANGUAGE_LABELS[language]}. Open language menu.`}
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
        openEvents={{
          mouseover: true,
          focus: true,
          click: true,
        }}
      >
        <Stack gap={"size7"}>
          {LANGUAGE_MODES.map((mode) => (
            <S.LanguageToggler
              key={mode}
              variant={"blank"}
              isInline={true}
              text={LANGUAGE_LABELS[mode]}
              isDisabled={mode === language}
              onClick={() => handleLanguageClick(mode)}
              aria-label={`Set language to ${LANGUAGE_LABELS[mode]}`}
            />
          ))}
        </Stack>
      </Tooltip>
    </>
  );
};
