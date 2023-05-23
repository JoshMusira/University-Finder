import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [records, setRecords] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://universitiesapi.onrender.com/v1/api/universities/${searchQuery}`
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
  const handleReset = () => {
    setSearchQuery("");
    searchInputRef.current.value = "";
    searchInputRef.current.focus();
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
          <button onClick={handleReset}  type="reset">Reset</button>
          <nav>Total Universities : <b> {records.length}</b></nav>
        </div>
      </div>

      <div className="container">
        {records.map((item, index) => (
          <div key={index} className="contain">
            <p><tag>Name:</tag> {item.name}</p>
            <p><tag>Web Page:</tag> {item.web_pages}</p>
            <p><tag>Country:</tag> {item.country}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default FetchData;
