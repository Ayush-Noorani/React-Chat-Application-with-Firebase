import {React , useState} from 'react';
import { auth , storage , db } from '../firebase'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';

const Register = () => {

  const [err, setErr] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const resp = await createUserWithEmailAndPassword(auth, email, password) //this saves the email and password in firestore
      const storageRef = ref(storage, displayName)
      const uploadTask = uploadBytesResumable(storageRef, file).catch(err => console.log(err));

      uploadTask.on(
        (error) => {
          setErr(true)
        },
        () => {
          // this stores the name and photo
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) =>{
            await updateProfile(resp.user, {displayName, photoURL:downloadURL})

            //this stores the users information in a folder inside firestore storage

            const userRef = doc(db, 'users', resp.user.uid);
            await setDoc(userRef)
            // db.collection('users').add({
            //   uid : resp.user.uid,
            //   displayName: resp.user.displayName,
            //    email: resp.user.email,
            //    photoURL: downloadURL
            // })
            // await setDoc(doc(db, "/users", resp.user.uid), {
            //   displayName: resp.user.displayName,
            //   email: resp.user.email,
            //   photoURL: downloadURL
            // });
          });
        }
      );
    }
    catch (error) {
      setErr(true)
    }
  }
  
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Ayush Chat</span>
            <span className='title'>Register</span>
            <form onSubmit={handleSubmit}>
                <input type='text' className='formInput' placeholder='Display Name'></input>
                <input type='email' className='formInput' placeholder='Email'></input>
                <input type='password' className='formInput' placeholder='Password'></input>
                <input style={{display : "none"}} type='file' className='formInput' placeholder='' id='file'></input>
                <label htmlFor='file'>
                  <img src="" alt="" ></img>
                  <span>Add an Avatar</span>
                </label>
                <button>Sign Up</button>
                {err && <span>There was an error during login</span>}
            </form>
            <p>You have an account? Login </p>
        </div>
    </div>
  )
}


export default Register