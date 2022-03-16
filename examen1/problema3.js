let alimentos=['carne','java','pasto']
let tipos=['animal','isecto','vegetal']
let energias=[400,100,700]


let comidas=[]
for(let i=0; i<50; i++){

    let comida={}

    comida.nombre=(alimentos[Math.floor(Math.random()*alimentos.length)])
    comida.tipos=(tipos[Math.floor(Math.random()*tipos.length)])
    comida.energias=(energias[Math.floor(Math.random()*energias.length)])
   
    comidas.push(comida);
}
    const array = [];
  let suma_energias = 0;
  const filtered = comidas.filter(function(element){
      if (element.tipos=="vegetal"&&element.energias>=200) {
        suma_energias= suma_energias + element.energias;
        return element;
      }
  });
setTimeout(function(){
    console.log("Vegetales con Mas de 200 calorias");
    console.log (filtered);
    console.log("total de energia");
    console.log (suma_energias);
},5000)
