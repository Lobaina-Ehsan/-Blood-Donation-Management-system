import { useState } from "react";
import API from "../api";

function RequestBlood() {
  const [form, setForm] = useState({
    name: "",
    blood_group: "",
    location: "",
    contact: "",
  });

  const handleSubmit = async () => {
    try {
      const res = await API.post("/requests", form);
      alert(res.data.message);
    } catch {
      alert("Error submitting request");
    }
  };

  return (
    <div>
      <h2>Request Blood</h2>

      <input placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Blood Group" onChange={(e) => setForm({ ...form, blood_group: e.target.value })} />
      <input placeholder="Location" onChange={(e) => setForm({ ...form, location: e.target.value })} />
      <input placeholder="Contact" onChange={(e) => setForm({ ...form, contact: e.target.value })} />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default RequestBlood;