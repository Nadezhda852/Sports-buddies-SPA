import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SignUpForm from "../Components/SignUpForm";
import SocialMediaForm from "../Components/FBGoogleForm";
import useAuth from "../config/services/useAuth";


const StyledParagraph = styled.p`
text-align: center;
color: ${props => props.theme.colors.pink};
`;

const StyledHeading1 = styled.h1`
text-align: left;
    color: ${props => props.theme.colors.pink};
`;

const StyledHeading2 = styled.h2`
text-align: center;
    color: ${props => props.theme.colors.pink};
`;

const SignUp = (props) => {
    const { createEmailUser, signInFacebookUser, signInGoogleUser } = useAuth();
    const [severErrorMessage, setServerErrorMessage] = useState("");

    const handleEmailSubmit = async (data) => {
        console.log("Join.handleEmailSubmit(): data = ", data);

        try {
            const { email, password } = data;
            await createEmailUser(email, password);
        } catch (e) {
            setServerErrorMessage(e.message);
            console.log(e);
        }
    };

    const handleSocialMediaSubmit = async (authenticationMethod) => {
        console.log("Join.handleSocialMediaSubmit() authenticationMethod=", authenticationMethod);

        try {
            if (authenticationMethod === "facebook") {
                await signInFacebookUser();
            } else if (authenticationMethod === "google") {
                await signInGoogleUser();
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div>
            <StyledHeading1> Sign Up </StyledHeading1>
            <StyledHeading2>Sign up with social media account</StyledHeading2>
            <SocialMediaForm onSocialSubmit = { handleSocialMediaSubmit }/>
            <StyledHeading2> OR </StyledHeading2>

            <signUpForm
                onEmailSubmit = {handleEmailSubmit}
                serverErrorMessage={severErrorMessage}
            />

            <StyledParagraph>
                <Link to="/login"> If you already have an account, please - Log in </Link>
            </StyledParagraph>
        </div>
    );
};

SignUp.propTypes = {};

export default SignUp; 
