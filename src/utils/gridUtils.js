export const changeFilter = (filterType) => {
    const filterList = [...document.getElementById('grid-filters').children];
    filterList.map(filterItem => {
        if (!filterItem.classList.contains('filter-trigger')) {
            const filter = filterItem.firstChild;
            const isActiveFilter = filter.classList.contains(filterType) && !filter.classList.contains('active');
            return isActiveFilter ? filter.classList.add('active') : filter.classList.remove('active');
        }
    });

    const gallery = [...document.getElementsByClassName('gallery')[0].children];
    gallery.map(item => {
        if (filterType === 'all') item.style.display = 'grid';
        else item.classList.contains(filterType) ? item.style.display = 'grid' : item.style.display = 'none';
    })

}