import styled from "styled-components";

export const Container = styled.button`
  background: none;
  color: ${({ theme, $isactive }) =>
    $isactive ? theme.COLORS.BACKGROUND_MARKERS : theme.COLORS.PINK};

  border: none;
  font-size: 16px;
`;
