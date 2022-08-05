import { Link } from 'react-router-dom'
import './DogsHome.css'

const DogsHome = ({dogs}) => {
    return (
        <>
            <h1>All Dogs</h1>
            <div className='DogsHome'>
                {dogs.map(dog => (
                    <div className='DogsHome-Dog' key={dog.name}>
                        <Link to={`/dogs/${dog.name.toLowerCase()}`}><img src={dog.src} alt={dog.name} /></Link>
                        <h4>{dog.name}</h4>
                    </div>
                ))}
            </div>
        </>
    )
}

export default DogsHome;