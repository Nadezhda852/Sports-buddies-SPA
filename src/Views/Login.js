import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LoginForm from "../Components/LoginForm";
import SocialMediaForm from "../Components/FBGoogleForm";
import useAuth from "../config/services/useAuth";

const StyledParagraph = styled.p`
text-align: center;
color: ${props => props.theme.colors.pink};
`;

const StyledHeading1 = styled.h1`
text-align: center;
    color: ${props => props.theme.colors.pink};
`;

const StyledHeading2 = styled.h2`
text-align: center;
    color: ${props => props.theme.colors.pink};
`;

const Login = (props) => {
    const { signInEmailUser, signInFacebookUser, signInGoogleUser } = useAuth();
    const [severErrorMessage, setServerErrorMessage] = useState("");

    const handleEmailSubmit = async (data) => {
        console.log("Join.handleEmailSubmit(): data = ", data);

        try {
            const { email, password } = data;
            await signInEmailUser(email, password);
        } catch (e) {
            setServerErrorMessage(e.message);
            console.log(e);
        }
    };

    const handleSocialMediaSubmit = async (authenticationMethod) => {
        console.log("Login.handleSocialMediaSubmit() authenticationMethod=", authenticationMethod);

        try {
            if (authenticationMethod === "Facebook") {
                await signInFacebookUser();
            } else if (authenticationMethod === "Google") {
                await signInGoogleUser();
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div>
            <StyledHeading1>LOG IN</StyledHeading1>
            <SocialMediaForm onSocialSubmit={handleSocialMediaSubmit} />
            <StyledHeading2> OR </StyledHeading2>
            <LoginForm></LoginForm>
            <LoginForm
                onEmailSubmit={handleEmailSubmit}
                serverErrorMessage={severErrorMessage}
            />
            <StyledParagraph>
                <Link to="/signUp"> If you don't have an account, please - Sign Up</Link>
            </StyledParagraph>
        </div>
    );
};

Login.propTypes = {};

export default Login; 
