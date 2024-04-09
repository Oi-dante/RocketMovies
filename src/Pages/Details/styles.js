import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    overflow-y: scroll;
    padding: 64px 0;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.PINK};
      border-radius: 8px;
    }
  }
`;

export const Links = styled.ul`
  list-style: none;

  > li {
    margin-top: 12px;

    a {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const Content = styled.div`
  max-width: 1130px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > button:first-child {
    align-self: end;
  }

  > h1 {
    font-size: 36px;
    font-weight: 500;
    padding-top: 24px;

    display: flex;
    gap: 19px;
  }

  > p {
    font-size: 16px;
    margin-top: 16px;
    text-align: justify;
  }

  > a {
    display: flex;
    align-items: center;
    font-size: 16px;
    gap: 5.5px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > div {
    display: flex;
    align-items: center;
    gap: 8px;

    padding-top: 24px;

    > img {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      border: 1px solid;
    }
  }
`;

export const Tagline = styled.div`
  margin: 40px 0;
`;

export const Hours = styled.div``;
