import { type FC } from "react";
import type { IFooterInstagramProps } from "../config";
import * as S from "./styles";
import { Title } from "@shared/ui/Title";
import { WithIndicator } from "@entities/WithIndicator";
import { Columns } from "@bedrock-layout/primitives";
import { Img } from "@shared/ui/Img";
import { Btn } from "@shared/ui/Btn";

/**
 * Компонент FooterInstagram отображает блок с заголовком и сеткой изображений, представляющих ссылки на Instagram.
 * @param props - Свойства компонента.
 * @param props.instagram - Массив объектов, представляющих изображения, и их данные для отображения в компоненте.
 * @returns Возвращает компонент.
 */
export const FooterInstagram: FC<IFooterInstagramProps> = (props) => {
  const {
    links = [],
  } = props;

  return (
    <S.InstagramWrapper>
      <WithIndicator variant={"primary"}>
        <Title
          level={2}
          variantLevel={4}
        >
          Follow on Instagram
        </Title>
      </WithIndicator>

      <Columns
        colCount={3}
        gap={"size8"}
      >
        {links.map(({ src }) => (
          <Btn
            key={src}
            variant={"blank"}
            text={""}
            href={"./"}
            target={"_blank"}
            rel={"noopener noreferrer"}
            isInline={true}
          >
            <Img
              src={src}
              width={104}
              height={104}
              css={`
                height: auto;
                width: auto;
                aspect-ratio: 1;
              `}
            />
          </Btn>
        ))}
      </Columns>
    </S.InstagramWrapper>
  );
};
