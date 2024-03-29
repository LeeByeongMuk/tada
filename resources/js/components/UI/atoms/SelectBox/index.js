import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import color from '@/styles/color';
import font from '@/styles/font';

const StyledSelectBox = styled.select`
    padding-left: 20px;
    border: 1px solid ${color.borderColor};
    border-radius: 4px;
    background: ${color.white};
    font-size: ${font.sizeBase};
    color: ${font.color};
    text-align: center;
    outline: none;
`;

const SelectBox = memo(({ value, onChange, children, ...props }) => {
    const options =
        typeof children === 'object'
            ? children.map(({ text, value }) => {
                  return (
                      <option value={value} key={value}>
                          {text}
                      </option>
                  );
              })
            : children;

    return (
        <StyledSelectBox value={value} onChange={onChange} {...props}>
            {options}
        </StyledSelectBox>
    );
});

SelectBox.defaultProps = {
    value: '',
    children: '',
};

SelectBox.propTypes = {
    onChange: PropTypes.func,
    children: PropTypes.any,
};

export default SelectBox;
