package application.controller.api;

import application.data.model.Category;
import application.data.model.Product;
import application.data.service.CategoryService;
import application.data.service.ProductService;
import application.model.*;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.Random;

@RestController
@RequestMapping("/api/product")
public class ProductApiController {

    @Autowired
    private ProductService productService;

    @Autowired
    private CategoryService categoryService;

    @PostMapping("/create-product")
    public BaseApiResult createProduct(@RequestBody ProductDataModel product) {
        DataApiResult result = new DataApiResult();

        try {
            if(!"".equals(product.getName()) && !"".equals(product.getShortDesc()) && !"".equals(product.getImage())
            && !"".equals(product.getPrice())) {
                ModelMapper modelMapper = new ModelMapper();
                Product productEntity = modelMapper.map(product, Product.class);
                productEntity.setCategory(categoryService.getOne(product.getCategoryId()));
                productService.addNewProduct(productEntity);
                result.setSuccess(true);
                result.setMessage("Save product successfully: " + productEntity.getId());
                result.setData(productEntity.getId());
            } else {
                result.setSuccess(false);
                result.setMessage("Invalid model");
            }
        } catch (Exception e) {
            result.setSuccess(false);
            result.setMessage(e.getMessage());
        }

        return result;
    }

    @GetMapping("/detail/{productId}")
    public BaseApiResult detailProduct(@PathVariable int productId) {
        DataApiResult result = new DataApiResult();

        try {
            Product existProduct = productService.findOne(productId);
            if (existProduct == null) {
                result.setSuccess(false);
                result.setMessage("Product Not Found");
            } else {
                result.setSuccess(true);
                result.setMessage("Found");
                ModelMapper modelMapper = new ModelMapper();
                ProductDetailModel productDetailModel = modelMapper.map(existProduct, ProductDetailModel.class);
                result.setData(productDetailModel);
            }
        } catch (Exception e) {
            result.setSuccess(false);
            result.setMessage(e.getMessage());
        }
        return result;
    }

    @GetMapping("/list-products/{categoryId}")
    public BaseApiResult listProductByCat(@PathVariable int categoryId) {
        DataApiResult result = new DataApiResult();
        try{
            Category existCategory = categoryService.findOne(categoryId);
            if(existCategory == null) {
                result.setSuccess(false);
                result.setMessage("Can't find this product");
            } else {
                result.setSuccess(true);
                ModelMapper modelMapper = new ModelMapper();
                ArrayList<ProductDetailModel> listProducts = new ArrayList<>();
                if(existCategory.getProducts() != null) {
                    for (Product p : existCategory.getProducts()) {
                        ProductDetailModel productDetailModel =
                                modelMapper.map(p, ProductDetailModel.class);
                        listProducts.add(productDetailModel);
                    }
                }
                result.setData(listProducts);
            }
        } catch (Exception e) {
            result.setSuccess(false);
            result.setMessage(e.getMessage());
        }
        return result;
    }

    @PostMapping("/delete-product")
    public BaseApiResult deleteProduct(@RequestBody ProductDeleteDataModel product) {
        BaseApiResult result = new BaseApiResult();
        try {
            if (productService.deleteProduct(product.getProductId())) {
                result.setSuccess(true);
                result.setMessage("Delete Product Successfully!");
            }
        } catch (Exception e) {
            result.setSuccess(false);
            result.setMessage(e.getMessage());
        }
        return result;
    }

    @PostMapping("/update-product/{productId}")
    public BaseApiResult updateProduct(@PathVariable int productId, @RequestBody ProductDataModel product) {
        DataApiResult result = new DataApiResult();

        try {
            if (!"".equals(product.getName()) && !"".equals(product.getPrice()) &&
                    !"".equals(product.getShortDesc()) && !"".equals(product.getImage())) {
                Product existProduct = productService.findOne(productId);
                if (existProduct == null) {
                    result.setSuccess(false);
                    result.setMessage("Invalid Product");
                } else {
                    existProduct.setName(product.getName());
                    existProduct.setImage(product.getImage());
                    existProduct.setPrice(product.getPrice());
                    existProduct.setShortDesc(product.getShortDesc());
                    existProduct.setCreatedDate(product.getCreatedDate());
                    existProduct.setCategory(categoryService.getOne(product.getCategoryId()));
                    productService.updateProduct(existProduct);
                    result.setSuccess(true);
                    result.setMessage("SUCCESS TO UPDATE PRODUCT!");
                    result.setData(product);
                }
            } else {
                result.setSuccess(false);
                result.setMessage("Invalid Product");
            }
        } catch (Exception e) {
            result.setSuccess(false);
            result.setMessage(e.getMessage());
        }
        return result;
    }

    @PostMapping("/fake-products")
    public BaseApiResult fakeProduct() {
        ArrayList<Product> listProducts = new ArrayList<>();
        Random random = new Random();
        BaseApiResult result = new BaseApiResult();

        for (int i = 0; i < 10; ++i) {
            Product fakeProduct = new Product();
            fakeProduct.setName("Product " + i);
            fakeProduct.setPrice("Fake Price");
            fakeProduct.setShortDesc("Fake ShortDesc");
            fakeProduct.setCreatedDate(new Date());
            fakeProduct.setCategory(categoryService.getOne(1));
            listProducts.add(fakeProduct);
        }
        productService.addNewListProducts(listProducts);
        result.setMessage("Success");
        result.setSuccess(true);
        return result;
    }
}
