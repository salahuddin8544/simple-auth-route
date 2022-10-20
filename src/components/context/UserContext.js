import React,{createContext,useState,useEffect} from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../../firebase/firebase.config';
export const AuthContext = createContext();

const auth = getAuth(app)
const UserContext = ({children}) => {
    const [user,setuser]= useState(null)
    const [loading,setLoading] = useState(true)
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth);
    }
    useEffect(()=>{
     const unsubscrive =   onAuthStateChanged(auth,currentUser =>{
            console.log('current User', currentUser);
            setuser(currentUser);
            setLoading(false)
        })
        return ()=> unsubscrive();
    },[])
    const authInfo = {user,createUser,signIn,signOut,logOut,loading}
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default UserContext;