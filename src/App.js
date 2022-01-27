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

  //fetch guest list from server, runs once
  useEffect(() => {
    const getList = async () => {
      const response = await fetch();
      // ,
      const data = await response.json();
      setList(data);
    };

    getList();
  }, []);

  //when Submit button is clicked:
  // const handleSubmit = (e: ) => {
  //   e.preventDefault();

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
          <input></input>
          <input></input>
        </form>
      </body>
    </>
  );
}

export default App;
