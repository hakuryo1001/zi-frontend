import { ContractContext } from "../contexts";
import { useContext, useState, useEffect } from "react";
import Infoblock from "../components/infoblock";
import { ethers } from "ethers";

const LaunchpadPanel = () => {
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
        auctionModuleContract,

     } = useContext(ContractContext);

    const [inputAmount, setInputAmount] = useState<number>(1);
    const [purchasePrice, setPurchasePrice] = useState<number>(Number(purchasePriceForOne));

    useEffect(() => {
        const fetchData = async () => {
            if (inputAmount && auctionModuleContract) {
                const inputAmountInWei = ethers.utils.parseEther(inputAmount.toString());
                const _purchasePriceWei = await auctionModuleContract.purchasePrice(inputAmountInWei);
                const _purchasePriceEther = ethers.utils.formatEther(_purchasePriceWei);
                setPurchasePrice(Number(_purchasePriceEther));
            }
        }
        fetchData();
    }, [inputAmount]);
    

    const handleBuyClick = async () => {
        try {
            const costInWei = ethers.utils.parseEther(purchasePrice.toString());
            // Convert input amount from tokens to the smallest unit
            const inputAmountInWei = ethers.utils.parseEther(inputAmount.toString());

            const tx = await auctionModuleContract.purchaseTokens(inputAmountInWei, accountAddress, { value: costInWei });
            await tx.wait();
            alert(`Successfully purchased ${inputAmount} Zi tokens!`);
        } catch (err) {
            console.error("err:",err);
            alert(`Failed to purchase Zi tokens: ${err.message}`);
        }
    }

    return (
        <div className="p-4 m-2">
            <div className="text-black-400 font-bold text-xl">Purchase Price</div>
            <div className="items-center">
                <label className="block mb-2 text-sm font-medium text-lg">Buy Amount : {inputAmount} Zi</label>
                <input 
                    className="p-2 text-black"
                    type="number"
                    min="0.0000000000001"
                    value={inputAmount}
                    onChange={e => setInputAmount(Number(e.target.value))}
                />
                
                <button className="bg-white m-4 p-2 rounded-lg hover:text-blue-400  text-black" onClick={handleBuyClick}>Buy Now</button>
                <div>
                    <Infoblock info={"Purchase Price"} contractInfo={`${purchasePrice.toFixed(14)} Ξ`} /> 
                </div>
            </div>
        </div>
    );    
}

export default LaunchpadPanel;



// import { ContractContext } from "../contexts";
// import { useContext, useState, useEffect } from "react";
// import Infoblock from "../components/infoblock";
// import { ethers } from "ethers";

// const LaunchpadPanel = () => {
//     const { 
//         accountAddress, 
//             initialSupply, 
//             supplyLimit, 
//             remainingSupply, 
//             oneBipOfTotalSupply, 
//             allMinters,
//             totalSupply, 
//             purchasePriceForOne,
//             contractConfig,
            
//             ziContract,
//             auctionModuleContract

//      } = useContext(ContractContext);
//     const [inputAmount, setInputAmount] = useState<number>(1);
//     const [purchasePrice, setPurchasePrice] = useState<number>(Number(purchasePriceForOne));

    
//     useEffect(() => {
//         const fetchData = async () => {
//             if (inputAmount) {
//             const _purchasePrice   = await auctionModuleContract.purchasePrice(ethers.utils.parseEther(inputAmount.toString()));
//             setPurchasePrice(_purchasePrice);
//         }
//         }
//         fetchData();
//     }, [inputAmount, purchasePriceForOne]);

//     const handleBuyClick = async () => {
//         try {
            
        
//             const cost = ethers.utils.parseEther(purchasePrice.toString());
//             console.log("purchasePrice.toString():", purchasePrice.toString());
//             console.log("cost:", cost, Number(cost));

//             const tx = await auctionModuleContract.purchaseTokens(inputAmount, accountAddress, { value: cost });
//             await tx.wait();
//             alert(`Successfully purchased ${inputAmount} Zi tokens!`);
//         } catch (err) {
//             console.error("err:",err);
//             alert(`Failed to purchase Zi tokens: ${err.message}`);
//         }
//     }

//     return (
//         <div className="p-4 m-2">
//             <div className="text-black-400 font-bold text-xl">Purchase Price</div>
//             <div className="items-center">
//                 <label className="block mb-2 text-sm font-medium text-lg">Buy Amount : {inputAmount} Zi</label>
//                 <input 
//                 className="p-2 text-black"
//                     type="number"
//                     min="0.00001"
//                     value={inputAmount}
//                     onChange={e => setInputAmount(Number(e.target.value))}
//                 />
                
//                 <button className="bg-white m-4 p-2 rounded-lg hover:text-blue-400  text-black" onClick={handleBuyClick}>Buy Now</button>
//                 <div>
//                     <Infoblock info={"Purchase Price"} contractInfo={`${(Number(purchasePrice) / 10 ** 18).toFixed(14)} Ξ`} /> 
//                 </div>
//             </div>
//         </div>
//     );    
// }

// export default LaunchpadPanel;
