// Given an array which consists of only 0, 1 and 2. Sort the array without using any sorting algorithm.
const sort012 = (arr, n) => {
	count0 = 0;
	count1 = 0;
	count2 = 0;

	// Count the 0,1,2 in the array
	arr.forEach((item) => {
		if (item === 0) count0++;
		else if (item === 1) count1++;
		else count2++;
	});

	// Put 0's in the Array
	for (let i = 0; i < count0; i++) {
		arr[i] = 0;
	}
	// Put 1's in the Array
	for (let i = count0; i < count0 + count1; i++) {
		arr[i] = 1;
	}
	// Put 2's in the Array
	for (let i = count0 + count1; i < n; i++) {
		arr[i] = 2;
	}
};

const arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];
const n = 12;

sort012(arr, n);
console.log(arr);
