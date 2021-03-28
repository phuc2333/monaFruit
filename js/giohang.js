// load
$(window).on("load",function () {
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
     }
     else{
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
     }
     else{
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
function dieuhuong(){
  location.replace("index.html");
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
 
// xu ly phan click hien thi list anh hoa qua trang gio hang
function changeimg(id) {
   let imgPath = document.getElementById(id).getAttribute('src');
    document.getElementById('img-main').setAttribute('src',imgPath);
}

// xu ly phan hien thi nhan xet danh gia trang gio hang
$(".nhanxet").hide();
$( ".mota" ).click(function() {
  $(".one").show();
    $(".two").show();
    $(".three").show();
  $(".nhanxet").hide();
  $(".mota").css({ 'color': '#ffffff', 'background-color': 'rgb(134,186,9)' });
  $(".danhgia").css({  'background-color': 'rgb(238,238,238)','color':'black' });
});
$( ".danhgia" ).click(function() {
  $(".one").hide();
  $(".two").hide();
  $(".three").hide();
  $(".nhanxet").show();
  $(".mota").css({  'background-color': 'rgb(238,238,238)','color':'black' });
  $(".danhgia").css({ 'color': '#ffffff', 'background-color': 'rgb(134,186,9)' });
});

// xu ly phan click danh gia star
$( document ).on('click','.content .nhanxet ul li',function(){
 // Phương thức siblings() trả về tất cả các phần tử anh chị em của phần tử được chọn.
  $(this).addClass('active').siblings().removeClass('active')

});



