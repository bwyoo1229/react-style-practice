import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

// 스타일 따로 분리
const colorStyles = css`
  // 색상
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

  // 크기
  height: 2.25rem;
  font-size: 1rem;

  // 색상
  ${colorStyles}

  // 기타
  & + & {
    margin-left: 1rem;
  }
`;

function Button({ children, color, ...rest }) {
  return (
    <StyledButton color={color} {...rest}>
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  color: 'blue',
};

export default Button;
