import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../../pages/Home";
import SignIn from "../../pages/SignIn";
import Ranking from "../../pages/Ranking";
import Result from "../../pages/Result";
import Quiz from "../../pages/Quiz";
import Login from "../../pages/Login";
import MainPanel from "../../pages/MainPanel";
import { AuthContext } from "../../contexts/auth";

const ContentRoutes = () => {
    const LoggedRedirection = ({children}) =>{
        const { authenticated } = useContext(AuthContext)

        if(authenticated){
            return <Navigate to='/painel' />
        }
        else{
            return(
                <>
                  {children}  
                </>
            )
        }
    }

    return(
        <div className="Routes">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/participar/login" element={<LoggedRedirection><Login /></LoggedRedirection>} />
                <Route path="/participar/cadastro" element={<LoggedRedirection><SignIn /></LoggedRedirection>} />
                <Route path="/ranking" element={<Ranking />} />
                <Route path="/resultado" element={<Result />} />
                <Route path="/painel" element={<MainPanel />} />
                <Route path="/quiz" element={<Quiz />} />
            </Routes>
        </div>
    )
}

export default ContentRoutes