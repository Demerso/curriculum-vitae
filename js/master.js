function changeLang(lang = null) {
  if (lang == null) {
    if (document.cookie.search("lang") != -1) {
      lang = /lang\=([^\;]+)/i.exec(document.cookie)[1];
    } else {
      lang = navigator.language;
    }
  }

  document.cookie =
    "lang=" + lang + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";

  if (lang.search("fr") != -1) {
    window.location.pathname = "/curriculum-vitae/fr";
  } else {
    window.location.pathname = "/curriculum-vitae/en";
  }
}

window.onload = function() {
  var dated_info = document.getElementsByClassName("more-info");
  for (let index = 0; index < dated_info.length; index++) {
    const element = dated_info[index];
    element.parentElement.parentElement.addEventListener("click", function() {
      if (element.style.maxHeight == "1000px") {
        element.style.maxHeight = "0px";
        element.style.opacity = 0;
        element.style.visibility = "hidden";
      } else {
        element.style.maxHeight = "1000px";
        element.style.opacity = 1;
        element.style.visibility = "visible";
      }
    });
  }
};
