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
  document.getElementById(`${pg}link`).classList.add("active");
  document.getElementById(pg).scrollIntoView();
  document.cookie = `active=${pg}`;
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

window.onload = () => {
  let active;
  if (document.cookie.search("active") != -1) {
    active = /active\=([^\;]+)/i.exec(document.cookie)[1];
  } else {
    active = "about";
  }
  gotoPage(active);
  const nav = document.getElementsByTagName("nav")[0];
  for (let i = 0; i < 4; i++) {
    const bar = document.createElement("div");
    nav.appendChild(bar);
  }

  fadeIn();
};

window.onwheel = _.throttle(event => {
  const links = document.getElementsByTagName("menu")[0].children;
  const pages = document
    .getElementsByTagName("main")[0]
    .getElementsByTagName("section");
  let next = null;
  let prev = null;
  for (let i = 0; i < links.length; i++) {
    if (links[i].classList.contains("active")) {
      if (i < pages.length - 1) next = pages[i + 1].id;
      if (i > 0) prev = pages[i - 1].id;
    }
  }
  if (event.deltaY > 2) {
    if (next != null) gotoPage(next);
  } else if (event.deltaY < -2) {
    if (prev != null) gotoPage(prev);
  }
}, 750);
