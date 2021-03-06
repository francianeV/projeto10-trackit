import { useContext } from "react";
import styled from "styled-components";
import MyContext from "./Context/MyContext";

export default function PagesTop(){
    const {img} = useContext(MyContext)
    return(
        <Top>
            <span>Trackit</span>
            <img src={img} alt="foto perfil" />
        </Top>
        );
}

const Top = styled.div`
    width: 100%;
    height: 70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position:fixed;
    top: 0;
    z-index:1;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span{
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 38.982px;
        line-height: 49px;
        color: #FFFFFF;
        padding: 18px;
    }

    img{
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
        margin-right: 18px;
    }
`;
