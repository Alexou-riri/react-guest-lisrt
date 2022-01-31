import React, { useState } from 'react';

function GuestForm(props) {
  const [newGuestFirstName, setNewGuestFirstName] = useState('');
  const [newGuestLastName, setNewGuestLastName] = useState('');

  return (
    <div>
      <form
        onSubmit={(e) => {
          props.postGuest(newGuestFirstName, newGuestLastName);
          e.preventDefault();
          setNewGuestFirstName('');
          setNewGuestLastName('');
        }}
      >
        <input
          required
          placeholder=""
          value={newGuestFirstName}
          onChange={(e) => setNewGuestFirstName(e.currentTarget.value)}
        />
        <input
          required
          placeholder=""
          value={newGuestLastName}
          onChange={(e) => setNewGuestLastName(e.currentTarget.value)}
        />
        <input type="submit" value="Invite Guest" />
      </form>
    </div>
  );
}
export default GuestForm;
