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

function fadeIn() {
  const tl = new TimelineMax();
  tl.fromTo(
    document.getElementsByTagName("body"),
    0.5,
    { opacity: "0" },
    { opacity: "1" }
  );
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
  fadeIn();
};
