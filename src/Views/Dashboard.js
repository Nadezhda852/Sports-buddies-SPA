import React from "react";
import PropTypes from 'prop-types';
import DaysBeingActive from "../Components/DaysBeingActive";



const Dashboard = (props) => {
    const { checkins } = props;

    return (
        <div> 
        <h1> Dashboard </h1>
        <DaysBeingActive days={18} checkins={checkins}>

        </DaysBeingActive>

        </div>
    );
};

Dashboard.propTypes = {
    checkins: PropTypes.array.isRequired,
};

export default Dashboard; 