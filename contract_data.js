var lamaAbi = [{"constant":false,"inputs":[{"name":"index","type":"uint8"},{"name":"side","type":"uint8"}],"name":"Step","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"AddPlayer","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"GetField","outputs":[{"name":"","type":"int8[5][5]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"GetBlocks","outputs":[{"name":"","type":"int8[3]"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"player","type":"address"},{"indexed":false,"name":"index","type":"uint8"}],"name":"PlayerAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"feld","type":"int8[5][5]"},{"indexed":false,"name":"changing_index","type":"uint8"}],"name":"FieldChanging","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"blocks","type":"int8[3]"}],"name":"AvailableBlocks","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"player_address","type":"address"}],"name":"StepFinished","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"player_address","type":"address"},{"indexed":false,"name":"score","type":"uint64"}],"name":"PlayerScore","type":"event"}]

var lamaBin = '0x60606040526000600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506005600360146101000a81548160ff021916908360ff1602179055506003600960006101000a81548160ff021916908360ff1602179055506060604051908101604052807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60000b81526020017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60000b81526020017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60000b815250600a906003620001579291906200022f565b506007600b60006101000a81548160ff021916908360ff16021790555060e060405190810160405280600a60ff168152602001601460ff168152602001601e60ff168152602001602860ff168152602001604660ff168152602001606460ff168152602001609660ff16815250600c906007620001d6929190620002d3565b506000601360006101000a81548160ff021916908360ff1602179055506000601360016101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555034156200022957600080fd5b62000378565b826003601f01602090048101928215620002c05791602002820160005b838211156200028f57835183826101000a81548160ff021916908360000b60ff16021790555092602001926001016020816000010492830192600103026200024c565b8015620002be5782816101000a81549060ff02191690556001016020816000010492830192600103026200028f565b505b509050620002cf91906200031d565b5090565b82600781019282156200030a579160200282015b8281111562000309578251829060ff16905591602001919060010190620002e7565b5b50905062000319919062000350565b5090565b6200034d91905b808211156200034957600081816101000a81549060ff02191690555060010162000324565b5090565b90565b6200037591905b808211156200037157600081600090555060010162000357565b5090565b90565b61229980620003886000396000f300606060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680634e6e7b97146100675780636f26e90714610099578063f7bab1fc146100a3578063fc1b611514610117575b600080fd5b341561007257600080fd5b610097600480803560ff1690602001909190803560ff16906020019091905050610168565b005b6100a1610d11565b005b34156100ae57600080fd5b6100b6611325565b604051808260056000925b818410156101075782846020020151600560200280838360005b838110156100f65780820151818401526020810190506100db565b5050505090500192600101926100c1565b9250505091505060405180910390f35b341561012257600080fd5b61012a6113cb565b6040518082600360200280838360005b8381101561015557808201518184015260208101905061013a565b5050505090500191505060405180910390f35b600080600080600080600060028110151561017f57fe5b0160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156101dd57600080fd5b600060028111156101ea57fe5b8660028111156101f657fe5b1415610488577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6004600060058110151561022d57fe5b018860ff1660058110151561023e57fe5b602091828204019190069054906101000a900460000b60000b14151561037d576001600360149054906101000a900460ff160394505b60008560ff16111561030e5760048760ff1660058110151561029257fe5b016001860360ff166005811015156102a657fe5b602091828204019190069054906101000a900460000b60048860ff166005811015156102ce57fe5b018660ff166005811015156102df57fe5b602091828204019190066101000a81548160ff021916908360000b60ff16021790555084600190039450610274565b600a600060038110151561031e57fe5b602091828204019190069054906101000a900460000b60048860ff1660058110151561034657fe5b01600060058110151561035557fe5b602091828204019190066101000a81548160ff021916908360000b60ff160217905550610483565b600094505b600360149054906101000a900460ff1660ff168560ff161015610413577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60048860ff166005811015156103d257fe5b018660ff166005811015156103e357fe5b602091828204019190069054906101000a900460000b60000b14151561040857610413565b846001019450610382565b600a600060038110151561042357fe5b602091828204019190069054906101000a900460000b60048860ff1660058110151561044b57fe5b016001870360ff1660058110151561045f57fe5b602091828204019190066101000a81548160ff021916908360000b60ff1602179055505b610881565b6001600281111561049557fe5b8660028111156104a157fe5b141561068c57600093505b600360149054906101000a900460ff1660ff168460ff1610801561052b57507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60048560ff166005811015156104fe57fe5b018860ff1660058110151561050f57fe5b602091828204019190069054906101000a900460000b60000b14155b1561053b578360010193506104ac565b610557846001600360149054906101000a900460ff160361143c565b92505b60008360ff1611156105f45760046001840360ff1660058110151561057b57fe5b018760ff1660058110151561058c57fe5b602091828204019190069054906101000a900460000b60048460ff166005811015156105b457fe5b018860ff166005811015156105c557fe5b602091828204019190066101000a81548160ff021916908360000b60ff1602179055508260019003925061055a565b600360149054906101000a900460ff1660ff168460ff1614151561061d5761061c878561145b565b5b600a600060038110151561062d57fe5b602091828204019190069054906101000a900460000b6004600060058110151561065357fe5b018860ff1660058110151561066457fe5b602091828204019190066101000a81548160ff021916908360000b60ff160217905550610880565b60028081111561069857fe5b8660028111156106a457fe5b141561087a576001600360149054906101000a900460ff160393505b60008460ff1611801561073557507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6004856001900395508560ff1660058110151561070857fe5b018860ff1660058110151561071957fe5b602091828204019190069054906101000a900460000b60000b14155b1561073f576106c0565b8392505b600360149054906101000a900460ff1660ff168360ff1610156107ed5760046001840160ff1660058110151561077557fe5b018760ff1660058110151561078657fe5b602091828204019190069054906101000a900460000b60048460ff166005811015156107ae57fe5b018860ff166005811015156107bf57fe5b602091828204019190066101000a81548160ff021916908360000b60ff160217905550826001019250610743565b6107f7848861145b565b600a600060038110151561080757fe5b602091828204019190069054906101000a900460000b60046001600360149054906101000a900460ff160360ff1660058110151561084157fe5b018860ff1660058110151561085257fe5b602091828204019190066101000a81548160ff021916908360000b60ff16021790555061087f565b600080fd5b5b5b6108896116d4565b50600191505b600960009054906101000a900460ff1660ff168260ff16101561091757600a8260ff166003811015156108be57fe5b602091828204019190069054906101000a900460000b600a6001840360ff166003811015156108e957fe5b602091828204019190066101000a81548160ff021916908360000b60ff16021790555081600101915061088f565b610932600b60009054906101000a900460ff1660ff16612055565b600a6001600960009054906101000a900460ff160360ff1660038110151561095657fe5b602091828204019190066101000a81548160ff021916908360000b60ff1602179055507f87545cf34dc397aa7449a044988c4eacf42c098d39d6101d86885725e7ed232f60046013600081819054906101000a900460ff168092919060010191906101000a81548160ff021916908360ff160217905550604051808360058015610a3a5760a0028201915b8160058015610a2b576020028201916000905b82829054906101000a900460000b60000b815260200190600101906020826000010492830192600103820291508084116109f45790505b505090600101908083116109e1575b50508260ff1660ff1681526020019250505060405180910390a17facdaae043115881f7fd55fc0bb4cc8a30a900bbaef7001f084093e055be0b1a3600a604051808260038015610ac5576020028201916000905b82829054906101000a900460000b60000b81526020019060010190602082600001049283019260010382029150808411610a8e5790505b505091505060405180910390a1600080600281101515610ae157fe5b01905060006001600281101515610af457fe5b01600080600281101515610b0457fe5b016000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000820160149054906101000a900467ffffffffffffffff168160000160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055509050508060006001600281101515610bc357fe5b016000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000820160149054906101000a900467ffffffffffffffff168160000160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055509050507f2fa7cc015aacb7a83b2695062f587529d46eb05df180a0cbe309c66d3797f92460006001600281101515610ca257fe5b0160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150505050505050565b6000806000806000600281101515610d2557fe5b0160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610ecc5760408051908101604052803373ffffffffffffffffffffffffffffffffffffffff168152602001600067ffffffffffffffff16815250600080600281101515610dab57fe5b0160008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160000160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055509050507f3138d9d3c5b626eff736a8d5bf07552d9f568087655c46803ee715f424ec1b8e600080600281101515610e5557fe5b0160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166000604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018260ff1681526020019250505060405180910390a1611321565b6000806001600281101515610edd57fe5b0160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561131b5760408051908101604052803373ffffffffffffffffffffffffffffffffffffffff168152602001600067ffffffffffffffff1681525060006001600281101515610f6457fe5b0160008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160000160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055509050507f3138d9d3c5b626eff736a8d5bf07552d9f568087655c46803ee715f424ec1b8e6000600160028110151561100f57fe5b0160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166001604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018260ff1681526020019250505060405180910390a1600091505b600360149054906101000a900460ff1660ff168260ff16101561114057600090505b600360149054906101000a900460ff1660ff168160ff161015611133576110e0600b60009054906101000a900460ff1660ff16612055565b60048360ff166005811015156110f257fe5b018260ff1660058110151561110357fe5b602091828204019190066101000a81548160ff021916908360000b60ff16021790555080806001019150506110a8565b8180600101925050611086565b7f87545cf34dc397aa7449a044988c4eacf42c098d39d6101d86885725e7ed232f60046013600081819054906101000a900460ff168092919060010191906101000a81548160ff021916908360ff1602179055506040518083600580156112015760a0028201915b81600580156111f2576020028201916000905b82829054906101000a900460000b60000b815260200190600101906020826000010492830192600103820291508084116111bb5790505b505090600101908083116111a8575b50508260ff1660ff1681526020019250505060405180910390a1600091505b600960009054906101000a900460ff1660ff168260ff16101561129857611258600b60009054906101000a900460ff1660ff16612055565b600a8360ff1660038110151561126a57fe5b602091828204019190066101000a81548160ff021916908360000b60ff160217905550816001019150611220565b7facdaae043115881f7fd55fc0bb4cc8a30a900bbaef7001f084093e055be0b1a3600a604051808260038015611309576020028201916000905b82829054906101000a900460000b60000b815260200190600101906020826000010492830192600103820291508084116112d25790505b505091505060405180910390a1611320565b600080fd5b5b5050565b61132d6121ea565b6004600580602002604051908101604052809291906000905b828210156113c2578382016005806020026040519081016040528092919082600580156113ae576020028201916000905b82829054906101000a900460000b60000b815260200190600101906020826000010492830192600103820291508084116113775790505b505050505081526020019060010190611346565b50505050905090565b6113d3612219565b600a600380602002604051908101604052809291908260038015611432576020028201916000905b82829054906101000a900460000b60000b815260200190600101906020826000010492830192600103820291508084116113fb5790505b5050505050905090565b60008160ff168360ff16106114515781611453565b825b905092915050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60048460ff1660058110151561149057fe5b018360ff166005811015156114a157fe5b602091828204019190069054906101000a900460000b60000b14806114dd5750600360149054906101000a900460ff1660ff166001830160ff16145b8061154657507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60048460ff1660058110151561151657fe5b016001840160ff1660058110151561152a57fe5b602091828204019190069054906101000a900460000b60000b14155b15611550576116cf565b6001820190505b600360149054906101000a900460ff1660ff168160ff1610156115e8577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60048460ff166005811015156115a757fe5b018260ff166005811015156115b857fe5b602091828204019190069054906101000a900460000b60000b1415156115dd576115e8565b806001019050611557565b60048360ff166005811015156115fa57fe5b018260ff1660058110151561160b57fe5b602091828204019190069054906101000a900460000b60048460ff1660058110151561163357fe5b018260ff1660058110151561164457fe5b602091828204019190066101000a81548160ff021916908360000b60ff1602179055507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60048460ff1660058110151561169a57fe5b018360ff166005811015156116ab57fe5b602091828204019190066101000a81548160ff021916908360000b60ff1602179055505b505050565b600080600080600080600094505b600360149054906101000a900460ff1660ff168560ff161015611bf557600093505b60028460ff16111515611bea5760048460ff1660058110151561172357fe5b018560ff1660058110151561173457fe5b602091828204019190069054906101000a900460000b92507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8360000b141561177c57611bdf565b600191508390505b600360149054906101000a900460ff1660ff166001820160ff16108015611823575060046001820160ff166005811015156117bb57fe5b018560ff166005811015156117cc57fe5b602091828204019190069054906101000a900460000b60000b60048260ff166005811015156117f757fe5b018660ff1660058110151561180857fe5b602091828204019190069054906101000a900460000b60000b145b1561183d5781806001019250508080600101915050611784565b60038267ffffffffffffffff16101515611bde575b8060ff168460ff161115156118d3577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60048560ff1660058110151561189457fe5b018660ff166005811015156118a557fe5b602091828204019190066101000a81548160ff021916908360000b60ff160217905550836001019350611852565b7f87545cf34dc397aa7449a044988c4eacf42c098d39d6101d86885725e7ed232f60046013600081819054906101000a900460ff168092919060010191906101000a81548160ff021916908360ff1602179055506040518083600580156119945760a0028201915b8160058015611985576020028201916000905b82829054906101000a900460000b60000b8152602001906001019060208260000104928301926001038202915080841161194e5790505b5050906001019080831161193b575b50508260ff1660ff1681526020019250505060405180910390a16119b6612151565b7f87545cf34dc397aa7449a044988c4eacf42c098d39d6101d86885725e7ed232f60046013600081819054906101000a900460ff168092919060010191906101000a81548160ff021916908360ff160217905550604051808360058015611a775760a0028201915b8160058015611a68576020028201916000905b82829054906101000a900460000b60000b81526020019060010190602082600001049283019260010382029150808411611a315790505b50509060010190808311611a1e575b50508260ff1660ff1681526020019250505060405180910390a160028203600c8460ff16600781101515611aa757fe5b015402600080600281101515611ab957fe5b0160000160148282829054906101000a900467ffffffffffffffff160192506101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055507f6d5bfc2adc46d18a2b66ad9234660ccc8dc20f09f508c1cd367f20157fc800bf600080600281101515611b2c57fe5b0160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600080600281101515611b6057fe5b0160000160149054906101000a900467ffffffffffffffff16604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018267ffffffffffffffff1667ffffffffffffffff1681526020019250505060405180910390a16001955061204d565b5b836001019350611704565b8460010194506116e2565b600093505b600360149054906101000a900460ff1660ff168460ff16101561204857600094505b60028560ff1611151561203d5760048460ff16600581101515611c3b57fe5b018560ff16600581101515611c4c57fe5b602091828204019190069054906101000a900460000b92507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8360000b1415611c9457612032565b600191508490505b600360149054906101000a900460ff1660ff166001820160ff16108015611d3b575060048460ff16600581101515611cd057fe5b016001820160ff16600581101515611ce457fe5b602091828204019190069054906101000a900460000b60000b60048560ff16600581101515611d0f57fe5b018260ff16600581101515611d2057fe5b602091828204019190069054906101000a900460000b60000b145b15611d555781806001019250508080600101915050611c9c565b60038267ffffffffffffffff16101515612031575b8060ff168560ff16111515611deb577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60048560ff16600581101515611dac57fe5b018660ff16600581101515611dbd57fe5b602091828204019190066101000a81548160ff021916908360000b60ff160217905550846001019450611d6a565b7f87545cf34dc397aa7449a044988c4eacf42c098d39d6101d86885725e7ed232f60046013600081819054906101000a900460ff168092919060010191906101000a81548160ff021916908360ff160217905550604051808360058015611eac5760a0028201915b8160058015611e9d576020028201916000905b82829054906101000a900460000b60000b81526020019060010190602082600001049283019260010382029150808411611e665790505b50509060010190808311611e53575b50508260ff1660ff1681526020019250505060405180910390a1611ee2846001600360149054906101000a900460ff16036121bd565b7f87545cf34dc397aa7449a044988c4eacf42c098d39d6101d86885725e7ed232f60046013600081819054906101000a900460ff168092919060010191906101000a81548160ff021916908360ff160217905550604051808360058015611fa35760a0028201915b8160058015611f94576020028201916000905b82829054906101000a900460000b60000b81526020019060010190602082600001049283019260010382029150808411611f5d5790505b50509060010190808311611f4a575b50508260ff1660ff1681526020019250505060405180910390a160028203600c8460ff16600781101515611fd357fe5b015402600080600281101515611fe557fe5b0160000160148282829054906101000a900467ffffffffffffffff160192506101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055506001955061204d565b5b846001019450611c1c565b836001019350611bfa565b600095505b505050505090565b60004340601360019054906101000a900467ffffffffffffffff166040518083600019166000191681526020018267ffffffffffffffff1667ffffffffffffffff1678010000000000000000000000000000000000000000000000000281526008019250505060405180910390204260405180836000191660001916815260200182815260200192505050604051809103902060019004601360016101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055508167ffffffffffffffff16601360019054906101000a900467ffffffffffffffff1667ffffffffffffffff1681151561214957fe5b069050919050565b600080600091505b600360149054906101000a900460ff1660ff168260ff1610156121b9576001600360149054906101000a900460ff160390505b6000818060019003925060ff1611156121ae576121a9828261145b565b61218c565b816001019150612159565b5050565b60008190505b6000818060019003925060ff1611156121e5576121e0838261145b565b6121c3565b505050565b610320604051908101604052806005905b612203612243565b8152602001906001900390816121fb5790505090565b6060604051908101604052806003905b6000800b8152602001906001900390816122295790505090565b60a0604051908101604052806005905b6000800b81526020019060019003908161225357905050905600a165627a7a72305820ee74482d85987c08bc832060bb28dc6ade14ebbc3c4810c1708b0fd9074ce9ef0029';
