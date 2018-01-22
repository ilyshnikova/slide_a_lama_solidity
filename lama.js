//let web3 = new Web3(new Web3.providers.HttpProvider("http://olegts-dev.haze.yandex.net:12344"));

let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:12345"));

for (let account of web3.eth.accounts) {
	let option = document.createElement('option');
	option.textContent = account;
	document.querySelector('#start select').appendChild(option);
}

function createContract(contractAddress, callback) {
	// print acount balance
	console.log(web3.eth.getBalance(account));
	// unlock this account
	web3.personal.unlockAccount(account, "");

	var lamaContract = web3.eth.contract(lamaAbi);

	if (contractAddress == '') {
		// deploy contract
		var lama = lamaContract.new(
			{
				from: web3.eth.accounts[0],
				data: lamaBin,
				gas: '3000000'
			}, function (e, c){
			console.log(e, c);
			if (typeof c.address !== 'undefined') {
				console.log('Contract mined! address: ' + c.address + ' transactionHash: ' + c.transactionHash);
				callback(c);
			}
		 });
	} else {
		callback(lamaContract.at(contractAddress));
	}
}

var contract;
var account;

function showField() {
	document.querySelector('#start').setAttribute("hidden", '');
	document.querySelector('#game_field').removeAttribute("hidden");
}

function blockAndWait(message) {
	document.getElementById('message').innerHTML = message;
	document.getElementById('game_field').disabled = true;
}

function unblockWailt() {
	document.getElementById('message').innerHTML = '&nbsp;';
	document.getElementById('game_field').disabled = false;
}

function bindBorders() {
	console.log("Blocks changed:");
	GetBlocks();
	let cells = document.querySelectorAll('#insert')
	for (let i = 0; i < cells.length; i++) {
		let index = cells[i].getAttribute('index');
		let side = cells[i].getAttribute('side');
		cells[i].addEventListener('click', function(ev) {
			if (document.getElementById('game_field').disabled == true ) {
				return;
			}
			blockAndWait("Wait for transaction...");
			res = contract.Step(parseInt(index), parseInt(side), {from: account, gas: 2100000}, function(error, result) {console.log(result)});
			console.log(index, side);
		});
	}
}

var colorMap = {"-1": "f2f2f2", "0": "9e0142", "1": "f46d43", "2": "fdae61", "3": "ffffbf", "4": "abdda4", "5": "3288bd", "6": "5e4fa2"};

function createTable(table) {
	console.log("Field changed to:");
	GetField();
	let result = '';
	for (let row = -1; row < table[0].length; ++row) {
		result += '<tr>\n';
		for (let col = -1; col <= table[0].length; ++col) {
			if (col != -1 && row != -1 && col != table.length) {
				if (table[col][row].toString() == "-1") {
					result += '<td style="background-color:#' + colorMap[table[col][row].toString()] + '"></td>\n';
				} else {
	                               result += '<td style="background-color:#' + colorMap[table[col][row].toString()] + ';border: 2px solid black;"></td>\n';
				}
			} else if (row == -1 && (col != -1 || col != table.length)) {
                               result += '<td id="insert" side=0 index=' + col + '></td>';
			} else if ((col == -1 || col == table.length) && row != -1) {
                               result += '<td id="insert" side=' + (col == -1 ? 1 : 2) + ' index=' + row + '></td>';
			} else {
				result += '<td></td>';

			}
		}
		result += '</tr>\n';
	}
	return result;
}

function createBlockQueue(blocks) {
	result = '<tr><td></td>\n';

	result += '<td style="background-color:#' + colorMap[blocks[0].toString()] + ';border: 3px solid black;box-shadow: 6px 6px 6px #ccc;"></td>\n';

	result += '<td></td>\n';

	result += '<td style="background-color:#' + colorMap[blocks[1].toString()] + ';border: 2px solid black;"></td>\n';
	result += '<td style="background-color:#' + colorMap[blocks[2].toString()] + ';border: 2px solid black;"></td>\n';

	result += '<td></td><td></td></tr>';

	return result;
}

function bindEvents() {
	contract.PlayerAdded({}, function(error, result) {
		if (result.args.index.toNumber() == 1) {
			if (result.args.player1 != account && result.args.player2 != account) {
				alert("You are not in game, there is no available positions.");
				location.reload();
			}
			document.querySelector('#wait_player').setAttribute("hidden", '');
			document.querySelector('#start').setAttribute("hidden", '');


			if (result.args.player1 != account) {
				blockAndWait('Wait for second player step...');
			}
			document.querySelector('#game_field').removeAttribute("hidden");
		}
	})

	contract.FieldChanging({}, function(error, result) {
		document.getElementById('field').innerHTML = createTable(result.args.field);
		bindBorders();
	});

	contract.AvailableBlocks({}, function(error, result) {
		document.getElementById('blocks').innerHTML = createBlockQueue(result.args.blocks);
	});

	contract.StepFinished({}, function(error, result) {
		if (result.args.player_address == account) {
			unblockWailt();
		} else {
			blockAndWait('Wait for second player step...')
		}
	});

	contract.PlayerScore({}, function(error, result) {
		if (account == result.args.player_address) {
			document.getElementById('score-a').innerHTML = result.args.score;
		} else {
			document.getElementById('score-b').innerHTML = result.args.score;
		}
	});

}

function GetField() {
	contract.GetField({from:account, gas:2100000}, function(error, result) {
		str = '';
		for (i = 0; i < 5; ++i) {
			for (j = 0;j < 5; ++j) {
				str += result[i][j] + ' ';
			}
			str += '\n';
		}
		console.log(str);
	})
}

function GetBlocks() {
	contract.GetBlocks({from:account, gas:2100000}, function(error, result) {
		str = result[0] + ' ' + result[1] + ' ' + result[2];
		console.log(str);
	})

}

document.querySelector('#start').addEventListener('submit', function(ev) {
	ev.preventDefault();
	account = document.querySelector('#start select').value;
	contractAddress = document.querySelector('#start input').value;
	document.getElementById('start').disabled = true;
	document.querySelector('#wait_contract').removeAttribute("hidden");
	createContract(contractAddress, createdContract => {
		contract = createdContract;
		document.getElementById('contract_address').innerHTML = 'For contract ' + contract.address;

		document.querySelector('#wait_contract').setAttribute("hidden", '');
		document.querySelector('#wait_player').removeAttribute("hidden");
		bindEvents();
		contract.AddPlayer({from: account, gas:  3000000}, function(error, result) {});
	});

});


/*

вызывать методы - contract.<method>(<argument1>, ..., {from: ..., gas: ...}, function(error, result) {...})

подписываться на события - contract.<event>({}, function(error, ev){...})

аргументы у события - ev.args[name], числа там в виде BigNumber, приводятся к обычным методом toNumber

*/
