"use strict";

const rulesView = document.getElementById("rules-view");
const gameViews = [document.getElementById("setup"), document.getElementById("game")];
function switchView(rules) {
  rulesView.classList.toggle("hidden", !rules);
  gameViews.forEach(view => { view.style.display = rules ? "none" : ""; });
  document.getElementById("play-tab").setAttribute("aria-current", rules ? "false" : "page");
  document.getElementById("rules-tab").setAttribute("aria-current", rules ? "page" : "false");
  if (rules) rulesView.scrollIntoView({ block: "start" });
}
document.getElementById("rules-tab").onclick = () => switchView(true);
document.getElementById("play-tab").onclick = () => switchView(false);
document.getElementById("return-game").onclick = () => switchView(false);
document.getElementById("rules-button").addEventListener("click", () => {
  document.getElementById("rules-dialog").close();
  switchView(true);
});
const content = document.getElementById("rules-content");
document.querySelectorAll("#rules-dialog p").forEach(p => content.append(p.cloneNode(true)));
content.insertAdjacentHTML("beforeend", `
  <p><strong>Limite mano.</strong> Alla fine del turno scarta fino a restare con 7 carte.</p>
  <p><strong>Mazzo esaurito.</strong> Gli scarti vengono rimescolati. Le carte ancora sui Nodi restano sul terreno.</p>
  <h2>Requisiti dei Nodi</h2>
  <ul>${NODES.map(node => `<li><strong>${node.name}:</strong> ${node.universal ? "2 potenza in almeno 3 elementi diversi" : Object.entries(node.requirements).map(([element, value]) => element + " " + value).join(", ")}</li>`).join("")}</ul>
  <h2>Effetti delle carte</h2>
  ${[...CATALYSTS, ...DISTORTIONS].map(card => `<details><summary>${card.id} · ${card.name}</summary><p>${card.effect}</p></details>`).join("")}
`);
// Give the existing click-driven cards an equivalent keyboard action.
document.addEventListener("keydown", event => {
  if ((event.key === "Enter" || event.key === " ") && event.target.matches(".hand-card[onclick], .node-card[onclick]")) {
    event.preventDefault();
    event.target.click();
  }
});
const accessibleCards = () => document.querySelectorAll(".hand-card[onclick], .node-card[onclick]").forEach(card => {
  card.tabIndex = 0;
  card.setAttribute("role", "button");
});
new MutationObserver(accessibleCards).observe(document.getElementById("game"), { childList: true, subtree: true });
accessibleCards();
