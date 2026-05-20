import { useState } from "react";
import API from "../api";

function SearchDonor() {
  const [blood, setBlood] = useState("");
  const [location, setLocation] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const res = await API.get(`/donors/search?blood=${blood}&location=${location}`);
      setResults(res.data);
    } catch {
      alert("Error searching donors");
    }
  };

  return (
    <div>
      <h2>Search Donor</h2>

      <input placeholder="Blood Group" onChange={(e) => setBlood(e.target.value)} />
      <input placeholder="Location" onChange={(e) => setLocation(e.target.value)} />

      <button onClick={handleSearch}>Search</button>

      {results.map((d) => (
        <p key={d.id}>
          {d.name} - {d.blood_group} - {d.location}
        </p>
      ))}
    </div>
  );
}

export default SearchDonor;