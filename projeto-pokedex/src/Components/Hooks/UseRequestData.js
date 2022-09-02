import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function UseRequestData(url) {

    const [data, setData] = useState(undefined)
    const [erro, setErro] = useState(undefined)

    useEffect(()=>{
        axios.get(url)
            .then(response=>{
                setData(response.data)
            })
            .catch(error=>{
                setErro(error)
            })
    },[])


    return [data, erro] 
}