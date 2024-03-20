import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function NavHook() {
    const token = localStorage.getItem("token")
    const navigate = useNavigate();
    useEffect(() => {
        if (token) {
            navigate("/")
        }else{
            navigate("")
        }
    },[token])
}
