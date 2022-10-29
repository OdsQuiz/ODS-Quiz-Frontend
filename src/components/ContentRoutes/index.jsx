import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../../pages/home";
import Form from "../../pages/Form";
import Ranking from "../../pages/Ranking";
import Result from "../../pages/Result";
import Quiz from "../../pages/Quiz";
import Ods from "../../pages/Ods";

const ContentRoutes = () => {
    return(
        <div className="Routes">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/participar" element={<Form />} />
                <Route path="/ranking" element={<Ranking />} />
                <Route path="/resultado" element={<Result />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/ods" element={<Ods />} />
            </Routes>
        </div>
    )
}

export default ContentRoutes