const cards = document.querySelectorAll(".mushroom-guide .card");
const seasonalFilter = document.querySelector("#season");
const edibleFilter = document.querySelector("#edible");
const noResultMessage = document.querySelector(".no-matches");

const currentFilters = {
  season: "all",
  edible: "all",
};

seasonalFilter.addEventListener("change", updateFilter);
edibleFilter.addEventListener("change", updateFilter);

function updateFilter(e) {
  const filterType = e.target.name;
  currentFilters[filterType] = e.target.value;
  console.log(filterType);
  filterCards();
}

function filterCards() {
  let hasVisibleCards = false;
  cards.forEach((card) => {
    const season = card.querySelector("[data-season]").dataset.season;
    const edible = card.querySelector("[data-edible]").dataset.edible;
    // console.log(season, edible);

    const matchedSeason = currentFilters.season === season;
    const matchedEdible = currentFilters.edible === edible;
    // console.log(matchedEdible, matchedSeason);

    if (
      (matchedEdible || currentFilters.edible === "all") &&
      (matchedSeason || currentFilters.season === "all")
    ) {
      card.hidden = false;
      hasVisibleCards = true;
    } else {
      card.hidden = true;
    }

    if (hasVisibleCards) {
      noResultMessage.hidden = true;
    } else {
      noResultMessage.hidden = false;
    }
  });
}
