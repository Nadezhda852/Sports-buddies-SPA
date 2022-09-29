import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PropTypes from "prop-types";

const StyledParagraph = styled.p`
text-align: center;
color: ${props => props.theme.colors.pink};
`;

const StyledParagraphFormValidationErrors = styled.p`
text-align: center;
color: red;
`;

const LoginForm = (props) => {
    const { onEmailSubmit, serverErrorMessage } = props; 
    
    const schema = yup.object().shape({
        email: yup
        .string()
        .email("The entered email is invalid!")
        .required("Please, enter a valid email"),
        password: yup
        .string()
        .required("A password is required!")
        .min(2, "The name must be at least 2 letters long"), 
    });

    const {
        register,
        formState: {errors },
        handleSubmit,
    } = useForm({ resolver: yupResolver(schema) });


    return (
        <div>
            <form onSubmit={handleSubmit(onEmailSubmit)}>
              <StyledParagraph>
                <label>Email address</label>
                <input {...register("email", { required: true})}></input>
              </StyledParagraph>
              <StyledParagraphFormValidationErrors>{errors.email && errors.email?.message}</StyledParagraphFormValidationErrors>

              <br></br>

              <StyledParagraph>
                <label>Password</label>
                <input {...register("password", { required: true})}></input>
              </StyledParagraph>
              <StyledParagraphFormValidationErrors>{errors.password && errors.password?.message}</StyledParagraphFormValidationErrors>

              <br></br>

              <StyledParagraph>
                <input type="submit" value="Log In"></input>
                </StyledParagraph>  
            </form>
        </div>
    );
};

LoginForm.propTypes = {
    onEmailSubmit: PropTypes.func.isRequired,
    serverErrorMessage: PropTypes.string.isRequired
};

export default LoginForm; 