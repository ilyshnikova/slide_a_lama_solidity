var lamaAbi = [{"constant":false,"inputs":[{"name":"index","type":"uint8"},{"name":"side","type":"uint8"}],"name":"Step","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"GetPlayers","outputs":[{"name":"player1","type":"address"},{"name":"player2","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"AddPlayer","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"GetField","outputs":[{"name":"","type":"int8[5][5]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"GetBlocks","outputs":[{"name":"","type":"int8[3]"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"player1","type":"address"},{"indexed":false,"name":"player2","type":"address"},{"indexed":false,"name":"index","type":"uint8"}],"name":"PlayerAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"field","type":"int8[5][5]"},{"indexed":false,"name":"changing_index","type":"uint8"}],"name":"FieldChanging","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"blocks","type":"int8[3]"}],"name":"AvailableBlocks","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"player_address","type":"address"}],"name":"StepFinished","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"player_address","type":"address"},{"indexed":false,"name":"score","type":"uint64"}],"name":"PlayerScore","type":"event"},{"anonymous":false,"inputs":[],"name":"TopSide","type":"event"},{"anonymous":false,"inputs":[],"name":"LeftSide","type":"event"},{"anonymous":false,"inputs":[],"name":"RightSide","type":"event"}];

var lamaBin = '0x60606040526000600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506005600360146101000a81548160ff021916908360ff1602179055506003600960006101000a81548160ff021916908360ff1602179055506060604051908101604052807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60000b81526020017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60000b81526020017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60000b815250600a906003620001579291906200022f565b506007600b60006101000a81548160ff021916908360ff16021790555060e060405190810160405280600a60ff168152602001601460ff168152602001601e60ff168152602001602860ff168152602001604660ff168152602001606460ff168152602001609660ff16815250600c906007620001d6929190620002d3565b506000601360006101000a81548160ff021916908360ff1602179055506000601360016101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555034156200022957600080fd5b62000378565b826003601f01602090048101928215620002c05791602002820160005b838211156200028f57835183826101000a81548160ff021916908360000b60ff16021790555092602001926001016020816000010492830192600103026200024c565b8015620002be5782816101000a81549060ff02191690556001016020816000010492830192600103026200028f565b505b509050620002cf91906200031d565b5090565b82600781019282156200030a579160200282015b8281111562000309578251829060ff16905591602001919060010190620002e7565b5b50905062000319919062000350565b5090565b6200034d91905b808211156200034957600081816101000a81549060ff02191690555060010162000324565b5090565b90565b6200037591905b808211156200037157600081600090555060010162000357565b5090565b90565b6128e080620003886000396000f30060606040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680634e6e7b97146100725780636e5485cb1461011d5780636f26e907146101a5578063f7bab1fc146101af578063fc1b611514610223575b600080fd5b341561007d57600080fd5b6100a2600480803560ff1690602001909190803560ff16906020019091905050610274565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100e25780820151818401526020810190506100c7565b50505050905090810190601f16801561010f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561012857600080fd5b610130610d82565b604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390f35b6101ad610df6565b005b34156101ba57600080fd5b6101c26117bb565b604051808260056000925b818410156102135782846020020151600560200280838360005b838110156102025780820151818401526020810190506101e7565b5050505090500192600101926101cd565b9250505091505060405180910390f35b341561022e57600080fd5b610236611861565b6040518082600360200280838360005b83811015610261578082015181840152602081019050610246565b5050505090500191505060405180910390f35b61027c61281d565b60008060008060008060028110151561029157fe5b0160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610327576040805190810160405280601081526020017f696e636f727265637420706c61796572000000000000000000000000000000008152509450610d78565b6000600281111561033457fe5b86600281111561034057fe5b14156105ff577ff56c24d1c6d0fcefe490e06b1f936c3996abb8f96d84f10b9b5bec03b57b05ad60405160405180910390a17fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60048860ff166005811015156103a557fe5b0160006005811015156103b457fe5b602091828204019190069054906101000a900460000b60000b1415156104f4576001600360149054906101000a900460ff160393505b60018460ff161015156104855760048760ff1660058110151561040957fe5b016001850360ff1660058110151561041d57fe5b602091828204019190069054906101000a900460000b60048860ff1660058110151561044557fe5b018560ff1660058110151561045657fe5b602091828204019190066101000a81548160ff021916908360000b60ff160217905550836001900393506103ea565b600a600060038110151561049557fe5b602091828204019190069054906101000a900460000b60048860ff166005811015156104bd57fe5b0160006005811015156104cc57fe5b602091828204019190066101000a81548160ff021916908360000b60ff1602179055506105fa565b600093505b600360149054906101000a900460ff1660ff168460ff16101561058a577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60048860ff1660058110151561054957fe5b018560ff1660058110151561055a57fe5b602091828204019190069054906101000a900460000b60000b14151561057f5761058a565b8360010193506104f9565b600a600060038110151561059a57fe5b602091828204019190069054906101000a900460000b60048860ff166005811015156105c257fe5b016001860360ff166005811015156105d657fe5b602091828204019190066101000a81548160ff021916908360000b60ff1602179055505b610a50565b6001600281111561060c57fe5b86600281111561061857fe5b141561082f577f6f4a042e794d551328e15a7434557eb033d4e10d0618055e7ce29f8311747c9b60405160405180910390a1600092505b600360149054906101000a900460ff1660ff168360ff161080156106ce57507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60048460ff166005811015156106a157fe5b018860ff166005811015156106b257fe5b602091828204019190069054906101000a900460000b60000b14155b156106de5782600101925061064f565b6106fa836001600360149054906101000a900460ff16036118d2565b91505b60008260ff1611156107975760046001830360ff1660058110151561071e57fe5b018760ff1660058110151561072f57fe5b602091828204019190069054906101000a900460000b60048360ff1660058110151561075757fe5b018860ff1660058110151561076857fe5b602091828204019190066101000a81548160ff021916908360000b60ff160217905550816001900391506106fd565b600360149054906101000a900460ff1660ff168360ff161415156107c0576107bf87846118f1565b5b600a60006003811015156107d057fe5b602091828204019190069054906101000a900460000b600460006005811015156107f657fe5b018860ff1660058110151561080757fe5b602091828204019190066101000a81548160ff021916908360000b60ff160217905550610a4f565b60028081111561083b57fe5b86600281111561084757fe5b1415610a49577fca585c1c8e46a3862a490a89a7f70c8f8ae6b1ceed5e9a151ecb52fd1f18bf5360405160405180910390a1600360149054906101000a900460ff1692505b60008360ff1611801561090157507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6004846001900394508460ff166005811015156108d457fe5b018860ff166005811015156108e557fe5b602091828204019190069054906101000a900460000b60000b14155b1561090b5761088c565b8291505b600360149054906101000a900460ff1660ff166001830160ff1610156109bc5760046001830160ff1660058110151561094457fe5b018760ff1660058110151561095557fe5b602091828204019190069054906101000a900460000b60048360ff1660058110151561097d57fe5b018860ff1660058110151561098e57fe5b602091828204019190066101000a81548160ff021916908360000b60ff16021790555081600101915061090f565b6109c683886118f1565b600a60006003811015156109d657fe5b602091828204019190069054906101000a900460000b60046001600360149054906101000a900460ff160360ff16600581101515610a1057fe5b018860ff16600581101515610a2157fe5b602091828204019190066101000a81548160ff021916908360000b60ff160217905550610a4e565b600080fd5b5b5b610a58611b6a565b50600190505b600960009054906101000a900460ff1660ff168160ff161015610ae657600a8160ff16600381101515610a8d57fe5b602091828204019190069054906101000a900460000b600a6001830360ff16600381101515610ab857fe5b602091828204019190066101000a81548160ff021916908360000b60ff160217905550806001019050610a5e565b610b01600b60009054906101000a900460ff1660ff166124d7565b600a6001600960009054906101000a900460ff160360ff16600381101515610b2557fe5b602091828204019190066101000a81548160ff021916908360000b60ff1602179055507f87545cf34dc397aa7449a044988c4eacf42c098d39d6101d86885725e7ed232f60046013600081819054906101000a900460ff168092919060010191906101000a81548160ff021916908360ff160217905550604051808360058015610c095760a0028201915b8160058015610bfa576020028201916000905b82829054906101000a900460000b60000b81526020019060010190602082600001049283019260010382029150808411610bc35790505b50509060010190808311610bb0575b50508260ff1660ff1681526020019250505060405180910390a17facdaae043115881f7fd55fc0bb4cc8a30a900bbaef7001f084093e055be0b1a3600a604051808260038015610c94576020028201916000905b82829054906101000a900460000b60000b81526020019060010190602082600001049283019260010382029150808411610c5d5790505b505091505060405180910390a1610ca96125d3565b7f2fa7cc015aacb7a83b2695062f587529d46eb05df180a0cbe309c66d3797f924600080600281101515610cd957fe5b0160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a16040805190810160405280600781526020017f737563636573730000000000000000000000000000000000000000000000000081525094505b5050505092915050565b600080600080600281101515610d9457fe5b0160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660006001600281101515610dc957fe5b0160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16915091509091565b600080600080600080600080600281101515610e0e57fe5b0160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561101d5760408051908101604052803373ffffffffffffffffffffffffffffffffffffffff168152602001600067ffffffffffffffff16815250600080600281101515610e9457fe5b0160008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160000160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055509050507f7a2cfe7c64f06fb1ff9ce423bea9e86fc6bf4d9fc714e1d99620725b852059cc600080600281101515610f3e57fe5b0160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660006001600281101515610f7357fe5b0160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166000604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018260ff168152602001935050505060405180910390a16117b4565b600080600160028110151561102e57fe5b0160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156117ae5760408051908101604052803373ffffffffffffffffffffffffffffffffffffffff168152602001600067ffffffffffffffff16815250600060016002811015156110b557fe5b0160008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160000160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055509050507f7a2cfe7c64f06fb1ff9ce423bea9e86fc6bf4d9fc714e1d99620725b852059cc60008060028110151561115f57fe5b0160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166000600160028110151561119457fe5b0160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166001604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018260ff168152602001935050505060405180910390a1600094505b600360149054906101000a900460ff1660ff168560ff1610156115d357600093505b600360149054906101000a900460ff1660ff168460ff1610156115c6577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff92507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff915060018460ff1611156113935760048560ff166005811015156112e157fe5b016002850360ff166005811015156112f557fe5b602091828204019190069054906101000a900460000b60000b60048660ff1660058110151561132057fe5b016001860360ff1660058110151561133457fe5b602091828204019190069054906101000a900460000b60000b14156113925760048560ff1660058110151561136557fe5b016001850360ff1660058110151561137957fe5b602091828204019190069054906101000a900460000b92505b5b60018560ff1611156114635760046002860360ff166005811015156113b457fe5b018460ff166005811015156113c557fe5b602091828204019190069054906101000a900460000b60000b60046001870360ff166005811015156113f357fe5b018560ff1660058110151561140457fe5b602091828204019190069054906101000a900460000b60000b14156114625760046001860360ff1660058110151561143857fe5b018460ff1660058110151561144957fe5b602091828204019190069054906101000a900460000b91505b5b61147e600b60009054906101000a900460ff1660ff166124d7565b60048660ff1660058110151561149057fe5b018560ff166005811015156114a157fe5b602091828204019190066101000a81548160ff021916908360000b60ff1602179055505b8260000b60048660ff166005811015156114db57fe5b018560ff166005811015156114ec57fe5b602091828204019190069054906101000a900460000b60000b148061154e57508160000b60048660ff1660058110151561152257fe5b018560ff1660058110151561153357fe5b602091828204019190069054906101000a900460000b60000b145b156115b95761156e600b60009054906101000a900460ff1660ff166124d7565b60048660ff1660058110151561158057fe5b018560ff1660058110151561159157fe5b602091828204019190066101000a81548160ff021916908360000b60ff1602179055506114c5565b8380600101945050611260565b848060010195505061123e565b7f87545cf34dc397aa7449a044988c4eacf42c098d39d6101d86885725e7ed232f60046013600081819054906101000a900460ff168092919060010191906101000a81548160ff021916908360ff1602179055506040518083600580156116945760a0028201915b8160058015611685576020028201916000905b82829054906101000a900460000b60000b8152602001906001019060208260000104928301926001038202915080841161164e5790505b5050906001019080831161163b575b50508260ff1660ff1681526020019250505060405180910390a1600090505b600960009054906101000a900460ff1660ff168160ff16101561172b576116eb600b60009054906101000a900460ff1660ff166124d7565b600a8260ff166003811015156116fd57fe5b602091828204019190066101000a81548160ff021916908360000b60ff1602179055508060010190506116b3565b7facdaae043115881f7fd55fc0bb4cc8a30a900bbaef7001f084093e055be0b1a3600a60405180826003801561179c576020028201916000905b82829054906101000a900460000b60000b815260200190600101906020826000010492830192600103820291508084116117655790505b505091505060405180910390a16117b3565b600080fd5b5b5050505050565b6117c3612831565b6004600580602002604051908101604052809291906000905b8282101561185857838201600580602002604051908101604052809291908260058015611844576020028201916000905b82829054906101000a900460000b60000b8152602001906001019060208260000104928301926001038202915080841161180d5790505b5050505050815260200190600101906117dc565b50505050905090565b611869612860565b600a6003806020026040519081016040528092919082600380156118c8576020028201916000905b82829054906101000a900460000b60000b815260200190600101906020826000010492830192600103820291508084116118915790505b5050505050905090565b60008160ff168360ff16106118e757816118e9565b825b905092915050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60048460ff1660058110151561192657fe5b018360ff1660058110151561193757fe5b602091828204019190069054906101000a900460000b60000b14806119735750600360149054906101000a900460ff1660ff166001830160ff16145b806119dc57507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60048460ff166005811015156119ac57fe5b016001840160ff166005811015156119c057fe5b602091828204019190069054906101000a900460000b60000b14155b156119e657611b65565b6001820190505b600360149054906101000a900460ff1660ff168160ff161015611a7e577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60048460ff16600581101515611a3d57fe5b018260ff16600581101515611a4e57fe5b602091828204019190069054906101000a900460000b60000b141515611a7357611a7e565b8060010190506119ed565b60048360ff16600581101515611a9057fe5b018260ff16600581101515611aa157fe5b602091828204019190069054906101000a900460000b60048460ff16600581101515611ac957fe5b018260ff16600581101515611ada57fe5b602091828204019190066101000a81548160ff021916908360000b60ff1602179055507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60048460ff16600581101515611b3057fe5b018360ff16600581101515611b4157fe5b602091828204019190066101000a81548160ff021916908360000b60ff1602179055505b505050565b600080600080600080600094505b600360149054906101000a900460ff1660ff168560ff16101561208b57600093505b60028460ff161115156120805760048460ff16600581101515611bb957fe5b018560ff16600581101515611bca57fe5b602091828204019190069054906101000a900460000b92507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8360000b1415611c1257612075565b600191508390505b600360149054906101000a900460ff1660ff166001820160ff16108015611cb9575060046001820160ff16600581101515611c5157fe5b018560ff16600581101515611c6257fe5b602091828204019190069054906101000a900460000b60000b60048260ff16600581101515611c8d57fe5b018660ff16600581101515611c9e57fe5b602091828204019190069054906101000a900460000b60000b145b15611cd35781806001019250508080600101915050611c1a565b60038267ffffffffffffffff16101515612074575b8060ff168460ff16111515611d69577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60048560ff16600581101515611d2a57fe5b018660ff16600581101515611d3b57fe5b602091828204019190066101000a81548160ff021916908360000b60ff160217905550836001019350611ce8565b7f87545cf34dc397aa7449a044988c4eacf42c098d39d6101d86885725e7ed232f60046013600081819054906101000a900460ff168092919060010191906101000a81548160ff021916908360ff160217905550604051808360058015611e2a5760a0028201915b8160058015611e1b576020028201916000905b82829054906101000a900460000b60000b81526020019060010190602082600001049283019260010382029150808411611de45790505b50509060010190808311611dd1575b50508260ff1660ff1681526020019250505060405180910390a1611e4c6127b0565b7f87545cf34dc397aa7449a044988c4eacf42c098d39d6101d86885725e7ed232f60046013600081819054906101000a900460ff168092919060010191906101000a81548160ff021916908360ff160217905550604051808360058015611f0d5760a0028201915b8160058015611efe576020028201916000905b82829054906101000a900460000b60000b81526020019060010190602082600001049283019260010382029150808411611ec75790505b50509060010190808311611eb4575b50508260ff1660ff1681526020019250505060405180910390a160028203600c8460ff16600781101515611f3d57fe5b015402600080600281101515611f4f57fe5b0160000160148282829054906101000a900467ffffffffffffffff160192506101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055507f6d5bfc2adc46d18a2b66ad9234660ccc8dc20f09f508c1cd367f20157fc800bf600080600281101515611fc257fe5b0160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600080600281101515611ff657fe5b0160000160149054906101000a900467ffffffffffffffff16604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018267ffffffffffffffff1667ffffffffffffffff1681526020019250505060405180910390a1600195506124cf565b5b836001019350611b9a565b846001019450611b78565b600093505b600360149054906101000a900460ff1660ff168460ff1610156124ca57600094505b60028560ff161115156124bf5760048460ff166005811015156120d157fe5b018560ff166005811015156120e257fe5b602091828204019190069054906101000a900460000b92507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8360000b141561212a576124b4565b600191508490505b600360149054906101000a900460ff1660ff166001820160ff161080156121d1575060048460ff1660058110151561216657fe5b016001820160ff1660058110151561217a57fe5b602091828204019190069054906101000a900460000b60000b60048560ff166005811015156121a557fe5b018260ff166005811015156121b657fe5b602091828204019190069054906101000a900460000b60000b145b156121eb5781806001019250508080600101915050612132565b60038267ffffffffffffffff161015156124b3575b8060ff168560ff16111515612281577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60048560ff1660058110151561224257fe5b018660ff1660058110151561225357fe5b602091828204019190066101000a81548160ff021916908360000b60ff160217905550846001019450612200565b7f87545cf34dc397aa7449a044988c4eacf42c098d39d6101d86885725e7ed232f60046013600081819054906101000a900460ff168092919060010191906101000a81548160ff021916908360ff1602179055506040518083600580156123425760a0028201915b8160058015612333576020028201916000905b82829054906101000a900460000b60000b815260200190600101906020826000010492830192600103820291508084116122fc5790505b505090600101908083116122e9575b50508260ff1660ff1681526020019250505060405180910390a16123646127b0565b7f87545cf34dc397aa7449a044988c4eacf42c098d39d6101d86885725e7ed232f60046013600081819054906101000a900460ff168092919060010191906101000a81548160ff021916908360ff1602179055506040518083600580156124255760a0028201915b8160058015612416576020028201916000905b82829054906101000a900460000b60000b815260200190600101906020826000010492830192600103820291508084116123df5790505b505090600101908083116123cc575b50508260ff1660ff1681526020019250505060405180910390a160028203600c8460ff1660078110151561245557fe5b01540260008060028110151561246757fe5b0160000160148282829054906101000a900467ffffffffffffffff160192506101000a81548167ffffffffffffffff021916908367ffffffffffffffff160217905550600195506124cf565b5b8460010194506120b2565b836001019350612090565b600095505b505050505090565b60004340601360019054906101000a900467ffffffffffffffff166040518083600019166000191681526020018267ffffffffffffffff1667ffffffffffffffff1678010000000000000000000000000000000000000000000000000281526008019250505060405180910390204260405180836000191660001916815260200182815260200192505050604051809103902060019004601360016101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055508167ffffffffffffffff16601360019054906101000a900467ffffffffffffffff1667ffffffffffffffff168115156125cb57fe5b069050919050565b6000806000806002811015156125e557fe5b0160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1691506000600160028110151561261c57fe5b0160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660008060028110151561265057fe5b0160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600060016002811015156126a357fe5b0160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000806002811015156126f457fe5b0160000160149054906101000a900467ffffffffffffffff1690506000600160028110151561271f57fe5b0160000160149054906101000a900467ffffffffffffffff1660008060028110151561274757fe5b0160000160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff160217905550806000600160028110151561278257fe5b0160000160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055505050565b6000806001600360149054906101000a900460ff160391505b6000828060019003935060ff161115612819576001600360149054906101000a900460ff160390505b6000818060019003925060ff1611156128145761280f82826118f1565b6127f2565b6127c9565b5050565b602060405190810160405280600081525090565b610320604051908101604052806005905b61284a61288a565b8152602001906001900390816128425790505090565b6060604051908101604052806003905b6000800b8152602001906001900390816128705790505090565b60a0604051908101604052806005905b6000800b81526020019060019003908161289a57905050905600a165627a7a723058204c0d3d8838ad4a614f22cbe190c201902989cac7da4747afaa60e0577e9748210029';
