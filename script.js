function fibonacci(num) {
// if(num === 1)
// 	{
// 		return 0;
// 	}
// 	else if(num === 2)
// 	{
// 		return 1;
// 	}
    
// 	return fibonacci(num-1) + fibonacci(num-2);
// }

	function fibonacci(num) {
    let num1 = 0;
    let num2 = 1;
    let sum;
    let i = 0;
    for (i = 0; i < num; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return num2;
}

module.exports = fibonacci;
