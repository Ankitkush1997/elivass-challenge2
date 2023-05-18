import { useEffect, useState } from "react";

import CustomCard from "./components/card/card";

import "./App.css";
import Spinner from "./components/spinner/Spinner";

function App() {
  const [users, setUsers] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const fetchUsers = async () => {
    setIsLoading(true);
    const res = await fetch("https://jsonplaceholder.typicode.com/users").then(
      (data) => data.json()
    );
    setUsers(res);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="App">
      {!isLoading && users.length ? (
        <>
          {users.map((user) => (
            <CustomCard key={user.id} user={user} />
          ))}
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default App;
