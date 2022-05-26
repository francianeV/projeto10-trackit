import styled from "styled-components";
import LoginTop from "./LoginTop";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginScreen({setToken}){
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function sendInfos(event){
        event.preventDefault();
        const body = {
            email,
            password
        }

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', body)

        promise.then(res => {
            console.log(res.data);
            setToken(res.data.token)
            navigate("/hoje", { replace: true });
        })

        .catch(err => {
            if(err.request.status === 401){
                alert('Email ou senha inválidos!')
            }else if(err.request.status === 422){
                alert('Não foi possivel processar a requisição.')
            }else{
                console.log(err.request.status);
            }})
    }

    return(
        <ContainerLogin>
           <LoginTop />
            <Form onSubmit={sendInfos}> 
                <input type="email" value={email} placeholder="Email" required onChange={e => setEmail(e.target.value)}></input>
                <input type="password" value={password} placeholder="Senha" required onChange={e => setPassword(e.target.value)}></input>
                <button>Entrar</button>
            </Form>
            <Link to={"/cadastro"}>
            <Register>Não tem uma conta? Cadastre-se!</Register>
            </Link>
        </ContainerLogin>
        );
}
const ContainerLogin = styled.div`
    width: 400px;
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    
    input{
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-top: 6px;

            ::placeholder{
                width: 58px;
                height: 25px;
                left: 47px;
                top: 288px;
                font-family: 'Lexend Deca';
                font-style: normal;
                font-weight: 400;
                font-size: 19.976px;
                line-height: 25px;
                color: #DBDBDB;
            }
        }

        button{
            width: 303px;
            height: 45px;
            background: #52B6FF;
            border-radius: 4.63636px;
            border: none;
            margin-top: 6px;

            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 20.976px;
            line-height: 26px;
            text-align: center;
            color: #FFFFFF;

            :hover{
                cursor: pointer;
            }

        }
    
`;

const Register = styled.h3`
    width: 232px;
    height: 17px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
    margin-top: 25px;
`;

