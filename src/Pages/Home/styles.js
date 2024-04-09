import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
    "header"
    "content"
    "newmovie";

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 40px 0;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.PINK};
      border-radius: 8px;
    }
  }
`;

export const Content = styled.div`
  max-width: 1137px;
  margin: 0 auto;
`;

export const HeaderPage = styled.div`
  > h1 {
    font-size: 32px;
    font-weight: 350;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 40px;

  > button {
    max-width: 207px;
  }
`;
