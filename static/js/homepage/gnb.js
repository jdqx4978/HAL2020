function Banner_MouseOver(id)
{
document.getElementById(id).style.display = "block";
}
function Banner_Mouseout(id)
{
document.getElementById(id).style.display = "none";
}
document.writeln("<style>");
document.writeln("body { margin:0}");
document.writeln("#gnb_menu{height:35px; font-size:12px; font-family:'宋体'; color:#888;table-layout:fixed; background: url(/static/images/gnb_bg.jpg); margin:0px; border-bottom:1px solid #dddddd; min-width:980px;}");
document.writeln("#gnb_menu img {_vertical-align:baseline;}");
document.writeln("#gnb_menu table { margin:0px;}");
document.writeln("#gnb_menu td {line-height: normal; height: auto;}");
document.writeln("#gnb_menu ul{list-style-type: none; margin-left:5px; padding:0; margin-top:0}");
document.writeln("#gnb_menu .gnb_mainmenu{width:320px;margin:0 0 0 20px;white-space:nowrap;}");
document.writeln("#gnb_menu li{list-style-type: none; float:left; padding:0; display:inline;}");
document.writeln("#gnb_menu .item{margin:4px 4px 0 4px; padding:3px 0 0 0;}");
document.writeln("#gnb_menu .sep{width:13px;height:22px; margin:4px 0 0 0;background:url(/static/images/line_sep.jpg) no-repeat 0 0;}");
document.writeln("#gnb_menu .gnb_service{margin:4px 4px 0 4px; padding:3px 0 0 0;color:#666666;}");
document.writeln("#gnb_menu .gnb_service img{position:relative;top:4px;left:0;vertical-align:top;}");
document.writeln("#gnb_menu li.end{margin:4px 0 0 0; padding:3px 0 0 0;}");
document.writeln("#gnb_menu a, #gnb_menu a:link, #gnb_menu a:active, #gnb_menu a:visited {color:#888;font-size:12px;text-decoration: none;}");
document.writeln("#gnb_menu a:hover{text-decoration: underline;}");
document.writeln("#gnb_menu img{border:0;}");
document.writeln("#gnb_game_list1{width:601px; margin-left:125px;padding-top:32px;top:0; position:absolute; z-index:10000; overflow:hidden; display:none }");
document.writeln("#gnb_game_list1 td{ height:20px;padding-left:5px; line-height:14px}");
document.writeln("#gnb_game_list1 .gnb_game_list_b{border:#bbbbbb solid 1px; background:#ffffff;zoom:1;}");
document.writeln("#gnb_game_list1 .gnb_game_list_b .cont_gnb {overflow:hidden;}");
document.writeln("#gnb_game_list1 .gnb_game_list_b .cont_gnb .nf{font-weight:bold;color: #ff5a00;}");
document.writeln("#gnb_game_list2{width:112px; right:19px;padding-top:25px; top:0; position:absolute; z-index:10000; overflow:hidden; display:none}");
document.writeln("#gnb_game_list2 td{ height:20px;padding-left:5px; line-height:14px}");
document.writeln("#gnb_game_list2 .gnb_game_list_b{border:#e8e8e8 solid 1px; background:#e8e8e8; padding:2px; width:106px}");
document.writeln("#gnb_game_list2 .gnb_game_list_b .cont_gnb { padding-top:8px; padding-bottom:5px; background:#fff;}");
document.writeln("#gnb_menu .gnb_game_items{float:left;width:149px;height:195px;border-right:1px solid #dfdfdf;_display:inline;zoom:1;}");
document.writeln("#gnb_menu .nobd{border-right:none;}");
document.writeln("#gnb_menu .gnb_game_items h2{height:32px;margin:0;padding:0; border-bottom:1px solid #dfdfdf;font-size:12px;font-weight:bold;line-height:32px;color:#688cc0; text-align:center;}");
document.writeln("#gnb_menu .gnb_game_items ul{overflow:hidden;margin:5px 10px 5px 13px;padding:0;zoom:1;}");
document.writeln("#gnb_menu .gnb_game_items ul li{height:22px;line-height:22px;color:#888888;white-space: nowrap;zoom:1;}");
document.writeln("#gnb_menu .gnb_game_items li .gnb_gameicon{float:left;margin:2px 5px 0 0;_display:inline;}");
document.writeln("#gnb_menu .gnb_game_items li .gnb_gamelink{float:left;width:76px;overflow:hidden;text-overflow:ellipsis;white-space: nowrap;color:#888888;_display:inline;}");
document.writeln("#gnb_menu .gnb_game_items li .gnb_flag{float:right;margin:8px 0 0 5px;_display:inline;}");
document.writeln("#gnb_menu .gnb_game_list_t{height:4px;}");
document.writeln("#gnb_menu input.topbtn { background:url(/static/images/topNav_btn_03.gif); width:51px; height:22px; line-height:22px; cursor:pointer; font-weight:700}");
document.writeln("#gnb_menu .blackcolor { color:#444; padding-right:15px}");
document.writeln("#gnb_menu ul.mem_submenu {list-style-type: none; padding:0; margin:0 0 5px 0; width:100px; overflow:hidden}");
document.writeln("#gnb_menu ul.mem_submenu li {padding:0; margin:0; margin-left:15px; background:url(/static/images/pas_ic.gif) no-repeat 2px 5px; padding-left:15px; line-height:20px; height:20px; color:#527490; width:80px; display:inline}");
document.writeln("#gnb_menu ul.mem_submenu li a { color:#888}");
document.writeln("#gnb_menu ul.mem_submenu li a strong {font-weight:bold;}");
document.writeln("#fred strong {color:#ff5a00;}");
document.writeln("#gnb_menu .submenu_more { display:block; border-top:solid 1px #e8e8e8; text-align:right; margin:0 3px; line-height:24px;}");
document.writeln("#gnb_menu .submenu_more a { color:#888}");
document.writeln("#gnb_menu .game_gnb th {line-height:18px; padding-top:1px; text-align:left; font-size:12px; color:#888; border: #e1e1e1 solid 1px; background:#f8f8f8; padding-left:10px;vertical-align:bottom;}");
document.writeln("#gnb_menu .game_gnb td { vertical-align:middle; font-size:12px; padding:2px; line-height:18px;}");
document.writeln("</style>");
//document.writeln("<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" id=\"gnb_menu\">");
//document.writeln("<tr>");
//document.writeln("<td>");
//document.writeln("<table width=\"100%\" border=\"0\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\">");
//document.writeln("<tr>");
//document.writeln("<td width=\"10\">");
//document.writeln("<div id=\"gnb_game_list1\" onmouseover=\"Banner_MouseOver(\'gnb_game_list1\')\" onmouseout=\"Banner_Mouseout(\'gnb_game_list1\')\">");
//document.writeln("<div class=\"gnb_game_list_t\" style=\"padding-left:80px\"><img src=\"/static/images/gnb_39.gif\"></div>");
//document.writeln("<div class=\"gnb_game_list_b\">");
//document.writeln("<div class=\"cont_gnb\">");
//document.writeln("<div class=\"gnb_game_items\">");
//document.writeln("<h2>射击游戏</h2>");
//document.writeln("<ul>");
//document.writeln("<li><img src=\"https:\/\/image.tiancity.com\/portal\/images\/gnb\/game_icon04.jpg\" alt=\"\" width=\"19\" height=\"19\" class=\"gnb_gameicon\" \/><a href=\"http:\/\/csol.tiancity.com\/?acode=gnb&amp;bannerName=csol\" target=\"_blank\" class=\"gnb_gamelink\">反恐精英OL<\/a><img src=\"https:\/\/image.tiancity.com\/portal\/images\/gnb2013\/gnb_hot.jpg\" class=\"gnb_flag\" \/></li>");
//document.writeln("</ul>");
//document.writeln("<\/div>");
//document.writeln("<div class=\"gnb_game_items\">");
//document.writeln("<h2>角色扮演</h2>");
//document.writeln("<ul>");
//document.writeln("<li><img src=\"https:\/\/image.tiancity.com\/portal\/images\/gnb\/game_iconmh.jpg\" alt=\"\" width=\"19\" height=\"19\" class=\"gnb_gameicon\" \/><a href=\"http:\/\/mh.tiancity.com\/?acode=gnb&amp;bannerName=mh\" target=\"_blank\" class=\"gnb_gamelink\">洛奇英雄传<\/a><img src=\"https:\/\/image.tiancity.com\/portal\/images\/gnb2013\/gnb_hot.jpg\" class=\"gnb_flag\" \/></li>");
//document.writeln("<li><img src=\"https:\/\/image.tiancity.com\/portal\/images\/gnb\/game_icon02.jpg\" alt=\"\" width=\"19\" height=\"19\" class=\"gnb_gameicon\" \/><a href=\"http:\/\/luoqi.tiancity.com\/?acode=gnb&amp;bannerName=luoqi\" target=\"_blank\" class=\"gnb_gamelink\">洛奇<\/a></li>");
//document.writeln("<li><img src=\"https:\/\/image.tiancity.com\/portal\/images\/gnb2016\/game_iconcls.jpg\" alt=\"\" width=\"19\" height=\"19\" class=\"gnb_gameicon\" \/><a href=\"http:\/\/cls.tiancity.com\/?acode=gnb&amp;bannerName=cls\" target=\"_blank\" class=\"gnb_gamelink\">封印者<\/a><img src=\"https:\/\/image.tiancity.com\/portal\/images\/gnb2013\/gnb_new.jpg\" class=\"gnb_flag\" \/></li>");
//document.writeln("<li><img src=\"https:\/\/image.tiancity.com\/portal\/images\/gnb2016\/game_iconlif.jpg\" alt=\"\" width=\"19\" height=\"19\" class=\"gnb_gameicon\" \/><a href=\"http:\/\/lif.tiancity.com\" target=\"_blank\" class=\"gnb_gamelink\">领地人生<\/a><img src=\"https:\/\/image.tiancity.com\/portal\/images\/gnb2013\/gnb_new.jpg\" class=\"gnb_flag\" \/></li>");
//document.writeln("</ul>");
//document.writeln("<\/div>");
//document.writeln("<div class=\"gnb_game_items\">");
//document.writeln("<h2>休闲游戏</h2>");
//document.writeln("<ul>");
//document.writeln("<li><img src=\"https:\/\/image.tiancity.com\/portal\/images\/gnb\/game_icon_fs2.jpg\" alt=\"\" width=\"19\" height=\"19\" class=\"gnb_gameicon\" \/><a href=\"http:\/\/fs2.tiancity.com\/?acode=gnb&amp;bannerName=fs2\" target=\"_blank\" class=\"gnb_gamelink\">自由篮球<\/a><img src=\"https:\/\/image.tiancity.com\/portal\/images\/gnb2013\/gnb_hot.jpg\" class=\"gnb_flag\" \/></li>");
//document.writeln("<li><img src=\"https:\/\/image.tiancity.com\/portal\/images\/gnb\/game_icon01.jpg\" alt=\"\" width=\"19\" height=\"19\" class=\"gnb_gameicon\" \/><a href=\"http:\/\/popkart.tiancity.com\/?acode=gnb&amp;bannerName=kart\" target=\"_blank\" class=\"gnb_gamelink\">跑跑卡丁车<\/a></li>");
//document.writeln("</ul>");
//document.writeln("<\/div>");
//document.writeln("<div class=\"gnb_game_items nobd\">");
//document.writeln("<h2>手机游戏</h2>");
//document.writeln("<ul>");
//document.writeln("<li><img src=\"https:\/\/image.tiancity.com\/portal\/images\/gnb\/game_icon_ppkt.png\" alt=\"\" width=\"19\" height=\"19\" class=\"gnb_gameicon\" \/><a href=\"\/\/mpopkart.tiancity.com\" target=\"_blank\" class=\"gnb_gamelink\" title=\"跑跑卡丁车官方竞速版\">跑跑卡丁车官方竞速版<\/a><img src=\"https:\/\/image.tiancity.com\/portal\/images\/gnb2013\/gnb_new.jpg\" class=\"gnb_flag\" \/></li>");
//document.writeln("<li><img src=\"https:\/\/image.tiancity.com\/portal\/images\/gnb\/game_icon_hw.png\" alt=\"\" width=\"19\" height=\"19\" class=\"gnb_gameicon\" \/><a href=\"http:\/\/hw.tiancity.com\/homepage\/?acode=gnb&bannerName=hw\" target=\"_blank\" class=\"gnb_gamelink\">火王<\/a><img src=\"https:\/\/image.tiancity.com\/portal\/images\/gnb2013\/gnb_new.jpg\" class=\"gnb_flag\" \/></li>");
//document.writeln("<li><img src=\"https:\/\/image.tiancity.com\/portal\/images\/gnb\/game_icon_dom.png\" alt=\"\" width=\"19\" height=\"19\" class=\"gnb_gameicon\" \/><a href=\"http:\/\/dom.tiancity.com\/homepage\/?acode=gnb&bannerName=dom\" target=\"_blank\" class=\"gnb_gamelink\">战争与文明<\/a><img src=\"https:\/\/image.tiancity.com\/portal\/images\/gnb2013\/gnb_new.jpg\" class=\"gnb_flag\" \/></li>");
//document.writeln("<li><img src=\"https:\/\/image.tiancity.com\/portal\/images\/gnb\/game_icon_yzgj.png\" alt=\"\" width=\"19\" height=\"19\" class=\"gnb_gameicon\" \/><a href=\"http:\/\/yzgj.tiancity.com\/homepage\/?acode=gnb&bannerName=yzgj\" target=\"_blank\" class=\"gnb_gamelink\">炎之轨迹<\/a><img src=\"https:\/\/image.tiancity.com\/portal\/images\/gnb2013\/gnb_new.jpg\" class=\"gnb_flag\" \/></li>");
//document.writeln("<li><img src=\"https:\/\/image.tiancity.com\/portal\/images\/gnb\/game_icon_mxd.jpg\" alt=\"\" width=\"19\" height=\"19\" class=\"gnb_gameicon\" \/><a href=\"http:\/\/www.mxdshouyou.com\/homepage\/?acode=gnb&bannerName=mxd\" target=\"_blank\" class=\"gnb_gamelink\">冒险岛<\/a><img src=\"https:\/\/image.tiancity.com\/portal\/images\/gnb2013\/gnb_new.jpg\" class=\"gnb_flag\" \/></li>");
//document.writeln("<li><img src=\"https:\/\/image.tiancity.com\/portal\/images\/gnb\/game_icon_etra.png\" alt=\"\" width=\"19\" height=\"19\" class=\"gnb_gameicon\" \/><a href=\"http:\/\/etra.tiancity.com\/homepage\/?acode=gnb&bannerName=etra\" target=\"_blank\" class=\"gnb_gamelink\">艾特拉战纪<\/a><img src=\"https:\/\/image.tiancity.com\/portal\/images\/gnb2013\/gnb_new.jpg\" class=\"gnb_flag\" \/></li>");
//document.writeln("<li><img src=\"https:\/\/image.tiancity.com\/portal\/images\/gnb\/game_icon_ly.png\" alt=\"\" width=\"19\" height=\"19\" class=\"gnb_gameicon\" \/><a href=\"http:\/\/mhm.tiancity.com\/homepage\/?acode=gnb&bannerName=ly\" target=\"_blank\" class=\"gnb_gamelink\" title=\"洛奇英雄传:永恒\">洛奇英雄传:永恒<\/a><img src=\"https:\/\/image.tiancity.com\/portal\/images\/gnb2013\/gnb_hot.jpg\" class=\"gnb_flag\" \/></li>");
//document.writeln("</ul>");
//document.writeln("<\/div>");
//document.writeln("    <\/div>");
//document.writeln("<\/div>");
//document.writeln("<\/div>");
//document.writeln("");
//document.writeln("<div id=\"gnb_game_list2\" onmouseover=\"Banner_MouseOver(\'gnb_game_list2\')\" onmouseout=\"Banner_Mouseout(\'gnb_game_list2\')\">");
//document.writeln("<div class=\"gnb_game_list_t\" style=\"padding-left:86px\"><img src=\"https:\/\/image.tiancity.com\/portal\/images\/gnb\/gnb_39.gif\"><\/div>");
//document.writeln("<div class=\"gnb_game_list_b\">");
//document.writeln("    <div class=\"cont_gnb\">");
//document.writeln("    <table width=\"99%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">");
//document.writeln("      <tr>");
//document.writeln("        <td align=\"left\">");
//document.writeln("        <ul class=\"mem_submenu\">");
//document.writeln("        	<li><a href=\"http:\/\/member.tiancity.com\/Registration\/AccountReg.aspx\?acode=gnb&bannerName=member\" target=\"_blank\">账号注册<\/a><\/li>");
//document.writeln("        	<li><a href=\"http:\/\/member.tiancity.com\/User\/PasswordFindMethod.aspx\?acode=gnb&bannerName=password\" target=\"_blank\">找回密码<\/a><\/li>");
//document.writeln("        	<li><a href=\"http:\/\/help.tiancity.com\/Home\/Chat\" target=\"_blank\">在线客服<\/a><\/li>");
//document.writeln("        	<li><a href=\"http:\/\/pay.tiancity.com\/webcoupon\/index2.html\?acode=gnb&bannerName=webcoupon\" target=\"_blank\">活动领奖<\/a><\/li>");
//document.writeln("        	<li><a href=\"http:\/\/aq.tiancity.com\/Home\/default\" target=\"_blank\">账户密保<\/a><\/li>");
//document.writeln("        	<li><a href=\"https:\/\/member.tiancity.com\/MemberOrder\/wn?ot=10010\" target=\"_blank\">账号注销<\/a><\/li>");
//document.writeln("        <\/ul>");
//document.writeln("        <span class=\"submenu_more\"><a href=\"http:\/\/know.tiancity.com\/\" target=\"_blank\">更多&gt;<\/a><\/span>        <\/td>");
//document.writeln("      <\/tr>");
//document.writeln("    <\/table>");
//document.writeln("    <\/div>");
//document.writeln("<\/div>");
//document.writeln("<\/div><\/td>");
//document.writeln("<td width=\"92\"><a href=\"http:\/\/www.tiancity.com\/\"><img src=\"https:\/\/images.tiancity.com\/images\/portal\/tclogo.gif\" title=\"首页\"><\/a><\/td>");
//document.writeln("<td width=\"320\" nowrap=\"nowrap\" >");
//document.writeln("<ul class=\"gnb_mainmenu\">");
//document.writeln("<li onmouseover=\"Banner_MouseOver(\'gnb_game_list1\')\" onmouseout=\"Banner_Mouseout(\'gnb_game_list1\')\" class=\"item\"><img src=\"https:\/\/image.tiancity.com\/portal\/images\/gnb2013\/gnb_tit_1.jpg\" title=\"游戏\" style=\"cursor:pointer\" \/><\/li>");
//document.writeln("<li class=\"sep\"><\/li>");
//document.writeln("<li class=\"item\"><a href=\"http:\/\/bbs.tiancity.com\" target=\"_blank\"><img src=\"https:\/\/image.tiancity.com\/portal\/images\/gnb2013\/gnb_tit_2.jpg\" title=\"论坛\" \/><\/a><\/li>");
//document.writeln("<li class=\"sep\"><\/li>");
//document.writeln("<li class=\"item\"><a href=\"http:\/\/pay.tiancity.com\/webbank\/UserPay.aspx\?acode=gnb&bannerName=pay\" target=\"_blank\"><img src=\"https:\/\/image.tiancity.com\/portal\/images\/gnb2013\/gnb_tit_3.jpg\" title=\"充值\" \/><\/a><\/li>");
//document.writeln("<li class=\"sep\"><\/li>");
//document.writeln("<li><a href=\"http:\/\/service.tiancity.com\/\" target=\"_blank\"><img src=\"https:\/\/image.tiancity.com\/portal\/images\/gnb\/gnb_15.gif\" title=\"客服\" style=\" cursor:pointer;\" \/><\/a><\/li>");
//document.writeln("<li>|<\/li>");
//document.writeln("<li><a href=\"http:\/\/huodong.tiancity.com\/\?acode=gnb&bannerName=huodong\" target=\"_blank\"><img src=\"https:\/\/image.tiancity.com\/portal\/images\/gnb\/gnb_11.gif\" title=\"活动\" \/><\/a><\/li>");
//document.writeln("<li>|<\/li>");
//document.writeln("<li class=\"item\" ><a href=\"http:\/\/hi.tiancity.com\/\?acode=gnb&bannerName=hi\" target=\"_blank\"><img src=\"https:\/\/image.tiancity.com\/portal\/images\/gnb2013\/gnb_tit_4.jpg\" title=\"社区\" \/><\/a><\/li>");
//document.writeln("<li class=\"sep\" ><\/li>");
//document.writeln("<li class=\"item\"><a href=\"http:\/\/jifen.tiancity.com\/\?acode=gnb&bannerName=jifen\" target=\"_blank\"><img src=\"https:\/\/image.tiancity.com\/portal\/images\/gnb2013\/gnb_tit_5.jpg\" title=\"积分\" \/><\/a><\/li>");
//document.writeln("<li><img src=\"https:\/\/image.tiancity.com\/portal\/images\/new_ic.gif\" title=\"最新\"\/><\/li>");
//document.writeln("<li class=\"sep\"><\/li>");
//document.writeln("<li class=\"item\"><a href=\"http:\/\/aq.tiancity.com\/Home\/default\/\?acode=gnb&bannerName=sec\" target=\"_blank\"><img src=\"https:\/\/image.tiancity.com\/portal\/images\/gnb2013\/gnb_tit_6.jpg\" title=\"安全\" \/><\/a><\/li>");
//document.writeln("<li class=\"sep\"><\/li>");
//document.writeln("<li class=\"end\"><iframe width=\"81\" height=\"13\" src=\"https:\/\/tcmgt.tiancity.com\/frmout.aspx?pst=61&uparams=TC01GN02\" marginheight=\"0\" marginwidth=\"0\" frameborder=\"0\" scrolling=\"no\"><\/iframe><\/li>");
//document.writeln("<\/ul><\/td>");
//document.writeln("<td align=\"center\" valign=\"top\"><iframe width=\"270\" height=\"35\" src=\"https:\/\/tcmgt.tiancity.com\/frmout.aspx?pst=101&uparams=TC01GN01\" marginheight=\"0\" marginwidth=\"0\" frameborder=\"0\" scrolling=\"no\"><\/iframe><\/td>");
//document.writeln("<td width=\"190\" nowrap=\"nowrap\" align=\"right\"><iframe width=\"190\" height=\"35\" src=\"https:\/\/passport.tiancity.com\/login\/login_header.aspx?from="+escape(unescape(window.location.href))+"\" marginheight=\"0\" marginwidth=\"0\" frameborder=\"0\" scrolling=\"no\" allowTransparency=\"true\" id=\"login_header\" name=\"login_header\"><\/iframe><\/td>");
//document.writeln("<td width=\"100\" nowrap=\"nowrap\" style=\"padding:0;\">");
//document.writeln("<ul>");
//
//document.writeln("<li class=\"sep\"><\/li>");
//document.writeln("<li onmouseover=\"Banner_MouseOver(\'gnb_game_list2\')\" onmouseout=\"Banner_Mouseout(\'gnb_game_list2\')\" style=\"cursor:pointer\" class=\"gnb_service\">会员服务 <img src=\"https:\/\/image.tiancity.com\/portal\/images\/gnb2013\/gnb_arrow_1.jpg\" \/><\/li>");
//document.writeln("<\/ul><\/td>");
//document.writeln("<\/tr><\/table>");
//document.writeln("<\/td>");
//document.writeln("<\/tr>");
//document.writeln("<\/table>")

