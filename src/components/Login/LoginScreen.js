import styled from "styled-components";
import LoginTop from "./LoginTop";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";
import MyContext from "../Context/MyContext";

export default function LoginScreen({setToken}){
    const {setImg} = useContext(MyContext)
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function sendInfos(event){
        event.preventDefault();
        const body = {
            email,
            password
        }
        
        setLoading(true);
        setDisabled(true)

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', body)

        promise.then(res => {
            console.log(res.data);
            setToken(res.data.token)
            setImg(res.data.image)
            navigate("/hoje", { replace: true });
        })

        .catch(err => {
            if(err.request.status === 401){
                setLoading(false)
                alert('Email ou senha inválidos!')
               
                setDisabled(false)
            }else if(err.request.status === 422){
                alert('Não foi possivel processar a requisição.')
                setLoading(false)
                setDisabled(false)
                
            }else{
                console.log(err.request.status);
            }})
    }

    return(
        <ContainerLogin>
           <LoginTop />
            <Form input_color={disabled? '#D4D4D4' : '#FFF'} opacity={disabled? '0.7' : null} onSubmit={sendInfos}> 
                <input type="email"  value={email} placeholder="Email" required onChange={e => setEmail(e.target.value)} disabled={disabled} ></input>
                <input type="password"  value={password} placeholder="Senha" required onChange={e => setPassword(e.target.value)}disabled={disabled}></input>
                {loading ? <button disabled={disabled}><BeatLoader color="white" size={15} /></button> :  <button>Entrar</button> }
               
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
        background-color: ${props => props.input_color};
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

