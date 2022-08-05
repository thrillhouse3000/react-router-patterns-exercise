import { Link } from "react-router-dom";

const ColorsHome = ({colors}) => {
    return (
        <>
            <div>
                <Link to='/colors/new'>Add A Color</Link>
            </div>
            <div>
                <h4>Pick a Color to View It</h4>
                {colors.map(color => (
                    <p key={color.name}>
                        <Link to={`/colors/${color.name}`}>{color.name}</Link>
                    </p>
                ))}
            </div>
        </>
    )
}

export default ColorsHome;