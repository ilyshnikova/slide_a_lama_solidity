Install brew

/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew update
brew upgrade

Install geth

brew tap ethereum/ethereum
brew install ethereum

Create testnode

geth --identity "MyTestNetNode" --nodiscover --networkid 1999 --datadir ~/.ethereum-testnet init genesis1.json

Run node

geth --datadir ~/.ethereum-testnet console --rpc --rpcport 12345 --rpccorsdomain "*" --rpcapi web3,eth,personal 2>> log.log


Create new account
geth account new --datadir ~/.ethereum-testnet


Remove chain
geth removedb --datadir ~/.ethereum-testnet
