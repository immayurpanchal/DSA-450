// Reverse the array
// Time Complexity - O(n)
// Space Complexity - O(1)

// Solution 1 - Iterative Way
const reverseArray = (arr, start, end) => {
	while (start < end) {
		const temp = arr[start];
		arr[start] = arr[end];
		arr[end] = temp;
		start++;
		end--;
	}
};

// Solution 2 - Recursion Way
const reverseArrayRecursion = (arr, start, end) => {
	if (start < end) {
		const temp = arr[start];
		arr[start] = arr[end];
		arr[end] = temp;
		reverseArrayRecursion(arr, start + 1, end - 1);
	}
};

// Test
const arr = [1, 2, 3, 4, 5];
reverseArray(arr, 0, arr.length - 1);
console.log(arr); // [5, 4, 3, 2, 1]

const arr2 = [1, 2, 3, 4, 5];
reverseArrayRecursion(arr2, 0, arr2.length - 1);
console.log(arr2); // [5, 4, 3, 2, 1]

const string1 = ['m', 'a', 'y', 'u', 'r'];
reverseArray(string1, 0, string1.length - 1);
console.log(string1); // [ 'r', 'u', 'y', 'a', 'm' ]

const string2 = ['p', 'a', 'n', 'c', 'h', 'a', 'l'];
reverseArrayRecursion(string2, 0, string2.length - 1);
console.log(string2); // [ 'l', 'a', 'h', 'c', 'n', 'a', 'p' ]
