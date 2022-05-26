import PagesTop from "./PagesTop";
import FooterButtons from "./FooterButtons";
import styled from "styled-components";

export default function HistoryPage(){
    return(
        <Container>
            <PagesTop />
            <Title>Histórico</Title>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            <FooterButtons />
        </Container>
        );
}

const Title = styled.h2`
    width: 100px;
    height: 29px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
    margin-top: 70px;
    margin-left: 18px;
    padding-top: 30px;

`;

const Container = styled.div`
    width: 100%;
    height: 1000px;
    background-color: #E5E5E5;

    p{
        width: 338px;
        height: 74px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
        margin-left: 18px;
        margin-top: 45px;
    }
`;