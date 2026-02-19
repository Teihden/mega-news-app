import { type FC, Suspense, lazy } from "react";
import { Title } from "@shared/ui/title";
import { Section } from "@shared/ui/section";
import { LogoCarousel, logoCarouselMock } from "@entities/logoCarousel";
import { cfgs, mainSliderStyles, latestVideosSliderStyles } from "@shared/ui/slider";
import { MediaCard, mediaCardMock, latestVideosMediaCardStyles } from "@entities/mediaCard";
import styled, { useTheme } from "styled-components";
import { defaultTheme } from "@app/styles";
import ContentLoader from "react-content-loader";
import { ErrorBoundary } from "react-error-boundary";
import { useMediaQuery } from "styled-breakpoints/use-media-query";
import { WithIndicator } from "@entities/withIndicator";
import { InlineCluster, Inline, Stack } from "@bedrock-layout/primitives";
import { Link } from "react-router";
import { Btn } from "@shared/ui/btn";
import IconChevronRight from "@shared/assets/images/icons/icon-chevron-right.svg?react";

const LazyMainSlider = lazy(() => import("@shared/ui/slider")
  .then((module) => ({ default: styled(module.Slider)`${mainSliderStyles}` })));

const LazyLatestVideosSlider = lazy(() => import("@shared/ui/slider")
  .then((module) => ({ default: styled(module.Slider)`${latestVideosSliderStyles}` })));

const LatestVideosMediaCard = styled(MediaCard)`${latestVideosMediaCardStyles}`;

/**
 * Компонент IndexPage является функциональным компонентом, который отвечает за отображение главной страницы.
 * @returns Компонент.
 */
export const IndexPage: FC = () => {
  const theme = useTheme();
  const isTabletAbove = useMediaQuery(theme.bp.up("tablet"));
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
              backgroundColor={theme.placeholder.bg}
              foregroundColor={theme.placeholder.foregroundColor}
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
            <LazyMainSlider
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

      <Section
        headerSlot={(
          <InlineCluster
            gap={"size7"}
            align={"center"}
            justify={"space-between"}
          >
            <WithIndicator variant={"primary"}>
              <Title level={2} variantLevel={4}>Latest Videos</Title>
            </WithIndicator>
            {isTabletDown && (
              <Btn
                as={Link}
                variant={"tertiary"}
                text={"Show all"}
                icon={<IconChevronRight />}
                iconSize={18}
                iconPosition={"right"}
                to={"./"}
              />
            )}
          </InlineCluster>
        )}
        css={`
          padding: 8rem 0;
          background: ${theme.mode === "light" ? theme.palette.gray["100"] : theme.palette.washDark["100"]};

          @media ${theme.bp.down("mobile")} {
            padding: 5rem 0;
          }
        `}
      >
        <Suspense
          fallback={(
            <ContentLoader
              viewBox={`0 0 1652 ${getSliderContentLoaderHeight()}`}
              height={getSliderContentLoaderHeight()}
              width={1652}
              title={"Latest Videos"}
              backgroundColor={theme.placeholder.bg}
              foregroundColor={theme.placeholder.foregroundColor}
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
            <LazyLatestVideosSlider
              isLazyLoadingSlide={false}
              swiperCfg={cfgs.latestVideosCfg}
              slides={mediaCardMock.latestVideosTablet.map((props, i) => (
                <Inline
                  key={i}
                  align={"center"}
                  css={`
                    height: 100%;
                    gap: 3rem;
                  `}
                >
                  <MediaCard
                    {...props}
                  />
                  {isTabletAbove && (
                    <Stack
                      gap={"size8"}
                    >
                      {mediaCardMock.latestVideosDesktop[i * 2] && (
                        <LatestVideosMediaCard
                          {...mediaCardMock.latestVideosDesktop[i * 2]}
                        />
                      )}
                      {mediaCardMock.latestVideosDesktop[i * 2 + 1] && (
                        <LatestVideosMediaCard
                          {...mediaCardMock.latestVideosDesktop[i * 2 + 1]}
                        />
                      )}
                    </Stack>
                  )}
                </Inline>
              ))}
            />
          </ErrorBoundary>
        </Suspense>
      </Section>

      <Section
        headerSlot={(
          <WithIndicator variant={"primary"}>
            <Title level={2} variantLevel={4}>Popular posts</Title>
          </WithIndicator>
        )}
      >
        CONTENT
      </Section>
    </>
  );
};
