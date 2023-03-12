import React, { useState,useEffect } from 'react'

const Fetch = () => {

    const [ dogData,setData] = useState([])

    const fetchData = async () => {
        let url = "https://dog.ceo/api/breeds/image/random"
        try{
            let res = await fetch(url)
            let data = await res.json()
            setData(data)
        }
        catch(error){
            console.log("something went wrong",error)
        }
    }


    useEffect(() => {
        fetchData()
    },[])



  return (
    <div className='Fetch'>
        <button className='btn' onClick={fetchData}>fetch</button>
        <div className="result">
            <img src={dogData.message} alt="dog image" />
        </div>
    </div>
    
  )
}

export default Fetch;