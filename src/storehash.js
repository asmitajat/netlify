import web3 from './web3';
//access our local copy to contract deployed on rinkeby testnet
//use your own contract address
//const address = '0xE9fad4e22Ea82aC0db71117c2e773b0720db052d';
const address = '0x9ED35fDd7e3E6a57A1485d8e2201F12af33AfeD5';
//use the ABI from your contract
const abi = [
  
	{
		"constant": true,
		"inputs": [],
		"name": "getHash",
		"outputs": [
			{
				"name": "x",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "x",
				"type": "string"
			}
		],
		"name": "sendHash",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
export default new web3.eth.Contract(abi, address);
