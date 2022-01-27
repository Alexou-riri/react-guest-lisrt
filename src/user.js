import PropTypes from 'prop-types';

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

export default function User(props) {
  return (
    <>
      <li>
        Name: {props.name.first} {props.name.last}
      </li>
      <li>email: {props.email}</li>
      <li>picture URL: {props.picture}</li>
    </>
  );
}

User.propTypes = {
  email: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  // this is to declared an object as a prop
  name: PropTypes.shape({
    // this is an optional property
    title: PropTypes.string,
    // this is an required property
    first: PropTypes.string.isRequired,
    last: PropTypes.string.isRequired,
  }),
};
