const ITEMS = [["Slasher", 100000, 10], ["Deathshard", 7000, 9.5], ["candycorn knife", 6500, 7], ["Yellowstreaksflare gun", 5000, 10], ["Yellowstreaksflare knife", 5000, 10], ["Ancient Riptidebringer", 30000, 9.5], ["Ancient Riptide", 30000, 9.5], ["chroma raven sniper", 2750, 9.5], ["chroma raven scythe", 2750, 7], ["chroma natural gun", 2000, 6.5], ["Jollybringer", 2500, 7], ["turkey leg", 1000, 5.5], ["raven sniper", 1250, 6.51], ["raven scythe", 1000, 6.5], ["flintnock", 500, 4], ["cutlass", 350, 4], ["chroma flintnock", 1500, 5], ["chroma cutlass", 1000, 5], ["carrot sniper", 750, 3], ["carrot scythe", 500, 2.5], ["chroma carrot sniper", 1000, 5], ["chroma carrot scythe", 750, 3], ["meowscope", 1000, 6], ["meowbat", 750, 6], ["chroma meowscope", 1750, 7], ["Chroma meowbat", 1300, 7], ["moonzi", 500, 4], ["moonblade", 350, 4], ["chroma moonzi", 1000, 6.5], ["chroma moonblade", 700, 6.5], ["hopheart", 600, 4], ["lovebun", 400, 3], ["chroma hopheart", 1200, 5], ["chroma lovebun", 800, 5], ["archblaster", 700, 4], ["archangel", 300, 4], ["chroma archblaster", 1200, 6.5], ["chroma archangel", 1200, 6.5], ["natural gun", 250, 3], ["natural knife", 250, 3], ["acid beam", 350, 3], ["acid knife", 350, 3], ["chroma acid beam", 750, 5], ["chroma acid knife", 750, 5], ["batboom", 400, 3], ["batspear", 400, 3], ["chroma batboom", 1000, 5], ["chroma batspear", 1000, 5], ["melonbeam", 500, 4], ["melon blade", 500, 4], ["chroma melonbeam", 750, 5], ["chroma melon blade", 750, 5], ["bunny blade", 100, 1], ["chroma bunny blade", 250, 1.5], ["bunny beam", 250, 1.5], ["chroma bunny beam", 500, 2], ["egg launcher", 500, 4], ["angelicscope", 250, 3], ["chroma angelicscope", 550, 4], ["bloomscope", 250, 2], ["chroma bloomscope", 250, 3], ["bloomana", 500, 7], ["chroma bloomana", 1000, 8], ["axewell", 350, 3], ["chroma axewell", 1000, 6], ["pearlscope", 300, 4], ["chroma pearl scope", 600, 5], ["poseidon", 500, 4], ["chroma poseidon", 750, 5], ["celestialscope", 500, 5], ["celestial spear", 350, 5], ["trilogy axe", 1000, 4], ["aurial", 2000, 7], ["aurion", 1500, 7], ["butterfly bow(red)", 600, 4], ["heartcrusher(red)", 300, 4], ["butterfly bow(pink)", 400, 3], ["heartcrusher (pink)", 200, 3], ["chroma butterfly bow", 1000, 6], ["chroma heartcrusher", 1000, 6], ["gingerswirl", 200, 2], ["ginger’s edge", 100, 1], ["chroma gingerswirl", 400, 3], ["chroma ginger’s edge", 250, 3], ["florelia gun", 350, 4], ["florelia blade", 250, 4], ["chroma florelia gun", 1000, 6], ["chroma floreblade", 700, 5.5], ["galaxyheat", 350, 4], ["icewood", 350, 4], ["mythical sword", 350, 4], ["mortgage blade", 350, 4], ["hasher", 250, 3], ["san’s batwing", 500, 5], ["cookie cutter", 1500, 4], ["chroma cookie cutter", 750, 4], ["ultraviolet", 100, 1], ["dragonpiercer", 100, 1], ["Dragonfire", 100, 1], ["rainbow periastron", 100, 1], ["Floral axe", 500, 3], ["floral scope", 1000, 5], ["Soulpricier", 350, 4], ["soulreaper", 2000, 6.5], ["thunderstone", 350, 4], ["crimscope", 350, 3], ["chroma crimscope", 500, 4], ["volcanic doomspeaker", 200, 2], ["chroma volcanic doomspeaker", 400, 4], ["dreamy", 250, 3], ["chroma dreamy", 500, 4], ["frostpericer", 250, 3], ["chroma frostpericer", 500, 4], ["battle axe", 1000, 6], ["amerilaser", 1000, 6], ["epic redness", 1750, 7], ["bluesteel bow", 750, 5], ["tropical gun", 750, 5], ["stickers knife", 750, 5], ["phaser", 2000, 7.5], ["heartbroken", 350, 4], ["riptidebringer (godly)", 1000, 6], ["riptide knife(godly)", 1000, 6], ["floral beam", 800, 6], ["floral blade", 800, 6], ["deluxe", 300, 4], ["megalodon", 200, 3], ["candy knife", 100, 3], ["fusion gun", 200, 3], ["fusion knife", 200, 3], ["daydream gun", 500, 3], ["daydream knife", 500, 3], ["flaged gun", 100, 2], ["flaged knife", 100, 2], ["ghostly gun", 500, 3], ["ghostly knife", 500, 3], ["pumkincrow gun", 350, 3], ["pumkincrow knife", 350, 3], ["shellshocked gun", 750, 5], ["shellshocked knife", 2500, 7.5], ["inferno knife", 750, 5], ["inferno gun", 2000, 7], ["firesky gun", 350, 4], ["firesky knife", 350, 4], ["loveletter gun", 250, 4], ["loveletter knife", 250, 4], ["tacos time gun", 350, 5], ["tacos time knife", 359, 5], ["Bluestreaksflare gun", 750, 9], ["bluestreaksflare knife", 750, 9], ["skull town gun", 250, 5], ["skull town knife", 250, 5], ["wrapped gun", 250, 2], ["wrapped knife", 250, 2], ["Gingerman gun", 200, 1], ["Gingerman knife", 200, 1], ["Butterflies gun (Purple)", 200, 1], ["butterflies knife(purple)", 200, 1], ["butterflies (OG)", 500, 4], ["carrots gun", 350, 4], ["carrots knife", 350, 4], ["flowers gun (og)", 500, 4], ["flowers knife (og)", 500, 4], ["painted gun", 350, 2], ["painted knife", 350, 2], ["glowy gun", 100, 1], ["glowy knife", 100, 1], ["experiment gun", 100, 1], ["experiment knife", 100, 1], ["stripped gun", 350, 3], ["stripped knife", 350, 3], ["Glazing gun", 200, 2], ["glazing knife", 200, 2], ["heartstone gun", 100, 1], ["heartstone knife", 100, 1], ["minty gun", 200, 1], ["minty knife", 200, 1], ["frosted lab gun", 200, 1], ["frosted lab knife", 200, 1], ["last love gun", 200, 1], ["last love knife", 200, 1], ["scarf gun", 350, 1], ["scarf knife", 350, 1], ["broken heart gun", 200, 2], ["broken heart knife", 200, 2], ["candycorn gun", 500, 3], ["web gun", 350, 2], ["web knife", 350, 2], ["bats gun", 350, 2.5], ["bats knife", 350, 2.5]];

