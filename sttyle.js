function submitForm() {
   
    var sheet = document.getElementById('HTML12').innerText.replace('sheet\n','');
  var name = document.getElementById("fullname").value.trim();
  var email = document.getElementById("phone").value.trim();
  var message = document.getElementById("entry-title topic-title").textContent.trim(); // Get text content of span
   var wilaya = document.getElementById("states").value.replace(/-[^-]*$/, "").replace(/.*?- /, "");
   var com = document.getElementById("city").value.trim(); // Get text content of span
   var total = document.getElementById("total").textContent.trim(); // Get text content of span
   
      var formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("message", message);
    formData.append("wilaya", wilaya);
  formData.append("com", com);
  formData.append("total", total);

  var xhr = new XMLHttpRequest();
    
    function validatePhoneNumber(phoneNumber) {
    // التحقق من أن الرقم يبدأ بـ "05" أو "06"
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
   
    var phoneNumber = document.getElementById("phone").value; // يمكنك تغيير هذا الرقم
if (validatePhoneNumber(phoneNumber)) {
   
    
   
  xhr.open("POST",sheet, true);
  xhr.onload = function () {
    if (xhr.status === 200) {
   
     
     document.getElementsByClassName('blog-posts hfeed')[0].outerHTML=document.getElementById("HTML14").outerHTML+document.getElementById('summary').outerHTML; 
    } else {
      alert('فشل في ارسال الطلب حاول مجددا او اتصل بنا.');
   document.getElementById('submitForm').innerHTML='<input type="submit" onclick="submitForm()" value="تأكيد الطلبية">'
    }
  };
  xhr.onerror = function () {
    alert('فشل في ارسال الطلب حاول مجددا او اتصل بنا .');
      document.getElementById('submitForm').innerHTML='<input type="submit" onclick="submitForm()" value="تأكيد الطلبية">'
  };
   event.preventDefault();
  xhr.send(formData);
   
   document.getElementById('submitForm').classList='submitFormx';
   document.getElementById('submitForm').innerHTML='<div class="loader">';
   location.replace(window.location.port+'#Purchase');
} 
   
  else {
    
   document.getElementById("phone").setCustomValidity('رقم الهاتف خاطئ ');
  
}
}
   
 
  
 
   
 
                  
  document.addEventListener("DOMContentLoaded", function(){
  
  var cusid_ele = document.getElementsByClassName('newprice');
  for (var i = 0; i < cusid_ele.length; ++i) {
  
var url = document.getElementsByClassName('newprice')[i].innerText;

// تقسيم العنوان باستخدام الشرطة (/) كفاصل
var parts = url.split('/');

// الحصول على آخر كلمة بعد الشرطة (/)
var lastWord = parts[parts.length - 1];

// طباعة الكلمة النهائية في وحدة التحكم

 
var numericValue = parseInt(lastWord);
 
 
  
  
 

    var item = cusid_ele[i];  
    item.innerHTML = numericValue +currency;
document.getElementsByClassName('oldprice')[i].innerText = numericValue + 1300 + currency ;
 
    
}
  document.getElementsByClassName('postTopTag')[0].style.display = "block";     
     if (document.getElementsByTagName('u').length > 1) {
    document.getElementsByTagName('u')[0].outerHTML=document.getElementsByClassName('PostRandomTitle')[0].innerHTML;
} else {
  document.getElementsByClassName('blog-posts hfeed')[0].outerHTML=document.getElementsByClassName('PostRandomTitle')[0].innerHTML;
}
    
    document.getElementsByClassName('PostRandomTitle')[0].remove();
 document.getElementById("total").innerText = numericValue  + currency ;
  
 
      }); 
   
   
 var stateSelect = document.getElementById("states");
data.ولايات.forEach(state => {
  var option = document.createElement("option");
  option.textContent = state.اسم_ar + " - " + state.اسم_fr;
  stateSelect.appendChild(option);
});

// تحديث القائمة عند تغيير ال
function updateDeliveryPrice() {
  var stateSelect = document.getElementById("states");
 
  var deliveryPrice = document.getElementById("tawsil");

  var selectedState = stateSelect.value;

  if (selectedState !== "") {
    var stateData = data.ولايات.find(state => (state.اسم_ar + " - " + state.اسم_fr) === selectedState);
    deliveryPrice.textContent = stateData.سعر_التوصيل +currency;
 
   
   var totalText = document.getElementById("total").innerText;

// استخراج الأرقام فقط من النص
var totalNumber = parseFloat(totalText.replace(/[^\d.-]/g, ''));

 totalNumber += stateData.سعر_التوصيل;

// عرض الناتج في العنصر بمعرف "total" بعد تحويله إلى نص
document.getElementById("total").innerText = totalNumber.toString()+currency;
   
   
   
  }
}
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
