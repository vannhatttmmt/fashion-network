package application.viewmodel.home;

import application.viewmodel.common.LayoutHeaderVM;
import application.viewmodel.common.LogoVM;
import application.viewmodel.common.MenuItemVM;
import application.viewmodel.common.ProductVM;

import java.util.ArrayList;

public class HomeLandingVM extends LayoutHeaderVM {
    private LogoVM logo;
    private ArrayList<MenuItemVM> listHomeMenuItems;
    private  ArrayList<BannerVM> banner1;
    private  ArrayList<BannerVM> banner2;
    private  ArrayList<BannerVM> banner3;
    private ArrayList<ProductVM> listHotProducts;
    private ArrayList<ProductVM> listHotShirts;
    private ArrayList<ProductVM> listHotTrousers;
    private ArrayList<ProductVM> listHotShoes;
    private ArrayList<ProductVM> listHotAccessories;

    public LogoVM getLogo() {
        return logo;
    }

    public void setLogo(LogoVM logo) {
        this.logo = logo;
    }


    public ArrayList<MenuItemVM> getListHomeMenuItems() {
        return listHomeMenuItems;
    }

    public void setListHomeMenuItems(ArrayList<MenuItemVM> listHomeMenuItems) {
        this.listHomeMenuItems = listHomeMenuItems;
    }

    public ArrayList<BannerVM> getBanner1() {
        return banner1;
    }

    public void setBanner1(ArrayList<BannerVM> banner1) {
        this.banner1 = banner1;
    }

    public ArrayList<BannerVM> getBanner2() {
        return banner2;
    }

    public void setBanner2(ArrayList<BannerVM> banner2) {
        this.banner2 = banner2;
    }

    public ArrayList<BannerVM> getBanner3() {
        return banner3;
    }

    public void setBanner3(ArrayList<BannerVM> banner3) {
        this.banner3 = banner3;
    }

    public ArrayList<ProductVM> getListHotProducts() {
        return listHotProducts;
    }

    public void setListHotProducts(ArrayList<ProductVM> listHotProducts) {
        this.listHotProducts = listHotProducts;
    }

    public ArrayList<ProductVM> getListHotShirts() {
        return listHotShirts;
    }

    public void setListHotShirts(ArrayList<ProductVM> listHotShirts) {
        this.listHotShirts = listHotShirts;
    }

    public ArrayList<ProductVM> getListHotTrousers() {
        return listHotTrousers;
    }

    public void setListHotTrousers(ArrayList<ProductVM> listHotTrousers) {
        this.listHotTrousers = listHotTrousers;
    }

    public ArrayList<ProductVM> getListHotShoes() {
        return listHotShoes;
    }

    public void setListHotShoes(ArrayList<ProductVM> listHotShoes) {
        this.listHotShoes = listHotShoes;
    }

    public ArrayList<ProductVM> getListHotAccessories() {
        return listHotAccessories;
    }

    public void setListHotAccessories(ArrayList<ProductVM> listHotAccessories) {
        this.listHotAccessories = listHotAccessories;
    }
}
