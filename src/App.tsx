import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home} from "./pages/Home.tsx";

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
  )
}
