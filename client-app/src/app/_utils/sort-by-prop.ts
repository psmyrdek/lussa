interface SortConfig {
    order: 'desc' | 'asc';
}

export function sortByProp<T>(propName: string, config: SortConfig = { order: 'desc' }) {

    return (first: T, second: T): number => {

        if (first[propName] > second[propName]) {
            return config.order === 'desc' ? -1 : 1
        }

        if (first[propName] < second[propName]) {
            return config.order === 'desc' ? 1 : -1
        }

        return 0;
    }

}