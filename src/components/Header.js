import { useDispatch, useSelector } from "react-redux"
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL, SUPPORTED_LANGUAGE } from "../utils/constant"
import { toggleShowGeminiContent } from "../utils/geminiSlice"
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector((store) => store.user)
    const showGeminiContent = useSelector((store) => store.gemini.showGeminiSearch)

    const [setErrorMessage] = useState(null)

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/")
        }).catch((error) => {
            setErrorMessage(error.code + " " + error.message)
        });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, displayName, email, photoURL } = user;
                dispatch(addUser({ uid, displayName, email, photoURL }))
                navigate("/browse")
            } else {
                dispatch(removeUser())
                navigate("/")
            }
        });
    }, [])

    const handleGeminiSearchClick = () => {
        dispatch(toggleShowGeminiContent())
    }

    const handleChangeLang = (e) => {
        dispatch(changeLanguage(e.target.value))
    }

    return (
        <div className="absolute px-6 py-2 bg-gradient-to-b from-black w-full z-20 flex flex-col md:flex-row justify-between items-center">
            <div>
                <img className="w-36 md:w-44" src={LOGO_URL} alt="logo" />
            </div>
            {
                user && (
                    <div className="flex">
                        {
                            showGeminiContent &&
                            <select className="text-white text-sm py-2 md:py-0 bg-gray-800 font-bold px-3 my-1 md:my-3 rounded-lg" onChange={handleChangeLang}>
                                {
                                    SUPPORTED_LANGUAGE.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)
                                }
                            </select>
                        }
                        <button className="text-white text-sm py-2 md:py-0 bg-purple-800 font-bold px-3 my-1 md:my-3 mx-1 md:mx-2 rounded-lg" onClick={handleGeminiSearchClick}>
                            {showGeminiContent ? "HomePage" : "Gemini Search"}
                        </button>
                        <div className="bg-white p-1 mx-2 rounded-full hidden md:inline-block"><img className="w-14 h-14 object-contain rounded-full" src={user?.photoURL} alt="user" /></div>
                        <button className="text-white font-bold ps-1" onClick={handleSignOut}>Sign Out</button>
                    </div>
                )
            }
        </div>
    )
}

export default Header;