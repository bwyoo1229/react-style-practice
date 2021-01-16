import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

const fullWidthStyle = css`
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
      justify-content: center;
      &:not(:first-child) {
        margin-left: 0;
        margin-top: 1rem;
      }
    `}
`;

// 스타일 따로 분리
const colorStyles = css`
  ${({ theme, color }) => {
    const selected = theme.palette[color];

    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
      ${({ outline }) =>
        outline &&
        css`
          color: ${selected};
          background: none;
          border: 1px solid ${selected};
          &:hover {
            background: ${selected};
            color: white;
          }
        `}
    `;
  }}
`;

const sizeStyles = css`
  ${({ theme, size }) => {
    const selected = theme.sizes[size];

    return css`
      width: ${selected.width};
      height: ${selected.height};
      font-size: ${selected.fontSize};
    `;
  }}
`;

// styled-components는 sass 문법을 사용할 수 있다.
const StyledButton = styled.button`
  // 공통 스타일
  display: inline-flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  border-radius: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  box-sizing: border-box;

  // 기타
  // Dont't know why but & + & is not working probably
  // Instaed use :not(:first-child) to make the same effect
  &:not(:first-child) {
    margin-left: 1rem;
  }

  // 색상
  ${colorStyles}

  // 크기
  ${sizeStyles}

  ${fullWidthStyle}
`;

function Button({ children, color, size, outline, fullWidth, ...rest }) {
  return (
    <StyledButton
      color={color}
      size={size}
      outline={outline}
      fullWidth={fullWidth}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  color: 'blue',
  size: 'medium',
};

export default Button;
