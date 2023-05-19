import { useEffect, useState } from "react";




const FetchData = () =>{
    const [records, setRecords] = useState([])

    useEffect(() =>{
        fetch("http://universities.hipolabs.com/search?country")
        .then(res => {
            return res.json();
        })
        .then(data  => setRecords(data))
        .catch(err => console.log(err))
    },[])

    return (
        <main>
            <div className="header">
                    <span>SEARCH PANEL</span>
                    <div className="subHeader">
                        <input type="text" placeholder="Type any country..." />
                        <button>Search...</button>
                    </div>
            </div>
            
                <div className="container">
                    {records.map((item,index) =>(
                        <div key = {index} className="contain"><p >Name:{item.name} </p> <p>web_page:{item.web_pages}</p> <p>country: {item.country}</p></div>
                    ))}
            </div>

        </main>
    )    
};

export default FetchData;
