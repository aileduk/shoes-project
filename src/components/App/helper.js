export function getFilteredCards(search, cards, activeShoes) {
    if (search !== '' && activeShoes == '') {
        return cards.filter(card => card.name.includes(search))
    } else if (activeShoes !== '') {
        return cards.filter(card => card.category.includes(activeShoes))
    } else {
        return cards
    }
}