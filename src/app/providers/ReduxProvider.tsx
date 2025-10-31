import type { FC, PropsWithChildren } from "react";
import { reduxStore } from "@app/store";
import { Provider } from "react-redux";

/**
 * Компонент высшего порядка, предоставляющий доступ к Redux-хранилищу через контекст.*
 * @param props Свойства, передаваемые в компонент.
 * @param props.children Дочерние элементы, которые получат доступ к Redux-хранилищу.
 * @returns Компонент.
 */
export const ReduxProvider: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <Provider store={reduxStore}>
      {children}
    </Provider>
  );
};
