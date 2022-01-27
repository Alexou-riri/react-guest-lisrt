import { useState } from 'react';

export default function IsAttenting() {
  // 1. set State variable that control the input
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      {/* {JSON.stringify(isChecked)} {typeof isChecked} */}
      {/* <div>
        Hello
        <button
          onClick={() => {
            // BIG NO NO PLEASE USE STATE (useState hook)
            // const div = document.querySelector('.myDiv');
            // div.innerText = Karl
          }}
        >
          click me
        </button>
      </div> */}
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.currentTarget.checked)}
        />
      </form>
    </div>
  );
}
