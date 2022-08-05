import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const ColorsForm = ({addColor}) => {
    const INITIAL_STATE = {
        color: '#000000',
        name: ''
    }

    const [formData, setFormData] = useState(INITIAL_STATE);
    const navigate = useNavigate();

    const handleChange = (evt) => {
        const {name, value} = evt.target
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addColor({...formData})
        setFormData(INITIAL_STATE);
        navigate('/color', {replace: true})
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='color'>Pick a Color</label>
            <input
                type='color'
                name='color'
                id='color'
                value={formData.color}
                onChange={handleChange}
            />
            <label htmlFor='name'>Name Your Color</label>
            <input
                type='text'
                name='name'
                id='name'
                value={formData.name}
                onChange={handleChange}
            />
            <button>Add Color</button>
        </form>
    )
}

export default ColorsForm;