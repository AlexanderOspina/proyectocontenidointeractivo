
const contColumLeft=document.getElementById('contenedor-column-left-menu');
var selector="js"


const contentHtml=[
    {item:"item1",tittle:"Contenido-HTML-1",imgs:1,text:false},
    {item:"item2",tittle:"Contenido-HTML-1",imgs:2,text:false},
    {item:"item3",tittle:"Contenido-HTML-1",imgs:3,text:false},
    {item:"item4",tittle:"Contenido-HTML-1",imgs:4,text:false},
    {item:"item5",tittle:"Contenido-HTML-1",imgs:5,text:false}

]
const contenJs=[
    {item:"item1",tittle:"	1 - Strings	",imgs:2,text:false},
    {item:"item2",tittle:"	2 - Objeto Math	",imgs:1,text:false},
    {item:"item3",tittle:"	3 - Condicionales I - Sentencia if-else	",imgs:1,text:false},
    {item:"item4",tittle:"	4 - Ordenar 3 números de mayor a menor	",imgs:1,text:false},
    {item:"item5",tittle:"	5 - Condicional switch	",imgs:1,text:false},
    {item:"item6",tittle:"	6 - Curso básico de JS 2018 (Operador Ternario)	",imgs:1,text:false},
    {item:"item7",tittle:"	7 - (Arrays - Introducción)	",imgs:1,text:false},
    {item:"item8",tittle:"	8 - Arrays II - Propiedades y métodos I	",imgs:1,text:false},
    {item:"item9",tittle:"	9 - Bucle while & do...while	",imgs:1,text:false},
    {item:"item10",tittle:"	10 - Bucle for	",imgs:1,text:false},
    {item:"item11",tittle:"	11 - Bucles for of / for in	",imgs:1,text:false},
    {item:"item12",tittle:"	12 - Ingreso dato por consola	",imgs:1,text:false},
    {item:"item13",tittle:"	13 - Ejercicios JS	",imgs:10,text:false},
    {item:"item14",tittle:"	14 - POO - Objetos - Introducción	",imgs:1,text:false},
    {item:"item15",tittle:"	15 - Funciones - Introducción	",imgs:1,text:false},
    {item:"item16",tittle:"	16 - POO - Clases	",imgs:1,text:false},
    {item:"item17",tittle:"	17 - POO - Clases y objetos - Práctica guiada	",imgs:1,text:false},
    {item:"item18",tittle:"	18 - Arrays - Métodos II	",imgs:3,text:false},
    {item:"item19",tittle:"	19 - Spread operator	",imgs:1,text:false},
    {item:"item20",tittle:"	20 - DOM - Seleccionar elementos del DOM	",imgs:1,text:false},
    {item:"item21",tittle:"	21 - DOM - Modificar atributos y clases	",imgs:1,text:false},
    {item:"item22",tittle:"	22 - Eventos I - Eventos de ratón y teclado	",imgs:1,text:false},
    {item:"item23",tittle:"	23 - Eventos II - Objeto evento	",imgs:1,text:false},
    {item:"item24",tittle:"	24 - DOM - Crear e insertar elementos I	",imgs:1,text:false},
    {item:"item25",tittle:"	25 - DOM Traversing	",imgs:1,text:false},
    {item:"item26",tittle:"	26 - DOM - Insertar, clonar y borrar elementos	",imgs:1,text:false},
    {item:"item27",tittle:"	27 - Objetos nativos y timers	",imgs:1,text:false},
    {item:"item28",tittle:"	28 - AJAX I - Objeto XMLHttpRequest I	",imgs:1,text:false},
    {item:"item29",tittle:"	29 - AJAX II - Objeto XMLHttpRequest II - GET + PHP	",imgs:1,text:false},
    {item:"item30",tittle:"	30 - AJAX III - Objeto XMLHttpRequest III - POST + PHP	",imgs:1,text:false},
    {item:"item31",tittle:"	31 - Callbacks	",imgs:1,text:false},
    {item:"item32",tittle:"	32 - Promesas - Introducción	",imgs:1,text:false},
    {item:"item33",tittle:"	33 - AJAX IV - Fetch - Introducción - GET	",imgs:1,text:false},
    {item:"item34",tittle:"	34 - AJAX V - Fetch - POST	",imgs:1,text:false},
    {item:"item35",tittle:"	35 - AJAX VI - Fetch - Lectura Archivos	",imgs:1,text:false},
    {item:"item36",tittle:"	36 - async / await	",imgs:1,text:false},
    {item:"item37",tittle:"	37 - axios - peticiones GET	",imgs:1,text:false},
    {item:"item38",tittle:"	38 - axios - peticiones POST	",imgs:1,text:false},
    {item:"item39",tittle:"	39 - Formularios I - Validación simple	",imgs:1,text:false},
    {item:"item40",tittle:"	40 - Expresiones Regulares	",imgs:1,text:false},
    {item:"item41",tittle:"	41 - Librería de validaciones	",imgs:1,text:false},
    {item:"item42",tittle:"	42 - API's - Web Storage	",imgs:1,text:false},
    {item:"item43",tittle:"	43 - API's - Drag & Drop I	",imgs:1,text:false},
    {item:"item44",tittle:"	44 - API's - Drag & Drop II	",imgs:1,text:false},
    {item:"item45",tittle:"	45 - API's - API File	",imgs:1,text:false},
    {item:"item46",tittle:"	46 - API's - API File II: Cómo hacer una barra de progreso	",imgs:1,text:false},
    {item:"item47",tittle:"	47 - API's - API File + Drag & Drop	",imgs:1,text:false},
    {item:"item48",tittle:"	48 - API's - API IndexedDB I - Introducción y creación	",imgs:1,text:false},
    {item:"item49",tittle:"	49 - API's - API IndexedDB II - Añadir datos	",imgs:1,text:false},
    {item:"item50",tittle:"	50 - API's - API IndexedDB III - Leer datos	",imgs:1,text:false},
    {item:"item51",tittle:"	51 - API's - API IndexedDB IV - Actualización de datos	",imgs:1,text:false},
    {item:"item52",tittle:"	52 - API's - API IndexedDB V - Borrar datos	",imgs:1,text:false},
    {item:"item53",tittle:"	53 - API's - Visibility Change	",imgs:1,text:false},
    {item:"item54",tittle:"	54 - API's - Online / Offline	",imgs:1,text:false},
    {item:"item55",tittle:"	55 - API's - Notifications	",imgs:1,text:false},
    {item:"item56",tittle:"	56 - API's - Intersection Observer I	",imgs:1,text:false},
    {item:"item57",tittle:"	57 - API's - Lazy load - Intersection Observer II	",imgs:1,text:false},
    {item:"item58",tittle:"	58 - API's - Geolocation	",imgs:1,text:false},
    {item:"item59",tittle:"	59 - API's - Match Media	",imgs:1,text:false},
    {item:"item60",tittle:"	60 - Destructuring	",imgs:1,text:false},
    {item:"item61",tittle:"	61 - Depurar código - Debugging	",imgs:1,text:false},
    {item:"item62",tittle:"	62 - Transpilación de código - Babel	",imgs:1,text:false}

]

