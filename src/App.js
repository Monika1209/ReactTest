import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Counter from './Components/Counter';
import { Test1 } from './Components/Test1';
import Timer from './Components/Timer';
import UserCard from './Components/UserCard';
import UserDetails from './Components/UserDetails';
import { useEffect, useState } from 'react';
import ContactForm from './Components/ContactForm';

function App() {
  const [Users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(response => {
        if (!response.ok) throw new Error("Failed to fetch users");
        return response.json();
      })
      .then(data => setUsers(data.users))
      .catch(error => setError("Error fetching users"));
  }, []);

  return (
    <>
      <Test1 />
      <br /> <hr />
      <Timer />
      <br /> <hr />
      <Counter />
      <br /> <hr />
      <ContactForm />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={
            <div className="container mt-3">
              <h1 className="mb-4 text-center">User List</h1>
              <div className="row">
                {error ? <div className="text-danger">{error}</div> :
                Users.length !== 0 ? Users.map((user) => (
                  <div key={user.id} className="col-md-4 mb-4">
                    <UserCard user={user} />
                  </div>
                )) : <div className='display-4'>User data is loading...</div>}
              </div>
            </div>
          } />
          <Route path="/user/:userId" element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
