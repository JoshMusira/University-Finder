import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [records, setRecords] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://universities.hipolabs.com/search?country=${searchQuery}`
        );
        const data = await response.json();
        setRecords(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [searchQuery]);

  const handleSearch = () => {
    const input = document.getElementById("searchInput");
    setSearchQuery(input.value);
  };

  return (
    <main>
      <div className="header">
        <span>Current Universities</span>
        <div className="subHeader">
          <input
            id="searchInput"
            type="text"
            placeholder="Type any country..."
          />
          <button onClick={handleSearch}>Search...</button>
          <nav>Total Universities : <b> {records.length}</b></nav>
        </div>
      </div>

      <div className="container">
        {records.map((item, index) => (
          <div key={index} className="contain">
            <p>Name: {item.name}</p>
            <p>Web Page: {item.web_pages}</p>
            <p>Country: {item.country}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default FetchData;
