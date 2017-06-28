;(function() {
  function Clock(id) {
    this.canvas = document.getElementById(id);
    this.context = this.canvas.getContext('2d');
  }

  Clock.prototype = {
    constructor: Clock,
    run: function() {
      this.context.save();
      this.context.clearRect(0,0,400,400);
      this.context.translate(200, 150);
      this.time = new Date();
      this.draw();
      this.context.restore();
      var clock = this;
      setTimeout(function(){clock.run()}, 1000);
    },
    draw: function() {
      this.drawRuling();
      this.drawText();
      this.drawPointer();
    },
    drawRuling: function() {
      var deg = 2 * Math.PI / 12;
      // 大刻度
      this.context.save();
      this.context.beginPath();
      for (var i = 0; i < 12; i++) {
        var x2 = Math.sin(i * deg);
        var y2 = -Math.cos(i * deg);
        this.context.moveTo(x2 * 148, y2 * 148);
        this.context.lineTo(x2 * 135, y2 * 135);
      }
      this.context.strokeStyle = '#fff';
      this.context.lineWidth = 4;
      this.context.stroke();
      this.context.closePath();
      this.context.restore();
      // 小刻度
      this.context.save();
      var deg1 = 2 * Math.PI / 60;
      this.context.beginPath();
      for (var i = 0; i < 60; i++) {
        var x2 = Math.sin(i * deg1);
        var y2 = -Math.cos(i * deg1);
        this.context.moveTo(x2 * 146, y2 * 146);
        this.context.lineTo(x2 * 144, y2 * 144);
      }
      this.context.strokeStyle = '#fff';
      this.context.lineWidth = 2;
      this.context.stroke();
      this.context.closePath();
      this.context.restore();
    },
    drawText: function() {
      var h = (this.time.getHours() % 24);
      var m = this.time.getMinutes().toString();
      if(m.length < 2) {
        m = '0' + m;
      }
      var s = this.time.getSeconds().toString();
      // 文字
      this.context.save();
      this.context.fillStyle = "#fff";
      this.context.font = '50px Arial,΢微软雅黑';
      this.context.textAlign = 'center';
      this.context.textBaseline = 'middle';
      this.context.fillText(h + " : " + m, 0, 200);
      this.context.restore();
    },
    drawPointer: function() {
      var hdeg = (this.time.getHours() % 12) * 2 * Math.PI / 12;
      var mdeg = this.time.getMinutes() * 2 * Math.PI / 60;
      var sdeg = this.time.getSeconds() * 2 * Math.PI / 60
      // 时针
      this.context.save();
      this.context.rotate(hdeg + mdeg / 12 + sdeg / 720);
      this.context.beginPath();
      this.context.moveTo(0, 10);
      this.context.lineTo(0, -60);
      this.context.strokeStyle = "#fff";
      this.context.lineWidth = 6;
      this.context.stroke();
      this.context.closePath();
      this.context.restore();
      // 分针
      this.context.save();
      this.context.rotate(mdeg + sdeg / 60);
      this.context.beginPath();
      this.context.moveTo(0, 15);
      this.context.lineTo(0, -85);
      this.context.strokeStyle = "#fff";
      this.context.lineWidth = 4;
      this.context.stroke();
      this.context.closePath();
      this.context.restore();
      // 秒针
      this.context.save();
      this.context.rotate(sdeg);
      this.context.beginPath();
      this.context.moveTo(0, 20);
      this.context.lineTo(0, -125);
      this.context.strokeStyle = "#fff";
      this.context.lineWidth = 2;
      this.context.stroke();
      this.context.closePath();
      this.context.restore();
    }
  }

  setTimeout(function() {
    if(document.getElementById('index_clock')){
      var clock = new Clock('index_clock');
      clock.run();
    }
  }, 100)

})()

