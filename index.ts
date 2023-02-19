const users = [
    {id: 'trt1-jsld1-43nldfsf', name: 'Margo', age: 34},
    {id: 'trt1-jsdfld1-43ndfl', name: 'William', age: 37},
    {id: 'trt1-jqldd1-4345lnl', name: 'Leo', age: 9},
    {id: 'trt1-jsddfld1-433nl', name: 'Mia', age: 3},
    {id: 'trt1-jaweld1-43nl12', name: 'Maiotta', age: 12},
    {id: 'tqt1-jsweld1-43nl12', name: 'Elena', age: 55},
    {id: 'tcdt1-jald1-43nl12s', name: 'Sandra', age: 27},
    {id: 'tcdrt1-jasld1-4l12s', name: 'Sandra', age: 24},
    {id: 'tt1-jaweld1-43nl12s', name: 'Sandra', age: 30},
]

const getSortedItemsByAgeUpToDown = () => {
    return [...users].sort((u1, u2) => {
        if(u1.age > u2.age) return -1
        if(u1.age < u2.age) return 1

        return 0
    })
}
// console.log(getSortedItemsByAgeUpToDown())
// [
//     { id: 'tqt1-jsweld1-43nl12', name: 'Elena', age: 55 },
//     { id: 'trt1-jsdfld1-43ndfl', name: 'William', age: 37 },
//     { id: 'trt1-jsld1-43nldfsf', name: 'Margo', age: 34 },
//     { id: 'tt1-jaweld1-43nl12s', name: 'Sandra', age: 30 },
//     { id: 'tcdt1-jald1-43nl12s', name: 'Sandra', age: 27 },
//     { id: 'tcdrt1-jasld1-4l12s', name: 'Sandra', age: 24 },
//     { id: 'trt1-jaweld1-43nl12', name: 'Maiotta', age: 12 },
//     { id: 'trt1-jqldd1-4345lnl', name: 'Leo', age: 9 },
//     { id: 'trt1-jsddfld1-433nl', name: 'Mia', age: 3 }
// ]

const getSortedItems2FieldsNamesAndAge = () => {
    return [...users].sort((u1, u2) => {
        if(u1.name > u2.name) return 1
        if(u1.name < u2.name) return -1

        if(u1.age > u2.age) return 1
        if(u1.age < u2.age) return -1
        return 0
    })
}
//console.log(getSortedItems2FieldsNamesAndAge())
//сортировка по Имени + возраст
//[
//   { id: 'tqt1-jsweld1-43nl12', name: 'Elena', age: 55 },
//   { id: 'trt1-jqldd1-4345lnl', name: 'Leo', age: 9 },
//   { id: 'trt1-jaweld1-43nl12', name: 'Maiotta', age: 12 },
//   { id: 'trt1-jsld1-43nldfsf', name: 'Margo', age: 34 },
//   { id: 'trt1-jsddfld1-433nl', name: 'Mia', age: 3 },
//   { id: 'tcdrt1-jasld1-4l12s', name: 'Sandra', age: 24 }, <--- имя одинаковое - мортируем по возрасту
//   { id: 'tcdt1-jald1-43nl12s', name: 'Sandra', age: 27 }, <--- имя одинаковое - мортируем по возрасту
//   { id: 'tt1-jaweld1-43nl12s', name: 'Sandra', age: 30 }, <--- имя одинаковое - мортируем по возрасту
//   { id: 'trt1-jsdfld1-43ndfl', name: 'William', age: 37 }
// ]

const getSortedItemsByAgeDownToUp = () => {
    return [...users].sort((u1, u2) => {
        if(u1.age > u2.age) return 1
        if(u1.age < u2.age) return -1

        return 0
    })
}
//console.log(getSortedItemsByAgeDownToUp())
//[
//   { id: 'trt1-jsddfld1-433nl', name: 'Mia', age: 3 },
//   { id: 'trt1-jqldd1-4345lnl', name: 'Leo', age: 9 },
//   { id: 'trt1-jaweld1-43nl12', name: 'Maiotta', age: 12 },
//   { id: 'tcdrt1-jasld1-4l12s', name: 'Sandra', age: 24 },
//   { id: 'tcdt1-jald1-43nl12s', name: 'Sandra', age: 27 },
//   { id: 'tt1-jaweld1-43nl12s', name: 'Sandra', age: 30 },
//   { id: 'trt1-jsld1-43nldfsf', name: 'Margo', age: 34 },
//   { id: 'trt1-jsdfld1-43ndfl', name: 'William', age: 37 },
//   { id: 'tqt1-jsweld1-43nl12', name: 'Elena', age: 55 }
// ]

