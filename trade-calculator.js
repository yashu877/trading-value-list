
(() => {
  const your = [];
  const their = [];

  const money2 = n => n.toLocaleString("en-US");

  function setupSide(side, searchId, resultsId, itemsId, totalId) {
    const searchEl = document.getElementById(searchId);
    const resultsEl = document.getElementById(resultsId);
    const itemsEl = document.getElementById(itemsId);
    const totalEl = document.getElementById(totalId);

    function renderResults() {
      const q = searchEl.value.trim().toLowerCase();
      if (!q) {
        resultsEl.innerHTML = "";
        resultsEl.classList.remove("show");
        return;
      }

      const matches = ITEMS.filter(x => x[0].toLowerCase().includes(q)).slice(0, 8);
      resultsEl.innerHTML = matches.length
        ? matches.map(([name, value, demand]) => `
          <button type="button" class="result-item" data-name="${escapeHtml(name)}">
            <span>${escapeHtml(name)}</span>
            <b>${money2(value)}</b>
          </button>`).join("")
        : '<div class="no-results">No matching items</div>';

      resultsEl.classList.add("show");
      resultsEl.querySelectorAll(".result-item").forEach(btn => {
        btn.addEventListener("click", () => {
          const item = ITEMS.find(x => x[0] === btn.dataset.name);
          if (!item) return;
          side.push(item);
          searchEl.value = "";
          renderResults();
          renderSelected();
          updateTrade();
        });
      });
    }

    function renderSelected() {
      itemsEl.innerHTML = side.map(([name, value], i) => `
        <div class="selected-item">
          <span>${escapeHtml(name)}</span>
          <b>${money2(value)}</b>
          <button type="button" aria-label="Remove ${escapeHtml(name)}" data-index="${i}">×</button>
        </div>`).join("");

      itemsEl.querySelectorAll("button").forEach(btn => {
        btn.addEventListener("click", () => {
          side.splice(Number(btn.dataset.index), 1);
          renderSelected();
          updateTrade();
        });
      });

      totalEl.textContent = money2(side.reduce((sum, x) => sum + x[1], 0));
    }

    searchEl.addEventListener("input", renderResults);
    document.addEventListener("click", e => {
      if (!e.target.closest(".trade-search-wrap") && !e.target.closest(".trade-results")) {
        resultsEl.classList.remove("show");
      }
    });

    renderSelected();
  }

  function updateTrade() {
    const yourTotal = your.reduce((sum, x) => sum + x[1], 0);
    const theirTotal = their.reduce((sum, x) => sum + x[1], 0);
    const result = document.getElementById("tradeResult");

    result.className = "trade-result";

    if (!yourTotal || !theirTotal) {
      result.classList.add("neutral");
      result.innerHTML = `
        <div class="result-title">ADD ITEMS TO COMPARE</div>
        <div class="result-diff">Your trade will appear here</div>`;
      return;
    }

    const diff = theirTotal - yourTotal;
    const percent = yourTotal ? Math.abs(diff / yourTotal * 100) : 0;

    let title, text, cls;
    if (Math.abs(diff) < Math.max(1, yourTotal * 0.05)) {
      title = "⚖️ FAIR TRADE";
      text = `Difference: ${money2(Math.abs(diff))} • ${percent.toFixed(1)}%`;
      cls = "fair";
    } else if (diff > 0) {
      title = "🟢 WIN";
      text = `You gain ${money2(diff)} • ${percent.toFixed(1)}%`;
      cls = "win";
    } else {
      title = "🔴 LOSE";
      text = `You lose ${money2(Math.abs(diff))} • ${percent.toFixed(1)}%`;
      cls = "lose";
    }

    result.classList.add(cls);
    result.innerHTML = `
      <div class="result-title">${title}</div>
      <div class="result-diff">${text}</div>
      <div class="result-values">You: <b>${money2(yourTotal)}</b> &nbsp; vs &nbsp; Them: <b>${money2(theirTotal)}</b></div>`;
  }

  document.getElementById("resetTrade").addEventListener("click", () => {
    your.length = 0;
    their.length = 0;
    document.getElementById("yourSearch").value = "";
    document.getElementById("theirSearch").value = "";
    document.getElementById("yourResults").innerHTML = "";
    document.getElementById("theirResults").innerHTML = "";
    document.getElementById("yourResults").classList.remove("show");
    document.getElementById("theirResults").classList.remove("show");
    document.getElementById("yourItems").innerHTML = "";
    document.getElementById("theirItems").innerHTML = "";
    document.getElementById("yourTotal").textContent = "0";
    document.getElementById("theirTotal").textContent = "0";
    updateTrade();
  });

  setupSide(your, "yourSearch", "yourResults", "yourItems", "yourTotal");
  setupSide(their, "theirSearch", "theirResults", "theirItems", "theirTotal");
})();
