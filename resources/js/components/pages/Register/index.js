import React, {memo, useCallback, useState} from "react";
import styled from "styled-components";
import PageTemplate from "@components/templates/PageTemplate";
import Header from "@components/UI/organisms/Header";
import Aside from "@components/UI/organisms/Aside";
import Heading from "@components/UI/atoms/Heading";
import RegisterForm from "@components/UI/organisms/RegisterForm";

import {registerApi} from "@/api/userApi";

const StyledHeading = styled(Heading)`
    margin-top: 10px;
    font-weight: bold;
    font-size: 20px;
`;

const Register = memo(({...props}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [pwConfirm, setPwConfirm] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = useCallback(async (event) => {
        event.preventDefault();

        if (isLoading) return false;

        if (password !== pwConfirm) {
            alert('비빌번호가 일치하지 않습니다.');
            return false;
        }

        setIsLoading(true);
        try {
            const options = {
                data: {
                    name: name,
                    email: email,
                    phone: phone,
                    password: password,
                    password_confirmation: pwConfirm
                }
            };
            const response = await registerApi(options);

            if (response.success) {
                alert('회원가입 성공');
                props.history.push('/login');
            } else {
                throw response;
            }
        } catch (err) {
            alert('오류');
            setIsLoading(false);
        }

    }, [name, email, phone, password, pwConfirm, isLoading]);

    return (
        <PageTemplate Header={Header}
                      Aside={Aside}>
            <section>
                <StyledHeading level={2}>회원가입</StyledHeading>

                <RegisterForm onSubmit={handleSubmit}
                              name={name}
                              setName={setName}
                              email={email}
                              setEmail={setEmail}
                              phone={phone}
                              setPhone={setPhone}
                              password={password}
                              setPassword={setPassword}
                              pwConfirm={pwConfirm}
                              setPwConfirm={setPwConfirm} />
            </section>
        </PageTemplate>
    );
});

export default Register;
