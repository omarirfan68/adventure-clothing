import {createContext,useState,useEffect} from "react";
import { onAuthlistener ,createuserwithdocument} from "./firebase";

export const Usercontext =createContext({
    currentUser:null,
    setcurrentUser:()=> null

})
export const UserProvider = ({children})=>{
    const [currentUser,setcurrentUser]= useState(null)
    const value={currentUser,setcurrentUser}

    useEffect(()=>{
        const unsubscribe= onAuthlistener((user)=>{
            if (user) {
                createuserwithdocument(user);
            }
            setcurrentUser(user)

            console.log(user)
        })
        return unsubscribe
    },[])
    return (
        <Usercontext.Provider value={value}>{children}</Usercontext.Provider>
    )
}