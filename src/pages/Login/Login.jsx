import "./Login.css";
import Logo from "../../assets/logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBKYy4smEJAMrifOm1fZzj_UZBQsxDjCuQ",
  authDomain: "netflixapp-f71e2.firebaseapp.com",
  projectId: "netflixapp-f71e2",
  storageBucket: "netflixapp-f71e2.appspot.com",
  messagingSenderId: "363142530098",
  appId: "1:363142530098:web:aa542a9add2dd58818282b",
  measurementId: "G-7MPFXQ40EZ",
};

 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);

const Login = () => {
  const [authAction, setAuthAction] = useState("SignUp");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleSignUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/");
        console.log("User signed up:", userCredential.user);
       
      })
      .catch((error) => {
        console.error("Error signing up:", error);
      });
  };

  const handleSignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User signed in:", userCredential.user);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing in:", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (authAction === "SignUp") {
      handleSignUp(email, password);
    } else {
      handleSignIn(email, password);
    }
  };
  return (
    <div className='Wrapper'>
        <img src={Logo} alt="Logo" />
        <div className="Login">
            <h2>{authAction}</h2>
            <form onSubmit={handleSubmit}>
                {authAction === 'SignUp' && (
                    <input
                        type="text"
                        placeholder='Enter Your Name'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                )}
                <input
                    type="email"
                    placeholder='Enter Your Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder='Enter Your Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit'>{authAction}</button>
                <div className="checkBox">
                    <input type="checkbox" />
                    <label>Remember me</label>
                </div>
                {authAction === 'SignIn' ? (
                    <p>New to Netflix? <span onClick={() => setAuthAction('SignUp')}>SignUp</span></p>
                ) : (
                    <p>Already have an account? <span onClick={() => setAuthAction('SignIn')}>SignIn</span></p>
                )}
            </form>
        </div>
    </div>
);
};

export {Login,auth};
