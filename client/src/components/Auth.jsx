 import {GoogleAuthProvider, signInWithPopup,getAuth} from 'firebase/auth';
 import {app}  from '../firebase';
 import { useDispatch } from 'react-redux';
 import { signInSuccess } from '../redux/user/userSlice';
 import {useNavigate} from 'react-router-dom';
export default function Auth() {
    const dispatch = useDispatch();
    const navigator =useNavigate();
    const handleGoogleClick =async () => {
        try{
             const provider = new GoogleAuthProvider();
             const auth =getAuth(app);

             const result =await signInWithPopup(auth, provider);
            //  console.log(result);
            const res =await fetch('/api/auth/google',{
                method:'POST',
                headers:{
                    'Content-type': 'application/json',
                },
                body:JSON.stringify({
                    name:result.user.displayName,
                    email:result.user.email,
                    photo:result.user.photoURL,
                }),
            });
            const data =await res.json();
            dispatch(signInSuccess(data));
            navigator('/');
            // console.log(data);
        }
        catch(error){
            console.log("could not login with google" , error);
        }
    }
  return (
    <button type='button' onClick={handleGoogleClick} className='bg-red-700 text-white rounded-lg
    p-3 uppercase hover:opacity-95'>
        Continue with Google
    </button>
  )
}
