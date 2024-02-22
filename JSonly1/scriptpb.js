


DOM = document;

// Paleta de Colores: https://paletadecolores.com.mx/paleta/11091a/2f2f4d/626970/bab195/e8d18e/
const mainbodycolor = "#11091a";
const primarycolor = "#2f2f4d";
const secondarycolor = "#626970";
const terciary = "#bab195";
const fourth = "#bab195";
const fifth = "#e8d18e";


//Dimensiones
const unitvh = 'vh';
const unitperc = '%';
const unitpx = 'px';

//Elemento del body?
DOM.title = "CHAT JPG";
DOM.body.style.backgroundColor = mainbodycolor;
DOM.body.style.margin = "0px";




//Elemento contenedor
let divconten = DOM.createElement("div");
divconten.style.backgroundColor = primarycolor;
divconten.style.height = "calc(100vh - 0px)";
divconten.style.display = "grid";
divconten.style.gridTemplateColumns = "20% 80%";
divconten.style.gridTemplateRows = "85% 15%"
divconten.style.border =  "1px solid black";

//Elemento listado-chats
let divchatlist = DOM.createElement("div");
divchatlist.style.backgroundColor = primarycolor;
divchatlist.id = "listachat";
divchatlist.style.border = "1px solid black";
divchatlist.style.padding = "8px";
divchatlist.style.color = fifth;
divchatlist.style.display = "flex"
divchatlist.innerText = "Listados"
divchatlist.style.flexDirection = "column"
divchatlist.style.overflow = "scroll";
//Buscar en Google



//contenidoperfil
let divcontenidoperf = DOM.createElement("div");
divcontenidoperf.style.backgroundColor = primarycolor;
divcontenidoperf.style.display = "flex";
divcontenidoperf.style.alignItems = "center";
divcontenidoperf.style.justifyContent = "space-around";
divcontenidoperf.innerText = "Paddington";
divcontenidoperf.style.color = fifth;



//Mensajes
let mensaje = DOM.createElement("div");
mensaje.style.backgroundColor = secondarycolor;
mensaje.border = "1px solid black";
mensaje.innerText = "mensaje"



//SEPARAR


//Contenido Chat
let contenidochat = DOM.createElement("div")

contenidochat.style.backgroundColor = primarycolor;
contenidochat.style.border = "1px solid black";
contenidochat.style.display = "flex";
contenidochat.style.justifyContent = "space-evenly"





let imagenperfil = DOM.createElement("img");
imagenperfil.style.borderRadius = "50" + unitperc;
imagenperfil.style.width = "65px"
imagenperfil.style.height = "65px"
imagenperfil.src = "data:image/jpeg;base64,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"
imagenperfil.alt = "Foto"
divcontenidoperf.appendChild(imagenperfil);

let mensajechat = DOM.createElement("textarea");
mensajechat.style.width = "90" + unitperc;
mensajechat.style.height = "90" + unitperc;
mensajechat.style.backgroundColor = primarycolor;
mensajechat.style.color = fifth;
contenidochat.appendChild(mensajechat);

let button = DOM.createElement("button");
button.style.backgroundColor = fourth;
button.style.color = primarycolor;
button.innerText = "Enviar"
button.style.width = "10%"
button.style.height = "90%"
contenidochat.appendChild(button);





divconten.appendChild(divchatlist);
divconten.appendChild(mensaje);
divconten.appendChild(divcontenidoperf);

divconten.appendChild(contenidochat);

DOM.body.appendChild(divconten);





let data = fetch('https://jsonplaceholder.typicode.com/posts',
{
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
    body : JSON.stringify({})
})    
function optenerPost2(){
    let posts = fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
}
// ASYNC AWAIT - ME PERMITE ESPERAR LA RESPUESTA DE UNA PETICION ASINCRONA
async function optenerPosts(){
    let data = await fetch('https://jsonplaceholder.typicode.com/posts',
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })    
    console.log("await", data);
    let posts = await data.json();
    console.log(posts);

    // console.log("string", JSON.stringify(posts));
    // let new_json = JSON.parse(JSON.stringify(posts));
    // console.log("new_json", new_json);
    return posts;
}

function crearChat(texto, id){
    let divchat = DOM.createElement("div");
    divchat.className = "chat";
    divchat.id = id;
    divchat.innerText = texto;
    divchat.style.backgroundColor = fifth;
    divchat.style.color = secondarycolor;
    divchat.style.width = "100" + unitperc;
    divchat.style.minHeight = "60" + unitpx;
    divchat.style.borderRadius = "8" + unitpx;
    divchat.style.border ="1px solid black";
    divchat.style.marginBottom = "8" + unitpx;
    return divchat;
}

async function crearListoDeChats(){
    // mando a traer los post dummys a una api con get
    let misPosts =  await optenerPosts()
    
    // mando a traer el div donde quiero poner los chats
    let divListados = document.getElementById("listachat");
    if(divListados != null){
        // transformamos los dicccionarios a un div de chat
        misPosts.map(post=>{
            let divchat = crearChat(post.title, post.id);
            return divchat
        })
        // recorremos los nuevos chats y los agremos al div de listados
        .forEach(element => {
            divListados.appendChild(element);
        });
    }

}

crearListoDeChats();


