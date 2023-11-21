import styled from "styled-components";

const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DetailName = styled.p`
  font-weight: bold;
  font-size: 2rem;
`;

const DetailDescription = styled.p`
  font-size: 1.25rem;
`;

const DetailPrice = styled.p`
  font-weight: bold;
  font-size: 1.25rem;
`;

export {
  DetailContainer,
  DetailItem,
  DetailName,
  DetailDescription,
  DetailPrice,
};
