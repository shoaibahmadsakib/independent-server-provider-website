import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const CardDetails = () => {
    let { cardDetails } = useParams();

    const [details,setDetails]=useState([])

    useEffect(()=>{
        const url = 'Photo.json'
        fetch(url)
        .then(res=> res.json())
        .then(data=> setDetails(data))
    },[])
  return (
    <div>
     
    </div>
  )
}

export default CardDetails