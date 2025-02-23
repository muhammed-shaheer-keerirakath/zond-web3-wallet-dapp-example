![Zond Web3 Wallet dApp Example Preview Cover](misc/zond_web3_wallet_dapp_example_preview_cover.png)

# Zond Web3 Wallet dApp Example

A dApp web application for demonstrating the connectivity(based on EIP-6963) to the Zond Web3 Wallet web extension.

The application renders 3 sections:

- **Detected Wallets:** Displays all the wallets(supporting EIP-6963) installed in the browser. The wallet's icon and name is displayed. To connect to a wallet, click on the desired wallet.
- **Selected Wallet:** On succesfully connecting to a wallet, the wallet name, connected account address, uuid and rdns is displayed in this section.
- **Wallet Error:** On rejecting the connection request, or if any errors are thrown, it is displayed in this section.

## :keyboard: Run locally

- Run `git clone https://github.com/theQRL/zond-web3-wallet-dapp-example.git` for cloning this repo to your machine.
- Run `npm install` for installing all dependencies of this project.
- Run `npm run dev` to run the application locally. By default, the application will be running at `http://localhost:5173/`.

## :link: JSON-RPC API details

Communication between a dApp and Zond Web3 Wallet happens via JSON-RPC API requests.

### Restricted Methods

The methods when called, asks for user approval before executing. A request screen will be presented with an option to either approve or reject the request.

#### 1. zond_requestAccounts

A method that prompts the user to connect their Zond account(s) with the dApp.

- ##### Request

> ```typescript
> const accounts = await provider.request({
>   method: "zond_requestAccounts",
>   params: [],
> });
> ```

- ##### Response

> ```json
> [
>   "Z208318ecd68f26726CE7C54b29CaBA94584969B6",
>   "Z20E7Bde67f00EA38ABb2aC57e1B0DD93f518446c"
> ]
> ```

#### 2. zond_sendTransaction

A method that prompts the user to make a transaction like ZND transfer, contract deployment and contract interaction.

- ##### Request

> ```typescript
> const txHash = await provider.request({
>   method: "zond_sendTransaction",
>   params: [
>     {
>       to: "Z20E7Bde67f00EA38ABb2aC57e1B0DD93f518446c",
>       from: "Z208318ecd68f26726CE7C54b29CaBA94584969B6",
>       gas: "0x51bc",
>       value: "0x33",
>       data: "0x",
>       gasPrice: "0x777",
>     },
>   ],
> });
> ```

- ##### Response

> ```json
> "0x3e306b5a5a37532e1734503f7d2427a86f2c992fbe471f5be403b9f734e661c5"
> ```

### Unrestricted Methods

The methods when called, silently gives back response without needing any interaction from the user.

#### 1. zond_accounts

A method that returns the list of accounts that the user has approved to connect.

- ##### Request

> ```typescript
> const accounts = await provider.request({
>   method: "zond_accounts",
>   params: [],
> });
> ```

- ##### Response

> ```json
> ["0xa77392123a1085f75e62eec7dea7e0e1e5142d5f"]
> ```

#### 2. zond_blockNumber

A method that returns the number of most recent block.

- ##### Request

> ```typescript
> const blockNumber = await provider.request({
>   method: "zond_blockNumber",
>   params: [],
> });
> ```

- ##### Response

> ```json
> "0x3345"
> ```

#### 3. zond_call

A method for creating a new message call immediately.

- ##### Request

> ```typescript
> const result = await provider.request({
>   method: "zond_call",
>   params: [
>     {
>       to: "Z20E7Bde67f00EA38ABb2aC57e1B0DD93f518446c",
>       value: "0x7",
>     },
>     "latest",
>   ],
> });
> ```

- ##### Response

> ```json
> "0x"
> ```

#### 4. zond_estimateGas

A method for calculating the estimate of how much gas is necessary for the transaction.

- ##### Request

> ```typescript
> const gas = await provider.request({
>   method: "zond_estimateGas",
>   params: [
>     {
>       from: "Z208318ecd68f26726CE7C54b29CaBA94584969B6",
>       to: "Z20B714091cF2a62DADda2847803e3f1B9D2D3779",
>       value: "0x7",
>     },
>   ],
> });
> ```

