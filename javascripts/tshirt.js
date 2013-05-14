function emailForm(){

  var daReferrer = document.referrer;
  var is_me = "ejohn";
  is_me = is_me + "@feigdev.com";
  var subject = "T-Shirt QR";
  var body_message = "Hi John,%0D%0DI just scanned a t-shirt I saw, and was curious about it. You can reach me at this email address.%0D%0DThanks!";

  var mailto_link = 'mailto:'+is_me+'?subject='+subject+'&body='+body_message;
  window.location = mailto_link;
}
