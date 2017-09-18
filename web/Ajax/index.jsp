<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <script type="text/javascript" src="index.js"></script>
    </head>
    <body>
        <h1>Hello World!</h1>
        <form action="MyServlet" method="post">
            <p><label>Login:</label> <input type="text" name="login" />
                <span id="loginMensagem"></span>
            </p>
            <p><label>Senha:</label> <input type="password" name="senha" /></p>
            <p><input type="submit" /></p>
        </form>
    </body>
</html>
