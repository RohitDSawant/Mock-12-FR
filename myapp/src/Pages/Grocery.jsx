import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Grocery = () => {

    const location = useLocation()
    const current_path= location.pathname.split('/')[2]
    // console.log(current_path);

    useEffect(()=>{

        axios.get(`https://mybasket.onrender.com/category/${current_path}?page=1&limit=10`)
        .then(res =>{
            console.log(res.data)
        })

    },[current_path])



  return (
    <div>
        
    </div>
  )
}

export default Grocery