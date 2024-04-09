import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BORDER_BOTTOM};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 123px;
  gap: 64px;

  > a, h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  gap: 9px;

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    strong {
      font-size: 18px;
      white-space: nowrap;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
    
    a {
      margin-left: auto;
    }
    
  }
`;
