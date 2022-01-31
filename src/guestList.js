import React from 'react';
import Guest from './Guest';

export default function guestList({
  firstName,
  lastName,
  toggleAttendance,
  guestList,
  deleteGuest,
  filter,
}) {
  let filteredGuestList = guestList;
  // depending on state of the filter, set the array to map over for e render
  if (filter === 'showAttending') {
    filteredGuestList = guestList.filter((guest) => guest.attending === true);
  } else if (filter === 'showNotAttending') {
    filteredGuestList = guestList.filter((guest) => guest.attending === false);
  }

  return (
    <div>
      <ul>
        {filteredGuestList.map((guest) => (
          <li key={guest.id}>
            <button
              onClick={() => {
                deleteGuest(guest.id);
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                toggleAttendance(guest.id);
              }}
            >
              {guest.attending ? 'Cancel' : 'Confirm'}
            </button>

            <Guest guest={guest} firstName={firstName} lastName={lastName} />
          </li>
        ))}
      </ul>
    </div>
  );
}
