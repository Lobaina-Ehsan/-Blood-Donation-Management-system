import { useState } from "react";
import API from "../api";

function RegisterDonor() {
  const [form, setForm] = useState({
    name: "",
    blood_group: "",
    location: "",
    phone: "",
  });

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");

    try {
      const res = await API.post("/donors/register", form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert(res.data.message);
    } catch (err) {
      alert("Error registering donor");
    }
  };

  return (
    <div>
      <h2>Register Donor</h2>

      <input placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />

      <select onChange={(e) => setForm({ ...form, blood_group: e.target.value })}>
        <option value="">Select Blood Group</option>
        <option>A+</option>
        <option>B+</option>
        <option>O+</option>
        <option>AB+</option>
        <option>A-</option>
        <option>B-</option>
        <option>O-</option>
        <option>AB-</option>
      </select>

      <input placeholder="Location" onChange={(e) => setForm({ ...form, location: e.target.value })} />

      <input placeholder="Phone" onChange={(e) => setForm({ ...form, phone: e.target.value })} />

      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default RegisterDonor;