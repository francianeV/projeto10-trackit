import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import LoginScreen from "./Login/LoginScreen";
import SignUpPage from "./Login/SignUpPage";
import TodayHabitsPage from "./TodayHabitsPage";
import HabitsPage from "./Habits/HabitsPage";
import HistoryPage from "./HistoryPage";

export default function App(){
    const [token, setToken] = useState('');

    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginScreen setToken={setToken}/>}/>
            <Route path="/cadastro" element={<SignUpPage/>} />
            <Route path="/hoje" element={<TodayHabitsPage />} />
            <Route path="/habitos" element={<HabitsPage token={token} />} />
            <Route path="/historico" element={<HistoryPage />} />
        </Routes>
        </BrowserRouter>
    )
}