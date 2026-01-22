st = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
mrk = [10, 9, 8 , 7 , 6, 5 , 4, 3, 2 ,1];
st.push("K");
mrk.unshift(11);
console.log(st)
console.log(mrk)
sum = 0;

for (let i of mrk){
    sum += i;
}

avg = sum/mrk.length;

console.log("Average: "+avg);