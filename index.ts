var context = { country: 'CO' };
var html =
  '<html><head><script>var country = "' +
  context.country +
  '";console.log(country)</script></head><body>Foo TEST</body></html>';
var iframe = document.createElement('iframe');
iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(html);

document.body.appendChild(iframe);

var e = document?.querySelector('iframe') as HTMLIFrameElement;
if (e != null) {
  //alert(e.contentWindow.document.body.innerHTML);
  var iframeObj = e.contentWindow.document.body.innerHTML;
  var iframeDocument = e.contentDocument || e.contentWindow.document;
  e.style.background = 'red';
  var iframeContent = iframeDocument?.querySelector('body') as HTMLBodyElement;
  iframeContent.style.color = 'blue';

  //a = '</script></head><body style= color:white>Foo Changed test</body></html>';
  //iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(a);
}

/*
const iframeDocument = document.getElementsByTagName('iframe')[0];
const bodyElement = iframeDocument.getElementsByTagName('body')[0];
bodyElement.style.background = 'red';*/
