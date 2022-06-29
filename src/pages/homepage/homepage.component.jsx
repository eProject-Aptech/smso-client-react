import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const Homepage = () => {
    const [state, setState] = useState([]);

    // const options = {
    //     method: "GET",
    //     url: "https://reqres.in/api/users",
    //     params: {
    //         region_province: selectedProvince,
    //         iso: "IND",
    //         date: "2022-04-01",
    //     },
    //     headers: {
    //         "X-RapidAPI-Host": "covid-19-statistics.p.rapidapi.com",
    //         "X-RapidAPI-Key": "fbdff7e1bdmsh0d25a8cd1b29338p1ee46bjsn8d137e63eddc",
    //     }
    // }
    const getFunction = () => {
        axios.get('https://reqres.in/api/users').then((response) => {
            setState(response.data)
        })
    }
    useEffect(() => {
        getFunction();
    },[])
    return (
        <div>
            <h1>{state.map(item,index) => (
                <h2>item.email</h2>
            )
        </h1>
        </div>
    )
}

export default Homepage