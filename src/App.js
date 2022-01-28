import './App.css';
import IsAttending from './isAttending.js';
import User from './user.js';
import { useEffect, useState } from 'react';

function App() {
  //set state for guestList array
  const [list, setList] = useState([]);
  // set state for input fields
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const baseUrl = 'http;//localhost:4000';

  //fetch guest list from server, runs once
  useEffect(() => {
    const getList = async () => {
      const response = await fetch(`${baseUrl}/guests`);
      const allGuests = await response.json();
      console.log(allGuests.results);
      setList(allGuests.results);
    };

    getList();
  }, []);
  // create new guest
  useEffect(() => {
    const response = await fetch(`${baseUrl}/guests`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName: '', lastName: '' }),
    });
    const createdGuest = await response.json();
  });

  //when Submit button is clicked:
  // const handleSubmit = (e: ) => {
  //   e.preventDefault();

  if (userList.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <body>
        <User
          name={{ first: 'Antje', last: 'Enzi' }}
          email="antje@upleveled.io"
          picture="https://randomuser.me/api/portraits/thumb/men/83.jpg"
        />
        <IsAttending />

        <form>
          <div>
            <label for="firstName">First name</label>
            <input type="text" name="firstName" id="firstName" required></input>
          </div>
          <div>
            <label for="lastName">Last name </label>
            <input type="text" name="lastName" id="lastName" required></input>
          </div>
        </form>
      </body>
    </>
  );
}

export default App;
