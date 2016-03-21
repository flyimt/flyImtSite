// the weather is come from sina.
//
(function findWeather() {
  var cityUrl = 'http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js';
  $.getScript(cityUrl, function(script, textStatus, jqXHR) {
    var citytq = remote_ip_info.city ;// 获取城市
    var url = "http://php.weather.sina.com.cn/iframe/index/w_cl.php?code=js&city=" + citytq + "&day=0&dfc=3";
    $.ajax({
      url : url,
      dataType : "script",
      scriptCharset : "gbk",
      success : function(data) {
        var _w = window.SWther.w[citytq][0];
        //var tq = citytq + " " + img + " " + _w.s1 + " " + _w.t1 + "℃～" + _w.t2 + "℃  " + _w.d1 + _w.p1 + "级";
        //console.log(tq)
        var city = document.getElementById('weather_city');
        city.innerHTML = citytq + '<span class="right">' + _w.s1 + '</span>';

        var temperature = document.getElementById('weather_temperature');
        temperature.innerHTML =  _w.t2 + "`C ~ " + _w.t1 + "`C";
      },
      error: function(error) {
        var city = document.getElementById('weather_city');
        city.innerHTML = '具体天气看窗外';
      }
    });
  });
})();