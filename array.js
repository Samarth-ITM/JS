st = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
mrk = [10, 9, 8 , 7 , 6, 5 , 4, 3, 2 ,1]

sum = 0

for (let i of mrk){
    sum += i
}

avg = sum/mrk.length

console.log(avg)