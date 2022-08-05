import {Routes, Route, Navigate} from "react-router-dom";
import {useState} from 'react'
import DogsHome from "./DogsHome";
import Dog from "./Dog";
import dogs from './dogprops';

const Router = () => {
    const [dogIdx, setDogIdx] = useState(0);

    const getDogIdx = (name) => {
        let idx = dogs.findIndex(dog => dog.name.toLowerCase() === name)
        setDogIdx(idx)
    }

    return (
        <Routes>
            <Route path='/dogs' element={<DogsHome dogs={dogs} />} />
            <Route path='/dogs/:name' element={<Dog getDogIdx={getDogIdx} dog={dogs[dogIdx]} />} />
            <Route path='*' element={<Navigate to='/dogs' replace />} />
        </Routes>
    )
}

export default Router;