import ReactDOM from 'react-dom';

const user = {
  firstname:"john",
  lastname:"doe"
};

function getFullname(user) {
  return user.firstname + " " + user.lastname;
}


const element = <h1> hello {getFullname(user)} , welcome </h1>;





















ReactDOM.render(
  element,
  document.getElementById('root')
)
