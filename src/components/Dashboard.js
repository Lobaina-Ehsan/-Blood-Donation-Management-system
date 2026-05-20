import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>

      <p><Link to="/register">Register Donor</Link></p>
      <p><Link to="/search">Search Donor</Link></p>
      <p><Link to="/request">Request Blood</Link></p>
    </div>
  );
}

export default Dashboard;