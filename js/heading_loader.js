const loadEvents = [];
this.addEventListener("load", async function () {
  for (const event of loadEvents) {
    await event.call();
  }
}, false);

loadEvents.push(
  async () => {
    await fetch("/heading.html").then((resp) => {
      return resp.text();
    }).then((html) => {
      const body = document.getElementsByTagName("body")[0];
      body.innerHTML = html + body.innerHTML;
    });
  },
);
