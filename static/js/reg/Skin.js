

//注册页使用
function Skin(skin) {
    if (skin.length > 0) {
        var css = "https://img2.tiancitycdn.com/portal/regist/v1/css/module_" + skin + ".css";
        $("#SkinCss").attr("href", css);

    }
}

//注册成功页使用
function SkinSucceed(skin) {
    if (skin.length > 0) {
        var css = "https://img2.tiancitycdn.com/portal/regist/v1/css/module_" + skin + ".css";
        $("#SkinCss").attr("href", css);
    }
}



function ShowLogo(name) {
    Url = {
        mabihero: { HomeUrl: 'https://mh.tiancity.com/', DownloadUrl: 'https://mh.tiancity.com/homepage/v5/clientdown.html' },

    };
    try {
        $("#Home").attr("href", Url[name].HomeUrl);
        $("#Download").attr("href", Url[name].DownloadUrl);
    }
    catch (err)
    { }
}






