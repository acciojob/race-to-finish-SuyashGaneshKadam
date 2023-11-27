window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`

function createPromise(delay){
	return new Promise((res, rej) =>{
		setTimeout(() =>{
			res("Promise resolved");
		}, delay);
	});
}

for(let i=0 ; i<5 ; i++){
	promises.push(createPromise(Math.random() * (5000 - 1000) + 1000));
}

let output = document.getElementById("output");
output.innerText = Promise.any(promises);