function init() {

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4){
            var resposta = xhr.responseText;
            var array = JSON.parse(resposta);
            alert(array[0].nome);
        }
    };

    xhr.open("get", "JSONServlet", true);
    xhr.send(null);
}

onload = init;