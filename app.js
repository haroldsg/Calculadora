const pantalla = document.getElementById('barraTexto');
const numeros = document.getElementsByClassName('botones');


let band = 0;
for( let i of numeros){
    i.addEventListener('click', () => {
        if(i.textContent == 'DEL'){
            let str = pantalla.value;
            str = str.slice(0,str.length -1);
            pantalla.value = str;
        }else
            if(i.textContent == 'AC'){
            pantalla.value = '';
        }else
            if(i.textContent == '='){
                try{
                    const aux = /x/g; 
                    pantalla.value = pantalla.value.replace(aux,'*');
                    resultado = eval(pantalla.value);
                    pantalla.value = resultado;
                    band = 1;
                }catch{
                    alert('Escriba bien la operacion, bicho')
                }
                
            }
        else{
            if(band == 1 ){
                pantalla.value = '';
                band = 0;
            }
            pantalla.value += i.textContent;
        }
    })
}


