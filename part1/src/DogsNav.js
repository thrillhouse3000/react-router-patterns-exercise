import { Link } from "react-router-dom";
import './DogsNav.css'

const DogsNav = ({names}) => {
    return (
        <div className='DogsNav'>
            <span><Link to='/'>Home</Link></span>
            {names.map(name => (
                <span key={name}>
                    <Link to={`dogs/${name.toLowerCase()}`}>{name}</Link>
                </span>
            ))}
        </div>
    )
}

export default DogsNav;