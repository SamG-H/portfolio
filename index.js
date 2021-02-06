async function sum(a, b) {
	return await a + b;
}

sum(2, 2).then(result => {
	console.log(result)
});
console.log(sum(2, 2));
