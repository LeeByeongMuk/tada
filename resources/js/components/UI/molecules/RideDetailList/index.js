import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import List from '@components/UI/atoms/List';
import font from '@/styles/font';
import color from '@/styles/color';

const StyledList = styled(List)`
    margin-top: 12px;
`;

const StyledItem = styled.li`
    overflow: hidden;
    margin-top: 8px;
    font-size: ${font.sizeSmall};
    line-height: 20px;

    &:first-child {
        margin-top: 0;
    }
`;

const StyledName = styled.span`
    width: 72px;
    float: left;
    color: ${color.gray600};
`;

const StyledDistance = styled.p`
    float: left;
    width: calc(100% - 72px);
    color: ${font.color};
    word-break: keep-all;
`;

const RideDetailList = memo(({ detailItems }) => {
    const lists = detailItems.map(item => {
        const { name, value } = item;

        if (!value) return null;

        return (
            <StyledItem key={value}>
                <StyledName>{name}</StyledName>
                <StyledDistance>{value}</StyledDistance>
            </StyledItem>
        );
    });

    return <StyledList>{lists}</StyledList>;
});

RideDetailList.propTypes = {
    detailItems: PropTypes.array.isRequired,
};

export default RideDetailList;
