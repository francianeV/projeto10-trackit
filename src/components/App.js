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

    return (
        <BrowserRouter>
        <MyContext.Provider value={{img, setImg}}>
        <Routes>
            <Route path="/" element={<LoginScreen setToken={setToken}/>}/>
            <Route path="/cadastro" element={<SignUpPage/>} />
            <Route path="/hoje" element={<TodayHabitsPage />} />
            <Route path="/habitos" element={<HabitsPage token={token} />} />
            <Route path="/historico" element={<HistoryPage />} />
            
        </Routes>
        </MyContext.Provider>
        </BrowserRouter>
    )
}