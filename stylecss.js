function submitForm() {
    var sheet = document.getElementById('HTML12').innerText.replace('sheet\n','');
  var name = document.getElementById("fullname").value.trim();
  var email = document.getElementById("phone").value.trim();
  var message = document.getElementById("entry-title topic-title").textContent.trim(); // Get text content of span
      var formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("message", message);

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
      alert('Form submitted successfully!');
    } else {
      alert('Failed to submit form. Please try again later.');
    }
  };
  xhr.onerror = function () {
    alert('Failed to submit form. Please try again later.');
  };
  xhr.send(formData);
} 
   
  else {
    
   document.getElementById("phone").setCustomValidity('رقم الهاتف خاطئ ')
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
    document.getElementsByTagName('u')[0].outerHTML=document.getElementsByClassName('PostRandomTitle')[0].innerHTML;
    document.getElementsByClassName('PostRandomTitle')[0].remove();
 
 
      }); 
