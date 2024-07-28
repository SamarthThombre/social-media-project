import React from 'react'
import { useDispatch } from 'react-redux'
import authService from "../../appwrite/auth"
import { logout } from '../../store/authSlice'

function LogoutBtn() {

    const dispatch = useDispatch()

    const logoutHendeler = () =>{
        authService.logOut().then (()=> {
            dispatch(logout()); 
        })
    }
  return (
    <button 
    className='inline-block px-6 py-2 duration-200 hover:bg-bluue-100 rounded-full'
    onClick={logoutHendeler}>
        Logout
    </button>
  )
}

export default LogoutBtn