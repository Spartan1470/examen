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
  let sumaCalorias = 0;
  const filtered = comidas.filter(function(element){
        sumaCalorias += (element.tipos==="vegetal" && element.energias>=200) ? element.energias : 0;
      return (element.tipos==="vegetal" && element.energias>=200);
  });
console.log ("------ Comidas Vegetales con Mas de 200 calorias --------");
console.log (filtered);
