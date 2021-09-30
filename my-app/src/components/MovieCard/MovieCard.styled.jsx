import styled from '@emotion/styled';

export const Card = styled.li`
  flex-basis: 100%;

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 2 * 30px) / 2);
    margin-top: 30px;
    margin-left: 30px;
  }

  @media screen and (min-width: 1200px) {
    flex-basis: calc((100% - 3 * 30px) / 3);
  }
`;
