import Navbar from "./Shared/Navbar";
import Home from "../src/Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import Login from "./Components/Login/Login";

function App() {
    return (
        <>
            <Navbar>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/about" element={<About></About>}></Route>
                    <Route
                        path="/services"
                        element={<Services></Services>}
                    ></Route>
                    <Route
                        path="/contact"
                        element={<Contact></Contact>}
                    ></Route>
                    <Route path="/login" element={<Login></Login>}></Route>
                </Routes>
            </Navbar>
        </>
    );
}

export default App;
