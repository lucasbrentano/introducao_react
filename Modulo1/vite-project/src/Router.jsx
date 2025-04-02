import {Route, Routes} from "react-router-dom";
import {HomePage, About, Error404Page} from "./pages";
import {StandardLayout} from "./layouts";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<StandardLayout/>}>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error404Page/>} />
            </Route>
        </Routes>
    );
};

export { Router };