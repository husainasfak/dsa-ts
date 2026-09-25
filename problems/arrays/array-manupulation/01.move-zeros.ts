/*

Move all zeros to the end of an array while maintaining the relative order of the non-zero elements.
Do it in-place without making a copy of the array.


*/

function moveZeros(nums: number[]): void {
  let write = 0;

  for (let read = 0; read < nums.length; read++) {
    if (nums[read] !== 0) {
      let temp = nums[write];
      nums[write] = nums[read];
      nums[read] = temp;
      write++;
    }
  }
}
const nums = [4, 2, 4, 0, 0, 3, 0, 5, 1, 0];

moveZeros(nums);

console.log(nums);

// optimization - can we reduce the number of swaps?

function moveZerosOptimized(nums: number[]): void {
  let write = 0;
  for (let read = 0; read < nums.length; read++) {
    if (nums[read] !== 0) {
      if (read !== write) {
        let temp = nums[write];
        nums[write] = nums[read];
        nums[read] = temp;
        write++;
      }
    }
  }
}
