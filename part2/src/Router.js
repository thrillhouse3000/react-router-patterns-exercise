import {Route, Routes, Navigate} from "react-router-dom";
import ColorsHome from "./ColorsHome";
import ColorsForm from "./ColorsForm";
import ColorPage from "./ColorPage";
import { useState } from "react";

const Router = () => {
    const [colors, setColors] = useState([])
    const [colorIdx, setColorIdx] = useState(0)

    const addColor = (newColor) => {
        setColors([newColor, ...colors])
    }

    const getColorIdx = (name) => {
        let idx = colors.findIndex(color => color.name === name)
        setColorIdx(idx)
    }

    return (
        <>
            <Routes>
                <Route path='/colors' element={<ColorsHome colors={colors} />} />
                <Route path='/colors/new' element={<ColorsForm addColor={addColor} />} />
                <Route path='/colors/:name' element={<ColorPage getColorIdx={getColorIdx} color={colors[colorIdx]}/>} />
                <Route path='*' element={<Navigate to='/colors' replace />} />
            </Routes>
        </>
    )
}

export default Router;