import React, { useEffect, useState } from 'react'
import Card from './Card'
import '../App.css'

export default function Main() {

    const API_Url = "https://jsonplaceholder.typicode.com/users"
    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState([]);
    const [InputValue, setInputValue] = useState("")
    const [error, setError] = useState("")

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(API_Url);
                const json = await res.json();
                setData(json);
            } catch (err) {
                console.error("Error fetching users:", err.message);
                setError("Error while fetching users...")
            }
        };
        fetchData()
        filterData(InputValue)
    }, [data])
    
    function filterData(input) {
        if (!input) {
            setError("")
            setFilteredData(data)
        }
        else {
            let searchedData;
            searchedData = data.filter(obj => obj.name.toLowerCase().includes(input.toLowerCase()))
            if (!searchedData.length) {
                setFilteredData([])
                setError("Oops not found")
            }
            else {
                setError("");
                setFilteredData(searchedData)
            }
        }
    }

    useEffect(() => {
        setError("")
        filterData(InputValue)
    }, [InputValue])

    return (
        <div id="main">

            <div id="search-area" >
                <label for="search-box">Search Monster</label>
                <input value={InputValue} onChange={(e) => setInputValue(e.target.value)} type="text" placeholder="Monster" id="search-box" className='border-none bg-white border-black' />
            </div>

            <div id="cards-container">
                {error ? <p id="err">{error}</p> : null}
                {filteredData.length ? filteredData.map((obj) => {
                    return <Card key={obj.id} obj={obj} />
                }) : null}
            </div>

        </div>
    )
}