var lamaAbi = [{"constant":false,"inputs":[{"name":"index","type":"uint8"},{"name":"side","type":"uint8"}],"name":"Step","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"GetPlayers","outputs":[{"name":"player1","type":"address"},{"name":"player2","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"AddPlayer","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"GetField","outputs":[{"name":"","type":"int8[5][5]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"GetBlocks","outputs":[{"name":"","type":"int8[3]"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"player1","type":"address"},{"indexed":false,"name":"player2","type":"address"},{"indexed":false,"name":"index","type":"uint8"}],"name":"PlayerAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"field","type":"int8[5][5]"},{"indexed":false,"name":"changing_index","type":"uint8"}],"name":"FieldChanging","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"blocks","type":"int8[3]"}],"name":"AvailableBlocks","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"player_address","type":"address"}],"name":"StepFinished","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"player_address","type":"address"},{"indexed":false,"name":"score","type":"uint64"}],"name":"PlayerScore","type":"event"},{"anonymous":false,"inputs":[],"name":"TopSide","type":"event"},{"anonymous":false,"inputs":[],"name":"LeftSide","type":"event"},{"anonymous":false,"inputs":[],"name":"RightSide","type":"event"}];

var lamaBin = '0x60606040526000600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506005600360146101000a81548160ff021916908360ff1602179055506003600960006101000a81548160ff021916908360ff1602179055506060604051908101604052807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60000b81526020017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60000b81526020017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60000b815250600a906003620001579291906200022f565b506007600b60006101000a81548160ff021916908360ff16021790555060e060405190810160405280600a60ff168152602001601460ff168152602001601e60ff168152602001602860ff168152602001604660ff168152602001606460ff168152602001609660ff16815250600c906007620001d6929190620002d3565b506000601360006101000a81548160ff021916908360ff1602179055506000601360016101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555034156200022957600080fd5b62000378565b826003601f01602090048101928215620002c05791602002820160005b838211156200028f57835183826101000a81548160ff021916908360000b60ff16021790555092602001926001016020816000010492830192600103026200024c565b8015620002be5782816101000a81549060ff02191690556001016020816000010492830192600103026200028f565b505b509050620002cf91906200031d565b5090565b82600781019282156200030a579160200282015b8281111562000309578251829060ff16905591602001919060010190620002e7565b5b50905062000319919062000350565b5090565b6200034d91905b808211156200034957600081816101000a81549060ff02191690555060010162000324565b5090565b90565b6200037591905b808211156200037157600081600090555060010162000357565b5090565b90565b61289d80620003886000396000f30060606040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680634e6e7b97146100725780636e5485cb1461011d5780636f26e907146101a5578063f7bab1fc146101af578063fc1b611514610223575b600080fd5b341561007d57600080fd5b6100a2600480803560ff1690602001909190803560ff16906020019091905050610274565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100e25780820151818401526020810190506100c7565b50505050905090810190601f16801561010f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561012857600080fd5b610130610f1c565b604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390f35b6101ad610f90565b005b34156101ba57600080fd5b6101c2611955565b604051808260056000925b818410156102135782846020020151600560200280838360005b838110156102025780820151818401526020810190506101e7565b5050505090500192600101926101cd565b9250505091505060405180910390f35b341561022e57600080fd5b6102366119fb565b6040518082600360200280838360005b83811015610261578082015181840152602081019050610246565b5050505090500191505060405180910390f35b61027c6127da565b600080600080600080600060028110151561029357fe5b0160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610329576040805190810160405280601081526020017f696e636f727265637420706c61796572000000000000000000000000000000008152509550610f11565b6000600281111561033657fe5b87600281111561034257fe5b1415610601577ff56c24d1c6d0fcefe490e06b1f936c3996abb8f96d84f10b9b5bec03b57b05ad60405160405180910390a17fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60048960ff166005811015156103a757fe5b0160006005811015156103b657fe5b602091828204019190069054906101000a900460000b60000b1415156104f6576001600360149054906101000a900460ff160394505b60018560ff161015156104875760048860ff1660058110151561040b57fe5b016001860360ff1660058110151561041f57fe5b602091828204019190069054906101000a900460000b60048960ff1660058110151561044757fe5b018660ff1660058110151561045857fe5b602091828204019190066101000a81548160ff021916908360000b60ff160217905550846001900394506103ec565b600a600060038110151561049757fe5b602091828204019190069054906101000a900460000b60048960ff166005811015156104bf57fe5b0160006005811015156104ce57fe5b602091828204019190066101000a81548160ff021916908360000b60ff1602179055506105fc565b600094505b600360149054906101000a900460ff1660ff168560ff16101561058c577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60048960ff1660058110151561054b57fe5b018660ff1660058110151561055c57fe5b602091828204019190069054906101000a900460000b60000b1415156105815761058c565b8460010194506104fb565b600a600060038110151561059c57fe5b602091828204019190069054906101000a900460000b60048960ff166005811015156105c457fe5b016001870360ff166005811015156105d857fe5b602091828204019190066101000a81548160ff021916908360000b60ff1602179055505b610a52565b6001600281111561060e57fe5b87600281111561061a57fe5b1415610831577f6f4a042e794d551328e15a7434557eb033d4e10d0618055e7ce29f8311747c9b60405160405180910390a1600093505b600360149054906101000a900460ff1660ff168460ff161080156106d057507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60048560ff166005811015156106a357fe5b018960ff166005811015156106b457fe5b602091828204019190069054906101000a900460000b60000b14155b156106e057836001019350610651565b6106fc846001600360149054906101000a900460ff1603611a6c565b92505b60008360ff1611156107995760046001840360ff1660058110151561072057fe5b018860ff1660058110151561073157fe5b602091828204019190069054906101000a900460000b60048460ff1660058110151561075957fe5b018960ff1660058110151561076a57fe5b602091828204019190066101000a81548160ff021916908360000b60ff160217905550826001900392506106ff565b600360149054906101000a900460ff1660ff168460ff161415156107c2576107c18885611a8b565b5b600a60006003811015156107d257fe5b602091828204019190069054906101000a900460000b600460006005811015156107f857fe5b018960ff1660058110151561080957fe5b602091828204019190066101000a81548160ff021916908360000b60ff160217905550610a51565b60028081111561083d57fe5b87600281111561084957fe5b1415610a4b577fca585c1c8e46a3862a490a89a7f70c8f8ae6b1ceed5e9a151ecb52fd1f18bf5360405160405180910390a1600360149054906101000a900460ff1693505b60008460ff1611801561090357507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6004856001900395508560ff166005811015156108d657fe5b018960ff166005811015156108e757fe5b602091828204019190069054906101000a900460000b60000b14155b1561090d5761088e565b8392505b600360149054906101000a900460ff1660ff166001840160ff1610156109be5760046001840160ff1660058110151561094657fe5b018860ff1660058110151561095757fe5b602091828204019190069054906101000a900460000b60048460ff1660058110151561097f57fe5b018960ff1660058110151561099057fe5b602091828204019190066101000a81548160ff021916908360000b60ff160217905550826001019250610911565b6109c88489611a8b565b600a60006003811015156109d857fe5b602091828204019190069054906101000a900460000b60046001600360149054906101000a900460ff160360ff16600581101515610a1257fe5b018960ff16600581101515610a2357fe5b602091828204019190066101000a81548160ff021916908360000b60ff160217905550610a50565b600080fd5b5b5b610a5a611d04565b50600191505b600960009054906101000a900460ff1660ff168260ff161015610ae857600a8260ff16600381101515610a8f57fe5b602091828204019190069054906101000a900460000b600a6001840360ff16600381101515610aba57fe5b602091828204019190066101000a81548160ff021916908360000b60ff160217905550816001019150610a60565b610b03600b60009054906101000a900460ff1660ff16612671565b600a6001600960009054906101000a900460ff160360ff16600381101515610b2757fe5b602091828204019190066101000a81548160ff021916908360000b60ff1602179055507f87545cf34dc397aa7449a044988c4eacf42c098d39d6101d86885725e7ed232f60046013600081819054906101000a900460ff168092919060010191906101000a81548160ff021916908360ff160217905550604051808360058015610c0b5760a0028201915b8160058015610bfc576020028201916000905b82829054906101000a900460000b60000b81526020019060010190602082600001049283019260010382029150808411610bc55790505b50509060010190808311610bb2575b50508260ff1660ff1681526020019250505060405180910390a17facdaae043115881f7fd55fc0bb4cc8a30a900bbaef7001f084093e055be0b1a3600a604051808260038015610c96576020028201916000905b82829054906101000a900460000b60000b81526020019060010190602082600001049283019260010382029150808411610c5f5790505b505091505060405180910390a1600080600281101515610cb257fe5b01905060006001600281101515610cc557fe5b01600080600281101515610cd557fe5b016000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000820160149054906101000a900467ffffffffffffffff168160000160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055509050508060006001600281101515610d9457fe5b016000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000820160149054906101000a900467ffffffffffffffff168160000160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055509050507f2fa7cc015aacb7a83b2695062f587529d46eb05df180a0cbe309c66d3797f924600080600281101515610e7257fe5b0160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a16040805190810160405280600781526020017f737563636573730000000000000000000000000000000000000000000000000081525095505b505050505092915050565b600080600080600281101515610f2e57fe5b0160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660006001600281101515610f6357fe5b0160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16915091509091565b600080600080600080600080600281101515610fa857fe5b0160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156111b75760408051908101604052803373ffffffffffffffffffffffffffffffffffffffff168152602001600067ffffffffffffffff1681525060008060028110151561102e57fe5b0160008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160000160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055509050507f7a2cfe7c64f06fb1ff9ce423bea9e86fc6bf4d9fc714e1d99620725b852059cc6000806002811015156110d857fe5b0160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166000600160028110151561110d57fe5b0160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166000604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018260ff168152602001935050505060405180910390a161194e565b60008060016002811015156111c857fe5b0160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156119485760408051908101604052803373ffffffffffffffffffffffffffffffffffffffff168152602001600067ffffffffffffffff168152506000600160028110151561124f57fe5b0160008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160000160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055509050507f7a2cfe7c64f06fb1ff9ce423bea9e86fc6bf4d9fc714e1d99620725b852059cc6000806002811015156112f957fe5b0160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166000600160028110151561132e57fe5b0160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166001604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018260ff168152602001935050505060405180910390a1600094505b600360149054906101000a900460ff1660ff168560ff16101561176d57600093505b600360149054906101000a900460ff1660ff168460ff161015611760577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff92507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff915060018460ff16111561152d5760048560ff1660058110151561147b57fe5b016002850360ff1660058110151561148f57fe5b602091828204019190069054906101000a900460000b60000b60048660ff166005811015156114ba57fe5b016001860360ff166005811015156114ce57fe5b602091828204019190069054906101000a900460000b60000b141561152c5760048560ff166005811015156114ff57fe5b016001850360ff1660058110151561151357fe5b602091828204019190069054906101000a900460000b92505b5b60018560ff1611156115fd5760046002860360ff1660058110151561154e57fe5b018460ff1660058110151561155f57fe5b602091828204019190069054906101000a900460000b60000b60046001870360ff1660058110151561158d57fe5b018560ff1660058110151561159e57fe5b602091828204019190069054906101000a900460000b60000b14156115fc5760046001860360ff166005811015156115d257fe5b018460ff166005811015156115e357fe5b602091828204019190069054906101000a900460000b91505b5b611618600b60009054906101000a900460ff1660ff16612671565b60048660ff1660058110151561162a57fe5b018560ff1660058110151561163b57fe5b602091828204019190066101000a81548160ff021916908360000b60ff1602179055505b8260000b60048660ff1660058110151561167557fe5b018560ff1660058110151561168657fe5b602091828204019190069054906101000a900460000b60000b14806116e857508160000b60048660ff166005811015156116bc57fe5b018560ff166005811015156116cd57fe5b602091828204019190069054906101000a900460000b60000b145b1561175357611708600b60009054906101000a900460ff1660ff16612671565b60048660ff1660058110151561171a57fe5b018560ff1660058110151561172b57fe5b602091828204019190066101000a81548160ff021916908360000b60ff16021790555061165f565b83806001019450506113fa565b84806001019550506113d8565b7f87545cf34dc397aa7449a044988c4eacf42c098d39d6101d86885725e7ed232f60046013600081819054906101000a900460ff168092919060010191906101000a81548160ff021916908360ff16021790555060405180836005801561182e5760a0028201915b816005801561181f576020028201916000905b82829054906101000a900460000b60000b815260200190600101906020826000010492830192600103820291508084116117e85790505b505090600101908083116117d5575b50508260ff1660ff1681526020019250505060405180910390a1600090505b600960009054906101000a900460ff1660ff168160ff1610156118c557611885600b60009054906101000a900460ff1660ff16612671565b600a8260ff1660038110151561189757fe5b602091828204019190066101000a81548160ff021916908360000b60ff16021790555080600101905061184d565b7facdaae043115881f7fd55fc0bb4cc8a30a900bbaef7001f084093e055be0b1a3600a604051808260038015611936576020028201916000905b82829054906101000a900460000b60000b815260200190600101906020826000010492830192600103820291508084116118ff5790505b505091505060405180910390a161194d565b600080fd5b5b5050505050565b61195d6127ee565b6004600580602002604051908101604052809291906000905b828210156119f2578382016005806020026040519081016040528092919082600580156119de576020028201916000905b82829054906101000a900460000b60000b815260200190600101906020826000010492830192600103820291508084116119a75790505b505050505081526020019060010190611976565b50505050905090565b611a0361281d565b600a600380602002604051908101604052809291908260038015611a62576020028201916000905b82829054906101000a900460000b60000b81526020019060010190602082600001049283019260010382029150808411611a2b5790505b5050505050905090565b60008160ff168360ff1610611a815781611a83565b825b905092915050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60048460ff16600581101515611ac057fe5b018360ff16600581101515611ad157fe5b602091828204019190069054906101000a900460000b60000b1480611b0d5750600360149054906101000a900460ff1660ff166001830160ff16145b80611b7657507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60048460ff16600581101515611b4657fe5b016001840160ff16600581101515611b5a57fe5b602091828204019190069054906101000a900460000b60000b14155b15611b8057611cff565b6001820190505b600360149054906101000a900460ff1660ff168160ff161015611c18577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60048460ff16600581101515611bd757fe5b018260ff16600581101515611be857fe5b602091828204019190069054906101000a900460000b60000b141515611c0d57611c18565b806001019050611b87565b60048360ff16600581101515611c2a57fe5b018260ff16600581101515611c3b57fe5b602091828204019190069054906101000a900460000b60048460ff16600581101515611c6357fe5b018260ff16600581101515611c7457fe5b602091828204019190066101000a81548160ff021916908360000b60ff1602179055507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60048460ff16600581101515611cca57fe5b018360ff16600581101515611cdb57fe5b602091828204019190066101000a81548160ff021916908360000b60ff1602179055505b505050565b600080600080600080600094505b600360149054906101000a900460ff1660ff168560ff16101561222557600093505b60028460ff1611151561221a5760048460ff16600581101515611d5357fe5b018560ff16600581101515611d6457fe5b602091828204019190069054906101000a900460000b92507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8360000b1415611dac5761220f565b600191508390505b600360149054906101000a900460ff1660ff166001820160ff16108015611e53575060046001820160ff16600581101515611deb57fe5b018560ff16600581101515611dfc57fe5b602091828204019190069054906101000a900460000b60000b60048260ff16600581101515611e2757fe5b018660ff16600581101515611e3857fe5b602091828204019190069054906101000a900460000b60000b145b15611e6d5781806001019250508080600101915050611db4565b60038267ffffffffffffffff1610151561220e575b8060ff168460ff16111515611f03577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60048560ff16600581101515611ec457fe5b018660ff16600581101515611ed557fe5b602091828204019190066101000a81548160ff021916908360000b60ff160217905550836001019350611e82565b7f87545cf34dc397aa7449a044988c4eacf42c098d39d6101d86885725e7ed232f60046013600081819054906101000a900460ff168092919060010191906101000a81548160ff021916908360ff160217905550604051808360058015611fc45760a0028201915b8160058015611fb5576020028201916000905b82829054906101000a900460000b60000b81526020019060010190602082600001049283019260010382029150808411611f7e5790505b50509060010190808311611f6b575b50508260ff1660ff1681526020019250505060405180910390a1611fe661276d565b7f87545cf34dc397aa7449a044988c4eacf42c098d39d6101d86885725e7ed232f60046013600081819054906101000a900460ff168092919060010191906101000a81548160ff021916908360ff1602179055506040518083600580156120a75760a0028201915b8160058015612098576020028201916000905b82829054906101000a900460000b60000b815260200190600101906020826000010492830192600103820291508084116120615790505b5050906001019080831161204e575b50508260ff1660ff1681526020019250505060405180910390a160028203600c8460ff166007811015156120d757fe5b0154026000806002811015156120e957fe5b0160000160148282829054906101000a900467ffffffffffffffff160192506101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055507f6d5bfc2adc46d18a2b66ad9234660ccc8dc20f09f508c1cd367f20157fc800bf60008060028110151561215c57fe5b0160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660008060028110151561219057fe5b0160000160149054906101000a900467ffffffffffffffff16604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018267ffffffffffffffff1667ffffffffffffffff1681526020019250505060405180910390a160019550612669565b5b836001019350611d34565b846001019450611d12565b600093505b600360149054906101000a900460ff1660ff168460ff16101561266457600094505b60028560ff161115156126595760048460ff1660058110151561226b57fe5b018560ff1660058110151561227c57fe5b602091828204019190069054906101000a900460000b92507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8360000b14156122c45761264e565b600191508490505b600360149054906101000a900460ff1660ff166001820160ff1610801561236b575060048460ff1660058110151561230057fe5b016001820160ff1660058110151561231457fe5b602091828204019190069054906101000a900460000b60000b60048560ff1660058110151561233f57fe5b018260ff1660058110151561235057fe5b602091828204019190069054906101000a900460000b60000b145b1561238557818060010192505080806001019150506122cc565b60038267ffffffffffffffff1610151561264d575b8060ff168560ff1611151561241b577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60048560ff166005811015156123dc57fe5b018660ff166005811015156123ed57fe5b602091828204019190066101000a81548160ff021916908360000b60ff16021790555084600101945061239a565b7f87545cf34dc397aa7449a044988c4eacf42c098d39d6101d86885725e7ed232f60046013600081819054906101000a900460ff168092919060010191906101000a81548160ff021916908360ff1602179055506040518083600580156124dc5760a0028201915b81600580156124cd576020028201916000905b82829054906101000a900460000b60000b815260200190600101906020826000010492830192600103820291508084116124965790505b50509060010190808311612483575b50508260ff1660ff1681526020019250505060405180910390a16124fe61276d565b7f87545cf34dc397aa7449a044988c4eacf42c098d39d6101d86885725e7ed232f60046013600081819054906101000a900460ff168092919060010191906101000a81548160ff021916908360ff1602179055506040518083600580156125bf5760a0028201915b81600580156125b0576020028201916000905b82829054906101000a900460000b60000b815260200190600101906020826000010492830192600103820291508084116125795790505b50509060010190808311612566575b50508260ff1660ff1681526020019250505060405180910390a160028203600c8460ff166007811015156125ef57fe5b01540260008060028110151561260157fe5b0160000160148282829054906101000a900467ffffffffffffffff160192506101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060019550612669565b5b84600101945061224c565b83600101935061222a565b600095505b505050505090565b60004340601360019054906101000a900467ffffffffffffffff166040518083600019166000191681526020018267ffffffffffffffff1667ffffffffffffffff1678010000000000000000000000000000000000000000000000000281526008019250505060405180910390204260405180836000191660001916815260200182815260200192505050604051809103902060019004601360016101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055508167ffffffffffffffff16601360019054906101000a900467ffffffffffffffff1667ffffffffffffffff1681151561276557fe5b069050919050565b6000806001600360149054906101000a900460ff160391505b6000828060019003935060ff1611156127d6576001600360149054906101000a900460ff160390505b6000818060019003925060ff1611156127d1576127cc8282611a8b565b6127af565b612786565b5050565b602060405190810160405280600081525090565b610320604051908101604052806005905b612807612847565b8152602001906001900390816127ff5790505090565b6060604051908101604052806003905b6000800b81526020019060019003908161282d5790505090565b60a0604051908101604052806005905b6000800b81526020019060019003908161285757905050905600a165627a7a72305820ced3bbc5fd6d6cfdc4e9fff0224007b575fa979f2657450e017af29698fa5bb90029';
