export function getFilteredCards(search, cards, filter) {
    return cards.filter((card) => {
        let searchPassed = search === '' || card.name.includes(search);
        let filterPassed = !filter || card.category === filter;

        return searchPassed && filterPassed
    })
}