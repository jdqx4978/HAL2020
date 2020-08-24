(function () {
    var Params = (function () {
        var _params = new Array();
        //来源页面
        function referrerUrl() {
            _params["pmr"] = document.referrer;
        }
        return {
            Init: function () {
                _params.length = 0
                referrerUrl();
            },
            ToUrlParams: function () {
                var urlParams = "";
                for (var k in _params) {
                    if (_params.hasOwnProperty(k)) {
                        urlParams += "&" + k + "=" + escape(_params[k]);
                    }
                }
                return urlParams;

            }
        }
    })()

    function Init() {
        Params.Init();
        var image = document.createElement("IMG");
        var datetime = new Date().getTime();
        var src = "https://ga.tiancity.com";
        image.src = src + "/ad/Post?t=" + datetime + Params.ToUrlParams();
        image.height = 0;
        image.width = 0;
        image.style.cssText = "display:block;overflow:hidden";
        document.body.appendChild(image);
    }

    Init();

})()