const contenSql=[
    {item:"item1",tittle:"1  - GRUPOS DE COMANDO SQL",imgs:1,text:false},
    {item:"item2",tittle:"2  - INSTRUCCION SQL",imgs:1,text:false},
    {item:"item3",tittle:"3  - OPERADORES",imgs:1,text:false},
    {item:"item4",tittle:"4  - INSTRUCCIONES SQL SELECT",imgs:1,text:false},
    {item:"item5",tittle:"5  - ORDENAR ORDER BY",imgs:1,text:false},
    {item:"item6",tittle:"6  - CLAUSULA TOP //// RANQUEAR LA BUSCQUEDAS",imgs:1,text:false},
    {item:"item7",tittle:"7  - CLAUSULA BETWENN",imgs:1,text:false},
    {item:"item8",tittle:"8  - CLAUSULA LIKE/// busqueda por caractes inciales comodin %",imgs:1,text:false},
    {item:"item9",tittle:"9  - AGRUPACION",imgs:1,text:false},
    {item:"item10",tittle:"10 - CONSULTAS DE CALCULOS",imgs:1,text:false},
    {item:"item11",tittle:"11 - FECHAS",imgs:1,text:false},
    {item:"item12",tittle:"12 - CONSULTAS MULTITABLA // CONSULTAS DE UNION",imgs:1,text:false},
    {item:"item13",tittle:"13 - CONSULTA UNION INTERNA",imgs:1,text:false},
    {item:"item14",tittle:"14 - SUBCONSULTAS",imgs:1,text:false},
    {item:"item15",tittle:"15 - SUB CONSULTAS IN Y NOT IN (ESTAN Y NO ESTAN)",imgs:1,text:false},
    {item:"item16",tittle:"16 - CONSULTAS EN ACCION",imgs:1,text:false},
    {item:"item17",tittle:"17 - FUNCION DISTINCT",imgs:1,text:false},
    {item:"item18",tittle:"18 - DATOS ANEXADOS",imgs:1,text:false},
    {item:"item19",tittle:"19 - COMANDO DDL CREATE - ALTER -- DROP -- TRUNCATE",imgs:1,text:false},
    {item:"item20",tittle:"20 - INDICES - CLAVE PRIMARIA - ORDINARIOS - UNICOS - COMPUESTOS",imgs:1,text:false},
    {item:"item21",tittle:"21 - TRIGGETS  (ACCION DESPUES)",imgs:1,text:false},
    {item:"item22",tittle:"22 - TRIGGER DE ACTUALIZACION -- ACCION ANTES",imgs:1,text:false},
    {item:"item23",tittle:"23 - TRIGGER ELIMINACION -- ELIMINAR-MODIFICAR UN TRIGGER",imgs:1,text:false},
    {item:"item24",tittle:"24 - PROCEDIMIENTOS ALMACENADOS",imgs:1,text:false},
    {item:"item25",tittle:"25 - CREACION DE VISTAS",imgs:1,text:false}


    // {item:"item1",tittle:"Contenido-SQL-1",imgs:1,text:false},
    // {item:"item2",tittle:"Contenido-SQL-1",imgs:1,text:false},
    // {item:"item3",tittle:"Contenido-SQL-1",imgs:1,text:false},
    // {item:"item4",tittle:"Contenido-SQL-1",imgs:1,text:false},
    // {item:"item5",tittle:"Contenido-SQL-1",imgs:1,text:false}

]



