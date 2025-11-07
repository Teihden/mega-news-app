import { type FC, Suspense, lazy } from "react";
import { Title } from "@shared/ui/title";
import { Section } from "@shared/ui/section";
import { LogoCarousel, logoCarouselMock } from "@entities/logoCarousel";
import { cfgs, mainSliderStyles } from "@shared/ui/slider";
import { MediaCard, mediaCardMock } from "@entities/mediaCard";
import styled, { useTheme } from "styled-components";
import { defaultTheme } from "@app/styles";
import ContentLoader from "react-content-loader";
import { ErrorBoundary } from "react-error-boundary";
import { useMediaQuery } from "styled-breakpoints/use-media-query";

const LazySlider = lazy(() => import("@shared/ui/slider")
  .then((module) => ({ default: styled(module.Slider)`${mainSliderStyles}` })));

/**
 * Компонент IndexPage является функциональным компонентом, который отвечает за отображение главной страницы.
 * @returns Компонент.
 */
export const IndexPage: FC = () => {
  const theme = useTheme();
  const isTabletDown = useMediaQuery(theme.bp.down("tablet"));
  const isMobileDown = useMediaQuery(theme.bp.down("mobile"));

  /**
   * Функция `getSliderContentLoaderHeight` вычисляет и возвращает высоту загрузчика содержимого для слайдера в зависимости от текущего устройства или ширины экрана.
   * @returns Возвращаемое значение может быть использовано для адаптивного UI, изменяющего размер загрузчика контента в зависимости от устройства пользователя.
   */
  const getSliderContentLoaderHeight = () => isMobileDown
    ? 320
    : isTabletDown
      ? 368
      : 448;

  return (
    <>
      <Section className={"visually-hidden"}>
        <Title level={1}>News</Title>
      </Section>

      <Section
        withContainer={false}
      >
        <LogoCarousel {...logoCarouselMock.main} />
      </Section>

      <Section>
        <Suspense
          fallback={(
            <ContentLoader
              viewBox={`0 0 1652 ${getSliderContentLoaderHeight()}`}
              height={getSliderContentLoaderHeight()}
              width={1652}
              title={"Slider"}
              backgroundColor={theme.mode === "light" ? theme.palette.gray["100"] : theme.palette.washDark["100"]}
              foregroundColor={theme.mode === "light" ? theme.palette.lightGray["100"] : theme.palette.dark["5"]}
              preserveAspectRatio={"none"}
            >
              <rect
                x={0}
                y={0}
                rx={defaultTheme.default.borderRadius}
                ry={defaultTheme.default.borderRadius}
                width={1652}
                height={getSliderContentLoaderHeight()}
              />
            </ContentLoader>
          )}
        >
          <ErrorBoundary
            fallback={(
              <Title
                level={2}
                variantLevel={4}
                css={`
                  color: ${theme.palette.secondary["100"]};
                `}
              >
                Component loading error
              </Title>
            )}
          >
            <LazySlider
              swiperCfg={cfgs.mainCfg}
              slides={mediaCardMock.main.map((props, i) => (
                <MediaCard
                  key={i}
                  {...props}
                />
              ))}
            />
          </ErrorBoundary>
        </Suspense>
      </Section>
    </>
  );
};
