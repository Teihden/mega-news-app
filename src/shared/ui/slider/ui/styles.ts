import styled from "styled-components";

export const Container = styled.div`
  display: block;
`;

export const Slide = styled.div`
  display: block;
`;

export const SlideWrapper = styled.div`
  transition: ${({ theme }) => theme.default.transitionDuration} ease;
  opacity: 1;
  height: 100%;
  width: 100%;
`;

export const Navigation = styled.ul`
  position: absolute;
  inset: 50% auto auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  list-style: none;
  z-index: 1;
  pointer-events: none;
  margin: 0;
  padding: 0;
  transform: translateY(-50%);
`;

export const NavigationItem = styled.li`
  width: fit-content;
  height: fit-content;
  margin: 0;
  padding: 0;
  pointer-events: auto;
`;

export const Pagination = styled.div`
  position: absolute;
  inset: auto auto 3rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: .75rem;
  width: fit-content;
  padding: 0;
  margin: 0;
  transform: none;
  z-index: 1;

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
    height: 100%;
    max-width: 100%;
    border-radius: ${({ theme }) => theme.default.borderRadius};
    background: ${({ theme }) => theme.palette.gray["100"]};

    &:has(.swiper-lazy-preloader) {
      ${SlideWrapper} {
        opacity: 0;
        pointer-events: none;
      }
    }
  }
`;
