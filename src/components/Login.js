import Header from "./Header"
import { useState, useRef } from "react"
import checkValidation from "../utils/validation.js"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from "../utils/firebase.js"
import { useDispatch } from "react-redux"
import { addUser } from "../utils/userSlice.js"
import { BG_URL, USER_LOGO } from "../utils/constant.js"

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)

    const dispatch = useDispatch()

    const fullName = useRef(null)
    const email = useRef(null)
    const password = useRef(null)

    const handleClickBtn = () => {
        const message = checkValidation(email.current.value, password.current.value)
        setErrorMessage(message)
        if (message !== null) return

        if (!isSignIn) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then(() => {
                    updateProfile(auth.currentUser, {
                        displayName: fullName.current.value, photoURL: USER_LOGO
                    }).then(() => {
                        const { displayName, email, uid, photoURL } = auth.currentUser;
                        dispatch(addUser({ displayName, email, uid, photoURL }))
                    }).catch((error) => {
                        setErrorMessage(error.code + " " + error.message)
                    });
                })
                .catch((error) => {
                    setErrorMessage(error.code + " " + error.message)
                });
        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then(() => { })
                .catch((error) => {
                    setErrorMessage(error.code + " " + error.message)
                });
        }
    }

    const toggleSignInForm = () => {
        setIsSignIn(!isSignIn)
    }

    return (
        <div>
            <Header />
            <div className="fixed">
                <img className="object-cover h-screen w-[100vw]" src={BG_URL} alt="background" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="absolute p-10 mx-3 max-w-sm my-24 sm:mx-auto right-0 left-0 bg-black text-white bg-opacity-70 rounded-lg">
                <h1 className="text-xl font-bold my-3">{isSignIn ? "Sign In" : "Sign Up"}</h1>
                {
                    !isSignIn && <input ref={fullName} type="text" placeholder="Full Name" className="p-3 my-3 w-full bg-gray-800 rounded-md" />
                }
                <input ref={email} type="text" placeholder="Email" className="p-3 my-3 w-full bg-gray-800 rounded-md" />
                <input ref={password} type="password" placeholder="Password" className="p-3 my-3 w-full bg-gray-800 rounded-md" />

                <p className="text-red-500 py-2">{errorMessage}</p>

                <button className="p-3 my-3 w-full bg-red-600 rounded-md" onClick={handleClickBtn}>{isSignIn ? "Sign In": "Sign Up"}</button>
                <p className="my-3 cursor-pointer" onClick={toggleSignInForm}>{isSignIn ? "New to Netflix ? Sign up now" : "Already registered ? Sign In.."}</p>
            </form>
        </div>
    )
}

export default Login