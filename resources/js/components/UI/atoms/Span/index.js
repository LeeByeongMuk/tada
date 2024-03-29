import React from 'react';
import styled from 'styled-components';
import font from '@/styles/font';
import { memo } from 'react';

const StyledSpan = styled.span`
    color: ${font.color};
`;

const Span = memo(({ children, ...props }) => {
    return <StyledSpan {...props}>{children}</StyledSpan>;
});

Span.defaultProps = {
    children: '',
};

export default Span;
