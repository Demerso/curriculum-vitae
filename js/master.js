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
