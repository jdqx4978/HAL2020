    var token = window.localStorage.getItem('user_token');
    var username = window.localStorage.getItem('user_user');
      $.ajax({
       type:"get",
       url:"http://127.0.0.1:8000/community/info",
       beforeSend: function(request) {
           request.setRequestHeader("Authorization", token);
       },
       success:function (result) {
           if (200 == result.code){
             var html = '';
                html += '<li><a href="/center/'+ result.username + '">' + result.username +'</a></li>';
                html += '<li><a href="/release">发表</a></li>';
                html += '<li><a href="/community/'+ result.username+'">文章管理中心</a></li>';
                html += '<li class="dropdown">';
                html +='<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"';
                html += 'aria-expanded="false">更多操作 <span class="caret"></span></a>';
                html += '<ul class="dropdown-menu">';
                 html += '<li><a href="/center/'+ result.username + '">个人中心</a></li>';
                 html +='<li><a href="#">修改密码</a></li>';
                 html +='<li><a href="#" onclick="logout()">注销</a></li>';
                 html +='</ul>';
                 html +='</li>';
                $('#logi').html(html);

             }else{
                var html = '';
                html+='<li><a href="/login">登录</a></li>';
                html +='<li><a href="/register">注册</a></li>'
                $('#logi').html(html);

             }
         }
    })

    function logout(){
          $.ajax({
          type:'get',
          url:'/logout',
          contentType: 'application/json',
		  dataType: 'json',
          success:function(result){
            if(result.code==200){
                if(confirm("确定shanch吗？")){
                window.localStorage.removeItem('user_token');
                window.localStorage.removeItem('user_user');
                window.location.href= '/index';
            }
          }
          }
        })

    }