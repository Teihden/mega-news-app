import type { ILoaderComponent } from "../config";
import * as S from "./styles";

/**
 * Renders a loading indicator with an optional message.
 * @param props - Component props.
 * @param props.className - Optional CSS class for the root element.
 * @param props.message - Optional loading message.
 * @param props.minHeight - Minimum height of the loader container.
 * @returns Loader component.
 */
export const Loader: ILoaderComponent = ({
  className,
  message = "",
  minHeight,
}) => {
  return (
    <S.Loader
      className={className}
      $minHeight={minHeight}
      role={"status"}
      aria-live={"polite"}
    >
      <S.LoaderWrapper>
        <S.LoaderSpinner aria-hidden={true}>
          <S.LoaderSpinnerInner />
        </S.LoaderSpinner>
        {!!message && <S.LoaderMessage>{message}</S.LoaderMessage>}
      </S.LoaderWrapper>
    </S.Loader>
  );
};

Loader.Loader = S.Loader;
Loader.LoaderWrapper = S.LoaderWrapper;
Loader.LoaderSpinner = S.LoaderSpinner;
Loader.LoaderSpinnerInner = S.LoaderSpinnerInner;
Loader.LoaderMessage = S.LoaderMessage;
