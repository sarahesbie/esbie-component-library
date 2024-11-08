import React from 'react';
import styled from 'styled-components';
import { color, space, typography } from 'styled-system';
import { theme } from '../../theme';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  onClick: () => void;
  label: string;
}

const StyledButton = styled.button<Omit<ButtonProps, 'label'>>`
  padding: ${theme.space[2]}px ${theme.space[3]}px;
  font-size: ${theme.fontSizes[2]}px;
  color: ${(props) => (props.variant === 'primary' ? theme.colors.background : theme.colors.text)};
  background-color: ${(props) => (props.variant === 'primary' ? theme.colors.primary : theme.colors.secondary)};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  ${color}
  ${space}
  ${typography}

  &:hover {
    opacity: 0.8;
  }
`;

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => (
  <StyledButton onClick={onClick} variant={variant}>
    {label}
  </StyledButton>
);

export default Button;

