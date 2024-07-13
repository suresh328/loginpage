import React from "react";
import log from "../comp/image/logop.png"

function Form() {
  return (
    <div className="form">
        <div className="login-container">
            <div className="logo">
                <div className="logo-container">
                 <img src={log} alt="" />
                </div>
                <h1>Sign In</h1>
                <form>
            <input type="text" name="username" placeholder="Username" required />
            <input type="password" name="password" placeholder="Password" required />
            <a href="#">I forgot my password</a>
            <input type="submit" value="Secure Login" />
        </form>
            </div>
            


        </div>
        <div class="powered-by">
            Powered By KG Hawes, LLC.
        </div>
    </div>
  );
}

export default Form;
