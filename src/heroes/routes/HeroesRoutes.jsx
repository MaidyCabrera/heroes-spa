import { Navigate, Route, Routes } from 'react-router-dom';

import { Navbar } from "../../ui";
import { DcPage, MarvelPage } from '../heroes/';

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="marvel" element={<MarvelPage />} />
                <Route path="dc" element={<DcPage />} />
                <Route path="/" element={ <Navigate to='/marvel' />} />
            </Routes>
        </>
    )
}