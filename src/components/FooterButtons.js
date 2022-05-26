import styled from "styled-components";
import { Link } from "react-router-dom";

export default function FooterButtons(){
    return(
        <Footer>
            <Link to={"/habitos"} style={{ textDecoration: 'none' }}>
                <span>Hábitos</span>
            </Link>
            <Link to={"/hoje"} style={{ textDecoration: 'none' }}>
                <span>Hoje</span>
            </Link>
            <Link to={"/Historico"} style={{ textDecoration: 'none' }}>
                <span>Histórico</span>
            </Link>
        </Footer>
    );
}

const Footer = styled.div`
    width: 100%;
    height: 70px;
    background: #FFFFFF;
    position: fixed;
    bottom: 0;
    z-index: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;

    span{
        width: 68px;
        height: 22px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        color: #52B6FF;
    }

    :link{

    }
`;

