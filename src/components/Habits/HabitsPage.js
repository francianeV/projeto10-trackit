import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import FooterButtons from "../FooterButtons";
import PagesTop from "../PagesTop";

function Days({day, id, selectedDays, setSelectedDays}){
    
    const [chosen, setChosen] = useState();
    
    function chosenDays(){
        if(!chosen){
            setChosen(!chosen)
            setSelectedDays([...selectedDays, id])
            console.log(chosen)
            console.log(selectedDays)
        }
        else if(chosen){
            setSelectedDays(selectedDays.filter((e) => e !== id ))
            setChosen(!chosen)
        }
       
    }

    return(
        
        <Day color={chosen ? '#CFCFCF' : '#FFF'}font_color={chosen ? '#FFF' : '#DBDBDB'} onClick={chosenDays}>{day}</Day>
            
    );
}

export default function HabitsPage({token}){
    const [habits, setHabits] = useState([]);
    const [habitName, setHabitName] = useState('');
    const [createHabtit, setCreateHabit] = useState(false)
    const [selectedDays, setSelectedDays] = useState([])
    const daysOfWeek = [{day: "D", id: 7}, {day: "S", id: 1}, {day: "T", id: 2}, {day: "Q", id: 3}, {day: "Q", id: 4}, {day: "S", id:5}, {day: "S", id: 6}]

    console.log(habitName);

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    useEffect(() => {    
    
    const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',config);

    promise.then(res => {
        setHabits(res.data);
        console.log(res.data)
    })

    .catch(err => {
        console.log(err)
    })
    },[]);


    function listHabits(){
        if(habits.length > 0){
            return console.log("testando condiçao")
        }else{
            return <InitialText>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</InitialText>
         }
    }

    const showingHabits = listHabits();
    return(
        <Container>
            <PagesTop />
            <Header>
                <h2>Meus hábitos</h2>
                <button onClick={() => setCreateHabit(true)}><span>+</span></button>
            </Header>
            {createHabtit ?
                <AddHabit>
                    <input type="text" value={habitName} placeholder="nome do hábito" required onChange={e => setHabitName(e.target.value)}></input>
                    <DaysContainer>
                        {daysOfWeek.map(day => <Days key={day.id} id={day.id} day={day.day} selectedDays={selectedDays} setSelectedDays={setSelectedDays}/>)}
                    </DaysContainer>
                    <Actions>
                        <Cancel onClick={() => setCreateHabit(false)}>Cancelar</Cancel>
                        <Save>Salvar</Save>
                    </Actions>
                </AddHabit>

                 : null}
            
            {showingHabits}
            <FooterButtons />
        </Container>);

        
}

const Container = styled.div`
    width: 100%;
    height: 800px;
    background-color: #E5E5E5;
`;

const Header = styled.div`
    width: 100%;
    height: auto;
    margin-top: 70px;
    padding: 30px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2{
        width: 148px;
        height: 29px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }

    button{
        width: 40px;
        height: 35px;
        left: 317px;
        top: 92px;
        background: #52B6FF;
        border-radius: 4.63636px;
        border: none;

        :hover{
            cursor: pointer;
        }

        span{
            width: 16px;
            height: 34px;
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 26.976px;
            line-height: 34px;
            text-align: center;
            color: #FFFFFF;
            }
        
    }
`;

const InitialText = styled.p`
    width: 100%;
    height: 74px;
    left: 17px;
    top: 155px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
    padding: 8px 15px;
`;

const AddHabit = styled.div`
    width: 380px;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    margin: 15px;

    input{
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        padding-left: 10px;
        margin: 20px;

        ::placeholder{
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 19.976px;
            line-height: 25px;
            color: #DBDBDB;
        }
    }
`;

const Day = styled.div`
    width: 30px;
    height: 30px;
    background: ${props => props.color};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: ${props => props.font_color};
`;
 const DaysContainer = styled.div`
    width: 220px;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 20px;
 `;

 const Cancel = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #52B6FF;
    margin-bottom: 40px;
    margin-top: 30px;
    margin-left: 160px;
 `;

 const Save = styled.button`
    width: 84px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;
    border: none;
    margin-left: 30px;
    margin-bottom: 10px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
 `;

 const Actions = styled.div`
    width: 380px;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
 `;

