import { Link } from "react-router-dom"

const NotFound = () => {
    return(
        <div>
            <h1>City not found, please try again</h1>
            <Link to="/">
                Back to HomePage
            </Link>
        </div>
    )
}

export default NotFound