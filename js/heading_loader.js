const loadEvents = [];
this.addEventListener("load", async function () {
  for (const event of loadEvents) {
    await event.call();
  }
}, false);



loadEvents.push(
  async () => {
    await fetch("/heading").then((resp) => {
      return resp.text();
    }).then((html) => {
      const frag = document.createRange().createContextualFragment(html);
      for (const e of frag.getElementById("topnav").children) {
        if (e.href == document.URL) {
	  e.href = "#";
	  e.classList.add("active");
	  break;
        }
      }
      const header = document.getElementsByClassName("header")[0];
      header.prepend(frag);
    });
  },
);
