import { render } from "@testing-library/react";
import './login.css';

export default function Login(){
    
    

   
    return (
        <div className="loginbox">
            <h2 className="lg">Log-in</h2>
            <div className="userBox">
                <p className="text1">Username: </p>
                <p className="text1">Password:</p>
                
            </div>
            <div className="userInput"> 
            <form >
                    <input type="text" name="username" className="textinput"></input>
                    <input type="password" name="password" className="textinput" ></input>
                    <input type="button" name="login" value="Login" className="submit"></input>
            </form>
            </div>
        </div>
    );
}

