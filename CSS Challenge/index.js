window.onload = function() {

  let pageTitle = document.title;
  let attentionMessage = '*CSS Challenge Scrimba!';
  let blinkEvent = null;

  document.addEventListener('visibilitychange', function(e) {
    let isPageActive = !document.hidden;

    if(!isPageActive){
      blink();
    }else {
      document.title = pageTitle;
      clearInterval(blinkEvent);
    }
  });

  function blink(){
    blinkEvent = setInterval(function() {
      if(document.title === attentionMessage){
        document.title = pageTitle;
      }else {
        document.title = attentionMessage;
      }
    }, 1500);
  }
};