console.log(contentHtml[0].item)
console.log(contentHtml.length)

// arrayNombres=[
// {nombre:"alex",edad:33,hijos:2},
// {nombre:"alexander",edad:37,hijos:5},
// {nombre:"Juan",edad:47,hijos:15}
// ]

// console.log(arrayNombres[1].nombre,arrayNombres[1].edad,arrayNombres[1].hijos)


// for(key in contentHtml){
//     console.log(contentHtml[key][0])
// }

crearContenTable(contenJs);

menuItems=document.getElementsByName('menu-item');

console.log("Hola Mundo")

menuItems.forEach(button => {
    button.addEventListener('click',(e) =>{
        console.log(button.id)

        if(button.id=="menu-item_1"){
            console.log("Enviar Contenido JS")
            crearContenTable(contenJs)
            selector="js"
            

        }else {
            if(button.id=="menu-item_2"){
                console.log("Enviar Contenido SQL")
                crearContenTable(contenSql)
                selector="sql"             
                
            }else{
                console.log("Seleccion sin configurar")
            }
        }
        
    })
});


// boton.forEach(buttons => {
//     console.log("entro aca")

    
//     buttons.addEventListener('click', () =>{
//         console.log("entro aca")
//         botonSeleccionado=document.getElementById(item)
//         botonSeleccionado.classList.remove('left-menu-button_active')
        
        
//         buttons.classList.add('left-menu-button_active')
//         // e.target.classList.add('left-menu-button_active')
        
