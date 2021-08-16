const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];


   



let x = 9;
let y = 0;


let playerPosition = map[x][y];

  
let boxTop  = 0;
let boxLeft = 0;

function mover(){   

    let box = document.getElementById("box");
    //let wall = document.getElementById("wall");  
    let seta = event.keyCode;


  //keyCode: Valores para as teclas: "ArrowDown" - 40 - (seta para baixo = (+10)); "ArrowLeft" - 37 - (seta para esq = (-10)); "ArrowRight"  - 39 -(seta para dir  = (+10)); "ArrowUp" - 38 (seta para cima = (-10));

            if(seta == 37){
                boxLeft -= 20;
                box.style.left = boxLeft + "px";
            }
            if (seta == 38){
                boxTop -= 20;
                box.style.top = boxTop + "px"
            }
            
            if (seta == 39){
                boxLeft += 20;
                box.style.left = boxLeft + "px";
            }
            
            if (seta == 40){
                boxTop += 20;
                box.style.top = boxTop + "px";
            }      


            //chamar a colisão!           

            colidir("box", "wall")       
}

document.addEventListener('keydown', mover);

let vai = ""
map.forEach(function (item, indice, array) {
    for (let i = 0; i < item.length; i++){
        vai += item[i] 
    };      
});
console.log(vai)

function colidir(idBox1, idBox2) {    
        
        let box1 = document.getElementById(idBox1).getBoundingClientRect();
        let box2 = document.getElementById(idBox2).getBoundingClientRect();   
   

    let pontos_box1 =  [ {x: box1.left, y:box1.top}, 
                    {x: box1.left + box1.width, y: box1.top},
                    {x: box1.left + box1.width, y: box1.top + box1.height}];

    let pontos_box2 = [ {x: box2.left, y:box2.top}, 
                        {x: box2.left + box2.width, y: box2.top},
                        {x: box2.left + box2.width, y: box2.top + box1.width}]; 

    
    
             
        for (let indice = 0; indice < 3; indice ++){
            if 
            ((pontos_box1[indice].x >= box2.left) && (pontos_box1[indice].x <= box2.left + box2.width) && (pontos_box1[indice].y >= box2.top) && (pontos_box1[indice].y <= box2.top + box2.height)
            ||
            (pontos_box2[indice].x >= box1.left) && (pontos_box2[indice].x <= box1.left + box1.width) && (pontos_box2[indice].y >= box1.top) && (pontos_box2[indice].y <= box1.top + box1.height))
            {            
            return  console.log("Colidiu!");      
            } else {
                return console.log("Não Colidiu")
            };
        }    
     

}
    

  //colidir("box", "wall");













  

 
 

 



