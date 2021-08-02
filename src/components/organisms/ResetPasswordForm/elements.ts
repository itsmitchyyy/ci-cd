import styled from 'styled-components';

const ButtonWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;

const ButtonContainer = styled.div`
  display: flex;

  &.end {
    justify-content: flex-end;
  }

  &.start {
    justify-content: flex-start;
  }
`;

export { ButtonWrapper, ButtonContainer };
