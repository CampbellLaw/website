import styled from 'styled-components';
import Image from '@crystallize/react-image';

import { H2 as H, responsive } from 'ui';

export const Outer = styled.article`
  max-width: 600px;
  margin: 0 auto;
`;

export const HeroImage = styled.div`
  margin-bottom: 100px;
`;

export const Img = styled(Image)`
  > img {
    width: 200px;
  }
`;

export const List = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(12, 1fr);
  ${responsive.md} {
    grid-template-columns: repeat(9, 1fr);
  }
  ${responsive.sm} {
    grid-template-columns: repeat(6, 1fr);
  }
  ${responsive.xs} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const H2 = styled(H)`
  display: block;
  font-size: 1rem;
  text-transform: uppercase;
  color: var(--color-text-main);
  ${responsive.xs} {
    text-align: center;
  }
`;

export const Related = styled.div`
  border-top: 2px solid #efefef;
  max-width: 1600px;
  padding: 100px 100px 0 100px;
  margin: 100px auto;
  display: block;
  ${responsive.smAndLess} {
    padding: 50px;
  }
`;
