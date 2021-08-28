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

// Solution 2

const sort012New = (arr, n) => {
	const outputArray = [];
	let indexOfOne = 0;

	arr.forEach((item) => {
		if (item === 2) {
			outputArray.push(item);
		} else if (item === 1) {
			outputArray.splice(indexOfOne, 0, item);
			indexOfOne++;
		} else if (item === 0) {
			outputArray.splice(0, 0, item);
			indexOfOne++;
		}
	});
	return outputArray;
};

const swap = (arr, index1, index2) => {
	const temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
};

// Solution 3 - Dutch National Flag Problem
const sort012New2 = (arr, N) => {
	let low = 0;
	let mid = 0;
	let high = N - 1;

	while (mid <= high) {
		if (arr[mid] === 0) {
			swap(arr, low, mid);
			low++;
			mid++;
		} else if (arr[mid] === 1) {
			mid++;
		} else {
			swap(arr, mid, high);
			high--;
		}
	}
};

const arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];
const arr2 = [0, 2, 1, 2, 0];

sort012New2(arr2, arr2.length);
// sort012(arr, n);
console.log(arr2);
