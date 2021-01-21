import ReactDOM from "react-dom";

const user = {
  firstname: "john",
  lastname: "doe"
};

function getFullname(user) {
  return user.firstname + " " + user.lastname;
}

const element = <h1> hello {getFullname(user)} , welcome </h1>;


//boş etiket tanımlama jsx e ait bir özellik değildir html e aittir örneğin <br/> etiketi

// aynı şekilde attribute ekleyebiliriz.

const jsxElement = <h1 style={{color:"blue", textAlign:"center"}} />
// bu stilleri inspect ederek görüntüleyebiliriz.




ReactDOM.render(jsxElement, document.getElementById("root"));

























































//
