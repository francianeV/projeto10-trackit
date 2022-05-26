import logo from "../../assets/img/Logo.png";
import styled from "styled-components";


export default function LoginTop(){
    return(
        <Logo>
            <img src={logo} alt="logo trackit" />
            <h1>Trackit</h1>
        </Logo>
    );
}


const Logo = styled.div`
    width: 200px;
    height: auto;
    margin-top: 100px;

    h1{
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 68.982px;
        line-height: 86px;
        text-align: center;
        color: #126BA5;
        margin-bottom: 33px;
    }
`;
