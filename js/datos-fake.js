
//para verlos en la consola

'use strict'
/*
var   usuarios = [];

fetch('https://reqres.in/api/users')
  .then(data => data.json())
  .then(data => {
         usuarios = data;
         console.log(usuarios);

});
*/



//para ver los datos solamente** en la consola

/*
'use strict'

var   usuarios = [];

fetch('https://reqres.in/api/users')
  .then(data => data.json())
  .then(users => {
         usuarios = users.data;
         console.log(usuarios);

});
*/



//con funcion

/*
'use strict'

var   usuarios = [];

fetch('https://reqres.in/api/users')
  .then(function(data){
      return data.json())
  .then(users => {
         usuarios = users.data;
         console.log(usuarios);

});
*/

//imprime


'use strict'

	document.querySelector(".loading").style.display = 'none';

var div_usuarios = document.querySelector("#usuarios");

var   usuarios = [];

fetch('https://reqres.in/api/users')
  .then(data => data.json())
  .then(users => {
         usuarios = users.data;
         console.log(usuarios);



     usuarios.map((user, i) => {
		 
		 
		let avatarImg = document.createElement("img");
		let nombre = document.createElement('h2');
		
		
		avatarImg.src = user.avatar;		
        nombre.innerHTML = " "  + user.first_name +" " + user.last_name+ " " +user.email;  

		 
         
		// console.log(avatarImg);

		 div_usuarios.appendChild(avatarImg);
         div_usuarios.appendChild(nombre); 
		 
     });  
	 



});



