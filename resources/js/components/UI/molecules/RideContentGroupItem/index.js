import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Span from '@components/UI/atoms/Span';
import color from '@/styles/color';
import font from '@/styles/font';

const StyledListItem = styled.li`
    overflow: hidden;
    margin-top: 12px;
    font-size: ${font.sizeBase};
    line-height: 20px;

    &:first-child {
        margin-top: 0;
    }

    p {
        float: left;
        width: calc(100% - 72px);
    }
`;

const StyledSpan = styled(Span)`
    float: left;
    width: 72px;
    font-size: ${font.sizeSmall};
    color: ${color.gray600};
`;

const RideContentGroupItem = memo(({ isEmpty, check, title, children }) => {
    if (isEmpty && !check) {
        return '';
    } else {
        return (
            <StyledListItem>
                <StyledSpan>{title}</StyledSpan>

                {children}
            </StyledListItem>
        );
    }
});

RideContentGroupItem.defaultProps = {
    isEmpty: false,
    check: true,
    title: '',
    children: '',
};

RideContentGroupItem.propTypes = {
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.number,
    ]),
};

export default RideContentGroupItem;