//         item=buttons.id
    
//     })
//     buttons.addEventListener('change', () =>{
//         console.log("Cambio componente")
//     })

// });

function crearContenTable(selec){
    
    contColumLeft.innerHTML=""
    const fragmentLeft=document.createDocumentFragment();

    
    for(i=0;i<selec.length;i++){

        console.log(selec[i].item,selec[i].imgs,selec[i].text)
        
        
        var item=document.createElement('BUTTON')
        id="item"+(i+1)
        item.setAttribute('id',id)
        item.setAttribute('name','left-menu-button')
        item.classList.add('left-menu-button')

        item.textContent=selec[i].tittle;

        
        fragmentLeft.appendChild(item)
    }
    

    contColumLeft.appendChild(fragmentLeft)

    var boton=document.getElementsByName('left-menu-button')
    var botonSeleccionado=document.getElementById('item1')
    botonSeleccionado.classList.add('left-menu-button_active')
    var item=botonSeleccionado.id
    console.log(boton)

    contentImg=document.getElementById("contenedor-column-right-content")
    contentImg.innerHTML=""


    boton.forEach(buttons => {
        console.log("entro aca")
    
        
        buttons.addEventListener('click', () =>{
            console.log("entro aca")
            botonSeleccionado=document.getElementById(item)
            botonSeleccionado.classList.remove('left-menu-button_active')
            
            console.log("El item a buscar es "+buttons.id)
            
            var cantImgs=0;
            var index=0;
            for(i=0;i<selec.length;i++){

                if(buttons.id==selec[i].item){
                    console.log("La cantidad Imagenes del ITEM Son "+selec[i].imgs)
                    console.log("el valor de i es "+i)
                    cantImgs=selec[i].imgs;
                    index=i
                }
            }

            
            contentImg=document.getElementById("contenedor-column-right-content")
            contentImg.innerHTML=""
            contentImg.appendChild((insertContent(index,cantImgs,selector)))
            

            buttons.classList.add('left-menu-button_active')            
            item=buttons.id
        
        })
            
    });
     
}

function insertContent(index,imgs,selector){
    
    fragmentImg=document.createDocumentFragment()
    fragmentImg.innerHTML="";
    

    if(imgs>1){

        for(i=0;i<imgs;i++){
            var img = document.createElement('img')
            
                if(index<9){
                    img.src="img/img-"+selector+"-0"+(index+1)+"_"+(i+1)+"-min.jpg"    
                    fragmentImg.appendChild(img)
                }else{
                    img.src="img/img-"+selector+"-"+(index+1)+"_"+(i+1)+"-min.jpg"    
                    fragmentImg.appendChild(img)
                }          
        }

    }else{
        var img = document.createElement('img')  
        
        if(index<9){
            img.src="img/img-"+selector+"-0"+(index+1)+"-min.jpg"    
            fragmentImg.appendChild(img)
        }else{
            img.src="img/img-"+selector+"-"+(index+1)+"-min.jpg"    
            fragmentImg.appendChild(img)
        }          
    


        // img.src="img/img-"+selector+"-0"+(index+1)+".jpg"
        // fragmentImg.appendChild(img)
    }
 
    return fragmentImg
}



// boton=document.getElementsByName('left-menu-button')

// console.log(boton)

// var botonSeleccionado=document.getElementById('item1')
// botonSeleccionado.classList.add('left-menu-button_active')
// var item=botonSeleccionado.id

