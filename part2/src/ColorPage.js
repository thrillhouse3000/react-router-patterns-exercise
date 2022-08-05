import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import './ColorPage.css'

const ColorPage = ({getColorIdx, color}) => {
    const {name} = useParams();

    useEffect(() => {
        getColorIdx(name)
    }, [getColorIdx, name]);

    return (
        <>
            {color ? (
                <div className='ColorPage' style={{backgroundColor: color.color}}>
                    <h2>BEHOLD! {color.name}!</h2>
                    <Link to='/colors'>GO BACK</Link>
                </div>
                ) : <Navigate to='/colors' replace />}
        </>
    )
}

export default ColorPage;