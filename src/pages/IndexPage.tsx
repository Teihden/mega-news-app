import { type FC, Suspense, lazy } from "react";
import { Title } from "@shared/ui/title";
import { Section } from "@shared/ui/section";
import { LogoCarousel, logoCarouselMock } from "@entities/logoCarousel";
import { Slider, cfgs } from "@shared/ui/slider";
import { MediaCard, mediaCardMock } from "@entities/mediaCard";
import styled, { useTheme } from "styled-components";
import { defaultTheme } from "@app/styles";
import ContentLoader from "react-content-loader";
import { ErrorBoundary } from "react-error-boundary";
import { useMediaQuery } from "styled-breakpoints/use-media-query";

const LazySlider = lazy(() => import("@shared/ui/slider"));

const StyledSlider = styled(LazySlider)`
  ${Slider.Navigation} {
    max-width: 90rem;
    margin: 0 auto;

    ${({ theme }) => theme.bp.down("desktopBelowLarge")} {
      max-width: 100%;
    }
  }

  ${Slider.Pagination} {
    inset: auto 27% 2.5rem auto;

    ${({ theme }) => theme.bp.down("desktopBelowLarge")} {
      inset: auto 1.5rem 2.5rem;
    }

    ${({ theme }) => theme.bp.down("tablet")} {
      inset: auto 3rem 3rem auto;
    }

    ${({ theme }) => theme.bp.down("mobile")} {
      inset: auto 1.5rem 1.5rem auto;

      .swiper-pagination-bullet {
        --swiper-pagination-color: ${({ theme }) => theme.mode === "light" ? theme.palette.dark["25"] : theme.palette.white["75"]};
        --swiper-pagination-bullet-inactive-color: ${({ theme }) => theme.mode === "light" ? theme.palette.dark["10"] : theme.palette.white["50"]};
      }
    }
  }

  ${Slider.Slide} {
    height: 56rem;
    transition: width .5s ease;

    ${({ theme }) => theme.bp.down("tablet")} {
      height: 46rem;
    }

    ${({ theme }) => theme.bp.down("mobile")} {
      height: 40rem;
    }

    &.swiper-slide-active,
    &.swiper-slide-next + .swiper-slide,
    &.swiper-slide-next + .swiper-slide + .swiper-slide {
      ${({ theme }) => theme.bp.up("desktopBelowLarge")} {
        width: 45rem !important;
      }

      ${({ theme }) => theme.bp.between("tablet", "desktopBelowLarge")} {
        width: 40rem !important;
      }
    }

    &.swiper-slide-next {
      ${({ theme }) => theme.bp.up("desktopBelowLarge")} {
        width: 93rem !important;
      }

      ${({ theme }) => theme.bp.between("tablet", "desktopBelowLarge")} {
        width: 80rem !important;
      }
    }
  }

  ${MediaCard.Text} {
    ${({ theme }) => theme.bp.down("tablet")} {
      display: none;
    }
  }

  ${MediaCard.Title} {
    ${({ theme }) => theme.bp.down("tablet")} {
      font-size: 2.5rem;
    }

    ${({ theme }) => theme.bp.down("mobile")} {
      font-size: 2rem;
    }
  }

  ${MediaCard.Wrapper} {
    ${({ theme }) => theme.bp.down("tablet")} {
      min-height: 9rem;
    }

    ${({ theme }) => theme.bp.down("mobile")} {
      position: static;
      border-radius: 0;
      background: ${({ theme }) => theme.mode === "light" ? theme.palette.dark["5"] : theme.palette.washDark["100"]};
    }
  }
`;

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
            <StyledSlider
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
