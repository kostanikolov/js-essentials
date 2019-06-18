function solve(n, k) {

    let arr = [1];

    for (let current = 1; current < n; current++) {
        
        let start = Math.max(0, current - k);
        let end = current - 1;
        let sum = 0;

        for (let prev = start; prev <= end; prev++) {
            sum += arr[prev];
        }

        arr[current] = sum;
    }

    console.log(arr.join(' '));

    // let nums = [ 1 ];

    // for (let current = 1; current < n; current++) {
    //     let sum = 0;

    //     for (let prev = current - k; prev <= current - 1; prev++) {
    //        if (prev >= 0) {
    //            sum += nums[prev];
    //        }
    //     }

    //     nums[current] = sum;
    // }

    // console.log(nums.join(' '));
}

solve(6, 3);
solve(8, 2);
