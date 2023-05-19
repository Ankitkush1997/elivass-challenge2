import { useEffect, useState } from "react";

import CustomCard from "./components/card/card";

import "./App.css";
import Spinner from "./components/spinner/Spinner";

function App() {
  const [users, setUsers] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch user data.");
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      // Handle error state here
      console.error(error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {users.length > 0 ? (
            users.map((user) => <CustomCard key={user.id} user={user} />)
          ) : (
            <p>No users found.</p>
          )}
        </>
      )}
    </div>
  );
}

export default App;
