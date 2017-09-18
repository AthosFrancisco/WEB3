var xhr = new XMLHttpRequest();
function processar() {
    if (xhr.readyState === 4) {
        var msg = document.getElementById("loginMensagem");
        msg.textContent = xhr.responseText;
    }
}
function solicitarGETSincrono() {
    var login = this.value;
    xhr.open("get", "ServletValidaLogin?login=" + login, false);
    xhr.send(null);
    var msg = document.getElementById("loginMensagem");
    msg.textContent = xhr.responseText;
}
function solicitarGETAssincrono() {
    var login = this.value;
    xhr.onreadystatechange = processar;
    xhr.open("get", "ServletValidaLogin?login=" + login, false);
    xhr.send(null);
}
function solicitarPOSTSincrono() {
    var login = this.value;
    xhr.open("post", "ServletValidaLogin", false);
//    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var formData = new FormData();
    formData.append("login", login);
    xhr.send(formData);
    var msg = document.getElementById("loginMensagem");
    msg.textContent = xhr.responseText;
}
function registerEvents() {
    var login = document.getElementsByName("login")[0];
    login.onblur = solicitarGETAssincrono;
}
onload = registerEvents;