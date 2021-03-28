//load
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
     if (vitri >= 1000) {
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
 
// the modal search
// Open the full screen search box
function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

// Close the full screen search box
function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}
 
 
 