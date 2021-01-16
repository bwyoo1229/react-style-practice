import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

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
    `;
  }}
`;

const sizeStyles = css`
  ${({ theme, size }) => {
    const selected = theme.sizes[size];

    return css`
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

  // 색상
  ${colorStyles}

  // 크기
  ${sizeStyles}

  // 기타
  & + & {
    margin-left: 1rem;
  }
`;

function Button({ children, color, size, ...rest }) {
  return (
    <StyledButton color={color} size={size} {...rest}>
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  color: 'blue',
  size: 'medium',
};

export default Button;
