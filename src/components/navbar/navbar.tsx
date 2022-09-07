import React from 'react';

interface Props
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode;
}

export const Navbar: React.FunctionComponent<Props> = (props) => {
  const { children, style, ...rest } = props;
  const updatedStyle: React.CSSProperties = style || {};
  updatedStyle.display = 'flex';
  updatedStyle.flexDirection = 'row';
  updatedStyle.justifyContent = 'space-between';
  updatedStyle.alignItems = 'center';
  updatedStyle.padding = '0 20px';
  updatedStyle.borderRadius = '0.5rem';
  updatedStyle.width = '100%';
  updatedStyle.boxShadow =
    '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);';
  updatedStyle.position = 'sticky';
  updatedStyle.margin = '0 auto';
  updatedStyle.top = '0';
  updatedStyle.backgroundColor = 'hsla(0,0%,100%,.1)';
  updatedStyle.backdropFilter = 'blur(12px) brightness(1) saturate(1.5)';
  updatedStyle.maxWidth = '720px';

  return (
    <div style={updatedStyle} {...rest}>
      {children}
    </div>
  );
};
