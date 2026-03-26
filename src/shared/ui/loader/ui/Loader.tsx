import type { ILoaderComponent } from "../config";
import * as S from "./styles";

/**
 * Компонент лоадера
 * @param props - Свойства компонента.
 * @param props.className - Дополнительный CSS-класс.
 * @param props.message - Сообщение при загрузке.
 * @param props.minHeight - Минимальная высота контейнера лоадера.
 * @returns Компонент.
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
