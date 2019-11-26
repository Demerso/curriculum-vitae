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
    window.location.pathname = "odemers/curriculum-vitae/fr";
  } else {
    window.location.pathname = "odemers/curriculum-vitae/en";
  }
}

function toggleMenu() {
  const button = document.getElementsByTagName("nav")[0];
  const menu = document.getElementsByTagName("menu")[0];
  button.classList.toggle("open");
  menu.classList.toggle("hidden");
}

function gotoPage(pg) {
  const links = document.getElementsByTagName("menu")[0].children;
  for (let index = 0; index < links.length; index++) {
    const link = links[index];
    link.classList.remove("active");
  }
  document.getElementById(pg + "link").classList.add("active");
  document.getElementById(pg).scrollIntoView();
  document.cookie = "active=" + pg;
}

window.onload = function() {
  var scroll = document.scrollingElement.scrollLeft;
  const links = document.getElementsByTagName("menu")[0].children;
  var active;
  if (document.cookie.search("active") != -1) {
    active = /active\=([^\;]+)/i.exec(document.cookie)[1];
  } else {
    active = "about";
  }
  gotoPage(active);
};
