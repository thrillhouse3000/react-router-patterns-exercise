import { Navigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import './Dog.css'

const Dog = ({getDogIdx, dog}) => {
    const {name} = useParams();

    useEffect(() => {
        getDogIdx(name)
    }, [getDogIdx, name])
    

    return (
        <>
        {dog ? 
            (
                <div className='Dog'>
                    <h1>{dog.name}</h1>
                    <img src={dog.src} alt={dog.name}/>
                    <p>Age: {dog.age}</p>
                    <p><u>Facts</u></p>
                    <ul>
                        {dog.facts.map((fact, i) => (
                            <li key={i}>
                                {fact}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : <Navigate to='/dogs' replace />
        }
        </>
        
    )
}

export default Dog;