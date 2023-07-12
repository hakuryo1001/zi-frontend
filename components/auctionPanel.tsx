import { useContext } from "react";
import { ContractContext } from "../contexts";
import Infoblock from "./infoblock";
import { formatEther, parseEther } from "ethers/lib/utils";

const AuctionInfo = () => {
    const {
        accountAddress, 
        initialSupply, 
        supplyLimit, 
        remainingSupply, 
        oneBipOfTotalSupply, 
        allMinters,
        totalSupply, 
        purchasePriceForOne,
        contractConfig,
        
        ziContract,
        auctionModuleContract
        
        } = useContext(ContractContext);

    return (
        <div>
            <div className="font-bold text-xl"> Auction </div>
            {totalSupply && <Infoblock info={"Total Supply"} contractInfo={Number(totalSupply)/10**18} />} 
            {purchasePriceForOne && <Infoblock info={"Price of 1 Zi"} contractInfo={Number(purchasePriceForOne)/10**18+" Ξ"} />}
            {initialSupply && <Infoblock info={"initialSupply"} contractInfo={Number(initialSupply)/10**18+" Ξ"} />} 


        </div>
    )
}
export default AuctionInfo

