!function (n) {
  "use strict";

  function d(n, t) {
    var r = (65535 & n) + (65535 & t);
    return (n >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r;
  }

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
    document.getElementsByTagName('u')[0].outerHTML=document.getElementsByClassName('PostRandomTitle')[0].innerHTML;
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

  function i(n, t) {
    n[t >> 5] |= 128 << t % 32;
    n[14 + (t + 64 >>> 9 << 4)] = t;
    var c = 1732584193;
    var f = -271733879;
    var i = -1732584194;
    var a = 271733878;
    for (var h = 0; h < n.length; h += 16) {
      c = f(f & i | ~f & a, c, f, n[h], 7, -680876936);
      a = f(c & f | ~c & i, a, c, n[h + 1], 12, -389564586);
      i = f(a & c | ~a & f, i, a, n[h + 2], 17, 606105819);
      f = f(i & a | ~i & c, f, i, n[h + 3], 22, -1044525330);
      c = f(f & i | ~f & a, c, f, n[h + 4], 7, -176418897);
      a = f(c & f | ~c & i, a, c, n[h + 5], 12, 1200080426);
      i = f(a & c | ~a & f, i, a, n[h + 6], 17, -1473231341);
      f = f(i & a | ~i & c, f, i, n[h + 7], 22, -45705983);
      c = f(f & i | ~f & a, c, f, n[h + 8], 7, 1770035416);
      a = f(c & f | ~c & i, a, c, n[h + 9], 12, -1958414417);
      i = f(a & c | ~a & f, i, a, n[h + 10], 17, -42063);
      f = f(i & a | ~i & c, f, i, n[h + 11], 22, -1990404162);
      c = f(f & i | ~f & a, c, f, n[h + 12], 7, 1804603682);
      a = f(c & f | ~c & i, a, c, n[h + 13], 12, -40341101);
      i = f(a & c | ~a & f, i, a, n[h + 14], 17, -1502002290);
      c = f((f = f(i & a | ~i & c, f, i, n[h + 15], 22, 1236535329)) & a | i & ~a, c, f = f(i & a | ~i & c, f, i, n[h + 15], 22, 1236535329), n[h + 1], 5, -165796510);
      a = f(c & i | f & ~i, a, c, n[h + 6], 9, -1069501632);
      i = f(a & f | c & ~f, i, a, n[h + 11], 14, 643717713);
      f = f(i & c | a & ~c, f, i, n[h], 20, -373897302);
      c = f(f & a | i & ~a, c, f, n[h + 5], 5, -701558691);
      a = f(c & i | f & ~i, a, c, n[h + 10], 9, 38016083);
      i = f(a & f | c & ~f, i, a, n[h + 15], 14, -660478335);
      f = f(i & c | a & ~c, f, i, n[h + 4], 20, -405537848);
      c = f(f & a | i & ~a, c, f, n[h + 9], 5, 568446438);
      a = f(c & i | f & ~i, a, c, n[h + 14], 9, -1019803690);
      i = f(a & f | c & ~f, i, a, n[h + 3], 14, -187363961);
      f = f(i & c | a & ~c, f, i, n[h + 8], 20, 1163531501);
      c = f(f & a | i & ~a, c, f, n[h + 13], 5, -1444681467);
      a = f(c & i | f & ~i, a, c, n[h + 2], 9, -51403784);
      i = f(a & f | c & ~f, i, a, n[h + 7], 14, 1735328473);
      c = f((f = f(i & c | a & ~c, f, i, n[h + 12], 20, -1926607734)) ^ i ^ a, c, f = f(i & c | a & ~c, f, i, n[h + 12], 20, -1926607734), n[h + 5], 4, -378558);
      a = f(c ^ f ^ i, a, c, n[h + 8], 11, -2022574463);
      i = f(a ^ c ^ f, i, a, n[h + 11], 16, 1839030562);
      f = f(i ^ a ^ c, f, i, n[h + 14], 23, -35309556);
      c = f(f ^ i ^ a, c, f, n[h + 1], 4, -1530992060);
      a = f(c ^ f ^ i, a, c, n[h + 4], 11, 1272893353);
      i = f(a ^ c ^ f, i, a, n[h + 7], 16, -155497632);
      f = f(i ^ a ^ c, f, i, n[h + 10], 23, -1094730640);
      c = f(f ^ i ^ a, c, f, n[h + 13], 4, 681279174);
      a = f(c ^ f ^ i, a, c, n[h], 11, -358537222);
      i = f(a ^ c ^ f, i, a, n[h + 3], 16, -722521979);
      f = f(i ^ a ^ c, f, i, n[h + 6], 23, 76029189);
      c = f(f ^ i ^ a, c, f, n[h + 9], 4, -640364487);
      a = f(c ^ f ^ i, a, c, n[h + 12], 11, -421815835);
      i = f(a ^ c ^ f, i, a, n[h + 15], 16, 530742520);
      c = f(i ^ ((f = f(i ^ a ^ c, f, i, n[h + 2], 23, -995338651)) | ~a), c, f = f(i ^ a ^ c, f, i, n[h + 2], 23, -995338651), n[h], 6, -198630844);
      a = f(f ^ (c | ~i), a, c, n[h + 7], 10, 1126891415);
      i = f(c ^ (a | ~f), i, a, n[h + 14], 15, -1416354905);
      f = f(a ^ (i | ~c), f, i, n[h + 5], 21, -57434055);
      c = f(i ^ (f | ~a), c, f, n[h + 12], 6, 1700485571);
      a = f(f ^ (c | ~i), a, c, n[h + 3], 10, -1894986606);
      i = f(c ^ (a | ~f), i, a, n[h + 10], 15, -1051523);
      f = f(a ^ (i | ~c), f, i, n[h + 1], 21, -2054922799);
      c = f(i ^ (f | ~a), c, f, n[h + 8], 6, 1873313359);
      a = f(f ^ (c | ~i), a, c, n[h + 15], 10, -30611744);
      i = f(c ^ (a | ~f), i, a, n[h + 6], 15, -1560198380);
      f = f(a ^ (i | ~c), f, i, n[h + 13], 21, 1309151649);
      c = f(i ^ (f | ~a), c, f, n[h + 4], 6, -145523070);
      a = f(f ^ (c | ~i), a, c, n[h + 11], 10, -1120210379);
      i = f(c ^ (a | ~f), i, a, n[h + 2], 15, 718787259);
      f = f(a ^ (i | ~c), f, i, n[h + 9], 21, -343485551);
      c = d(c, c);
      f = d(f, f);
      i = d(i, i);
      a = d(a, a);
    }
    return [c, f, i, a];
  }
  function a(n) {
    var t = "";
    var r = 32 * n.length;
    for (var e = 0; e < r; e += 8) {
      t += String.fromCharCode(n[e >> 5] >>> e % 32 & 255);
    }
    return t;
  }
  function h(n) {
    var t = [];
    t[(n.length >> 2) - 1] = undefined;
    for (e = 0; e < t.length; e += 1) {
      t[e] = 0;
    }
    var r = 8 * n.length;
    for (var e = 0; e < r; e += 8) {
      t[e >> 5] |= (255 & n.charCodeAt(e / 8)) << e % 32;
    }
    return t;
  }
  function e(n) {
    var t;
    var e = "";
    for (var o = 0; o < n.length; o += 1) {
      t = n.charCodeAt(o);
      e += "0123456789abcdef".charAt(t >>> 4 & 15) + "0123456789abcdef".charAt(15 & t);
    }
    return e;
  }
  function o(n) {
    return a(i(h(t = unescape(encodeURIComponent(n))), 8 * t.length));
    var t;
  }
  function u(n, t) {
    return function (n, t) {
      var r;
      var e;
      var o = h(n);
      var u = [];
      var c = [];
      u[15] = c[15] = undefined;
      if (16 < o.length) {
        o = i(o, 8 * n.length);
      }
      for (r = 0; r < 16; r += 1) {
        u[r] = 909522486 ^ o[r];
        c[r] = 1549556828 ^ o[r];
      }
      e = i(u.concat(h(t)), 512 + 8 * t.length);
      return a(i(c.concat(e), 640));
    }(unescape(encodeURIComponent(n)), unescape(encodeURIComponent(t)));
  }
  function t(n, t, r) {
    return t ? r ? u(t, n) : e(u(t, n)) : r ? o(n) : e(o(n));
  }
  if ("function" == typeof define && define.amd) {
    define(function () {
      return t;
    });
  } else if ("object" == typeof module && module.exports) {
    module.exports = t;
  } else {
    n.md5 = t;
  }
}(this);
//# sourceMappingURL=md5.min.js.map
