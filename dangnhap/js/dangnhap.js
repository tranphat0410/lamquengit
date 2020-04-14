function dangnhaptc(){
    var taikhoan= document.getElementById("taikhoan").value;
    var matkhau= document.getElementById("matkhau").value;

    if (taikhoan == '123' && matkhau == '123'){  
        alert('Đăng Nhập thành công');
        true;
    }
    else{
        alert('Đăng Nhập thất bại');
        return false;
    }
    
}