import React from 'react';

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  backgroundColor?: string;
  color?: string;
}

export const Button: React.FunctionComponent<ButtonProps> = (props) => {
  const { children, backgroundColor, color, style, ...rest } = props;

  const updatedStyle: React.CSSProperties = style || {};

  if (backgroundColor) {
    updatedStyle.backgroundColor = backgroundColor;
  }
  if (color) {
    updatedStyle.color = color;
  }

  return (
    <button style={updatedStyle} {...rest}>
      {children}
    </button>
  );
};
