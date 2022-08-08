import React from "react";

import "./style.scss";

type theme = "red" | "white" | "transparent";

interface IButton {
  text?: React.ReactNode;
  theme: theme;
  onClick?: () => Promise<void>;
}

export function Button({ text, theme, onClick }: IButton) {
  return (
    <button className={`button theme-${theme}`} onClick={onClick}>
      {text}
    </button>
  );
}
