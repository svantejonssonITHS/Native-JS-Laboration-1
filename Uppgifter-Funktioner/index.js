function average(a){
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i]
    }
    sum = (sum / a.length)
    return sum ? sum : null
}