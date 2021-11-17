const filenameOrIndex = (filename) => filename ?? "index";
const getCurrentFileURL = () =>
  document.URL.split("#!/")[0] +
  "pages/" +
  filenameOrIndex(document.URL.split("#!/")[1]) +
  ".md";
  
async function getLastModTime() {
  const r = await fetch(getCurrentFileURL());
  if (!r.ok) {
    document.querySelector("#lastModified").innerHTML = "Utoljára módosítva: nincs információ";
    return;
  }
  const d = Array.from(r.headers).filter(elm => elm[0] === "last-modified")[0][1];
  console.log(d);
  let time = Math.round((Date.now() - Date.parse(d)) / 86400000);
  if (time > 365) {
    time = "több, mint egy éve";
  } else if (time > 0) {
    time += " napja";
  } else {
    time = Math.round((Date.now() - Date.parse(d)) / 3600000);
    if (time < 1) {
      time = " az elmúlt órában";
    } else {
      time += " órája";
    }
  }

  document.querySelector("#lastModified").innerHTML = "Utoljára módosítva: " + time;
}

window.addEventListener("hashchange", getLastModTime);
window.onload = getLastModTime;
