import styled from "styled-components";

export const Container = styled.div`
  display: block;
`;

export const Slide = styled.div`
  display: block;
`;

export const SlideWrapper = styled.div`
  width: 100%;
  height: 100%;
  opacity: 1;
  transition: ${({ theme }) => theme.default.transitionDuration} ease;
`;

export const Navigation = styled.ul`
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  gap: 1rem;
  inset: 50% 1.5rem auto;
  list-style: none;
  pointer-events: none;
  transform: translateY(-50%);
`;

export const NavigationItem = styled.li`
  width: fit-content;
  height: fit-content;
  padding: 0;
  margin: 0;
  pointer-events: auto;
`;

export const Pagination = styled.div`
  && {
    position: absolute;
    z-index: 1;
    display: flex;
    width: fit-content;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0 auto;
    gap: .75rem;
    inset: auto 1.5rem 2.5rem;
    transform: none;
  }

  &:empty {
    display: none;
  }
`;

export const Slider = styled.div`
  position: relative;
  max-width: 100%;

  ${Container} {
    max-width: 100%;
  }

  ${Slide} {
    max-width: 100%;
    height: 100%;
    border-radius: ${({ theme }) => theme.default.borderRadius};
    background: ${({ theme }) => theme.mode === "light" ? theme.palette.gray["75"] : theme.palette.washDark["100"]};
    transition: .3s ease;

    &:has(.swiper-lazy-preloader) {
      ${SlideWrapper} {
        opacity: 0;
        pointer-events: none;
      }
    }
  }
`;
