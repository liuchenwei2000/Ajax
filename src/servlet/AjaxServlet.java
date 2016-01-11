/**
 * 
 */
package servlet;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.concurrent.TimeUnit;

/**
 * 测试 Ajax 请求的servlet
 */
@WebServlet(name = "ajaxServlet", urlPatterns = "/about.do", loadOnStartup = 1)
@MultipartConfig
// @MultipartConfig 注解用来支持使用 FormData 进行 POST 的请求
public class AjaxServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		try {
			TimeUnit.SECONDS.sleep(1);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}

		String myHeader = req.getHeader("MyHeader");
		if (myHeader != null)
		{
			System.out.println("MyHeader is " + myHeader);
			resp.setHeader("MyHeader", "NewHeader");
		}

		String code = req.getParameter("code");
		String name = req.getParameter("name");

		String greeting = "Ajax";
		if (code != null || name != null)
		{
			greeting = name + "(" + code + ")";
		}

		PrintWriter writer = resp.getWriter();
		writer.println("this is a text from server for " + greeting);
		writer.flush();
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		try {
			TimeUnit.SECONDS.sleep(1);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		PrintWriter writer = resp.getWriter();
		writer.println("Your code is " + req.getParameter("code") + "<br>");
		writer.println("Your name is " + req.getParameter("name"));
		writer.flush();
	}
}
