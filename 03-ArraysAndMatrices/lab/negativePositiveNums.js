function solve(params) {
   let resultArr = [];
   
   for (const num of params) {
       if (num < 0) {
           resultArr.unshift(num);
       } else {
           resultArr.push(num);
       }
   }

   for (const num of resultArr) {
       console.log(num);
   }
}

solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);
