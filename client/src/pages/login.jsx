import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';
function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if(localStorage.getItem('user-info')){
            navigate('/home');
        }
    }, [navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();
        
        try{
            const res = await axios.post("http://localhost:3000/user/login", {
                username,
                password,
            });

            localStorage.setItem("user-info", JSON.stringify(res.data.user));
            localStorage.setItem('token', res.data.token)

                alert("Login sukses!");
                navigate("/home");
        } catch (err){
            alert(err.response?.data?.message || "Login gagal");
        }
    };



  return (
    <form 
    onSubmit={handleLogin} className='bg-cyan-50 px-15 py-10 rounded-3xl border-2 border-cyan-100 shadow-xl' >
        <h1 className='text-3xl font-bold text-center' >Welcome Back!</h1>
        <p className='font-medium text-lg text-gray-500 mt-4 text-center' >Please enter your identity.</p>
        <div className='mt-8' >
            <div>
                <label className='text-lg font-medium' >Username</label>
                <input
                    className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-white'
                    placeholder='Enter your username'
                    value={username}
                    type='text' 
                    onChange = {(e)=>setUsername(e.target.value)}
                />
            </div>
            <div>
                <label className='text-lg font-medium' >Password</label>
                <input
                    className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1  bg-white'
                    placeholder='Enter your password'
                    type ='password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
            </div>
            <div className='mt-6 flex justify-between items-center' >
                <div>
                    <input
                        type='checkbox'
                        id='remember'
                    />
                    <label  className='ml-2  font-medium text-base' for='remember'>Remember me!</label>
                </div>
                
            </div>
            <div className='mt-6 flex flex-col' > 
                <button 
                    type='submit'
                    className=' active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-sky-500 text-white text-lg font-bold  ' >Sign In</button>
                <button className=' mt-3 font-medium text-base text-sky-500' > Forgot Password</button>
            </div>
            <div className='mt-5 flex gap-4 justify-center items-center' >
                <label  className='ml-2  font-medium text-base' for='remember'>Don't have an account?</label>
                <Link to="/"className='font-medium text-base text-sky-500' > Sign Up</Link>
            </div>
        </div>
    </form>
  )
}

export default Login
