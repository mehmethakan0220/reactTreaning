import ReactDOM from "react-dom";
import React from 'react';
/*
JSX, JavaScript Nesnelerini Temsil Eder
Babel derleyicisi, JSX kodlarını React.createElement() çağrılarına dönüştürür.

Bu nedenle aşağıdaki iki kod örneği de aynı işlemi gerçekleştirir:
*/
// normal element oluşturma
const element = <h1 className="greeting">Hoşgeldin! </h1>;

//javascript createElement ile element oluşturma.
const jsElementTanimlama = React.createElement(
  'h1',
  {className: 'greeting'},
  'hojgeldin'
);

ReactDOM.render(jsElementTanimlama, document.getElementById("root"));

//
