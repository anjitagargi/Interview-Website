import React from 'react'
import "./Navbar.css"
import meet from './../assets/meeting.png'
import {useState} from'react';
import {FcGoogle} from 'react-icons/fc'
import {AiFillFacebook} from 'react-icons/ai'
import { RiCloseLine} from 'react-icons/ri';
import { getAuth,  GoogleAuthProvider } from "firebase/auth";
import { signInWithEmailAndPassword ,signOut, signInWithPopup} from "firebase/auth"
import { auth } from './../Firebase/Firebase';

const Navbar = () => {
  const logo="Logout"
  const logi="Login"

  const[modal, setmodal]=useState(false);
  const[sign, setsign]=useState(false)
  const[email, setemail]=useState("")
  const[pass, setpass]=useState('')

  //const auth = getAuth();
  //auth.languageCode = 'it';
  
  const toggle=() => {
    //alert(`Inside toggle ${modal}`)
    setmodal(!modal)
  }

  const logout=() => {
    const auth = getAuth();
    signOut(auth).then(() => {
      alert("Signed Out")
      //setusername("")
      setsign(false)
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
  const sets=() => {
    setsign(false)
  }

  
  const handleScroll=() => {
    setmodal(false);
  }

  const handleGoogle=() => {
    const provider = new GoogleAuthProvider();
    //const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setmodal(false)
        setsign(true)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  const handleSubmit=(e) => {

    //const auth = getAuth();
    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert("suc")
        setmodal(false)
        setsign(true)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
      });
      setsign(true)
  }

  const handleface =(e) => {
    e.preventDefault()
  }

  window.addEventListener('scroll', handleScroll);


  return (
    <div>

      <div className="navbar">
        <div className="navbar_left">
          <div className="navbar_img">
            <img src={meet} alt="" height={45} width={45}/>
          </div>
          <div className="navbar_title">
            <h4>Interview Target</h4>
          </div>
        </div>
        <div className="navbar_right">
          <div className="nav_list">
            <ul className="list_item">
              <li><a href="/">Home</a></li>
              <li><a href="/">About</a></li>
              <li><a href="/">Services</a></li>
              <li><a href="/">How it Works</a></li>
            </ul>
          </div>

          <div className="navbar_login"> 
            <div className="nav_login">
              <button onClick={sign ? logout : toggle }>{sign ? logo : logi}</button>
            </div> 
            <div className="nav_start">
              <button><a href="/">Get Started</a></button>
            </div>
          </div>

        </div>
      </div>



      {modal ? 
        <div className='login-form' id='login-form' onScroll={() => {
          setmodal(false)
        }}>
          <div className='overlay'></div>
            <form  onSubmit={handleSubmit} >

              <div className='topsign'><button onClick={toggle} ><RiCloseLine/></button></div>
              <h3>Log in</h3>  
  
              <input type='email'
              className='box-in'
              value={email}
              placeholder='Userid'
              onChange={(e) => setemail(e.target.value)}/>
              <input type="password"
              placeholder="password"
              className='box-in'
              value={pass}
              onChange={(e) => setpass(e.target.value)}/>
              <p>forgot password<a href="#">click here</a></p>
              <p>don't have an account?<a href="#">register now</a></p>
              <input type='submit' 
              className='btn-login'
              />
              <FcGoogle className='ggl' onClick={handleGoogle} />
              <AiFillFacebook className='face' onClick={handleface} />
        
              
            </form>
          </div>  
        
        :""}
    


      



    </div>
  )
}

export default Navbar