import './App.css';
import IsAttending from './isAttending.js';
import Guest from './guest.js';
import GuestForm from './Form.js';
import { useEffect, useState } from 'react';

export default function GuestList() {
  //set state for guestList array
  const [guestList, setGuestList] = useState([]);
  // set state for input fields
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const baseUrl = 'http://localhost:4000';
  const showAllGuest = 'showAllGuest';
  const [isAttending, setIsAttending] = useState();
  const showAttendingGuest = 'showAttendingGuest';
  const showNotAttendingGuest = 'showNotAttendingGuest';
  const [filter, setFilter] = useState(showAllGuest);

  //fetch guest list from server, runs once
  // useEffect(() => {
  //   const getList = async () => {
  //     const response = await fetch(`${baseUrl}/guests`);
  //     const allGuests = await response.json();
  //     console.log(allGuests.results);
  //     getList(allGuests.results);
  //   };
  //   getList();
  // }, []);

  async function fetchGuestList() {
    const response = await fetch(`${baseUrl}/guests`);
    const allGuests = await response.json();
    console.log(allGuests.results);
    setGuestList(allGuests);
  }
  async function createdGuest(first, last, attending) {
    const response = await fetch(`${baseUrl}/guests`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName: '', lastName: '' }),
    });
    const createdGuest = await response.json();
  }

  async function deleteGuest(id) {
    const response = await fetch(`${baseUrl}/guests/1`, { method: 'DELETE' });
    const deletedGuest = await response.json();
  }

  const deleteAllGuests = (guestList) => {
    for (let i = 0; i < guestList.length; i++) {
      deleteGuest(guestList[i].id);
    }
  };

  async function attending(id, isAttending) {
    const response = await fetch(`${baseUrl}/guests/1`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ attending: true }),
    });
    const updatedGuest = await response.json();
  }

  const toggleAttendance = (id) => {
    const guestToUpdate = guestList.find((guest) => {
      if (guest.id === id) {
      }
      return guest.id === id;
    });
    const modifiedGuest = {
      ...guestToUpdate,
      attending: !guestToUpdate.attending,
    };
    attending(id, modifiedGuest.attending);
  };

  // useEffect(() => {
  //   // correct way to update title on useEffect
  //   document.title = 'my List of Users';

  //   // common function declaration
  //   async function myFetch() {
  //     await fetchList();
  //   }
  //   myFetch().catch((err) => {
  //     console.log(err);
  //   });
  //   // this empty array means this code is going to run only at first render
  // }, []);
  // create new guest
  // useEffect(() => {
  // const response = await fetch(`${baseUrl}/guests`, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({ firstName: '', lastName: '' }),
  // });
  // const createdGuest = await response.json();
  //when Submit button is clicked:
  // const handleSubmit = (e: ) => {
  //   e.preventDefault();

  // if (guestList.length === 0) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <>
      <h1>Guest List</h1>
      <div>Guests: {guestList.length}</div>
      <div>
        Attending: {''}
        {guestList.filter((guest) => guest.attending === true).length}
      </div>

      <GuestForm createdGuest={createdGuest} />

      <div>Filter:</div>
      <button onClick={() => setFilter(showAttendingGuest)}>attending</button>
      <button onClick={() => setFilter(showNotAttendingGuest)}>
        not attending
      </button>
      <button onClick={() => setFilter(showAllGuest)}>Reset Filter</button>

      <GuestList
        guestList={guestList}
        toggleAttendance={toggleAttendance}
        deleteGuest={deleteGuest}
        firstName={firstName}
        lastName={lastName}
        filter={filter}
      />
      <button onClick={() => deleteAllGuests(guestList)}>
        Delete Guest List
      </button>

      {/* <User
          name={{ first: 'Antje', last: 'Enzi' }}
          email="antje@upleveled.io"
          picture="https://randomuser.me/api/portraits/thumb/men/83.jpg"
        /> */}
      {/* <IsAttending />

        {guestList.map((singleUser) => {
          return (
            <User
              key={'user' + singleUser.name + singleUser.email}
              name={singleUser.name}
              email={singleUser.email}
            />
          );
        })}   */}

      {/* <form>
        <div>
          <label for="firstName">First name</label>
          <input type="text" name="firstName" id="firstName" required></input>
        </div>
        <div>
          <label for="lastName">Last name </label>
          <input type="text" name="lastName" id="lastName" required></input>
        </div>
      </form> */}

      {/* <button onClick={() => getList}>Fethc list</button> */}
    </>
  );
}
