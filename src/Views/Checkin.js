import React from "react";
import styled from "styled-components";


const StyledHeading2 = styled.h2`
text-align: center;
color: ${props => props.theme.colors.pink};
`;

const Checkin = (props) => {
    const date = new Date();

    const dateFormat = new Date(date);

    dateFormat.setMinutes(dateFormat.getMinutes() + dateFormat.getTimezoneOffset());
    const dateStr = dateFormat.toDateString();

    return (
        <div>
            <StyledHeading2> Input your activity for {dateStr} </StyledHeading2>
        </div>
    );
};

Checkin.propTypes = {};

export default Checkin; 