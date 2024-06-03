import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Auth from '../components/Auth';

export default function SignUp() {

  const [formData, setFromData] = useState({});
  const [error, setError] =useState(false);
  const [loading ,setLoading]= useState(false);
  const navigate=useNavigate();
  const handleChange = (e) => {
    setFromData({...formData, [e.target.id]: e.target.value});
  }
  // console.log(formData);

  const handleSubmit =async (e) => {
    e.preventDefault();

    try{
      setLoading(true);
      setError(false);
      const res =await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type':'application/json',
        },
        body:JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);
      if(data.success === false){
        setError(true);
        return;
      }
      navigate('/sign-in');
      console.log(data); {message: 'user is created sussesfuly'}
    }
    catch(error) {
       setLoading(flase);
       setError(true);
    };
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7 '>
        Sign Up
       </h1>
       <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
         <input  type="text" placeholder='Username' 
           id='username' onChange={handleChange} 
         className='bg-slate-100 p-3 rounded-lg' />

         <input  type="email" placeholder='Email' 
           id='email' onChange={handleChange} 
         className='bg-slate-100 p-3 rounded-lg' />

         <input  type="password" placeholder='Password' 
           id='password' onChange={handleChange}  
         className='bg-slate-100 p-3 rounded-lg' />

         <button disabled ={loading} className='bg-slate-700 text-whit p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          {loading ? 'Loading...' : 'Sign Up'}
         </button>
         <Auth/>
       </form>

       <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
         <Link to='/sign-in'>
          <span className='text-blue-500'>Sign in </span>
         </Link>
       </div>
       <p className='text-red-700 mt-5'>{error && 'Something went wrong!'}</p>
    </div>
  )
}
