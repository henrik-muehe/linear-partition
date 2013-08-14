var assert = require('assert'),
	linear_partition = require('./linear_partition');

assert.deepEqual(
	linear_partition([9, 2, 6, 3, 8, 5, 8, 1, 7, 3, 4], 4),
	[[9, 2], [6, 3, 8], [5, 8], [1, 7, 3, 4]]
);

assert.deepEqual(
	linear_partition([9, 2, 6, 3, 8, 5, 8, 1, 7, 3, 4], 3),
	[[9, 2, 6, 3], [8, 5, 8], [1, 7, 3, 4]]
);

assert.deepEqual(
	linear_partition([9, 2, 6, 3, 8], 5),
	[[9], [2], [6], [3], [8]]
);

assert.deepEqual(
	linear_partition([9, 2, 6, 3, 8], 1),
	[[9, 2, 6, 3, 8]]
);

assert.deepEqual(
	linear_partition([9, 2, 6, 3, 8], 0),
	[[9, 2, 6, 3, 8]]
);
