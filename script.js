const ITEMS = [["Slasher", 100000, 10], ["Deathshard", 7000, 10], ["Candycorn Knife", 7000, 7], ["Yellowstreaksflare Gun", 5000, 10], ["Yellowstreaksflare Knife", 5000, 10], ["Ancient Riptidebringer", 30000, 9.5], ["Ancient Riptide", 30000, 9.5], ["Chroma Raven Sniper", 2750, 9.5], ["Chroma Raven Scythe", 2750, 9.5], ["Chroma Natural Gun", 2000, 8], ["Jollybringer", 2500, 9], ["Turkey Leg", 1000, 7], ["Raven Sniper", 1250, 9], ["Raven Scythe", 1000, 9], ["Flintnock", 500, 7.5], ["Cutlass", 350, 7.5], ["Chroma Flintnock", 1500, 8], ["Chroma Cutlass", 1000, 8], ["Carrot Sniper", 750, 6], ["Carrot Scythe", 500, 6], ["Chroma Carrot Sniper", 1000, 7], ["Chroma Carrot Scythe", 750, 6.5], ["Meowscope", 1000, 8], ["Meowbat", 750, 8], ["Chroma Meowscope", 1750, 9], ["Chroma Meowbat", 1300, 9], ["Moonzi", 500, 6], ["Moonblade", 350, 6], ["Chroma Moonzi", 1000, 7], ["Chroma Moonblade", 700, 7], ["Hopheart", 600, 7], ["Lovebun", 400, 7], ["Chroma Hopheart", 1200, 7.5], ["Chroma Lovebun", 800, 7.5], ["Archblaster", 700, 7.5], ["Archangel", 300, 6], ["Chroma Archblaster", 1200, 9], ["Chroma Archangel", 1200, 9], ["Natural Gun", 250, 5], ["Natural Knife", 250, 5], ["Acid Beam", 350, 4.5], ["Acid Knife", 350, 4.5], ["Chroma Acid Beam", 750, 6], ["Chroma Acid Knife", 750, 5], ["Batboom", 400, 6], ["Batspear", 400, 6], ["Chroma Batboom", 1000, 7], ["Chroma Batspear", 1000, 7], ["Melonbeam", 500, 5], ["Melon Blade", 500, 5], ["Chroma Melonbeam", 1000, 6], ["Chroma Melon Blade", 1000, 6], ["Bunny Blade", 100, 2], ["Chroma Bunny Blade", 250, 3], ["Bunny Beam", 250, 3], ["Chroma Bunny Beam", 500, 3], ["Egg Launcher", 500, 5], ["Angelicscope", 250, 3], ["Chroma Angelicscope", 500, 5], ["Bloomscope", 300, 4], ["Chroma Bloomscope", 750, 6], ["Bloomana", 500, 7], ["Chroma Bloomana", 1000, 8], ["Axewell", 350, 5], ["Chroma Axewell", 1000, 7], ["Pearlscope (Tom)", 300, 6], ["Chroma Pearl Scope", 600, 7], ["Poseidon", 500, 6], ["Chroma Poseidon", 750, 7], ["Celestialscope", 750, 8], ["Celestial Spear", 500, 8], ["Trilogy Axe", 1000, 6], ["Aurial", 2000, 8], ["Aurion", 1500, 8], ["Butterfly Bow (Red)", 600, 5], ["Heartcrusher (Red)", 300, 5], ["Butterfly Bow (Pink)", 400, 5], ["Heartcrusher (Pink)", 200, 5], ["Chroma Butterfly Bow", 1000, 7], ["Chroma Heartcrusher", 1000, 6], ["Gingerswirl", 200, 2], ["Ginger's Edge", 100, 1], ["Chroma Gingerswirl", 400, 3], ["Chroma Ginger's Edge", 250, 3], ["Florelia Gun", 500, 6], ["Florelia Blade", 350, 6], ["Chroma Florelia Gun", 1000, 8], ["Chroma Floreblade", 700, 7.5], ["Galaxyheat", 350, 4], ["Icewood", 350, 4], ["Mythical Sword", 350, 4], ["Mortgage Blade", 350, 4], ["Hasher", 250, 3], ["San's Batwing", 500, 5], ["Cookie Cutter", 1500, 8], ["Chroma Cookie Cutter", 750, 7], ["Ultraviolet", 100, 1], ["Dragonfire", 150, 2], ["Dragonpiercer", 100, 1], ["Rainbow Periastron", 100, 1], ["Floral Axe", 500, 3], ["Floral Scope", 1000, 5], ["Soulpricier", 500, 6], ["Soulreaper", 2000, 8], ["Thunderstone", 350, 4], ["Crimscope", 350, 3], ["Chroma Crimscope", 700, 4], ["Volcanic Doomspeaker", 200, 2], ["Chroma Volcanic Doomspeaker", 400, 4], ["Dreamy", 250, 3], ["Chroma Dreamy", 500, 4], ["Frostpericer", 250, 3], ["Chroma Frostpericer", 500, 4], ["Battle Axe", 1000, 8], ["Amerilaser", 1000, 8], ["Epic Redness", 1750, 9], ["Bluesteel Bow", 750, 7], ["Tropical Gun", 750, 7], ["Stickers Knife", 750, 7], ["Phaser", 2000, 9], ["Heartbroken", 300, 6], ["Riptidebringer (Godly)", 1000, 8], ["Riptide Knife (Godly)", 1000, 8], ["Floral Beam", 800, 7], ["Floral Blade", 800, 7], ["Deluxe", 300, 4], ["Megalodon", 200, 3], ["Candy Knife", 100, 3], ["Fusion Gun", 200, 3], ["Fusion Knife", 200, 3], ["Daydream Gun", 500, 5], ["Daydream Knife", 500, 5], ["Flaged Gun", 100, 5], ["Flaged Knife", 100, 5], ["Ghostly Gun", 500, 5], ["Ghostly Knife", 500, 5], ["Pumkincrow Gun", 350, 6], ["Pumkincrow Knife", 350, 6], ["Shellshocked Gun", 750, 5], ["Shellshocked Knife", 2500, 8], ["Inferno Knife", 750, 5], ["Inferno Gun", 2000, 8], ["Firesky Gun", 350, 4], ["Firesky Knife", 350, 4], ["Loveletter Gun", 250, 4], ["Loveletter Knife", 250, 4], ["Tacos Time Gun", 350, 5], ["Tacos Time Knife", 359, 5], ["Bluestreaksflare Gun", 750, 9], ["Bluestreaksflare Knife", 750, 9], ["Skull Town Gun", 250, 7], ["Skull Town Knife", 250, 7], ["Wrapped Gun", 250, 4], ["Wrapped Knife", 250, 4], ["Gingerman Gun", 200, 4], ["Gingerman Knife", 200, 4], ["Butterflies Gun (Purple)", 200, 4], ["Butterflies Knife (Purple)", 200, 4], ["Butterflies (OG)", 500, 5], ["Carrots Gun", 350, 5], ["Carrots Knife", 350, 5], ["Flowers Gun (OG)", 500, 5], ["Flowers Knife (OG)", 500, 5], ["Painted Gun", 350, 7], ["Painted Knife", 350, 6], ["Glowy Gun", 100, 2], ["Glowy Knife", 100, 2], ["Experiment Gun", 100, 2], ["Experiment Knife", 100, 2], ["Stripped Gun", 350, 3], ["Stripped Knife", 350, 3], ["Glazing Gun", 200, 3], ["Glazing Knife", 200, 3], ["Heartstone Gun", 100, 2], ["Heartstone Knife", 100, 2], ["Minty Gun", 200, 3], ["Minty Knife", 200, 3], ["Frosted Lab Gun", 200, 3], ["Frosted Lab Knife", 200, 3], ["Last Love Gun", 200, 3], ["Last Love Knife", 200, 3], ["Scarf Gun", 350, 3], ["Scarf Knife", 350, 3], ["Broken Heart Gun", 200, 2], ["Broken Heart Knife", 200, 2], ["Candycorn Gun", 500, 4]];

