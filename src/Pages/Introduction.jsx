import {  useNavigate } from "react-router-dom";

export function Introduction() {
    const navigate = useNavigate()

    const gamePage = () => {
        navigate('/GamePage');
    };

    const nextPage = () => {
        navigate('/HTP1');
    };

    const alertFunction = () => {
        console.log("Alert function called")
        const confirmed =   window.confirm("Are you sure you know how to play?\n('OK' is yes)")
        if (confirmed) {
            gamePage();
        } else {

        }
    };

    return(
        <div>
            <h1>This is the introduction page to the darts-application</h1>
            <button onClick={()=>nextPage()} className="btn">How to play</button>
            <button onClick={alertFunction} className="btn" >Game Page</button>
        </div>
    )
}