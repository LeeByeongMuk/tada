import React, { memo, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { loginSuccess } from '@/modules/user/action';
import storage from '@/utils/storage';

import Header from '@components/UI/organisms/Header';
import Navigation from '@components/UI/organisms/Navigation';

const StyledSection = styled.section`
    padding-bottom: 45px;
`;

const StyledMain = styled.main`
    margin-top: 45px;
    padding: ${props => props.padding};
`;

const PageTemplate = memo(
    ({
        Header: HeaderComponent,
        Navigation: NavComponent,
        padding = '20px',
        children,
        ...props
    }) => {
        const initUserInfo = useCallback(() => {
            const loggedToken = storage.get('loggedToken');
            if (!loggedToken) return;
            const loggedInfo = storage.get('loggedInfo');
            const { dispatch } = props;

            axios.defaults.headers.common.Authorization = `Bearer ${loggedToken.access_token}`;
            dispatch(loginSuccess(loggedInfo));
        }, []);

        useEffect(() => {
            initUserInfo();
        }, []);

        return (
            <StyledSection>
                <HeaderComponent />
                <NavComponent />

                <StyledMain padding={padding}>{children}</StyledMain>
            </StyledSection>
        );
    },
);

PageTemplate.defaultProps = {
    Header: Header,
    Navigation: Navigation,
    padding: '20px',
};

PageTemplate.propTypes = {
    Header: PropTypes.any,
    Navigation: PropTypes.any,
};

export default connect()(PageTemplate);