- ##### Response

> ```json
> "0x5208"
> ```

#### 5. zond_getBalance

A method for returning the balance of the given account.

- ##### Request

> ```typescript
> const balance = await provider.request({
>   method: "zond_getBalance",
>   params: ["Z208318ecd68f26726CE7C54b29CaBA94584969B6", "latest"],
> });
> ```

- ##### Response

> ```json
> "0x6cfe56f3795885980005"
> ```

#### 6. zond_getBlockByNumber

A method that returns the block information by number.

- ##### Request

> ```typescript
> const block = await provider.request({
>   method: "zond_getBlockByNumber",
>   params: ["0x324c", false],
> });
> ```

- ##### Response

> ```json
> {
>   "number": "0x68b3",
>   "hash": "0xd5f1812548be429cbdc6376b29611fc49e06f1359758c4ceaaa3b393e2239f9c",
>   "mixHash": "0x24900fb3da77674a861c428429dce0762707ecb6052325bbd9b3c64e74b5af9d",
>   "parentHash": "0x1f68ac259155e2f38211ddad0f0a15394d55417b185a93923e2abe71bb7a4d6d",
>   "nonce": "0x378da40ff335..."
>   ....
> }
> ```

#### 7. zond_getCode

A method for returning the code at a given address.

- ##### Request

> ```typescript
> const code = await provider.request({
>   method: "zond_getCode",
>   params: ["Z208318ecd68f26726CE7C54b29CaBA94584969B6", "latest"],
> });
> ```

- ##### Response

> ```json
> "0x60806040526004361060485763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416633fa4f2458114604d57806355241077146071575b600080fd5b348015605857600080fd5b50605f6088565b60408051918252519081900360200190f35b348015607c57600080fd5b506086600435608e565b005b60005481565b60008190556040805182815290517f199cd93e851e4c78c437891155e2112093f8f15394aa89dab09e38d6ca0727879181900360200190a1505600a165627a7a723058209d8929142720a69bde2ab3bfa2da6217674b984899b62753979743c0470a2ea70029"
> ```

#### 8. zond_getTransactionByHash

A method for returning the information about a transaction requested by transaction hash.

- ##### Request

> ```typescript
> const tx = await provider.request({
>   method: "zond_getTransactionByHash",
>   params: [
>     "0xa52be92809541220ee0aaaede6047d9a6c5d0cd96a517c854d944ee70a0ebb44",
>   ],
> });
> ```

- ##### Response

> ```json
> {
>   "blockHash": "0x510efccf44a192e6e34bcb439a1947e24b86244280762cbb006858c237093fda",
>   "blockNumber": "0x442",
>   "chainId": 345,
>   "from": "Z205fe2f3af6c04C415A82CA456588640435C9746"
>   ....
> }
> ```

#### 9. zond_getTransactionReceipt

A method for returning the receipt of a transaction by transaction hash.

- ##### Request

> ```typescript
> const tx = await provider.request({
>   method: "zond_getTransactionReceipt",
>   params: [
>     "0x504ce587a65bdbdb6414a0c6c16d86a04dd79bfcc4f2950eec9634b30ce5370f",
>   ],
> });
> ```

- ##### Response

> ```json
> {
>   "blockHash": "0xe7212a92cfb9b06addc80dec2a0dfae9ea94fd344efeb157c41e12994fcad60a",
>   "blockNumber": "0x77",
>   "contractAddress": null,
>   "cumulativeGasUsed": "0x5208",
>   "from": "Z20B714091cF2a62DADda2847803e3f1B9D2D3779"
>   ....
> }
> ```

#### 10. wallet_revokePermissions

A method for revoking the previously approved permissions for the dApp.

- ##### Request

> ```typescript
> await provider.request({
>   method: "wallet_revokePermissions",
>   params: [
>     {
>       zond_accounts: {},
>     },
>   ],
> });
> ```

- ##### Response

> ```json
> null
> ```
