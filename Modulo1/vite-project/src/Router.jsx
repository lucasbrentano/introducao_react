import {Route, Routes} from "react-router-dom";
import {HomePage, AboutUs} from "./pages";
import {StandardLayout} from "./layouts";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<StandardLayout/>}>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutUs />} />
            </Route>
        </Routes>
    );
};

export { Router };