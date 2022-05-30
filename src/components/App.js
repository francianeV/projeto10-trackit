import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import LoginScreen from "./Login/LoginScreen";
import SignUpPage from "./Login/SignUpPage";
import TodayHabitsPage from "./TodayHabitsPage";
import HabitsPage from "./Habits/HabitsPage";
import HistoryPage from "./HistoryPage";
import MyContext from "./Context/MyContext";

export default function App(){
    const [token, setToken] = useState('');
    const [img, setImg] = useState();
    const [today, setToday] = useState([]);
    const [counter, setCounter] = useState(0);


    return (
        <MyContext.Provider value={{img, setImg, today, setToday, counter, setCounter}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginScreen setToken={setToken}/>}/>
                    <Route path="/cadastro" element={<SignUpPage/>} />
                    <Route path="/hoje" element={<TodayHabitsPage token={token}/>} />
                    <Route path="/habitos" element={<HabitsPage token={token} />} />
                    <Route path="/historico" element={<HistoryPage />} />
                </Routes>
            </BrowserRouter>
        </MyContext.Provider>
    )
}