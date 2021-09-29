import React, { memo, useCallback, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { login } from '@/modules/user/action';
import storage from '@/utils/storage';
import PageTemplate from '@components/templates/PageTemplate';
import LoginForm from '@components/UI/organisms/LoginForm';
import Heading from '@components/UI/atoms/Heading';

const StyledHeading = styled(Heading)`
    margin: 10px 0 15px;
    font-weight: bold;
    font-size: 20px;
`;

const Login = memo(({ ...props }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = useCallback(
        event => {
            event.preventDefault();
            const { dispatch } = props;

            dispatch(login(email, password)).then(() => {
                const check = storage.get('loggedToken');

                if (check) {
                    props.history.push('/');
                }
            });
        },
        [email, password],
    );

    return (
        <PageTemplate>
            <section>
                <StyledHeading level={2}>로그인</StyledHeading>

                <LoginForm
                    onSubmit={handleSubmit}
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                />
            </section>
        </PageTemplate>
    );
});

export default connect()(Login);
