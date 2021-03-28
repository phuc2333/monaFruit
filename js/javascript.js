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
        // attr lấy giá trị thuộc tính của id là en hoac là vn
        console.log(lang);
        //jQuery each function được sử dụng để lặp qua từng phần tử của jQuery object.
        $('.lang').each(function(index, item) {
            // ta duyệt arrlang thay đổi theo thứ tự đã có sẵn
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
    });
});



// xu ly phan ontop an hien khi cuon chuot(cái nút mũi tên xanh click để cuộn trang lên đầu)
$(function() {
    $(window).scroll(function(event) {
        var vitri = $('html,body').scrollTop();
        var top = $(".gotop");
        if (vitri >= 1000) {
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

//slide one picture
var index = 1;
stopscreen = function() {
    var imgs = ["banner-1.jpg", "banner-2.jpg"];
    document.getElementById('img').src = imgs[index];
    index++;
    if (index == 2) {
        index = 0;
    }
}

setInterval(stopscreen, 6000);

// slide many pictures


var span = document.querySelectorAll(".slide-fruit span")
li = document.querySelectorAll(".slide-fruit ul li");
console.log(span);
console.log(li);

var l = 0;
span[1].onclick = () => {
    l++;
    for (var i of li) {
        if (l == 0) { i.style.left = "0px"; }
        if (l == 1) { i.style.left = "-700px"; }
        if (l > 1) { l = 0; }
    }
    console.log(l);
}
span[0].onclick = () => {
    l--;
    for (var i of li) {
        if (l == 0) { i.style.left = "0px"; }
        if (l == 1) { i.style.left = "-700px"; }

        if (l < 0) { l = 1; }
    }
    console.log(l);
}

// slide many logoes
var spans = document.querySelectorAll(".trademark span")
lis = document.querySelectorAll(".trademark ul li");
console.log(spans);
console.log(lis);

var l = 0;
spans[1].onclick = () => {
    l++;
    for (var i of lis) {
        if (l == 0) { i.style.left = "-230px"; };
        if (l == 1) { i.style.left = "-680px"; }
        if (l > 1) { l = 0; };
        if (l == -2) { i.style.left = "-230px"; };
        if (l == -1) { i.style.left = "-680px"; };
    }
    console.log(l);
}
spans[0].onclick = () => {
        l--;
        for (var i of lis) {
            if (l == 0) { i.style.left = "0px"; }
            if (l == 1) { i.style.left = "-230px"; }
            if (l == 2) { i.style.left = "-680px"; }
            if (l < 0) { i.style.left = "-680px"; }
            if (l == -2) { i.style.left = "-230px"; }
            if (l == -3) { i.style.left = "0px"; }
            if (l < -3) { l = -1 }
        }
        console.log(l);
    }
    // Get the modal(log in)
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
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