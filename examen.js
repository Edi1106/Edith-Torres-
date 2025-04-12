function saludar()
{
    let nombre=prompt("Escribe tu nombre")
    alert("hola"+ nombre + "suerte en tu examen")
}
function calcularCuadrado()
{
    let numero=parseInt(prompt("escribe el numero"));
    if(isNaN(numero) || numero<0);
    {
        alert("ingresa los datos corresctos")
        return calcularCuadrado();
    }
    else
    {
        let numeroalcuadrado = numero*numero;
        alert(("el cuadrado del numeroe es")+ numeroalcuadrado+"");
    }
}