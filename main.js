// Load toàn bộ nội dung trước
document.addEventListener("DOMContentLoaded", function() {
    // sự kiện onclick cho nút download
    var downLoad = document.getElementById("download");
    var contact = document.getElementById("contact");

    downLoad.onclick = function() {
        alert("CV has been downloaded!");
    }
    contact.onclick = function() {
        alert("You can inbox me by facebook: https://www.facebook.com/coongsanh.9991/ \nThanks!!!")
    }
}, false)