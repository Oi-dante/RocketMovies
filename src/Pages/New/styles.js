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
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.PINK};
      border-radius: 8px;
    }
  }

  .tags {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_MARKERS};

    display: flex;
    padding: 16px;
    flex-wrap: wrap;
    gap: 24px;
  }

  .space-input {
    display: flex;
    gap: 40px;

    margin-bottom: 40px;
  }
  .button-line {
    display: flex;
    gap: 40px;
  }
`;

export const Form = styled.form`
  max-width: 1113px;
  margin: 38px auto;

  > header {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin: 40px 0;

    a {
      font-size: 16px;
      color: ${({ theme }) => theme.COLORS.PINK};
      display: flex;
      align-items: center;
    }
  }
`;
