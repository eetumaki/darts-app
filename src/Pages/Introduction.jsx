import { Link } from "react-router-dom";

export function Introduction() {
    return(
        <div>
            <h1>This is the introduction page to the darts-application</h1>
            <Link to="/GamePage">GamePage</Link>
        </div>
    )
}