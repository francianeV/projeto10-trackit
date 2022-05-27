import styled from "styled-components";
import LoginTop from "./LoginTop";
import {Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";

export default function SignUp(){
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');

    function signup(event){
        event.preventDefault();
        const body = {
            email,
            name,
            image: photo,
            password
        }

        setLoading(true)
        setDisabled(true)

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', body)

        promise.then(resp => {
            navigate("/", { replace: true });
        })

        .catch(err => {
            setLoading(false)
            setDisabled(false)
            alert("Erro ao realizar o cadastro. Tente novamente!");
        })
    }

    return(
        <ContainerRegister>
            <LoginTop />
            <Form input_color={disabled? '#D4D4D4' : '#FFF'} opacity={disabled? '0.7' : null} onSubmit={signup}>
                <input type="email" value={email} placeholder="Email" required onChange={e => setEmail(e.target.value)} disabled={disabled}></input>
                <input type="password" value={password} placeholder="Senha" required onChange={e => setPassword(e.target.value)} disabled={disabled}></input>
                <input type="name" value={name} placeholder="Nome" required onChange={e => setName(e.target.value)} disabled={disabled}></input>
                <input type="photo" value={photo} placeholder="Foto" required onChange={e => setPhoto(e.target.value)} disabled={disabled}></input>
                <button disabled={disabled}>{loading ? <BeatLoader color="white" size={15} /> : "Cadastrar"}</button>
            </Form>
            <Link to={"/"}>
                <Login>Já tem uma conta? Faça login!</Login>
            </Link>
        </ContainerRegister>
        );
}

const ContainerRegister = styled.div`
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
        background: ${props => props.input_color};
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-top: 6px;

            ::placeholder{
                width: 300px;
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
            opacity: ${props => props.opacity};
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

const Login = styled.h3`
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
