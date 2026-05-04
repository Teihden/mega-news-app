import type { FC, PropsWithChildren } from "react";
import { reduxStore } from "@app/store/reduxStore";
import { Provider } from "react-redux";

/**
 * Provides the Redux store to descendant components.
 * @param props - Component props.
 * @param props.children - Descendant elements that consume the Redux store.
 * @returns Redux provider component.
 */
export const ReduxProvider: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <Provider store={reduxStore}>
      {children}
    </Provider>
  );
};
