import React from 'react'

import './style.scss';

type theme = 'red' | 'white' | 'transparent';

interface IButton {
    text?: React.ReactNode;
    theme: theme;
}

export function Button({ 
    text,
    theme,
}: IButton) {
  return (
    <button className={`button theme-${theme}`}>
        {text}
    </button>
  );
}
