import PagesTop from "./PagesTop";
import styled from "styled-components";
import FooterButtons from "./FooterButtons";

export default function TodayHabits(){
    return(
        <Container>
            <PagesTop />
            Entrei nos habitos do dia
            <FooterButtons />
        </Container>)
}

const Container = styled.div`
    width: 100%;
    height: 1000px;
    background-color: #fff;
`;

