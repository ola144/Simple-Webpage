import styled, { css } from "styled-components";

const StyledButton = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  margin: 0.5rem;
  transition: all 0.3s ease;
  border: none;

  ${(props) =>
    props.primary
      ? css`
          background: #3b82f6;
          color: white;
          &:hover {
            background: #2563eb;
          }
        `
      : css`
          background: #e5e7eb;
          color: #111827;
          &:hover {
            background: #d1d5db;
          }
        `}
`;

export default StyledButton;
