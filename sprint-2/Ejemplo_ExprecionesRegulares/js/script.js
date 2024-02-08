function validateEmail(){
                
	// Get our input reference.
	let emailField = document.getElementById('user-email');
	
	// Define our regular expression.
	const validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

	// Using test we can check if the text match the pattern
	if( validEmail.test(emailField.value) ){
		alert('El correo ingresado es valido');
		return true;
	}else{
		alert('El correo ingresado es invalido');
		
	}

}

function validateNumber () {
    let numberPhone = document.getElementById('number');

    const regex = /^(\+57)?(\d{10})$/;
   
    if (regex.test(numberPhone.value)) {
      alert("El número de teléfono es válido.");
    } else {
      alert("El número de teléfono no es válido.");
    }
}


const url = "http://localhost:3000/productos";

const getPrductos = async () => {
aray.filter(sessionStorage)
}