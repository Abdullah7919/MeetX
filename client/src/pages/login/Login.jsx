import { Link, Navigate, useNavigate } from 'react-router-dom'
import './login.scss'
import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'
import { useState } from 'react'

const Login = () => {

  const [inputs, setInputs] = useState({
    username: "",
    password: ""
  });

  const [err, setErr] = useState(null);

  const navigate=useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  
  const {login}=useContext(AuthContext);

  const loginHandler=async(e)=>{
      e.preventDefault();
      try{
        await login(inputs);
        navigate("/");
      }catch(err){
        setErr(err.response.data);
      }
  }
  return (
    <div className='login'>
      <div className="card">
        <div className="left">
            <h1>Hello World.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quod officiis maiores porro ex ducimus, nemo iste culpa. 
            </p>
            <span>Don't you have an account?</span>
            <Link to='/register'>
            <button>Register</button>
            </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type='text' placeholder='Username' name='username' onChange={handleChange}/>
            <input type='password' placeholder='Password' name='password' onChange={handleChange}/>
            {err && err}
            <button onClick={loginHandler}>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login