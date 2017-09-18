package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(name = "ServletValidaLogin", urlPatterns = {"/ServletValidaLogin"})
@MultipartConfig
public class ServletValidaLogin extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String nome = request.getParameter("login");
        System.out.println(nome);
        if(nome.length() < 5) {
            response.setContentType("text/plain");
            PrintWriter pw = response.getWriter();
            pw.print("Login incorreto.");
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String nome = request.getParameter("login");
        System.out.println(nome);
        if(nome.length() < 4) {
            response.setContentType("text/plain");
            PrintWriter pw = response.getWriter();
            pw.print("Login incorreto.");
        }
    }
}
