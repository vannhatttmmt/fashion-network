package application.controller.api;

import application.data.model.Product;
import application.data.service.ProductService;
import application.model.BaseApiResult;
import application.model.DataApiResult;
import org.apache.catalina.servlet4preview.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.util.Arrays;

/**
 * Created by hoangmanh on 7/4/18.
 */
@RestController
@RequestMapping("/api/shopping-cart")
public class ShoppingCartApiController {

    @Autowired
    private ProductService productService;

    @PostMapping("/add-product-to-cart/{productId}")
    public BaseApiResult addCart(@PathVariable int productId, HttpServletResponse response, Model model,
                                 HttpServletRequest request) {

        DataApiResult result = new DataApiResult();
        boolean isExist = false;
        try {
            Product product = productService.findOne(productId);
            StringBuilder sbId = new StringBuilder();
            sbId.append("");
            sbId.append(productId);
            String idProduct = sbId.toString();
            response.addCookie(new Cookie("1", "1"));
            Cookie[] cookies = request.getCookies();
            if (cookies != null) {
                Arrays.stream(cookies)
                        .forEach(c -> System.out.println(c.getName() + "=" + c.getValue()));
            } else {
                for (Cookie cookie : cookies) {
                    if (cookie.getName().equals(idProduct)) {
                        int quantityProduct = Integer.parseInt(cookie.getValue());
                        StringBuilder sbQuantity = new StringBuilder();
                        sbQuantity.append("");
                        sbQuantity.append(quantityProduct);
                        String quantityProductValue = sbQuantity.toString();
                        cookie.setValue(quantityProductValue);
                    } else {
                        Cookie cartInCookie = new Cookie(idProduct, "1");
                        cartInCookie.setMaxAge(24 * 60 * 60);
                        response.addCookie(cartInCookie);
                    }
                }
            }
            result.setSuccess(true);
            result.setMessage("Ok");


        } catch (Exception e) {
            result.setSuccess(false);
            result.setMessage(e.getMessage());
        }


        return result;
    }
}