const search = document.getElementById("search");
const sort = document.getElementById("sort");
const container = document.getElementById("items");
const empty = document.getElementById("empty");
const itemCount = document.getElementById("itemCount");
const totalValue = document.getElementById("totalValue");
const avgDemand = document.getElementById("avgDemand");

const money = n => n.toLocaleString("en-US");

function render(){
  const q = search.value.trim().toLowerCase();
  let list = ITEMS.filter(x => x[0].toLowerCase().includes(q));

  switch(sort.value){
    case "value-asc": list.sort((a,b)=>a[1]-b[1]); break;
    case "demand-desc": list.sort((a,b)=>b[2]-a[2] || b[1]-a[1]); break;
    case "demand-asc": list.sort((a,b)=>a[2]-b[2] || a[1]-b[1]); break;
    case "name": list.sort((a,b)=>a[0].localeCompare(b[0])); break;
    default: list.sort((a,b)=>b[1]-a[1]);
  }

  container.innerHTML = list.map(([name,value,demand])=>{
    const chroma = name.toLowerCase().startsWith("chroma");
    const demandClass = demand >= 9 ? "🔥" : demand >= 7 ? "★" : "•";
    return `<article class="card">
      <div class="top">
        <div class="name">${escapeHtml(name)}</div>
        ${chroma ? '<span class="tag">CHROMA</span>' : ''}
      </div>
      <div class="value">${money(value)}</div>
      <div class="label">Value</div>
      <div class="demand-row"><span class="demand">${demandClass} ${demand}/10</span><span class="label">Demand</span></div>
      <div class="bar"><i style="width:${demand*10}%"></i></div>
    </article>`;
  }).join("");

  empty.classList.toggle("hidden", list.length !== 0);
  itemCount.textContent = list.length.toLocaleString();
  totalValue.textContent = money(list.reduce((s,x)=>s+x[1],0));
  avgDemand.textContent = list.length ? (list.reduce((s,x)=>s+x[2],0)/list.length).toFixed(1)+"/10" : "0/10";
}

function escapeHtml(str){
  return str.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
}
search.addEventListener("input",render);
sort.addEventListener("change",render);
render();
