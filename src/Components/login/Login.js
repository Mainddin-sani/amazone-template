import React, { useContext } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import firebaseConfig from "./Login.config";
import { userContext } from "../../App";
import { useHistory, useLocation } from "react-router";
initializeApp(firebaseConfig);
const Login = () => {
  // contest Api
  const [UserIdLogged, setUserLoggedIn] = useContext(userContext);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const [check, setCheck] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    photo: "",
    errorMassage: "",
    success: false,
  });

  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const googleHandle = () => {
    console.log("cliked");
    signInWithPopup(auth, provider)
      .then((result) => {
        const { displayName, photoURL, email } = result.user;
        const signInuser = {
          isSignIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUser(signInuser);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  const googleHandleSignOUt = () => {
    signOut(auth)
      .then(() => {
        const signOutUser = {
          isSignIn: true,
          name: "",
          email: "",
          photo: "",
        };
        setUser(signOutUser);
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const inputfield = (e) => {
    let isFormValid = true;
    if (e.target.name === "email") {
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      isFormValid = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(e.target.value);
    }
    if (isFormValid) {
      const userInfo = { ...user };
      userInfo[e.target.name] = e.target.value;
      setUser(userInfo);
    }
  };
  const submitHandle = (e) => {
    if (check && user.email && user.password) {
      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((res) => {
          const userInfo = { ...user };
          userInfo.error = "";
          userInfo.success = true;
          setUser(userInfo);
        })
        .catch((error) => {
          const userInfo = { ...user };
          userInfo.errorMassage = error.message;
          userInfo.success = false;
          setUser(userInfo);
          console.log(error);
        });
    }
    if (!check && user.email && user.password) {
      signInWithEmailAndPassword(auth, user.email, user.password)
        .then((res) => {
          const userInfo = { ...user };
          userInfo.error = "";
          userInfo.success = true;
          setUser(userInfo);
          setUserLoggedIn(userInfo);
          history.replace(from);
        })
        .catch((error) => {
          const userInfo = { ...user };
          userInfo.errorMassage = error.message;
          userInfo.success = false;
          setUser(userInfo);
          console.log(error);
        });
    }
    e.preventDefault();
  };
  return (
    <div>
      {user.isSignIn ? (
        <button onClick={() => googleHandleSignOUt()}>Google Sign Out</button>
      ) : (
        <button onClick={() => googleHandle()}>Google Sign In</button>
      )}

      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
      {user.success ? (
        <h1 style={{ color: "green" }}>You Are Welcome</h1>
      ) : (
        <h1 style={{ color: "red" }}>{user.errorMassage}</h1>
      )}

      <img src={user.photoURL} alt="" />

      <div className="form-control-head">
        <input
          type="checkbox"
          name=""
          onChange={() => setCheck(!check)}
          id="toggle"
        />
        <label htmlFor="toggle">toggle</label>
        <form onSubmit={submitHandle}>
          {check && (
            <div className="form-group">
              <input
                type="text"
                name="name"
                onBlur={inputfield}
                placeholder="Name"
              />
            </div>
          )}

          <div className="form-group">
            <input
              type="email"
              name="email"
              onBlur={inputfield}
              placeholder="Eamil"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              onBlur={inputfield}
              placeholder="Eamil"
            />
          </div>
          <input type="submit" value="submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;
