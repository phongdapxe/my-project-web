document.getElementById("search-icon").addEventListener("click", timkiem())

function timkiem() {
  document.addEventListener('DOMContentLoaded', () => {
    const searchIcon = document.getElementById('search-icon');
    const searchBox = document.getElementById('search-box');
    const input = document.getElementById('text');
    const result = document.getElementById('result');

    const data = [
      "Arsenal", "Aston Villa", "Bournemouth", "Brentford",
      "Brighton & Hove Albion", "Chelsea", "Crystal Palace", "Everton",
      "Fulham", "Ipswich Town", "Leicester City", "Liverpool",
      "Manchester City", "Manchester United", "Newcastle United",
      "Nottingham Forest", "Southampton", "Tottenham Hotspur",
      "West Ham United", "Wolverhampton Wanderers",
      "Premier League", "La Liga", "Bundesliga", "Serie A", "Ligue 1",
      "Champions League", "Europa League", "Conference League",
      "V-League", "AFC Champions League", "World Cup", "Euro",
      "Copa America", "Asian Cup", "FA Cup", "Carabao Cup", "UEFA Super Cup",
      "Club World Cup", "VCK U23 châu Á", "SEA Games"
    ];

    const dataWithContext = [];

    data.forEach(name => {
      dataWithContext.push(name);
      dataWithContext.push(`kết quả ${name}`);
      dataWithContext.push(`tin tức ${name}`);
    });

    searchIcon.addEventListener('click', e => {
      e.stopPropagation();
      searchIcon.style.display = 'none';
      searchBox.style.display = 'block';
      input.focus();
    });

    searchBox.addEventListener('click', e => {
      e.stopPropagation();
    });

    document.addEventListener('click', () => {
      if (searchBox.style.display === 'block') {
        searchBox.style.display = 'none';
        searchIcon.style.display = 'block';
        input.value = '';
        result.style.display = 'none';
      }
    });

    input.addEventListener("input", () => {
      const kw = input.value.toLowerCase();
      if (!kw) {
        result.style.display = "none";
        return;
      }
      const matched = dataWithContext.filter(item => item.toLowerCase().includes(kw));
      result.innerHTML = matched.map(item => `<div>${item}</div>`).join("");
      result.style.display = matched.length ? "block" : "none";
    });

    result.addEventListener("click", e => {
      if (e.target.tagName === "DIV") {
        input.value = e.target.innerText;
        result.style.display = "none";
      }
    });

    input.addEventListener("blur", () => {
      setTimeout(() => result.style.display = "none", 150);
    });

  });
}