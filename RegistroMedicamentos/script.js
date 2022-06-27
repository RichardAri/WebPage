const formulario = document.getElementById('form-register');
const inputs = document.querySelectorAll('#form-register input');


function btnLimpiarClick(event){  
    alert("Evento limpiar"); 
    return;
}

function fecha(str) {
var m = str.match(/^(\d{1,2})-(\d{1,2})-(\d{4})$/);
return (m) ? new Date(m[3], m[2]-1, m[1]) : null;
}

function checkForm(event){
event.preventDefault();
var form = document.registro;
console.log(form);

var nameMedicamento;
var codigoMedicamento;
var fechaMedicamento;
var descripcionMedicamento;


//Nombre del medicamento
if(document.registro.nameMedicamento.value == '' || document.registro.nameMedicamento.value == null){
    alert("Debe de ingresar el nombre del medicamento");
    return;
}else{

    nameMedicamento = document.registro.nameMedicamento.value;
}
console.log(nameMedicamento);

//Codigo del medicamento
if(document.registro.codigoMedicamento.value == '' || document.registro.codigoMedicamento.value == null){
    alert("Debe de ingresar el codigo del medicamento");
    return;
}else{
    codigoMedicamento = document.registro.codigoMedicamento.value;
}
console.log(codigoMedicamento);

//Anho del medicamento
if(document.registro.anhoMedicamento.value == '' || document.registro.anhoMedicamento.value == null){
    alert("Debe de ingresar el Anho del medicamento");
    return;
}else{
    fechaMedicamento = document.registro.anhoMedicamento.value;
}
console.log(anhoMedicamento);

//Descripcion del medicamento
if(document.registro.descMedicamento.value == '' || document.registro.descMedicamento.value == null){
    alert("Debe de ingresar la descripcion del medicamento");
    return;
}else{
    descripcionMedicamento = document.registro.descMedicamento.value;
}
console.log(descMedicamento);


var lista = document.getElementById("lista_registro");
var nuevoElemento = document.createElement("ul");
var txtNuevoElemento = document.createTextNode($[nameMedicamento]-$[codigoMedicamento]-$[fechaMedicamento]-$[descripcionMedicamento]);
nuevoElemento.appendChild(txtNuevoElemento);
lista.appendChild(nuevoElemento);

alert("Registro Exitoso!!");

}

inputs.forEach((input)=>{
    input.addEventListener('keyup',()=>{
        
    })
})

formulario.addEventListener('submit',(e)=>{
    e.preventDefault();

});