var xhr = new XMLHttpRequest();

function solicitarGetEstados(){
    
    xhr.open("get", "estados.xml", false);
    xhr.send(null);
    var estados = document.getElementById("estados");
    var estadosXML = xhr.responseXML;
    
    
    var a = estadosXML.getElementsByTagName("estado");
    
    var listaEstados = "";
    
    for(var i=0; i < a.length; i++){
        listaEstados += "<option onclick=\"solicitarGetCidades('" +a[i].getAttribute('codigo')+ "');\">"
                +a[i].textContent+"</option>";
    }
    estados.innerHTML = listaEstados;
}

function solicitarGetCidades(codigo){
    
    xhr.open("get", "cidades.xml", false);
    xhr.send(null);
    var cidades = document.getElementById("cidades");
    var cidadesXML = xhr.responseXML;
    
    var a = cidadesXML.getElementsByTagName("cidade");
    
    var listaCidades = "";
    
    for(var i=0; i < a.length; i++){
        
        if(a[i].getElementsByTagName("idestado")[0].textContent === codigo){
            listaCidades += "<option>"+a[i].getElementsByTagName("nome")[0].textContent+"</option>";
        }
    }
    cidades.innerHTML = listaCidades;
}

function solicitarPostEstados(){
    
    xhr.open("post", "estados.xml", false);
    xhr.send(null);
    var estados = document.getElementById("estados");
    var estadosXML = xhr.responseXML;
    
    
    var a = estadosXML.getElementsByTagName("estado");
    
    var listaEstados = "";
    
    for(var i=0; i < a.length; i++){
        listaEstados += "<option onclick=\"solicitarGetCidades('" +a[i].getAttribute('sigla')+ "');\">"
                +a[i].textContent+"</option>";
    }
    estados.innerHTML = listaEstados;
}

function solicitarPostCidades(id){
    
    xhr.open("post", "cidades.xml", false);
    xhr.send(null);
    var cidades = document.getElementById("cidades");
    var cidadesXML = xhr.responseXML;
    
    
    var a = cidadesXML.getElementById(id).getElementsByTagName("cidade");
    
    var listaCidades = "";
    
    for(var i=0; i < a.length; i++){
        listaCidades += "<option>"+a[i].textContent+"</option>";
    }
    cidades.innerHTML = listaCidades;
}

function registrarEventos(){
    solicitarGetEstados();
}

onload = function(){
    registrarEventos();
};