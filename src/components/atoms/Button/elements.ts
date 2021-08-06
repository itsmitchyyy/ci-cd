import 'antd/dist/antd.css';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { Button } from 'antd';
import { ButtonType } from 'antd/lib/button';

export const StyledButton = styled(Button)<{ type?: ButtonType }>`
  ${(props): FlattenSimpleInterpolation => {
    if (props.type === 'link') {
      return css`
        padding: 0 0.2rem;
      `;
    }

    return css``;
  }}
`;
