const fragments = [
  { cut: "0 0, 34% 0, 22% 47%, 0 63%", x: -9, y: -5, angle: -13, color: "#f6bb72", origin: "14% 28%" },
  { cut: "34% 0, 66% 0, 47% 57%, 22% 47%", x: -3, y: -8, angle: 11, color: "#e07e55", origin: "43% 27%" },
  { cut: "66% 0, 100% 0, 100% 35%, 72% 49%, 47% 57%", x: 6, y: -6, angle: 13, color: "#87c7b8", origin: "76% 23%" },
  { cut: "0 63%, 22% 47%, 47% 57%, 38% 100%, 0 100%", x: -6, y: 7, angle: -12, color: "#e7a358", origin: "21% 73%" },
  { cut: "47% 57%, 72% 49%, 82% 100%, 38% 100%", x: 0, y: 7, angle: -8, color: "#75b6bf", origin: "61% 76%" },
  { cut: "72% 49%, 100% 35%, 100% 100%, 82% 100%", x: 8, y: 4, angle: 14, color: "#e38275", origin: "90% 68%" },
];

const links = [...document.querySelectorAll(".nav-link")];

for (const link of links) {
  const label = link.querySelector(".nav-label").textContent;
  const fractured = document.createElement("span");
  fractured.className = "shattered-label";
  fractured.setAttribute("aria-hidden", "true");

  for (const fragment of fragments) {
    const shard = document.createElement("span");
    shard.className = "glass-shard";
    shard.textContent = label;
    shard.style.setProperty("--cut", `polygon(${fragment.cut})`);
    shard.style.setProperty("--x", `${fragment.x}px`);
    shard.style.setProperty("--y", `${fragment.y}px`);
    shard.style.setProperty("--rotation", `${fragment.angle}deg`);
    shard.style.setProperty("--shard-color", fragment.color);
    shard.style.setProperty("--origin", fragment.origin);
    fractured.append(shard);
  }

  link.append(fractured);
  link.classList.add("glass-ready");
}

function markCurrentSection() {
  for (const link of links) {
    if (link.hash === window.location.hash) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  }
}

markCurrentSection();
window.addEventListener("hashchange", markCurrentSection);
