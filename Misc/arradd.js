function arradd(a1, a2) {
    const res = [];
    const maxlen = Math.max(a1.length, a2.length);

    for (let i = 0; i < maxlen; i++) {
        if (a1[i] !== undefined && a2[i] !== undefined) {
            res.push(a1[i] + a2[i]);
        } else if (a1[i] !== undefined) {
            res.push(a1[i]);
        } else {
            res.push(a2[i]);
        }
    }
    return res;
}

const array1 = [1, 0, 2, 3, 4];
const array2 = [3, 5, 6, 7, 8, 13];
console.log(arradd(array1, array2));
