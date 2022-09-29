import React from "react";
import PropTypes from "prop-types";
import {Link, useLocation} from "react-router-dom"
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import useAuth from "../config/services/useAuth";

function Menu(props) {

    const { open, onClick } = props;

    const location = useLocation();

    const StyledNav = styled.nav`
    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    `;
    
    const StyledLi = styled.li`
    margin-bottom: 10%;
    cursor: pointer;
    width: 100%;
    text-align: center;
    height: 40px;
    display: flex;
    justify-content: center;
    background: ${({ theme, active}) => active ? theme.colors.pink: ""}
    `;

    const StyledClosedparagraph = styled.p`
    text-align: right;
    `;

    return (
        <div>
            <StyledClosedparagraph onClick={onClick}> X </StyledClosedparagraph>
            <StyledNav>
                <ul>
                    <StyledLi active={location.pathname ==="/login"}> <Link to="/login"> Login with email address</Link>
                    </StyledLi>
                    <StyledLi active={location.pathname ==="/signUp"}> <Link to="/signUp"> Sign up</Link>
                    </StyledLi>
                    <StyledLi active={location.pathname ==="/"}> <Link to="/"> Dashboard</Link>
                    </StyledLi>
                    <StyledLi active={location.pathname ==="/profile"}> <Link to="/profile"> Profile </Link>
                    </StyledLi>
                    <StyledLi active={location.pathname ==="/checkin"}> <Link to="/checkin"> Check in </Link>
                    </StyledLi>
                </ul>
            </StyledNav>
        </div>
    );
}

Menu.propTypes = {
    onClick: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

function Header(props) {
    const { onClick, open, signOut } = props;
    const { user } = useAuth(); 

    const handleClick = (e) => {
        e.preventDefault();
        onClick (e);
        console.log('Header.handleClick()');
    }

    const StyledBurgerMenu = styled.div`
    width: 90px;
    cursor: pointer;
    display: flex;
    fkex-direction: column;
    align-items: center;
    justify-content: center;
    hr {
        margin: 4px 0 0 4px;
        width: 20%;
        border: 1px solid ${({ theme}) => theme.colors.darkShade[100]};
    }
    `; 
    
    const StyledManuWrapper = styled.div`
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    height: 100vh;
    width: 304px;
    background: linear-gradient(180deg, #6fcf9d 0%, #67d2e8 100%);
    position: absolute;
    padding-tp: 10%;
    top: 0;
    left: 0;
    `;

    const StyledWrapper = styled.div`
    width: 100%;
    background: linear-gradient(
        180deg,
        ${({ theme })=> theme.colors.lightPurple} 0%,
        ${({ theme })=> theme.colors.purple} 100%,
    );
    height: 50px;
    display: flex;
    justify-content: space-between;
    `;

    const handleClickBurgerMenu = (e) => {
        e.preventDefault();
        onClick(e);
        console.log('Header.handleClickBurgerMenu');
    }

    return (
        <div>
        <StyledManuWrapper open={open}>
           <Menu onClick={ handleClick } />
        </StyledManuWrapper>

        <StyledWrapper>
           <StyledBurgerMenu onClick={handleClickBurgerMenu}>
           <hr/>
           <hr/>
           <hr/>
           </StyledBurgerMenu>
        </StyledWrapper>
        </div>
    );
}

Header.propTypes = {
    onClick:PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

export default Header;