type SortedBy<T> = {
    fieldName: keyof T,
    direction: 'asc' | 'desc' // возрастание - убывание
}
const getSortedItems = <T>(items: T[], sortBy: SortedBy<T>, thenBy: SortedBy<T>)=> {
    return [...items].sort((i1, i2)=> {
        if(i1[sortBy.fieldName] < i2[sortBy.fieldName]){
            return sortBy.direction === 'asc' ? -1 : 1
        }
        if(i1[sortBy.fieldName] > i2[sortBy.fieldName]){
            return sortBy.direction === 'asc' ? 1 : -1
        }
        if(i1[thenBy.fieldName] < i2[thenBy.fieldName]){
            return thenBy.direction === 'asc' ? -1 : 1
        }
        if(i1[thenBy.fieldName] > i2[thenBy.fieldName]){
            return thenBy.direction === 'asc' ? 1 : -1
        }
        return 0
    })
}
//console.log(getSortedItems(users, {fieldName: 'name', direction: "asc"}, {fieldName: 'age', direction: "desc"}))
//сортировка по Имени + возраст
//[
//   { id: 'tqt1-jsweld1-43nl12', name: 'Elena', age: 55 },
//   { id: 'trt1-jqldd1-4345lnl', name: 'Leo', age: 9 },
//   { id: 'trt1-jaweld1-43nl12', name: 'Maiotta', age: 12 },
//   { id: 'trt1-jsld1-43nldfsf', name: 'Margo', age: 34 },
//   { id: 'trt1-jsddfld1-433nl', name: 'Mia', age: 3 },
//   { id: 'tt1-jaweld1-43nl12s', name: 'Sandra', age: 30 },<--- имя одинаковое - мортируем по возрасту (относительно параметрам переданным в функцию)
//   { id: 'tcdt1-jald1-43nl12s', name: 'Sandra', age: 27 },<--- имя одинаковое - мортируем по возрасту (относительно параметрам переданным в функцию)
//   { id: 'tcdrt1-jasld1-4l12s', name: 'Sandra', age: 24 },<--- имя одинаковое - мортируем по возрасту (относительно параметрам переданным в функцию)
//   { id: 'trt1-jsdfld1-43ndfl', name: 'William', age: 37 }
// ]

//best practice
const getSortedByItems_ = <T>(items: T[], sortBy: SortedBy<T>[])=> {
    return [...items].sort((i1, i2)=> {
        for(let sortConfig of sortBy){
            if(i1[sortConfig.fieldName] < i2[sortConfig.fieldName]){
                return sortConfig.direction === 'asc' ? -1 : 1
            }
            if(i1[sortConfig.fieldName] > i2[sortConfig.fieldName]){
                return sortConfig.direction === 'asc' ? 1 : -1
            }
        }

        return 0
    })
}
//console.log(getSortedByItems_(users, [{fieldName: 'name', direction: "asc"}, {fieldName: 'age', direction: "desc"}]))
//сортировка по Имени + возраст (the same)
//     [
//     { id: 'tqt1-jsweld1-43nl12', name: 'Elena', age: 55 },
//         { id: 'trt1-jqldd1-4345lnl', name: 'Leo', age: 9 },
//         { id: 'trt1-jaweld1-43nl12', name: 'Maiotta', age: 12 },
//         { id: 'trt1-jsld1-43nldfsf', name: 'Margo', age: 34 },
//         { id: 'trt1-jsddfld1-433nl', name: 'Mia', age: 3 },
//         { id: 'tt1-jaweld1-43nl12s', name: 'Sandra', age: 30 },
//         { id: 'tcdt1-jald1-43nl12s', name: 'Sandra', age: 27 },
//         { id: 'tcdrt1-jasld1-4l12s', name: 'Sandra', age: 24 },
//         { id: 'trt1-jsdfld1-43ndfl', name: 'William', age: 37 }
//     ]


//best-best practice
const getSortedByItems__ = <T>(items: T[], ...sortBy: SortedBy<T>[])=> {
    return [...items].sort((i1, i2)=> {
        for(let sortConfig of sortBy){
            if(i1[sortConfig.fieldName] < i2[sortConfig.fieldName]){
                return sortConfig.direction === 'asc' ? -1 : 1
            }
            if(i1[sortConfig.fieldName] > i2[sortConfig.fieldName]){
                return sortConfig.direction === 'asc' ? 1 : -1
            }
        }

        return 0
    })
}
//console.log(getSortedByItems__(users, {fieldName: 'name', direction: "asc"}, {fieldName: 'age', direction: "desc"})) //сколько угодно параметров
//сортировка по Имени + возраст (the same)
//     [
//     { id: 'tqt1-jsweld1-43nl12', name: 'Elena', age: 55 },
//         { id: 'trt1-jqldd1-4345lnl', name: 'Leo', age: 9 },
//         { id: 'trt1-jaweld1-43nl12', name: 'Maiotta', age: 12 },
//         { id: 'trt1-jsld1-43nldfsf', name: 'Margo', age: 34 },
//         { id: 'trt1-jsddfld1-433nl', name: 'Mia', age: 3 },
//         { id: 'tt1-jaweld1-43nl12s', name: 'Sandra', age: 30 },
//         { id: 'tcdt1-jald1-43nl12s', name: 'Sandra', age: 27 },
//         { id: 'tcdrt1-jasld1-4l12s', name: 'Sandra', age: 24 },
//         { id: 'trt1-jsdfld1-43ndfl', name: 'William', age: 37 }
//     ]






