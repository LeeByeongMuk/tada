import React, { memo } from 'react';
import styled from 'styled-components';
import font from '@/styles/font';

const StyledLabel = styled.label`
    font-size: ${font.sizeBase};
`;

const Label = memo(({ children, ...props }) => {
    return <StyledLabel {...props}>{children}</StyledLabel>;
});

Label.defaultProps = {
    children: '',
};

export default Label;
