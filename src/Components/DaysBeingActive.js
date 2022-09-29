import React from "react";
import PropTypes from "prop-types";
import Tile from "./Tile";
import styled from "styled-components";
import Histogram from "./Histogram";
import ProgressBar from "./ProgressBar";

function DaysBeingActive(props) {
    const { days, checkins } = props;

    const StyledDaysBeingActiveHeading = styled.h2`
    text-align: cnter;
    color: ${ props => props.theme.colors.pink};
    `;

    const StyledRootDiv = styled.div`
    display:grid;
    grid-template-columns: 0.8fr;
    grid-template-rows: 55px 80 px 20 px auto;
    justify-content: center;
    `;

    const StyledGoalHeading = styled.h4`
    color: #1f2041;
    `;

    return (
        <Tile>
            <StyledRootDiv>
                <StyledDaysBeingActiveHeading> {days} being active! </StyledDaysBeingActiveHeading>
                <Histogram barCount={7} bars={checkins.map(c => c.score * 5)} />
                <ProgressBar percentage="75" />
                <StyledGoalHeading>
                    <strong>75%</strong> TO YOUR TARGET!
                </StyledGoalHeading>
            </StyledRootDiv>
        </Tile>
    );
}

DaysBeingActive.propTypes = {
    days: PropTypes.number,
    checkins: PropTypes.array.isRequired
};

DaysBeingActive.defaultProps = {
    days: 0
};

export default DaysBeingActive; 

