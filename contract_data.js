var lamaAbi = [{"constant":false,"inputs":[{"name":"index","type":"uint8"},{"name":"side","type":"uint8"}],"name":"Step","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"GetPlayers","outputs":[{"name":"player1","type":"address"},{"name":"player2","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"AddPlayer","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"GetField","outputs":[{"name":"","type":"int8[5][5]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"GetBlocks","outputs":[{"name":"","type":"int8[3]"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"player1","type":"address"},{"indexed":false,"name":"player2","type":"address"},{"indexed":false,"name":"index","type":"uint8"}],"name":"PlayerAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"field","type":"int8[5][5]"},{"indexed":false,"name":"changing_index","type":"uint8"}],"name":"FieldChanging","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"blocks","type":"int8[3]"}],"name":"AvailableBlocks","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"player_address","type":"address"}],"name":"StepFinished","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"player_address","type":"address"},{"indexed":false,"name":"score","type":"uint64"}],"name":"PlayerScore","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"player_address","type":"address"}],"name":"Win","type":"event"},{"anonymous":false,"inputs":[],"name":"TopSide","type":"event"},{"anonymous":false,"inputs":[],"name":"LeftSide","type":"event"},{"anonymous":false,"inputs":[],"name":"RightSide","type":"event"}];
var lamaBin = '0x6060604081815260028054600160a060020a031916905560038054600160a860020a031916740500000000000000000000000000000000000000001781556009805460ff1916909117905551908101604090815260001980835260208301819052908201526200007490600a906003620000ef565b50600b805460ff1916600717905560e06040519081016040908152600a825260146020830152601e908201526028606082015260466080820152606460a0820152609660c0820152620000cc90600c9060076200018c565b50601380546001604860020a03191690553415620000e957600080fd5b62000211565b6001830191839082156200017a5791602002820160005b838211156200014957835183826101000a81548160ff021916908360000b60ff160217905550926020019260010160208160000104928301926001030262000106565b8015620001785782816101000a81549060ff021916905560010160208160000104928301926001030262000149565b505b5062000188929150620001d0565b5090565b8260078101928215620001c2579160200282015b82811115620001c2578251829060ff16905591602001919060010190620001a0565b5062000188929150620001f4565b620001f191905b808211156200018857805460ff19168155600101620001d7565b90565b620001f191905b80821115620001885760008155600101620001fb565b611e0780620002216000396000f30060606040526004361061006c5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416634e6e7b9781146100715780636e5485cb146101075780636f26e9071461013e578063f7bab1fc14610148578063fc1b6115146101b5575b600080fd5b341561007c57600080fd5b61009060ff60043581169060243516610200565b60405160208082528190810183818151815260200191508051906020019080838360005b838110156100cc5780820151838201526020016100b4565b50505050905090810190601f1680156100f95780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561011257600080fd5b61011a610aed565b604051600160a060020a039283168152911660208201526040908101905180910390f35b610146610b04565b005b341561015357600080fd5b61015b61119a565b6040516000826005835b818410156101a5578284602002015160a080838360005b8381101561019457808201518382015260200161017c565b505050509050019260010192610165565b9250505091505060405180910390f35b34156101c057600080fd5b6101c861122d565b6040518082606080838360005b838110156101ed5780820151838201526020016101d5565b5050505090500191505060405180910390f35b610208611d19565b60008080808080015433600160a060020a0390811691161461025f5760408051908101604052601081527f696e636f727265637420706c617965720000000000000000000000000000000060208201529450610ae3565b600086600281111561026d57fe5b141561045b577ff56c24d1c6d0fcefe490e06b1f936c3996abb8f96d84f10b9b5bec03b57b05ad60405160405180910390a1600460ff8816600581106102af57fe5b0154600090810b900b6000191461039a576001600360149054906101000a900460ff160393505b600160ff85161061036757600460ff8816600581106102f157fe5b0160ff6000198601166005811061030457fe5b6020808204909201549190066101000a900460000b600460ff89166005811061032957fe5b0160ff86166005811061033857fe5b602091828204019190066101000a81548160ff021916908360000b60ff160217905550836001900393506102d6565b600a5460000b600460ff89166005811061037d57fe5b01805460009290920b60ff1660ff19909216919091179055610456565b600093505b60035460ff60a060020a9091048116908516101561040957600460ff8816600581106103c757fe5b0160ff8516600581106103d657fe5b602091828204019190069054906101000a900460000b60000b6000191415156103fe57610409565b83600101935061039f565b600a5460000b600460ff89166005811061041f57fe5b0160ff6000198701166005811061043257fe5b602091828204019190066101000a81548160ff021916908360000b60ff1602179055505b6107d2565b600186600281111561046957fe5b141561061a577f6f4a042e794d551328e15a7434557eb033d4e10d0618055e7ce29f8311747c9b60405160405180910390a1600092505b60035460ff60a060020a90910481169084161080156104f85750600460ff8416600581106104ca57fe5b0160ff8816600581106104d957fe5b602091828204019190069054906101000a900460000b60000b60001914155b15610508578260010192506104a0565b610524836001600360149054906101000a900460ff160361128f565b91505b60008260ff1611156105b957600460ff6000198401166005811061054757fe5b0160ff88166005811061055657fe5b6020808204909201549190066101000a900460000b600460ff84166005811061057b57fe5b0160ff89166005811061058a57fe5b602091828204019190066101000a81548160ff021916908360000b60ff16021790555081600190039150610527565b600a5460000b600460ff8916600581106105cf57fe5b602091828204019190066101000a81548160ff021916908360000b60ff160217905550600360149054906101000a900460ff1660ff168360ff161415156104565761045683886112ad565b600286600281111561062857fe5b141561006c577fca585c1c8e46a3862a490a89a7f70c8f8ae6b1ceed5e9a151ecb52fd1f18bf5360405160405180910390a160035460a060020a900460ff1692505b60008360ff161180156106bd575060001990920191600460ff84166005811061068f57fe5b0160ff88166005811061069e57fe5b602091828204019190069054906101000a900460000b60000b60001914155b156106c75761066a565b8291505b60035460ff60a060020a909104811660018401909116101561076b57600460ff6001840116600581106106fa57fe5b0160ff88166005811061070957fe5b6020808204909201549190066101000a900460000b600460ff84166005811061072e57fe5b0160ff89166005811061073d57fe5b602091828204019190066101000a81548160ff021916908360000b60ff1602179055508160010191506106cb565b600a5460035460009190910b9060049060a060020a900460ff90811660001901166005811061079657fe5b0160ff8916600581106107a557fe5b602091828204019190066101000a81548160ff021916908360000b60ff16021790555061045683886112ad565b6107da61148d565b5060015b60095460ff908116908216101561085657600a60ff8216600381106107ff57fe5b6020808204909201549190066101000a900460000b600a60ff6000198401166003811061082857fe5b602091828204019190066101000a81548160ff021916908360000b60ff1602179055508060010190506107de565b600b546108659060ff166114a1565b600954600a9060001960ff91821601166003811061087f57fe5b6020808204929092018054929091066101000a60ff8181021990931660009490940b831602929092179091556013805460ff19811690831660018101909316179055600080516020611dbc83398151915290600490604051610320810183825b60a081019082906000905b82829054906101000a900460000b60000b815260200190600101906020826000010492830192600103820291508084116108ea579050505090600101908083116108df57505060ff909216825250602001905060405180910390a17facdaae043115881f7fd55fc0bb4cc8a30a900bbaef7001f084093e055be0b1a3600a60405160608101826000835b82829054906101000a900460000b60000b81526020019060010190602082600001049283019260010382029150808411610974579050505091505060405180910390a16109bf61154d565b6000547f2fa7cc015aacb7a83b2695062f587529d46eb05df180a0cbe309c66d3797f92490600160a060020a0316604051600160a060020a03909116815260200160405180910390a161012c600080015460a060020a900467ffffffffffffffff16118015610a50575060005460015460a060020a9182900467ffffffffffffffff90811660020281169290910416115b15610aac576001547fc94e26bc371c19185b9e577ef339d2a5bca910d48092cbb160550b311ddd8d9890600160a060020a0316604051600160a060020a03909116815260200160405180910390a1600154600160a060020a0316ff5b60408051908101604052600781527f7375636365737300000000000000000000000000000000000000000000000000602082015294505b5050505092915050565b600054600154600160a060020a0391821692911690565b60008080808080800154600160a060020a03161515610c0e576040805190810160405233600160a060020a031681526000602082018190528151815473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03919091161781556020820151815467ffffffffffffffff9190911660a060020a02600080516020611d9c833981519152909116179055507f7a2cfe7c64f06fb1ff9ce423bea9e86fc6bf4d9fc714e1d99620725b852059cc6000800154600160a060020a0316600060010154600160a060020a03166000604051600160a060020a03938416815291909216602082015260ff9091166040808301919091526060909101905180910390a1611193565b600154600160a060020a0316151561006c576040805190810160405233600160a060020a031681526000602082015260018151815473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03919091161781556020820151815467ffffffffffffffff9190911660a060020a02600080516020611d9c833981519152909116179055507f7a2cfe7c64f06fb1ff9ce423bea9e86fc6bf4d9fc714e1d99620725b852059cc6000800154600160a060020a0316600060010154600160a060020a03166001604051600160a060020a03938416815291909216602082015260ff9091166040808301919091526060909101905180910390a1600094505b60035460ff60a060020a9091048116908616101561102057600093505b60035460ff60a060020a90910481169085161015611015576000199250600019915060018460ff161115610e1557600460ff861660058110610d6c57fe5b0160ff60011986011660058110610d7f57fe5b6020808204909201549190066101000a9004600090810b900b600460ff871660058110610da857fe5b0160ff60001987011660058110610dbb57fe5b602091828204019190069054906101000a900460000b60000b1415610e1557600460ff861660058110610dea57fe5b0160ff60001986011660058110610dfd57fe5b6020808204909201549190066101000a900460000b92505b60018560ff161115610eda57600460ff60011987011660058110610e3557fe5b0160ff851660058110610e4457fe5b6020808204909201549190066101000a9004600090810b900b600460ff60001988011660058110610e7157fe5b0160ff861660058110610e8057fe5b602091828204019190069054906101000a900460000b60000b1415610eda57600460ff60001987011660058110610eb357fe5b0160ff851660058110610ec257fe5b6020808204909201549190066101000a900460000b91505b600b54610ee99060ff166114a1565b600460ff871660058110610ef957fe5b0160ff861660058110610f0857fe5b602091828204019190066101000a81548160ff021916908360000b60ff1602179055505b600083900b600460ff871660058110610f4157fe5b0160ff861660058110610f5057fe5b602091828204019190069054906101000a900460000b60000b1480610faf5750600082900b600460ff871660058110610f8557fe5b0160ff861660058110610f9457fe5b602091828204019190069054906101000a900460000b60000b145b1561100a57600b54610fc39060ff166114a1565b600460ff871660058110610fd357fe5b0160ff861660058110610fe257fe5b602091828204019190066101000a81548160ff021916908360000b60ff160217905550610f2c565b600190930192610d2e565b600190940193610d11565b6013805460ff198116600160ff92831690810190921617909155600080516020611dbc83398151915290600490604051610320810183825b60a081019082906000905b82829054906101000a900460000b60000b815260200190600101906020826000010492830192600103820291508084116110635790505050906001019080831161105857505060ff909216825250602001905060405180910390a15060005b60095460ff908116908216101561112057600b546110e29060ff166114a1565b600a60ff8316600381106110f257fe5b602091828204019190066101000a81548160ff021916908360000b60ff1602179055508060010190506110c2565b7facdaae043115881f7fd55fc0bb4cc8a30a900bbaef7001f084093e055be0b1a3600a60405160608101826000835b82829054906101000a900460000b60000b8152602001906001019060208260000104928301926001038202915080841161114f579050505091505060405180910390a15b5050505050565b6111a2611d2b565b6004600560a060405190810160405291906000835b8282101561122457818401600560a0604051908101604052919060a08301826000855b82829054906101000a900460000b60000b815260200190600101906020826000010492830192600103820291508084116111da5790505050505050815260200190600101906111b7565b50505050905090565b611235611d59565b600a60036060604051908101604052919060608301826000855b82829054906101000a900460000b60000b8152602001906001019060208260000104928301926001038202915080841161124f5790505050505050905090565b60008160ff168360ff16106112a457816112a6565b825b9392505050565b6000600460ff8416600581106112bf57fe5b0160ff8316600581106112ce57fe5b602091828204019190069054906101000a900460000b60000b600019148061130857506003546001830160ff90811660a060020a90920416145b8061134f5750600460ff84166005811061131e57fe5b0160ff60018401166005811061133057fe5b602091828204019190069054906101000a900460000b60000b60001914155b1561135957611488565b50600181015b60035460ff60a060020a909104811690821610156113c657600460ff84166005811061138757fe5b0160ff82166005811061139657fe5b602091828204019190069054906101000a900460000b60000b6000191415156113be576113c6565b60010161135f565b600460ff8416600581106113d657fe5b0160ff8316600581106113e557fe5b6020808204909201549190066101000a900460000b600460ff85166005811061140a57fe5b0160ff6000198401166005811061141d57fe5b602091828204019190066101000a81548160ff021916908360000b60ff16021790555060001960048460ff1660058110151561145557fe5b0160ff84166005811061146457fe5b602091828204019190066101000a81548160ff021916908360000b60ff1602179055505b505050565b6114956115c4565b1561149f5761148d565b565b601354600090434090610100900467ffffffffffffffff1660405191825267ffffffffffffffff1678010000000000000000000000000000000000000000000000000260208201526028016040518091039020426040519182526020820152604090810190519081900390206013805468ffffffffffffffff00191661010067ffffffffffffffff938416810291909117918290558483169291041681151561154657fe5b0692915050565b6000805460018054600080516020611d9c83398151915273ffffffffffffffffffffffffffffffffffffffff19808516600160a060020a038481169190911783811660a060020a93909516919096161781810467ffffffffffffffff90811683029490941790965594169284900416909202179055565b600080808080805b60035460ff60a060020a9091048116908616101561196b57600093505b600260ff85161161196057600460ff85166005811061160457fe5b0160ff86166005811061161357fe5b602091828204019190069054906101000a900460000b92508260000b600019141561163d57611955565b5060019050825b60035460ff60a060020a9091048116600183019091161080156116d75750600460ff60018301166005811061167557fe5b0160ff86166005811061168457fe5b6020808204909201549190066101000a9004600090810b900b600460ff8316600581106116ad57fe5b0160ff8716600581106116bc57fe5b602091828204019190069054906101000a900460000b60000b145b156116e85760019182019101611644565b600367ffffffffffffffff831610611955575b60ff8082169085161161175857600019600460ff86166005811061171b57fe5b0160ff87166005811061172a57fe5b602091828204019190066101000a81548160ff021916908360000b60ff1602179055508360010193506116fb565b6013805460ff198116600160ff92831690810190921617909155600080516020611dbc83398151915290600490604051610320810183825b60a081019082906000905b82829054906101000a900460000b60000b8152602001906001019060208260000104928301926001038202915080841161179b5790505050906001019080831161179057505060ff909216825250602001905060405180910390a16117fe611cbc565b6013805460ff198116600160ff92831690810190921617909155600080516020611dbc83398151915290600490604051610320810183825b60a081019082906000905b82829054906101000a900460000b60000b815260200190600101906020826000010492830192600103820291508084116118415790505050906001019080831161183657505060ff909216825250602001905060405180910390a16001198201600c60ff8516600781106118b157fe5b015460008054600080516020611d9c833981519152811660a060020a9182900467ffffffffffffffff90811695909402949094018316810293909317908190557f6d5bfc2adc46d18a2b66ad9234660ccc8dc20f09f508c1cd367f20157fc800bf92600160a060020a03821692910416604051600160a060020a03909216825267ffffffffffffffff1660208201526040908101905180910390a160019550611cb4565b8360010193506115e9565b8460010194506115cc565b600093505b60035460ff60a060020a90910481169085161015611caf57600094505b600260ff861611611ca457600460ff8516600581106119a857fe5b0160ff8616600581106119b757fe5b602091828204019190069054906101000a900460000b92508260000b60001914156119e157611c99565b5060019050835b60035460ff60a060020a909104811660018301909116108015611a7b5750600460ff851660058110611a1657fe5b0160ff600183011660058110611a2857fe5b6020808204909201549190066101000a9004600090810b900b600460ff861660058110611a5157fe5b0160ff831660058110611a6057fe5b602091828204019190069054906101000a900460000b60000b145b15611a8c57600191820191016119e8565b600367ffffffffffffffff831610611c99575b60ff80821690861611611afc57600019600460ff861660058110611abf57fe5b0160ff871660058110611ace57fe5b602091828204019190066101000a81548160ff021916908360000b60ff160217905550846001019450611a9f565b6013805460ff198116600160ff92831690810190921617909155600080516020611dbc83398151915290600490604051610320810183825b60a081019082906000905b82829054906101000a900460000b60000b81526020019060010190602082600001049283019260010382029150808411611b3f57905050509060010190808311611b3457505060ff909216825250602001905060405180910390a1611ba2611cbc565b6013805460ff198116600160ff92831690810190921617909155600080516020611dbc83398151915290600490604051610320810183825b60a081019082906000905b82829054906101000a900460000b60000b81526020019060010190602082600001049283019260010382029150808411611be557905050509060010190808311611bda57505060ff909216825250602001905060405180910390a16001198201600c60ff851660078110611c5557fe5b01540260008001805467ffffffffffffffff60a060020a808304821690940116909202600080516020611d9c83398151915290921691909117905560019550611cb4565b84600101945061198d565b836001019350611970565b600095505b505050505090565b60035460a060020a900460ff1660005b600019820191600060ff9091161115611d15575060035460a060020a900460ff165b600019810190600060ff9091161115611d1057611d0b82826112ad565b611cee565b611ccc565b5050565b60206040519081016040526000815290565b6103206040519081016040526005815b611d43611d81565b815260200190600190039081611d3b5790505090565b60606040519081016040526003815b600081526000199091019060200181611d685790505090565b60a060405190810160405260008152600460208201611d685600ffffffff0000000000000000ffffffffffffffffffffffffffffffffffffffff87545cf34dc397aa7449a044988c4eacf42c098d39d6101d86885725e7ed232fa165627a7a723058201f58730e50f1f87f53e78dafc3b6058cc5da2f182ea521a99349eeaa2a65a7e90029';