function Nethru_getCookieVal(offset)
{
	var endstr = document.cookie.indexOf (";", offset);
	if (endstr == -1)
		endstr = document.cookie.length;
	return unescape(document.cookie.substring(offset, endstr));
}

function Nethru_SetCookie(name, value){
   var argv = Nethru_SetCookie.arguments;
   var argc = Nethru_SetCookie.arguments.length;
   var expires = (2 < argc) ? argv[2] : null;
   var path = (3 < argc) ? argv[3] : null;
   var domain = (4 < argc) ? argv[4] : null;
   var secure = (5 < argc) ? argv[5] : false;

  // alert("DOMAIN = " + domain);
   document.cookie = name + "=" + escape (value) +
        ((expires == null) ? "" : ("; expires="+expires.toGMTString())) +
     ((path == null) ? "" : ("; path=" + path)) +
     ((domain == null) ? "" : ("; domain=" + domain)) +
        ((secure == true) ? "; secure" : "");

//	alert(document.cookie);
}

function Nethru_GetCookie(name){
   var arg = name + "=";
   var alen = arg.length;
   var clen = document.cookie.length;
   var i = 0;
   while (i < clen)
      {
      var j = i + alen;
      if (document.cookie.substring(i, j) == arg)
         return Nethru_getCookieVal (j);
      i = document.cookie.indexOf(" ", i) + 1;
      if (i == 0)
         break;
      }
  return null;
}

function Nethru_makePersistentCookie(name,length,path,domain)
{
    var today = new Date();
    var expiredDate = new Date(2011,1,1);
    var cookie;
	var value;

    cookie = Nethru_GetCookie(name);
    if ( cookie ) {
//		alert(cookie);
        return 1;
	}

	var values = new Array();
	for ( i=0; i < length ; i++ ) {
		values[i] = "" + Math.random();
	}

	value = today.getTime();

	// use first decimal
	for ( i=0; i < length ; i++ ) {
		value += values[i].charAt(2);
	}

    Nethru_SetCookie(name,value,expiredDate,path,domain);
}

function Nethru_getDomain() {
	var _host   = document.domain;
	var so      = _host.split('.');
	var dm    = so[so.length-2] + '.' + so[so.length-1];
	return (so[so.length-1].length == 2) ? so[so.length-3] + '.' + dm : dm;
}

var Nethru_domain  = Nethru_getDomain();

Nethru_makePersistentCookie("PCID",10,"/",Nethru_domain);