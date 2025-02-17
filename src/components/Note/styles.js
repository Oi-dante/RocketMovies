import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PROFILE};

  border: none;
  border-radius: 10px;

  padding: 22px;
  margin-bottom: 16px;
  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-bottom: 8px
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
  }

  > p {
    max-height: 53px;
    font-size: 18px;
    margin-top: 15px;
    margin-bottom: 15px;

    text-align: justify;
    color: ${({ theme }) => theme.COLORS.GRAY};
    overflow: hidden;
  }
`;
