export function sortByTitle(list) {
    return list.sort((a, b) => (a.title < b.title) ? -1 : ((a.title > b.title) ? 1 : 0));
}