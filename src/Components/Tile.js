import PropTypes from "prop-types";
import styled from "styled-components";

const Tile = styled.div`
box-shadow: 35px 15px 24px rgba(31, 32, 32, ${props => props.elevation});
padding: 4%;
`;

Tile.propTypes = {
    elevation: PropTypes.string
};

Tile.defaultProps = {
    elevation: "0.07"
};

export default Tile; 
