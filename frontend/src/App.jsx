import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./Landing.jsx";
import Store from "./Store.jsx";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Landing />} />

                <Route path="/store" element={<Store />} />

            </Routes>

        </BrowserRouter>

    );

}

export default App;