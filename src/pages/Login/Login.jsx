import './Login.css';
import Logo from '../../assets/logo.png';
import {   useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const navigate = useNavigate();

    const [signUp, setSignUp] = useState('SignUp');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    async function signup(username, email, password) {

        const response = await fetch('http://127.0.0.1:5000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        console.log(data);
       
    }

    async function login(username, password) {
        const response = await fetch('http://127.0.0.1:5000/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();
        if (data.token) {
            localStorage.setItem('token', data.token); 
            navigate('/'); 
        }
    }

   
    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (signUp === 'SignUp') {
            signup(username, email, password);
        } else {
            login(username, password);
        }
    };

    return (
        <div className='Wrapper'>
      
            <img src={Logo} alt="Logo" />
            <div className="Login">
                <h2>{signUp}</h2>
                <form onSubmit={handleSubmit}>
                    {signUp === 'SignUp' && (
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
                    <button type='submit'>{signUp}</button>
                    <div className="checkBox">
                        <input type="checkbox" />
                        <label>Remember me</label>
                    </div>
                    {signUp === 'SignIn' ? (
                        <p>New to Netflix? <span onClick={() => setSignUp('SignUp')}>SignUp</span></p>
                    ) : (
                        <p>Already have an account? <span onClick={() => setSignUp('SignIn')}>SignIn</span></p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Login;
