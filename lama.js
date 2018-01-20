let web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:12345"));

for (let account of web3.eth.accounts) {
	let option = document.createElement('option');
	option.textContent = account;
	document.querySelector('#start select').appendChild(option);
}

function createContract(contractAddress, callback) {
	// print acount balance
	console.log(web3.eth.getBalance(account));
	// unlock this account
	web3.personal.unlockAccount(account, "password");

	var lamaContract = web3.eth.contract(lamaAbi);

	if (contractAddress == '') {
		// deploy contract
		var lama = lamaContract.new(
			{
				from: web3.eth.accounts[0],
				data: lamaBin,
				gas: '4700000'
			}, function (e, c){
			console.log(e, c);
			if (typeof c.address !== 'undefined') {
				console.log('Contract mined! address: ' + c.address + ' transactionHash: ' + c.transactionHash);
				callback(c);
			}
		 });
	} else {
		callback(lamaContract.at(lamaContract.at(contractAddress)));
	}
}

var contract;
var account;

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
	account = document.querySelector('#start select').value;
	contractAddress = document.querySelector('#start input').value;
	document.getElementById('start').disabled = true;
	if (contractAddress == '') {
		document.querySelector('#wait_contract').removeAttribute("hidden");
	} else {
		document.querySelector('#wait_player').removeAttribute("hidden");
	}
	createContract(contractAddress, createdContract => {
		contract = createdContract;
		document.querySelector('#contract_address').setAttribute("value", 'For contract ' + contract.address);
		document.querySelector('#wait_contract').setAttribute("hidden", '');
		document.querySelector('#wait_player').removeAttribute("hidden");
		contract.PlayerAdded({}, function(error, result) {
			if (result.args.index.toNumber() == 1) {
				if (result.args.player1 != address && result.arg.player2 != address) {
					alert("You are not in game, there is no available positions.");
					location.reload();
				}
				document.querySelector('#wait_player').setAttribute("hidden", '');
				document.querySelector('#start').setAttribute("hidden", '');

				document.querySelector('#field').removeAttribute("hidden");
			}
		})
		contract.AddPlayer({from: account, gas: 100000}, function(error, result) {});
	});

});


/*

вызывать методы - contract.<method>(<argument1>, ..., {from: ..., gas: ...}, function(error, result) {...})

подписываться на события - contract.<event>({}, function(error, ev){...})

аргументы у события - ev.args[name], числа там в виде BigNumber, приводятся к обычным методом toNumber

*/
