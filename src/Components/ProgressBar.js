import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function ProgressBar(props) {
    const { percentage } = props;

    const StyledBar = styled.div`
    background: rgba(188, 156, 255, 0.2);
    width: 100%;
    height: 13px;
    boarder-radius: 2px;
    display: flex;
    align-items: flex-end;
    `;

    const StyledInnerBar = styled.div`
    background: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);
    opacity: 100 !important; 
    width: ${props => props.percentage}%;
    height: 100%;
    boarder-radius: 2px;
    `;

    return (
        <StyledBar>
            <StyledInnerBar percentage={percentage}></StyledInnerBar>
        </StyledBar>
    );
}

ProgressBar.propTypes = {
    percentage: PropTypes.number.isRequired
};

export default ProgressBar; 