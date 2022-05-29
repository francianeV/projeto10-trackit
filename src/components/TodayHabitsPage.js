import PagesTop from "./PagesTop";
import styled from "styled-components";
import FooterButtons from "./FooterButtons";

export default function TodayHabits(){
    
    return(
        <Container>
            <PagesTop />
            <Hora>Domingo, 29/05</Hora>
            <FooterButtons />
        </Container>)
}

const Container = styled.div`
    width: 100%;
    height: 1000px;
    background-color: #E5E5E5;
`;

const Hora = styled.div`
    margin-top: 80px;
    width: 200px;
    height: 50px;
    background-color: lightblue;
`;