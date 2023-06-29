/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
// Mostrar un valor en una caja de texto
var municipios=document.getElementById("lista");
var estados=document.getElementById("lst_edos");
var municipiosTam=["Tampico","Reynosa","Matamoros","Madero","Abasolo"];
var municipiosMich=["Uruapan","Purepero","",""];
var municipiosGuana=["Celaya","Silao",""];
function mostrarItem(){
   document.getElementById("idOp").value=municipios.value; 
   document.getElementById("txtOp").value=municipios[municipios.selectedIndex].text;
}
function cargarTamaulipas(){
    for(let i=0;i < municipiosTam.length; i++)
    {
       let v_option= document.createElement("option");
       v_option.value=(i+1);
       v_option.text=municipiosTam[i];
       municipios.add(v_option);
    }
}
function cargarMichoacan(){
    for(let i=0;i < municipiosMich.length; i++)
    {
       let v_option= document.createElement("option");
       v_option.value=(i+1);
       v_option.text=municipiosMich[i];
       municipios.add(v_option);
    }
}
function cargarGuanajuato(){
    for(let i=0;i < municipiosGuana.length; i++)
    {
       let v_option= document.createElement("option");
       v_option.value=(i+1);
       v_option.text=municipiosGuana[i];
       municipios.add(v_option);
    }
}


function cargarMunicipios(){
    let opcion=estados.value;
    vaciarEdos();
    switch (opcion){
        case "1":cargarGuanajuato();break;
        case "2":cargarMichoacan();break;
        case "3":cargarTamaulipas();break;
    }
}
function vaciarEdos(){
    for (i= municipios.options.length - 1 ; i>=0 ;i--){
        { municipios.remove(i);}
    }
}