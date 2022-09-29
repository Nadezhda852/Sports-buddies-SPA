import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const StyledParagraph = styled.p`
    text-aign: center;
    color: ${props => props.theme.colors.pink};
`;

const StyledParagraphOptions = styled.p`
    text-align: center;
`;

const StyledParagraphFormValidationErrors = styled.p`
    text-align: center;
    color: red;
`;
const ActiveForm = (props) => {

    const [totalScore, setTotalScore] = useState(0); 

    const schema = yup.object().shape({
        active: yup
        .string()
        .required("Please, check-in the active info")
        .nullable(),
        training: yup
        .string() 
        .required("Please, check-in the training info")
        .nullable(),
        feel: yup
        .string() 
        .required("Please, check-in the feelings info")
        .nullable(),
        intention: yup
        .string() 
        .required("Please, check-in the intention info")
        .nullable(),
    });

    const {
        register,
        formState: {errors},
        handleSubmit,
        watch,
    } = useForm({ resolver: yupResolver(schema)});

    const onSubmit = (data) => {
        console.log(data);
    };

    const formInputValues = watch(); // passing empty argument, means we are watching everything 
    
    const checkinMinScores = {
        active: 0,
        training: 0,
        feel: 0,
        intention: 0
    };

    const checkinMaxScores = {
        active: 10,
        training: 8,
        feel: 9,
        intention: 12
    };

    const checkinScores = {
        active: checkinMinScores.active,
        training: checkinMinScores.training,
        feel: checkinMinScores.feel,
        intention: checkinMinScores.intention
    };

    useEffect(() => {
  
        checkinScores.active = !formInputValues.active ? 0 : parseInt(formInputValues.active);
        checkinScores.training = !formInputValues.training ? 0 : parseInt(formInputValues.training);
        checkinScores.feel = !formInputValues.feel ? 0 : parseInt(formInputValues.feel);
        checkinScores.intention = !formInputValues.intention ? 0 : parseInt(formInputValues.intention);

        console.log('checkinScores = ', checkinScores);
        setTotalScore(checkinScores.active + checkinScores.training + checkinScores.feel + checkinScores.intention);
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <StyledParagraph>Have you been active today? ({ checkinMaxScores.active})?</StyledParagraph>
            <StyledParagraphOptions>
                <input {...register("active", {required: true})} type="radio" value={ checkinMaxScores.active} name="active" /> Yes
                <input {...register("active", {required: true})} type="radio" value={ checkinMinScores.active} name="active" /> No
            </StyledParagraphOptions>
            <StyledParagraphFormValidationErrors>{errors.active && errors.active?.message}</StyledParagraphFormValidationErrors>

            <br></br>

            <StyledParagraph>Did you train for at least 30 minutes? ({ checkinMaxScores.training })?</StyledParagraph>
            <StyledParagraphOptions>
                <input {...register("training", {required: true})} type="radio" value={ checkinMaxScores.training} name="training" /> Yes
                <input {...register("training", {required: true})} type="radio" value={ checkinMinScores.training} name="training" /> No
            </StyledParagraphOptions>
            <StyledParagraphFormValidationErrors>{errors.training && errors.training?.message}</StyledParagraphFormValidationErrors>

            <br></br>

            <StyledParagraph>Do you feel better after exercising? ({ checkinMaxScores.feel })?</StyledParagraph>
            <StyledParagraphOptions>
                <input {...register("feel", {required: true})} type="radio" value={ checkinMaxScores.feel} name="feel" /> Yes
                <input {...register("feel", {required: true})} type="radio" value={ checkinMinScores.feel} name="feel" /> No
            </StyledParagraphOptions>
            <StyledParagraphFormValidationErrors>{errors.feel && errors.feel?.message}</StyledParagraphFormValidationErrors>

            <br></br>

            <StyledParagraph>Would you train tomorrow again? ({ checkinMaxScores.intention})?</StyledParagraph>
            <StyledParagraphOptions>
                <input {...register("intention", {required: true})} type="radio" value={ checkinMaxScores.intention} name="intention" /> Yes
                <input {...register("intention", {required: true})} type="radio" value={ checkinMinScores.intention} name="intention" /> No
            </StyledParagraphOptions>
            <StyledParagraphFormValidationErrors>{errors.intention && errors.intention?.message}</StyledParagraphFormValidationErrors>

            <br></br>

            <StyledParagraph> Total: {totalScore} score </StyledParagraph>

            <br></br>

            <StyledParagraph>
                <input type="submit" value="Input your activity "></input>
            </StyledParagraph>
        </form>
    );
};

ActiveForm.propTypes = {};

export default ActiveForm; 
