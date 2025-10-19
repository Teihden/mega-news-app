import { css, type DefaultTheme, type RuleSet } from "styled-components";
import { COMMON_MEDIA_BREAKPOINTS } from "@app/styles";

type TResponsiveStyles<T> = Partial<Record<typeof COMMON_MEDIA_BREAKPOINTS[number], T>>;

/**
 * Генерирует общие стили для адаптивного дизайна на основе заданных значений и свойства.
 * @param options - Объект с параметрами.
 * @param options.theme - Тема, содержащая медиа-запросы.
 * @param options.values - Объект с адаптивными значениями для разных точек останова.
 * @param options.property - CSS-свойство, которое нужно применить для каждого значения.
 * @returns Набор стилей, адаптированных к точкам останова.
 */
export function getCommonResponsiveCss<T = string>(
  { theme, values, property }:
  { theme: DefaultTheme; values: TResponsiveStyles<T>; property: string },
): RuleSet<object> {
  return css`
    ${COMMON_MEDIA_BREAKPOINTS
      .map((bp) => {
        const value = values[bp];
        if (!value) {
          return null;
        }

        const rule = `${property}: ${value};`;
        return theme.media[bp](rule);
      })
      .filter(Boolean)}
  `;
}
