let valor=0;
let producto =  prompt("ingrese producto A,B, o C");
if (producto=="a" || producto=="A"){alert("elegiste una suculenta"); valor+=160} else if (producto=="b" || producto=="B"){alert("elegiste una maceta"); valor+=500} else if (producto=="C" || producto=="c"){alert("elegiste una pala"); valor+=1200} else{alert("ingrese una opcion valida (letras a,b,c)")};
document.write(`<h3> el valor de la compra es $${valor}</h3>`)
;
let calculoInteres = (valor)=> {
    let coutas= 0;
    let interes= 1;
     let cuotas = parseInt(prompt("ingrese numero de cuotas"));
     for ( let i=0; i<cuotas; i++){
        valor+= valor * 0.75;
     }
     document.write(`elegiste ${cuotas} cuotas suman $${interes} de interes`);
     
     return interes + valor

     
 };
calculoInteres();