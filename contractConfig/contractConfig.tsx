import contractName from './abi.json'

import AuctionModule from "./contract_abis/AuctionModule.json";
import Zi from "./contract_abis/Zi.json";

const contractConfig = {
    AuctionModule: {
        contractAddress: AuctionModule.contractAddress,
        contractABI: AuctionModule.abi,
    },
    Zi: {
        contractAddress: Zi.contractAddress,
        contractABI: Zi.abi,
    },
    // add more contracts as necessary
}

export default contractConfig;