export function getFilteredCards(search, cards) {
    if (search !== '') {
        return cards.filter(card => card.name.includes(search))
    } else {
        return cards
    }
}