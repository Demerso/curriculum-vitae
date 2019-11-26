function changeLang(lang = null) {
  const tl = new TimelineMax();
  tl.fromTo(
    document.getElementById("nolang"),
    0.5,
    { opacity: "1" },
    { opacity: "0" }
  );
  setTimeout(function() {
    if (lang.search("fr") != -1) {
      window.location.pathname += "/fr";
    } else {
      window.location.pathname += "/en";
    }
  }, 500);
}
