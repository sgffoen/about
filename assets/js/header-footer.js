function adjustFrameHeight() {
    var headerFrame = document.getElementById('header-frame');
    var footerFrame = document.getElementById('footer-frame');
  
    headerFrame.style.height = headerFrame.contentWindow.document.body.scrollHeight + 'px';
    footerFrame.style.height = footerFrame.contentWindow.document.body.scrollHeight + 'px';
  }
  
  window.addEventListener('DOMContentLoaded', function() {
    adjustFrameHeight();
  });
  
  window.addEventListener('resize', function() {
    adjustFrameHeight();
  });
  