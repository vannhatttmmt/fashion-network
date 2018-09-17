package application.controller.web;


import application.data.model.Product;
import application.data.service.ProductService;
import application.model.CartDataModel;
import application.viewmodel.shoppingcart.ShoppingCartVM;
import org.apache.catalina.servlet4preview.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.Cookie;
import java.util.ArrayList;
import java.util.List;


/**
 * Created by hoangmanh on 6/5/18.
 */
@Controller
@RequestMapping(value = "/order")
public class Add2CartController {

    @Autowired
    private ProductService productService;

    @GetMapping(path = "/add2cart")
    public String shoppingcart(HttpServletRequest request, Model model) {
//        ShoppingCartVM vm = new ShoppingCartVM();
//        List<CartDataModel> listProductInCart = new ArrayList<>();
//        Cookie[] cookies = request.getCookies();
//        for (Cookie cookie : cookies) {
//            CartDataModel cart = new CartDataModel();
//            if (!cart.getName().equals("JSESSIONID")) {
//                cart.setId(Integer.parseInt(cookie.getName()));
//                cart.setQuantity(Integer.parseInt(cookie.getValue()));
//                Product productInfo = productService.findOne(Integer.parseInt(cookie.getName()));
//                cart.setName(productInfo.getName());
//                cart.setPrice(productInfo.getPrice());
//                cart.setImage(productInfo.getImage());
//                listProductInCart.add(cart);
//            }
//        }
//        vm.setListCartVM((ArrayList<CartDataModel>) listProductInCart);
//        model.addAttribute("vm", vm);
        return "cart/add2cart";
    }
}
