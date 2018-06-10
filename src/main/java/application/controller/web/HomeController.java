package application.controller.web;

import application.data.model.PaginableItemList;
import application.data.model.Product;
import application.data.service.ProductService;
import application.viewmodel.common.ProductVM;
import application.viewmodel.home.BannerVM;
import application.viewmodel.home.HomeLandingVM;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;


@Controller
@RequestMapping(path = "/")
public class HomeController extends BaseController {

    @Autowired
    private ProductService productService;

    @GetMapping(path = "/")
    public String homelanding(Model model, HttpServletResponse response,
                              @RequestHeader("User-Agent") String userAgent,
                              HttpServletRequest request) {
        response.addCookie(new Cookie("cookie", "cookie value"));
        System.out.println(userAgent);
        System.out.println("TP: "+ request.getRemoteAddr());


        HomeLandingVM vm = new HomeLandingVM();
        this.setLayoutHeaderVM(vm);

        ArrayList<BannerVM> listBanner1VM = new ArrayList<>();
        listBanner1VM.add(new BannerVM("/", "https://cf.shopee.vn/file/826cefc5aa7b4da526ee7e6cef677209", "Ass"));
        listBanner1VM.add(new BannerVM("/", "https://cf.shopee.vn/file/5a53533314fc8036879352f9ccc54496", "Ads"));
        listBanner1VM.add(new BannerVM("/", "https://cf.shopee.vn/file/7c5936a92d0b912301100a8e6ebbc275", "Ads"));

        ArrayList<BannerVM> listBanner2VM = new ArrayList<>();
        listBanner2VM.add(new BannerVM("/", "https://cf.shopee.vn/file/ca3c8e0cbb068635c9df92310df1fbbd", "Ads"));
        listBanner2VM.add(new BannerVM("/", "https://cf.shopee.vn/file/ca3c8e0cbb068635c9df92310df1fbbd", "Ads"));
        listBanner2VM.add(new BannerVM("/", "https://cf.shopee.vn/file/ca3c8e0cbb068635c9df92310df1fbbd", "Ads"));

        ArrayList<BannerVM> listBanner3VM = new ArrayList<>();
        listBanner3VM.add(new BannerVM("/", "https://cf.shopee.vn/file/ca3c8e0cbb068635c9df92310df1fbbd", "Ads"));
        listBanner3VM.add(new BannerVM("/", "https://cf.shopee.vn/file/ca3c8e0cbb068635c9df92310df1fbbd", "Ads"));
        listBanner3VM.add(new BannerVM("/", "https://cf.shopee.vn/file/ca3c8e0cbb068635c9df92310df1fbbd", "Ads"));


        PaginableItemList<Product> paginableItemListHotProducts = productService.getListProducts(4, 0);
        ArrayList<ProductVM> listHotProductsVM = new ArrayList<>();
        ModelMapper modelMapper = new ModelMapper();
        for (Product product : paginableItemListHotProducts.getListData()) {
            ProductVM productVM = modelMapper.map(product, ProductVM.class);
            listHotProductsVM.add(productVM);
        }

        PaginableItemList<Product> paginableItemListHotShirts = productService.getListProducts(4, 1);
        ArrayList<ProductVM> listHotShirtsVM = new ArrayList<>();
        for (Product product : paginableItemListHotShirts.getListData()) {
            ProductVM productVM = modelMapper.map(product, ProductVM.class);
            listHotShirtsVM.add(productVM);
        }

        PaginableItemList<Product> paginableItemListHotTrousers = productService.getListProducts(4, 2);
        ArrayList<ProductVM> listHotTrousersVM = new ArrayList<>();
        for (Product product : paginableItemListHotTrousers.getListData()) {
            ProductVM productVM = modelMapper.map(product, ProductVM.class);
            listHotTrousersVM.add(productVM);
        }

        PaginableItemList<Product> paginableItemListHotShoes = productService.getListProducts(4, 3);
        ArrayList<ProductVM> listHotShoesVM = new ArrayList<>();
        for (Product product : paginableItemListHotShoes.getListData()) {
            ProductVM productVM = modelMapper.map(product, ProductVM.class);
            listHotShoesVM.add(productVM);
        }

        PaginableItemList<Product> paginableItemListHotAccessories = productService.getListProducts(4, 4);
        ArrayList<ProductVM> listHotAccessoriesVM = new ArrayList<>();
        for (Product product : paginableItemListHotAccessories.getListData()) {
            ProductVM productVM = modelMapper.map(product, ProductVM.class);
            listHotAccessoriesVM.add(productVM);
        }

        vm.setBanner1(listBanner1VM);
        vm.setBanner2(listBanner2VM);
        vm.setBanner3(listBanner3VM);
        vm.setListHotProducts(listHotProductsVM);
        vm.setListHotShirts(listHotShirtsVM);
        vm.setListHotTrousers(listHotTrousersVM);
        vm.setListHotShoes(listHotShoesVM);
        vm.setListHotAccessories(listHotAccessoriesVM);

        model.addAttribute("vm", vm);
        return "index";
    }
}
