import './Login.css';
import Logo from '../../assets/logo.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [signUp, setSignUp] = useState('SignUp');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); 

    async function signup(username, email, password) {
        try {
            const response = await fetch('http://127.0.0.1:3000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }), 
            });

            const data = await response.json();

            if (response.ok) {
                console.log('User signed up successfully:', data.message);
                navigate('/'); 
            } else {
                console.error('Error signing up:', data.message);
            }
        } catch (error) {
            console.error('Network error during signup:', error);
        }
    }

   
    async function login(username, password) {
        try {
            const response = await fetch('http://127.0.0.1:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok && data.token) {
                localStorage.setItem('token', data.token); 
                console.log('Login successful. Token stored.');
                navigate('/');
            } else {
                console.error('Login failed:', data.message);
            }
        } catch (error) {
            console.error('Network error during login:', error);
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
                    {signUp === 'SignUp' && (
                        <input
                            type="email"
                            placeholder='Enter Your Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    )}
                    {signUp === 'SignIn' && (
                        <input
                            type="text"
                            placeholder='Enter Your Username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    )}
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
