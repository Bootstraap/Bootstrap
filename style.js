function submitForm() {
    var sheet = document.getElementById(&#39;HTML12&#39;).innerText.replace(&#39;sheet\n&#39;,&#39;&#39;);
  var name = document.getElementById(&quot;fullname&quot;).value.trim();
  var email = document.getElementById(&quot;phone&quot;).value.trim();
  var message = document.getElementById(&quot;entry-title topic-title&quot;).textContent.trim(); // Get text content of span
      var formData = new FormData();
  formData.append(&quot;name&quot;, name);
  formData.append(&quot;email&quot;, email);
  formData.append(&quot;message&quot;, message);

  var xhr = new XMLHttpRequest();
    
    function validatePhoneNumber(phoneNumber) {
    // التحقق من أن الرقم يبدأ بـ &quot;05&quot; أو &quot;06&quot;
    if (!/^05|^06|^07/.test(phoneNumber)) {
        return false;
    }
    
    // التحقق من صحة الرقم بشكل عام
    if (!/^\d{10}$/.test(phoneNumber)) {
        return false;
    }
    
    // تمرير جميع الاختبارات
    return true;
}
   
    var phoneNumber = document.getElementById(&quot;phone&quot;).value; // يمكنك تغيير هذا الرقم
if (validatePhoneNumber(phoneNumber)) {
   
  xhr.open(&quot;POST&quot;,sheet, true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      alert(&#39;Form submitted successfully!&#39;);
    } else {
      alert(&#39;Failed to submit form. Please try again later.&#39;);
    }
  };
  xhr.onerror = function () {
    alert(&#39;Failed to submit form. Please try again later.&#39;);
  };
  xhr.send(formData);
} 
   
  else {
    
   document.getElementById(&quot;phone&quot;).setCustomValidity(&#39;رقم الهاتف خاطئ &#39;)
}
}
   

  

   
 </script> 
  <script> 
                  
                            document.addEventListener(&quot;DOMContentLoaded&quot;, function(){
  
  var cusid_ele = document.getElementsByClassName(&#39;newprice&#39;);
  for (var i = 0; i &lt; cusid_ele.length; ++i) {
  
var url = document.getElementsByClassName(&#39;newprice&#39;)[i].innerText;

// تقسيم العنوان باستخدام الشرطة (/) كفاصل
var parts = url.split(&#39;/&#39;);

// الحصول على آخر كلمة بعد الشرطة (/)
var lastWord = parts[parts.length - 1];

// طباعة الكلمة النهائية في وحدة التحكم

 
var numericValue = parseInt(lastWord);
 
 
  
  
 

    var item = cusid_ele[i];  
    item.innerHTML = numericValue +currency;
document.getElementsByClassName(&#39;oldprice&#39;)[i].innerText = numericValue + 1300 + currency ;
    
}
  document.getElementsByClassName(&#39;postTopTag&#39;)[0].style.display = &quot;block&quot;;     
    document.getElementsByTagName(&#39;u&#39;)[0].outerHTML=document.getElementsByClassName(&#39;PostRandomTitle&#39;)[0].innerHTML;
    document.getElementsByClassName(&#39;PostRandomTitle&#39;)[0].remove();
 
 
      }); 
