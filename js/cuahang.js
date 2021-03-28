// load
$(window).on("load", function() {
    $(".loader-wrapper").fadeOut("slow");
});

// translate

var arrLang = new Array();
arrLang['en'] = new Array();
arrLang['vn'] = new Array();

// English content


arrLang['vn']['home'] = 'Trang chủ';
arrLang['vn']['intro'] = 'Giới thiệu';
arrLang['vn']['shop'] = 'Cửa hàng';
arrLang['vn']['knowledge'] = 'Kiến thức';
arrLang['vn']['contact'] = 'Liên hệ';
arrLang['vn']['vegetables'] = 'Rau củ';
arrLang['vn']['fruits'] = 'Trái cây';
arrLang['vn']['drinks'] = 'Đồ uống';
arrLang['vn']['foods'] = 'Đồ khô';
// vietnamese
// Please change to your own language

arrLang['en']['home'] = 'Home';
arrLang['en']['intro'] = 'About us';
arrLang['en']['shop'] = 'Shop';
arrLang['en']['knowledge'] = 'Knowledge';
arrLang['en']['contact'] = 'Contact us';
arrLang['en']['vegetables'] = 'Vegetables';
arrLang['en']['fruits'] = 'Fruits';
arrLang['en']['drinks'] = 'Drinks';
arrLang['en']['foods'] = 'Dry Food';
// Process translation
$(function() {
    $('.translating').click(function() {
        var lang = $(this).attr('id');

        $('.lang').each(function(index, item) {
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
    });
});


// xu ly phan ontop an hien khi cuon chuot
$(function() {
    $(window).scroll(function(event) {
        var vitri = $('html,body').scrollTop();
        var top = $(".gotop");
        if (vitri >= 100) {
            $(".gotop").show();
        } else {
            $(".gotop").hide();
        }
    });
});

// xu ly menu an hien

$(function() {
    $(window).scroll(function(event) {
        var vitri = $('html,body').scrollTop();
        if (vitri >= 200) {
            $('.header').addClass('bienhinh');
        } else {
            $('.header').removeClass('bienhinh');
        }
    });
});

// Get the modal(log in)
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//  an nut dang ky gmail chuyen sang 1 trang khac ma ko can dung the link a
function dieuhuong() {
    location.replace("index.html");
}

function giohang() {
    location.replace("giohang.html");
}
// the modal search
// Open the full screen search box
function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
}

// Close the full screen search box
function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}

// change product
$('.sorthigh').hide();
$('#myOptions').change(function() {
    // val lấy giá trị thuộc tính
    var val = $("#myOptions option:selected").val();
    console.log(val);


    if (val == 'option1') {

        $('.content-one.numberone').show();
        $('.content-one.numbertwo').show();
        $('.content-one.numberthree').show();
        $('.content-one.numberfour').show();
        $('.content-one.numberfive').show();
        $('.content-one.numbersix').show();
        $('.sorthigh').hide(1000);
        $('.List_content').show(1000);
    }
    if (val == 'option2') {
        $('.content-one.numberone').hide();
        $('.content-one.numbertwo').hide();
        $('.content-one.numberthree').hide();
        $('.content-one.numberfour').hide();
        $('.content-one.numberfive').show();
        $('.content-one.numbersix').show();
        $('.sorthigh').hide(1000);
        $('.List_content').show(1000);
    }
    if (val == 'option3') {
        $('.content-one.numberfive').hide();
        $('.content-one.numbersix').hide();
        $('.sorthigh').hide(1000);
        $('.List_content').show(1000);
    }
    if (val == 'option4') {
        $('.List_content').hide(1000);
        $('.sorthigh').show(1000);
        $('.content-one.numberone').show();
        $('.content-one.numbertwo').show();
        $('.content-one.numberthree').show();
        $('.content-one.numberfour').show();
        $('.content-one.numberfive').show();
        $('.content-one.numbersix').show();
    }
});


//search

$(document).ready(function() {
    $('#search_item').on('keyup', function(event) {
        event.preventDefault();
        // lay du lieu trong the input chap nhan chu hoa qua toLowerCase
        // val lay gia tri input hien tai hoac khi gia tri thay doi
        var tukhoa = $(this).val().toLowerCase();
        console.log(tukhoa);
        // filter Giúp lọc các thành phần trong một nhóm các thành phần giống nhau.
        // toggle Hiển thị và ẩn các thành phần phù hợp.voi doan text nhap duoc la cac chu cai hoa 
        /// va do dai chuoi lon hon -1
        $('.List_content .content-one').filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(tukhoa) > -1);
        });
    });

});
// Phương thức preventDefault() của đối tượng event được sử dụng để ngăn chặn cách xử lý mặc 
// định của trình duyệt khi xảy ra sự kiện. 
// đồng thời ngăn cản trình duyệt chuyển tiếp người dùng tới trang đích của link liên kết.

//cái này search phần sắp xếp khi chọn comobox
$(document).ready(function() {
    $('#search_item').on('keyup', function(event) {
        event.preventDefault();

        var tukhoa = $(this).val().toLowerCase();

        //  console.log(tukhoa);
        $('.sorthigh .content-one').filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(tukhoa) > -1);
        });
    });
});