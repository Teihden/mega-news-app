import type { IAppInitErrorProps } from "../config";
import type { FC } from "react";

/**
 * Компонент отвечает за отображение сообщения об ошибке инициализации приложения.
 * @returns Возвращает компонент.
 */
export const AppInitError: FC<IAppInitErrorProps> = () => {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column nowrap",
        alignItems: "center",
        justifyContent: "center",
        gap: "32px",
        height: "calc(100dvh - 16px)",
        fontFamily: "system-ui, sans-serif",
        background: "rgb(255, 255, 255, 1)",
        textAlign: "center",
        padding: 0,
        margin: 0,
      }}
    >
      <h1
        style={{
          color: "rgb(252, 67, 8, 1)",
          fontSize: "50px",
          fontWeight: 500,
          textShadow: "0 0 44px rgba(252, 67, 8, .35)",
          margin: 0,
        }}
      >
        Application error
      </h1>
      <p
        style={{
          color: "rgb(62, 50, 50, 1)",
          fontSize: "18px",
          margin: 0,
        }}
      >
        Try refreshing the page or contacting support.
      </p>
    </div>
  );
};
