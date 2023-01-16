





function sostavChisla(massivChisel, chislo) {
    let subArr = []

    for (let i = 0; i < massivChisel.length; i++) {
        if (massivChisel[i] === chislo) subArr.push([massivChisel[i]])
        if (massivChisel[i] > chislo) continue
        for (let y = 0; y < massivChisel.length; y++) {
            
            if (massivChisel[i] !== massivChisel[y])  {
                obhod([massivChisel[i], massivChisel[y]], y)}
        }
    }



    function obhod(arr, y) {
        let propsArr = arr

        let sumOfArr = propsArr.reduce((sum, cur) => sum + cur, 0)
        if (sumOfArr === chislo) {
            if (!testsubArr([...propsArr])) subArr.push([...propsArr])
        }
        if (massivChisel.includes(chislo - sumOfArr)&&!propsArr.includes(chislo - sumOfArr)) {
            if (!testsubArr([chislo - sumOfArr, ...propsArr])) subArr.push([chislo - sumOfArr, ...propsArr])

        } else {
            
            for (let el of massivChisel.filter(x => x < chislo - sumOfArr)) {
                if (!propsArr.includes(el)) obhod([el, ...propsArr])
            }
        }
    }
    function testsubArr(arr) {
        return subArr.find(el => {
            for (let key of arr) {
                if (!el.includes(key)) { return false }
            }
            return true
        });
    }
    return subArr
} 
sostavChisla([7, 8, 3, 4, 5, 6, 1, 2], 15)








function sostavChisla(massivChisel:number[], chislo:number) {
    let subArr:number[][] = []

    for (let i = 0; i < massivChisel.length; i++) {
        if (massivChisel[i] === chislo) subArr.push([massivChisel[i]])
        if (massivChisel[i] > chislo) continue
        for (let y = 0; y < massivChisel.length; y++) {
            
            if (massivChisel[i] !== massivChisel[y])  {
                obhod([massivChisel[i], massivChisel[y]])}
        }
    }



    function obhod(arr:number[]) {
        let propsArr = arr

        let sumOfArr = propsArr.reduce((sum, cur) => sum + cur, 0)
        if (sumOfArr === chislo) {
            if (!testsubArr([...propsArr])) subArr.push([...propsArr])
        }
        if (massivChisel.includes(chislo - sumOfArr)&&!propsArr.includes(chislo - sumOfArr)) {
            if (!testsubArr([chislo - sumOfArr, ...propsArr])) subArr.push([chislo - sumOfArr, ...propsArr])

        } else {
            
            for (let el of massivChisel.filter(x => x < chislo - sumOfArr)) {
                if (!propsArr.includes(el)) obhod([el, ...propsArr])
            }
        }
    }
    function testsubArr(arr:number[]) {
        return subArr.find(el => {
            for (let key of arr) {
                if (!el.includes(key)) { return false }
            }
            return true
        });
    }
    return subArr
} 
sostavChisla([7, 8, 3, 4, 5, 6, 1, 2], 15)