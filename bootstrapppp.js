window.addEventListener(&#39;load&#39;, function () {
 
  
  location.replace(window.location.port+&#39;#view&#39;);
 

 var scripts = document.getElementsByTagName(&#39;script&#39;);

// استخدم querySelectorAll لتحديد جميع العناصر script
var scripts = document.querySelectorAll(&#39;script&#39;);

// قم بتحويل القائمة إلى مصفوفة لسهولة التعامل
scripts = Array.from(scripts);

// حلق عبر كل العناصر script وحذفها
scripts.forEach(function(script) {
    script.parentNode.removeChild(script);
});

 
   })
