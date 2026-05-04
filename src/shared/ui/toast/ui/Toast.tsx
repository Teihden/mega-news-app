import type { IToastProps } from "../config";
import type { FC } from "react";
import { Toaster } from "react-hot-toast";
import { useTheme } from "styled-components";

/**
 * Renders the global toast notification container.
 * @param props - Props forwarded to Toaster.
 * @returns Toast component.
 */
export const Toast: FC<IToastProps> = (props) => {
  const { toast } = useTheme();

  return (
    <Toaster
      position={"bottom-right"}
      reverseOrder={false}
      gutter={12}
      containerStyle={{
        top: 24,
        left: 24,
        bottom: 24,
        right: 24,
      }}
      toastOptions={{
        style: toast,
      }}
      {...props}
    />
  );
};
