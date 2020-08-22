var containstr = "%\(\)\/\/><-';";
var nicknamestr = "><-\/\/;'";
var flag = true;

String.prototype.trim = function () {
    return this.replace(/^\s*/g, "").replace(/\s*$/g, "");
}
function isChinese(name)  //中文值检测
{
    var flag = true;
    if (name.length == 0) {
        flag = false;
        return flag;
    }
    for (i = 0; i < name.length; i++) {
        if (name.charCodeAt(i) <= 128) {
            flag = false;
            break;
        }
    }
    return flag;
}

function isNumber(name)  //数值检测
{
    if (name.length == 0)
        return false;
    for (i = 0; i < name.length; i++) {
        if (name.charAt(i) < "0" || name.charAt(i) > "9")
            return false;
    }
    return true;
}

function isValidDate(iY, iM, iD) {
    //alert(iY+":"+iM+":"+iD);
    var a = new Date(iY, iM - 1, iD);  //除了只要记住月份是从0－11就不会乱了，先把取得月份减一，生成时间后获取月份时在把月份加一就对了。
    var y = a.getFullYear();
    var m = a.getMonth();
    var d = a.getDate();
    m = m + 1;
    //alert(y+":"+m+":"+d);
    if (y != iY || m != iM || d != iD) {
        return false;
    }
    return true;

}
function isValidAgeAndIdno(iY, iM, iD, iAge)   //检查年龄和身份证号码是否一致
{
    var now = new Date();
    var nowy = now.getFullYear();
    var a = new Date(iY, iM - 1, iD);
    var d = a.getDate();
    var ay = a.getFullYear();

    if ((parseInt(nowy) - parseInt(ay) != parseInt(iAge))) {
        return false;
    }
    return true;
}
function isValidateSexAndIdno(stridno, objsex) //检查性别和身份证号码是否一致
{
    //var objsex;
    //objsex= objP.value;
    var idsex;
    if (stridno.length == 18) {
        if (parseInt(stridno.substr(16, 1)) % 2 == 0)
            idsex = 0;
        else
            idsex = 1;
    }
    else {
        if (parseInt(stridno.substr(14, 1)) % 2 == 0)
            idsex = 0;
        else
            idsex = 1;
    }
    if (idsex != objsex)
        return false;
    return true;
}
function isChinaIDCard(StrNo) //检查身份证号码
{

    StrNo = StrNo.toString();

    if (StrNo.length == 18) {
        var a, b, c
        if (!isNumber(StrNo.substr(0, 17))) {
            return false;
        }
        a = parseInt(StrNo.substr(0, 1)) * 7 + parseInt(StrNo.substr(1, 1)) * 9 + parseInt(StrNo.substr(2, 1)) * 10;
        a = a + parseInt(StrNo.substr(3, 1)) * 5 + parseInt(StrNo.substr(4, 1)) * 8 + parseInt(StrNo.substr(5, 1)) * 4;
        a = a + parseInt(StrNo.substr(6, 1)) * 2 + parseInt(StrNo.substr(7, 1)) * 1 + parseInt(StrNo.substr(8, 1)) * 6;
        a = a + parseInt(StrNo.substr(9, 1)) * 3 + parseInt(StrNo.substr(10, 1)) * 7 + parseInt(StrNo.substr(11, 1)) * 9;
        a = a + parseInt(StrNo.substr(12, 1)) * 10 + parseInt(StrNo.substr(13, 1)) * 5 + parseInt(StrNo.substr(14, 1)) * 8;
        a = a + parseInt(StrNo.substr(15, 1)) * 4 + parseInt(StrNo.substr(16, 1)) * 2;
        b = a % 11;

        if (b == 2)   //最后一位为校验位
        {
            c = StrNo.substr(17, 1).toUpperCase();   //转为大写X
        }
        else {
            c = parseInt(StrNo.substr(17, 1));
        }

        switch (b) {
            case 0:
                if (c != 1) {
                    //alert("身份证好号码格式不正确1");
                    return false;
                }
                break;
            case 1: if (c != 0) {//alert("身份证好号码格式不正确");
                    return false;
                } break;
            case 2: if (c != "X") {//alert("身份证好号码格式不正确");
                    return false;
                } break;
            case 3: if (c != 9) {//alert("身份证好号码格式不正确");
                    return false;
                } break;
            case 4: if (c != 8) {//alert("身份证好号码格式不正确");
                    return false;
                } break;
            case 5: if (c != 7) {//alert("身份证好号码格式不正确");
                    return false;
                } break;
            case 6: if (c != 6) {//alert("身份证好号码格式不正确");
                    return false;
                } break;
            case 7: if (c != 5) {//alert("身份证好号码格式不正确");
                    return false;
                } break;
            case 8: if (c != 4) {//alert("身份证好号码格式不正确");
                    return false;
                } break;
            case 9: if (c != 3) {//alert("身份证好号码格式不正确");
                    return false;
                } break;
            case 10: if (c != 2) {//alert("身份证好号码格式不正确");
                    return false
                }
        }

        if (!isValidDate(StrNo.substr(6, 4), StrNo.substr(10, 2), StrNo.substr(12, 2)))
        { return false; }
    }
    else if (StrNo.length == 15) {

        var r = /^[\d]{15}$/;
        if (!r.test(StrNo))
        { return false; }
        if (!isValidDate("19" + StrNo.substr(6, 2), StrNo.substr(8, 2), StrNo.substr(10, 2)))
        { return false; }
    }
    else {
        alert("输入的身份证号码长度不正确！");
        return false;
    }
    return true;
}



