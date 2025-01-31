import { useEffect, useState } from "react";
import { supabase } from "./utils/supabaseClient";

interface AuthUserType {
  id: string,
  email?: string;
  created_at: string;
}

function App() {
  const [users, setUsers] = useState<AuthUserType[]>([]);
  const [status, setStatus] = useState("Initializing");

  useEffect(() => {
    const fetchUsers = async () => {
      setStatus("Fetching from supabase auth...");

      const { data, error } = await supabase.auth.admin.listUsers();
      if (error) {
        console.error("Error fetching auth users", error);
        setStatus("❌ Error fetching users. check console ")
      } else {
        setUsers(data.users || []);
        setStatus("✅ Supabase is connected! Found ${data.users.length} users.")
      }
    }
    fetchUsers();
  }, []);
  return (
    <div>
      <h1>Supabase Auth Users</h1>
      <p>{status}</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>Email:</strong> {user.email} | <strong>Created At:</strong>{" "}
            {new Date(user.created_at).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
