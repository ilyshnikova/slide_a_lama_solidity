let web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:12345"));

for (let account of web3.eth.accounts) {
	let option = document.createElement('option');
	option.textContent = account;
	document.querySelector('#start select').appendChild(option);
}

function createContract(contractAddress, callback) {
	// print acount balance
	console.log(web3.eth.getBalance(web3.eth.accounts[0]));
	// unlock this account
	web3.personal.unlockAccount(web3.eth.coinbase, "password");

	var lamaContract = web3.eth.contract(lamaAbi);

	if (contractAddress == '') {
		// deploy contract
		var lama = lamaContract.new(
			{
				from: web3.eth.accounts[0],
				data: lamaBin,
				gas: '4700000'
			}, function (e, contract){
			console.log(e, contract);
			if (typeof contract.address !== 'undefined') {
				alert('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash)
				console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
				callback(contract);
			}
		 });
	} else {
		callback(lamaContract.at(contractAddress));
	}
}

var contract;

function showField() {
	document.querySelector('#start').setAttribute("hidden", '');
	document.querySelector('#field').removeAttribute("hidden");
}

function bindBorders() {
	let borders = [
		['tr:first-child td:not(:first-child):not(:last-child):hover', 1/*top*/],
		['tr:not(:first-child) td:first-child:hover', 2/*left*/],
		['tr:not(:first-child) td:last-child:hover', 3/*right*/],
	];

	for (let [selector, side] of borders) {
		let cells = document.querySelectorAll(selector);
		for (let i = 0; i < cells.length; i++) {
			cells[i].addEventListener('click', function(ev, i=i, side=side) {
				console.log(i, side);
			});
		}
	}
}



document.querySelector('#start').addEventListener('submit', function(ev) {
	ev.preventDefault();
	createContract(document.querySelector('#start input').value, createdContract => {
		contract = createdContract;
		showField();
	});

});
