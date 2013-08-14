function log_matrix(arr, x, y) {
	for (var i = 0; i < y; i++) {
		var o = [];
		for (var j = 0; j < x; j++) {
			o[j] = arr[i * x + j];
		}
		console.log(o.join(' '));
	}
}

function linear_partition(seq, k) {
	var i, ik,
		j, x,
		n = seq.length,
		k1 = k - 1,
		nk = n * k,
		solution = [],
		lookup = [],
		split = [],
		ans = [],
		curr,
		best,
		bestX;

	// first row
	for (i = 0; i < k; i++) {
		lookup[i] = seq[0];
	}

	// zero filling the rest of the array
	for (i = k; i < nk; i++) {
		lookup[i] = 0;
	}

	// first column
	for (i = 1; i < n; i++) {
		ik = i * k;
		lookup[ik] = seq[i] + lookup[ik - k];
	}

	// building solutions and caching lookups
	for (i = 1; i < n; i++) {
		for (j = 1; j < k; j++) {
			best = null;
			for (x = 0; x < i; x++) {
				curr = Math.max(lookup[x * k + j - 1], lookup[i * k] - lookup[x * k]);
				if (best == null || curr < best) {
					bestX = x;
					best = curr;
				}
			}
			lookup[i * k + j] = best;
			solution[(i - 1) * k1 + j - 1] = bestX;
		}
	}

	// log_matrix(lookup, k, n);
	// log_matrix(solution, k1, n);

	ik = n - 1;
	x = n;
	for (i = k - 1; i > 0; i--) {
		split[i] = ik - solution[(ik - 1) * k1 + (i - 1)];
		x -= split[i];
		ik = solution[ik * k1 - 1];
	}
	split[0] = x;

	// console.log(split);

	x = 0;
	for (i = 0; i < split.length; i++) {
		ans[i] = [];
		for (j = 0; j < split[i]; j++) {
			ans[i][j] = seq[x];
			x++;
		}
	}
	return ans;
}

module.exports = function (seq, k) {
	var i, o;
	if (k < 2) {
		return [seq];
	}
	if (k >= seq.length) {
		o = [];
		for (i = 0; i < seq.length; i++) {
			o.push([seq[i]]);
		}
		return o;
	}
	return linear_partition(seq, k);
};