const search = document.getElementById("search");
const sort = document.getElementById("sort");
const container = document.getElementById("items");
const empty = document.getElementById("empty");
const itemCount = document.getElementById("itemCount");
const totalValue = document.getElementById("totalValue");
const avgDemand = document.getElementById("avgDemand");
const resultChip = document.getElementById("resultChip");
const heroTopValue = document.getElementById("heroTopValue");

const money = n => n.toLocaleString("en-US");

function demandMeta(demand) {
  if (demand >= 9) return { cls: "hot", label: "Very High", icon: "🔥" };
  if (demand >= 7) return { cls: "high", label: "High", icon: "★" };
  if (demand >= 5) return { cls: "mid", label: "Medium", icon: "◆" };
  if (demand >= 3) return { cls: "low", label: "Low", icon: "•" };
  return { cls: "very-low", label: "Very Low", icon: "↓" };
}

function render() {
  const q = search.value.trim().toLowerCase();
  let list = ITEMS.filter(x => x[0].toLowerCase().includes(q));

  switch(sort.value) {
    case "value-asc": list.sort((a,b)=>a[1]-b[1]); break;
    case "demand-desc": list.sort((a,b)=>b[2]-a[2] || b[1]-a[1]); break;
    case "demand-asc": list.sort((a,b)=>a[2]-b[2] || a[1]-b[1]); break;
    case "name": list.sort((a,b)=>a[0].localeCompare(b[0])); break;
    default: list.sort((a,b)=>b[1]-a[1]);
  }

  container.innerHTML = list.map(([name,value,demand], index) => {
    const chroma = name.toLowerCase().startsWith("chroma");
    const meta = demandMeta(demand);
    return `<article class="card" style="--delay:${Math.min(index,12)*25}ms">
      <div class="card-shine"></div>
      <div class="top">
        <div class="name" title="${escapeHtml(name)}">${escapeHtml(name)}</div>
        ${chroma ? '<span class="tag">CHROMA</span>' : ''}
      </div>
      <div class="value-row">
        <div>
          <div class="value">${money(value)}</div>
          <div class="label">VALUE</div>
        </div>
        <div class="mini-rank">#${index + 1}</div>
      </div>
      <div class="demand-row">
        <span class="demand ${meta.cls}">${meta.icon} ${demand}/10</span>
        <span class="demand-label">${meta.label}</span>
      </div>
      <div class="bar ${meta.cls}" aria-label="Demand ${demand} out of 10"><i style="width:${demand*10}%"></i></div>
    </article>`;
  }).join("");

  const count = list.length;
  const total = list.reduce((s,x)=>s+x[1],0);
  const avg = count ? list.reduce((s,x)=>s+x[2],0)/count : 0;

  empty.classList.toggle("hidden", count !== 0);
  itemCount.textContent = count.toLocaleString();
  totalValue.textContent = money(total);
  avgDemand.textContent = count ? avg.toFixed(1)+"/10" : "0/10";
  resultChip.textContent = `${count.toLocaleString()} ${count === 1 ? "result" : "results"}`;

  if (ITEMS.length) heroTopValue.textContent = money(Math.max(...ITEMS.map(x=>x[1])));
}

function escapeHtml(str) {
  return str.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
}

search.addEventListener("input", render);
sort.addEventListener("change", render);

document.addEventListener("keydown", e => {
  if (e.key === "/" && document.activeElement !== search && !["INPUT","SELECT","TEXTAREA"].includes(document.activeElement.tagName)) {
    e.preventDefault();
    search.focus();
  }
  if (e.key === "Escape" && document.activeElement === search) {
    search.value = "";
    render();
    search.blur();
  }
});

render();