function TrackFrom(cFrom) {
    if (cFrom != '') document.getElementById("from").value = cFrom;
}



//检查邮箱账号格式  false 错误  true 正确
function checkEmailAddress(email) {
    email = email.trim();
    if (email.length < 5 || email.length > 50) {
        return false;
    }

    var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (!reg.test(email)) {
        return false;
    }

    return true;
}

//检查手机账号格式 false 错误  true 正确
function checkPhoneAddress(phone) {
    phone = phone.trim();
    if (phone.length != 11) {
        return false;
    }

    var reg = /^(1)\d{10}$/;
    if (!reg.test(phone)) {
        return false;
    }

    return true;
}

//检查普通账号格式 false 错误  true 正确
function checkAccountAddress(account) {
    account = account.trim();
    if (account.length < 4 || account.length > 16) {
        return false;
    }

    var reg = /^[a-z][a-z0-9]{3,15}$/;
    if (!reg.test(account)) {
        return false;
    }
    return true;
}

//检查所有账号格式 false 错误  true 正确
function CheckUserAccount(account) {
    if (!checkEmailAddress(account) && !checkPhoneAddress(account) && !checkAccountAddress(account)) {
        return false;
    }
    return true;
}

//是否包含特殊字符
function isContainSpecificChar(value) {
    if (value.replace(/[\@\%\*\(\)\<\>\/\\';-]/g, '').length == value.length)
        return false;
    else
        return true;
}


//是否包含特殊字符
function isContainSpecificCharPassword(value) {
    if (value.replace(/[\!\#\@\$\^\%\*\(\)\-\_\+\=]/g, '').length == value.length)
        return false;
    else
        return true;
}



//字符串是否满足正则表达式
function checkReg(value, exp) {
    var patrn = new RegExp(exp)
    if (patrn.exec(value))
        return true;
    else
        return false;
}



//验证用户联系电话
function checkLinkTel() {
    var linktel = jQuery.trim($("#linktel").val());
    if (linktel.length == 0) {
        //toggleStyle($("#divlinkTel"), false, "请输入您的联系电话");
        $("#divlinkTel").html('<div class="red_o"><span class="red_bg">' + MSG_USER_LINK_PHONE + '</span></div>')
        isValLinkTel = false;
        return false;
    }
    var pattern = /(^(\d{2,4}[-_－—]?)?\d{3,8}([-_－—]?\d{3,8})?([-_－—]?\d{1,7})?$)|(^0?1[35]\d{9}$)/;
    if (!pattern.test(linktel)) {
        //toggleStyle($("#divlinkTel"), false, "联系电话输入格式不正确");
        $("#divlinkTel").html('<div class="red_o"><span class="red_bg">' + MSG_USER_LINK_PHONE_ERROR + '</span></div>')
        isValLinkTel = false;
        return false;
    }
    //toggleStyle($("#divlinkTel"), true, "请填写您的联系电话");
    $("#divlinkTel").html('<div class="green_o"><span class="green_bg">' + MSG_USER_LINK_PHONE + '</span></div>')
    isValLinkTel = true;
    return true;
}



//判断是否选择性别
function checkSex() {
    var sex = $("#sex").val();
    if (sex != "1" && sex != "0") {
        toggleStyle($("#divSex"), false, MSG_SEX_NORMAL);
        isValSex = false;
        return false;
    } else {
        toggleStyle($("#divSex"), true, MSG_RIGHT);
    }
    var idno = jQuery.trim($("#idno").val());
    if (idno.length == 15 || idno.length == 18) {
        if (!isValidateSexAndIdno(idno, parseInt(sex))) {
            toggleStyle($("#divSex"), false, MSG_SEX_MATCH);
            isValSex = false;
            return false;
        }
    }
    isValSex = true;
    return true;
}

function NewGuid() {
    var guid = "";
    for (var i = 1; i <= 32; i++) {
        var n = Math.floor(Math.random() * 16.0).toString(16);
        guid += n;
    }
    return guid;
}

