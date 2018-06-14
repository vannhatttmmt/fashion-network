$(document).ready(function () {
    var dataProduct = {};

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $('#preview-product-img').attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#input-select-img-product").change(function() {
        readURL(this);
        var formData = new FormData();
        NProgress.start();
        formData.append('file', $("#input-select-img-product")[0].files[0]);
        axios.post("/api/upload/upload-image", formData).then(function(res){
            NProgress.done();
            if(res.data.success) {
                $('#preview-product-img').attr('src', res.data.link);
                dataProduct = {
                    image: res.data.link
                };
            }
        }, function(err){
            NProgress.done();
        })
    });

    $('#datepicker-created-date-product').datetimepicker();

    $("#btn-new-product").on("click", function () {
        dataProduct = {};
        $('#preview-product-img').attr('src', '/img/default-img.jpg');
        $('#input-product-name').val("");
        $('#input-product-desc').val("");
        $('#input-product-price').val("");
        $("#input-product-category").val("1");
        $("#modal-create-product").modal();
    });

    $(".btn-edit").on("click", function () {
        var pdInfo = $(this).data("product");
        NProgress.start();
        axios.get("/api/product/detail/" + pdInfo).then(function(res){
            NProgress.done();
            if(res.data.success) {
                dataProduct.id = res.data.data.id;
                dataProduct.image = res.data.data.image;
                $("#input-product-name").val(res.data.data.name);
                $("#input-product-price").val(res.data.data.price);
                $("#input-product-desc").val(res.data.data.shortDesc);
                $("#input-product-category").val(res.data.data.category.id);
                $('#preview-product-img').attr('src', dataProduct.image);
                var createdDate = moment(res.data.data.createdDate, "YYYY-MM-DD HH:mm:ss");
                $('#datepicker-created-date-product').data("DateTimePicker").date(createdDate);
                $("#modal-create-product").modal();
            }
        }, function(err){
            NProgress.done();
        })
    });

    $(".btn-save-product").on("click", function () {
        if($("#input-product-name").val() === "" || $("#input-product-desc").val() === "" ||
            $("#input-product-price").val() === "" || dataProduct.image === undefined) {
            swal(
                'Error',
                'You need to fill all values',
                'error'
            );
            return;
        }
        var createdDate = null;
        if($("#datepicker-created-date-product").data("DateTimePicker").date()) {
            createdDate = $("#datepicker-created-date-product").data("DateTimePicker").date().format("YYYY-MM-DD HH:mm:ss");
        }

        dataProduct.name = $('#input-product-name').val();
        dataProduct.price = $('#input-product-price').val();
        dataProduct.shortDesc = $('#input-product-desc').val();
        dataProduct.createdDate = createdDate;
        dataProduct.categoryId = $('#input-product-category').val();
        console.log(dataProduct);
        NProgress.start();

        var linkPost = "/api/product/create-product";
        if(dataProduct.id) {
            linkPost = "/api/product/update-product/" + dataProduct.id;
        }

        axios.post(linkPost, dataProduct).then(function(res){
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
    });

    // ----------------------Delete Product-----------------------
    $(".btn-delete").on("click", function () {
        var pdInfo = $(this).data("product");
        swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true
        }).then(function(result) {
            if (result.value) {
                NProgress.start();
                axios.post("/api/product/delete-product", {
                    productId : pdInfo
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