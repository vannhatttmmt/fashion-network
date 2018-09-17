package application.viewmodel.shoppingcart;

import application.model.CartDataModel;
import application.viewmodel.common.LayoutHeaderVM;

import java.util.ArrayList;

/**
 * Created by hoangmanh on 7/9/18.
 */
public class ShoppingCartVM extends LayoutHeaderVM {
    private ArrayList<CartDataModel> listCartVM;

    public ArrayList<CartDataModel> getListCartVM() {
        return listCartVM;
    }

    public void setListCartVM(ArrayList<CartDataModel> listCartVM) {
        this.listCartVM = listCartVM;
    }
}
