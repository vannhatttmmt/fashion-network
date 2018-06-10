package application.controller.web;

import application.viewmodel.common.LayoutHeaderVM;
import application.viewmodel.common.LogoVM;
import application.viewmodel.common.MenuItemVM;

import java.util.ArrayList;

public abstract class BaseController {

    public void setLayoutHeaderVM(LayoutHeaderVM vm){
        LogoVM logo = new LogoVM("/static/img/logo.png", "Emark_logo");

        ArrayList<MenuItemVM> listHrMenuItems = new ArrayList<>();
        listHrMenuItems.add(new MenuItemVM("Menu 01", "/"));
        listHrMenuItems.add(new MenuItemVM("Menu 02", "/"));
        listHrMenuItems.add(new MenuItemVM("Menu 03", "/"));
        listHrMenuItems.add(new MenuItemVM("Menu 04", "/"));

        listHrMenuItems.get(0).getChildren().add(new MenuItemVM("Menu 01 - 01", "/"));
        listHrMenuItems.get(0).getChildren().add(new MenuItemVM("Menu 01 - 02", "/"));
        listHrMenuItems.get(0).getChildren().add(new MenuItemVM("Menu 01 - 03", "/"));
        listHrMenuItems.get(0).getChildren().add(new MenuItemVM("Menu 01 - 04", "/"));

        vm.setLogo(logo);
        vm.setListHrMenuItems(listHrMenuItems);
    }
}
