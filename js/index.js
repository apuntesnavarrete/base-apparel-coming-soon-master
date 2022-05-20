let ingreso = document.getElementById("correo")


const expresiones = {
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}


ingreso.addEventListener("keyup",(e)=>{
    let texto = e.target.value
    console.log(texto)
    if (expresiones.correo.test(texto)){
        document.body.style.backgroundColor = 'blue';
    } else{
        document.body.style.backgroundColor = 'red';

    }
    
}
)