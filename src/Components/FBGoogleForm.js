import React from "react";
import styled from "styled-components";
import { SocialIcon } from 'react-social-icons';
import PropTypes from "prop-types";


const StyledFBGoogleDiv = styled.p`
text-align: ceenter;
color: ${props => props.theme.colors.purple};
`;

const FBGoogleForm = (props) => {
    const {onSocialSubmit } = props;

    return (
        <div>
            <form>
                <StyledFBGoogleDiv>
                    <SocialIcon network="facebook" onClick={ () => onSocialSubmit("Facebook")  }/>
                    <SocialIcon network="google" onClick={() => onSocialSubmit("Google") } />
                </StyledFBGoogleDiv>
            </form>
        </div>
    );
};

FBGoogleForm.propTypes = {
    onSocialSubmit: PropTypes.func.isRequired
};

export default FBGoogleForm;

