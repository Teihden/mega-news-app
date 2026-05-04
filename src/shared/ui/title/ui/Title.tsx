import type { JSX } from "react";
import type { ITitle } from "../config";
import * as S from "./styles";

/**
 * Renders a styled title element.
 * @param props - Component props.
 * @param props.as - Optional element override used for rendering.
 * @param props.level - Semantic heading level from 1 to 6.
 * @param props.variant - Title visual variant.
 * @param props.variantLevel - Variant intensity level.
 * @param props.marginBlock - CSS margin-block value.
 * @param props.children - Title content.
 * @param props.className - Optional CSS class for the title.
 * @param props.style - Inline styles passed to the root element.
 * @param props.rest - Additional props forwarded to the root element.
 * @returns Title component.
 */
export const Title: ITitle = (props) => {
  const {
    as = null,
    level = 1,
    variant = "title",
    variantLevel = 1,
    marginBlock = null,
    children,
    className,
    style,
    ...rest
  } = props;
  const tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <S.Title
      as={as ?? tag}
      $variant={variant}
      $variantLevel={variantLevel}
      $marginBlock={marginBlock}
      className={className}
      {...(style ? { style } : {})}
      {...rest}
    >
      {children}
    </S.Title>
  );
};

Title.Title = S.Title;
