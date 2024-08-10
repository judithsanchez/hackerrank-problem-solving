/* eslint-disable */

const jumpingOnClouds = (c, k) => {
	const thunderhead = 1;
	let e = 100;
	let currentCloudIndex = 0;
	let finishedIterOne = false;

	while (currentCloudIndex !== 0 || !finishedIterOne) {
		e = e - 1;

		currentCloudIndex = (currentCloudIndex + k) % c.length;

		if (c[currentCloudIndex] === thunderhead) {
			e = e - 2;
		}
		finishedIterOne = true;
	}
	return e;
};

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2));

/* AI Solution*/

// const landingCloudFormula = (c, i, k) => c[(i + k) % c.length];

// const jumpingOnClouds = (c, k) => {
//     const cumulus = 0;
//     const thunderhead = 1;
//     let e = 100;
//     let currentCloudIndex = 0;

//     do {
//         currentCloudIndex = (currentCloudIndex + k) % c.length;
//         e -= 1 + (c[currentCloudIndex] === thunderhead ? 2 : 0);
//     } while (currentCloudIndex !== 0);

//     return e;
// };

// console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2));
