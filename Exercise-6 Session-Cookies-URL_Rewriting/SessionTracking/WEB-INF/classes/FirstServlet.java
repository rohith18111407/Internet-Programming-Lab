import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;

public class FirstServlet extends HttpServlet {
	public void doGet(HttpServletRequest request, HttpServletResponse response){
		try{
			response.setContentType("text/html");
			PrintWriter out = response.getWriter();
			// String n=request.getParameter("userName");
			HttpSession session=request.getSession();
			// session.setAttribute("uname",n);
			out.print("<a href='servlet2'>Count</a>");
			out.close();
		}
		catch(Exception e){
			System.out.println(e);
		}
	}
}
