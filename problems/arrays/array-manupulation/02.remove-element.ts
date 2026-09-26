// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.

function removeElement(nums: number[], val: number): number {
  let k = 0;
  const result = new Array(nums.length);
  for (const num of nums) {
    if (num !== val) {
      result.push(num);
      k++;
    }
  }
  for (let i = 0; i < k; i++) {
    nums[i] = result[i];
  }
  return k;
}

const number = [0, 1, 2, 2, 3, 0, 4, 2];
console.log(removeElement(number, 2));

// optimized with two pointer  approach

function removeElementOptimized(nums: number[], val: number): number {
  let write = 0;

  for (let read = 0; read < nums.length; read++) {
    if (nums[read] !== val) {
      nums[write] = nums[read];
      write++;
    }
  }
  return write;
}

// two pointer approach with swap is still not optimal as we are doing unnecessary swaps, we can just overwrite the value at write pointer with the value at read pointer if they are not equal to val. This way we avoid unnecessary swaps and reduce the time complexity.

// Approach 3 -  Replace from the end
function removeElementFromEnd(nums: number[], val: number): number {
  let start = 0;
  let end = nums.length;
  while (start < end) {
    if (nums[start] === val) {
      nums[start] = nums[end - 1];
      end--;
    } else {
      start++;
    }
  }
  return end;
}
