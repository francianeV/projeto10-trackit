import PagesTop from "./PagesTop";
import styled from "styled-components";
import FooterButtons from "./FooterButtons";
import axios from "axios";
import { useState, useContext,useEffect } from "react";
import MyContext from "./Context/MyContext";
import dayjs from "dayjs"
import "dayjs/locale/pt-br"

export default function TodayHabits({token}){
    const {today, setToday, counter, setCounter} = useContext(MyContext)

    dayjs.extend(require("dayjs/plugin/updateLocale"));
    dayjs.updateLocale("pt-br", {
        weekdays: [
            "Domingo",
            "Segunda",
            "Terça",
            "Quarta",
            "Quinta",
            "Sexta",
            "Sabado",
            ],
        });
    const [loadApi, setLoadApi] = useState(true);
    let habitsDone = ((counter * 100) / today.length).toFixed(0);

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    if(loadApi){
        setLoadApi(false)
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',config)

        promise.then(res => {
            setToday(res.data);
        });
        
    }

    function statusHabit(id, done){
        if(done === false){
            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,{},config)
            promise.then(res =>{
                setCounter(counter + 1);
                setLoadApi(true);
            });

        }else{
            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,{},config)
            promise.then(res => {
                setCounter(counter -1);
                setLoadApi(true);
            })
        }
    }

    return(
        <>
            <Container>
                <PagesTop />
                <Date>{`${dayjs().locale('pt-br').format("dddd, DD/MM")}`}</Date>
                <Subtitle>{habitsDone > 0 ? `${habitsDone} % dos hábitos concluídos` : 'Nenhum hábito concluído ainda'}</Subtitle>
                {today.map((value, index) => 
                    <Habits key={index}>
                        <h3>{value.name}</h3>
                        <HabitsInfo>
                            <div>
                                <SequenceInfo>
                                    <p>Sequência atual:</p><SequenceDays color={value.done}> {value.currentSequence} {value.currentSequence > 1 || value.currentSequence === 0 ? "dias" : "dia"}</SequenceDays>
                                </SequenceInfo>
                                <SequenceInfo>
                                    <p>Seu recorde:</p><Record color={(value.currentSequence === value.highestSequence && value.highestSequence !== 0)}>{value.highestSequence} {value.highestSequence > 1 || value.currentSequence === 0 ? "dias" : "dia"}</Record>
                                </SequenceInfo>
                            </div>
                            <Check background={value.done} onClick={() => statusHabit(value.id, value.done)}><ion-icon name="checkmark-outline"></ion-icon></Check>
                        </HabitsInfo>
                    </Habits>)}
            </Container>
            <FooterButtons />
        </>
        );
}

const HabitsInfo = styled.div`
    display: flex;
    position: relative;

`;

const Container = styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 90px;
`;

const Date = styled.div`
    margin-top: 70px;
    padding-left: 18px;
    padding-top: 28px;
    width: 100%;
    height: 50px;
    
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
`;

const Subtitle = styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #BABABA;
    padding-left: 18px;
    margin-top: 10px;
`;

const Habits = styled.div`
    width: 92%;
    height: auto;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin-left: 15px;
    margin-top: 25px;
    padding: 18px 10px 18px 18px;

    h3{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
        margin-bottom: 10px;
    }

`;

const SequenceInfo = styled.div`
    display: flex;
    align-items: center;

        p{
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 12.976px;
            line-height: 16px;
            color: #666666;
        }
`;

const Record = styled.span`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    font-size: 13px;
    padding: 2px 0 0 3px;
    color: ${props => props.color ? "#8FC549" : "#666666"};
`;

const SequenceDays = styled.span`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    font-size: 13px;
    padding: 2px 0 0 3px;
    color:  ${props => props.color ? "#8FC549" : "#666666"};
`;

const Check = styled.div`
    width: 69px;
    height: 69px;
    background: ${props => props.background ? '#8FC549' : '#EBEBEB'};
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 1px;
    bottom: -7px;

    ion-icon{
        width: 50px;
        height: 50px;
        color: #fff;
    }
`;

