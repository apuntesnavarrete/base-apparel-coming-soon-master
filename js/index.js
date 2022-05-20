let ingreso = document.getElementById("correo")
let caption = document.getElementsByClassName("main_for_caption")[0];
let input = document.getElementsByClassName("main_input")[0];
let icono = document.getElementsByClassName("icono")[0];


console.log(input)
console.log(caption)

const expresiones = {
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}


ingreso.addEventListener("keyup",(e)=>{
    let texto = e.target.value
    console.log(texto)
    if (expresiones.correo.test(texto)){
        caption.style.display="none";
        input.style.outline="solid var(--Desaturated-Red)";
        icono.style.display="none";

        } else{
        caption.style.display="block";
        input.style.outline="solid var(--Soft-Red)";
        icono.style.display="block";

    }
    
}
)