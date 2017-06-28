;(function() {
  // BEGIN: 通过滚动距离设置侧边导航的position
  //

  $(window).scroll(function() {
    if(!document.getElementById('sidebar_top_marker')) {
      return;
    }
    var yheight = getScrollTop(); //滚动条距顶端的距离
    var referenceTop = $('#sidebar_top_marker').offset().top;

    if(yheight >= referenceTop) {
      $('.sidebar').css({'position':'fixed','top':'0','padding-top':'20px'})
    }else {
      $('.sidebar').css({'position':'static'})
    }

  })

  /**
   * 获取滚动条距离顶端的距离
   * @return {}支持IE6
   */
  function getScrollTop() {
    var scrollPos;
    if (window.pageYOffset) {
      scrollPos = window.pageYOffset;
    }
    else if (document.compatMode && document.compatMode != 'BackCompat') {
      scrollPos = document.documentElement.scrollTop;
    }
    else if (document.body) {
      scrollPos = document.body.scrollTop;
    }
    return scrollPos;
  }

  //
  // END: 通过滚动距离设置侧边导航的position
})();