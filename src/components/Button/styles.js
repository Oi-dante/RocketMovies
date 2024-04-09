import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.COLORS.PINK : theme.COLORS.BACKGROUND_MARKERS};

  color: ${({ theme, isActive }) =>
    isActive ? theme.COLORS.BACKGROUND_SVG : theme.COLORS.PINK};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  font-size: 16px;
  font-weight: 400px;

  height: 56px;
  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 10px;
  font-weight: 500;

  svg {
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }

  &:disabled {
    opacity: 0.5;
  }
`;
