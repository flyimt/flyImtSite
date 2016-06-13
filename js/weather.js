;(function findWeather() {
  window.onload = function() {
    var cityUrl = 'http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js';
    $.getScript(cityUrl, function(script, textStatus, jqXHR) {
      var citytq = remote_ip_info.city ;
      var url = "http://php.weather.sina.com.cn/iframe/index/w_cl.php?code=js&city=" + citytq + "&day=0&dfc=3";
      $.ajax({
        url : url,
        dataType : "script",
        scriptCharset : "gbk",
        success : function(data) {
          var _w = window.SWther.w[citytq][0];
          var city = document.getElementById('weather_city');
          if(!city) {
            return;
          }
          city.innerHTML = citytq + '<span class="f-r">' + _w.s1 + '</span>';

          var temperature = document.getElementById('weather_temperature');
          temperature.innerHTML =  _w.t2 + "`C ~ " + _w.t1 + "`C";
        },
        error: function(error) {
          var city = document.getElementById('weather_city');
          if(!city) {
            return;
          }
          city.innerHTML = '获取失败';
        }
      });
    });
  }
})();