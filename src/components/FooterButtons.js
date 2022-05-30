import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import MyContext from "./Context/MyContext";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export default function FooterButtons(){
    const {counter, today} = useContext(MyContext);
    let porcentage;

    if(today.length > 0){
        porcentage = (counter * 100) / today.length;
    } else {
        porcentage = 0;
    }

    return(
        <Footer>
            <Link to={"/habitos"} style={{ textDecoration: 'none' }}>
                <span>Hábitos</span>
            </Link>
            <Link to={"/hoje"} style={{ textDecoration: 'none' }}>
                <ProgressButton>
                    <CircularProgressbar 
                        value={porcentage} 
                        text={'Hoje'}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            textSize: '18px',
                            pathColor: 'white',
                            textColor: 'white',
                            trailColor: 'transparent',
                            backgroundColor: '#52B6FF',
                        })}/>
                    </ProgressButton>  
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

const ProgressButton = styled.div`
    width: 91px;
    height: 91px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 50px;

`;

