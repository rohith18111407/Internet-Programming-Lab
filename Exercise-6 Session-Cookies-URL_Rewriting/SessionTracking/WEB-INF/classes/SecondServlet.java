import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;

public class SecondServlet extends HttpServlet {
	public void doGet(HttpServletRequest request, HttpServletResponse response) {
		try {
			response.setContentType("text/html");
			PrintWriter out = response.getWriter();
			// Get session
			HttpSession session = request.getSession(true);
			// Get count from session attribute
			Integer count = (Integer) session.getAttribute("count");
			// If count is null, initialize it to 0
			if (count == null) {
				count = 0;
			}
			// Increment count
			count++;
			// Update session attribute
			session.setAttribute("count", count);
			out.print("Number of times the visit link has been clicked: " + count);
			out.close();
		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}
	}
}


