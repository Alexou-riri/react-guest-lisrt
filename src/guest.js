import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';

export default function Guest(guest) {
  const inputFirstName = useRef(guest.firstName);
  const inputLastName = useRef(guest.LastName);
  const [isEditable, setIsEditable] = useState(false);
  const changeIsEditable = () => {
    setIsEditable(!isEditable);
  };

  return (
    <>
      <input
        defaultValue={guest.firstName}
        ref={inputFirstName}
        placeholder={guest.firstName}
      />
      <input
        defaultValue={guest.lastName}
        ref={inputLastName}
        placeholder={guest.lastName}
      />
      <button
        onClick={() => {
          changeIsEditable();
        }}
      >
        Cancel
      </button>
      <button
        onClick={() => {
          console.log(inputFirstName.current.value);
          console.log(inputLastName.current.value);
          // updateFirstName(guest.id, inputFirstName.current.value);
          // updateLastName(guest.id, inputLastName.current.value);
          changeIsEditable();
        }}
      >
        Save
      </button>

      <span
        className={`guest ${guest.attending ? 'attending' : 'notAttending'}`}
      >{`${guest.firstName} `}</span>
      <span
        className={`guest ${guest.attending ? 'attending' : 'notAttending'}`}
      >
        {guest.lastName}
      </span>
    </>
  );
}
// {
//   "gender": "male",
//   "name": {
//     "title": "Mr",
//     "first": "Haydar",
//     "last": "Oosterling"
//   },
//   "email": "haydar.oosterling@example.com",
//   "picture": "https://randomuser.me/api/portraits/thumb/men/83.jpg"
// }

// const Guest = {
//   id: string,
//   firstName: string,
//   lastName: string,
//   attending: boolean,
// };

// const guestList: Guest[] = [];

// export default function UserList(props) {
//   //set state for guestList array
//   const [list, setList] = useState([]);
//   // set state for input fields
//   const [firstName, setfirstName] = useState('');
//   const [lastName, setlastName] = useState('');
//   const baseUrl = 'http;//localhost:4000';

//   //fetch guest list from server, runs once
//   useEffect(() => {
//     const getList = async () => {
//       const response = await fetch(`${baseUrl}/guests`);
//       const allGuests = await response.json();
//       console.log(allGuests.results);
//       setList(allGuests.results);
//     };

//     getList();
//   }, []);

//   return (
//     <>
//       <li>
//         Name: {props.name.first} {props.name.last}
//       </li>
//       <li>email: {props.email}</li>
//       <li>picture URL: {props.picture}</li>
//     </>
//   );
// }

// UserList.propTypes = {
//   email: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   // this is to declared an object as a prop
//   name: PropTypes.shape({
//     // this is an optional property
//     title: PropTypes.string,
//     // this is an required property
//     first: PropTypes.string.isRequired,
//     last: PropTypes.string.isRequired,
//   }),
// }
