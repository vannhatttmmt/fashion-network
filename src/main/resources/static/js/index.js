/**
 * Created by hoangmanh on 6/5/18.
 */
$(document).ready(function () {

    $(".btn-add2cart").on("click", function () {
        var pdInfo = $(this).data("product");
        console.log($(this).data("product"));
        NProgress.start();
        axios.get("/order/shop/cart/add/" + pdInfo).then(function(res){
            NProgress.done();

        }, function(err){
            NProgress.done();
        })
    });

    // ----------------------Delete Product out Cart-----------------------

    $(".remove-out-cart").on("click", function () {
        var pdInfo = $(this).data("product");
        swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true
        }).then(function(result) {
            if (result.value) {
                NProgress.start();
                axios.post("/order/delete-product-cart", {
                    productId: pdInfo
                }).then(function(res){
                    NProgress.done();
                    if(res.data.success) {
                        swal(
                            'Good job!',
                            res.data.message,
                            'success'
                        ).then(function() {
                            location.reload();
                        });
                    } else {
                        swal(
                            'Error',
                            res.data.message,
                            'error'
                        );
                    }
                }, function(err){
                    NProgress.done();
                    swal(
                        'Error',
                        'Some error when saving product',
                        'error'
                    );
                })
            }
        })
    });


});
