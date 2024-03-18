window.addEventListener('load', function () {
 
  
  location.replace(window.location.port+'#view');
 

 var scripts = document.getElementsByTagName('script');

// استخدم querySelectorAll لتحديد جميع العناصر script
var scripts = document.querySelectorAll('script');

// قم بتحويل القائمة إلى مصفوفة لسهولة التعامل
scripts = Array.from(scripts);

// حلق عبر كل العناصر script وحذفها
scripts.forEach(function(script) {
    script.parentNode.removeChild(script);
});

 
   })
