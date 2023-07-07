import { ContractContext } from "../contexts";
import { useContext, useState, useEffect } from "react";

import Infoblock from "../components/infoblock";
const LaunchpadPanel = () => {
    const {totalSupply, 
        emissionRate,
        purchasePriceForOne, initialSupply, contractConfig} = useContext(ContractContext);

    const [inputAmount, setInputAmount] = useState<any>();
    const [buyAmount, setBuyAmount] = useState<any>(1);
    const [purchasePrice, setPurchasePrice] = useState<any>(Number(purchasePriceForOne));
    const [isBuying, setIsBuying] = useState(false);

    const zi_address = contractConfig.Zi.contractAddress;
    const zi_abi = contractConfig.Zi.contractABI;
    const auctionModule_address = contractConfig.AuctionModule.contractAddress;
    const auctionModule_abi = contractConfig.AuctionModule.contractABI;
    
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const amount = buyAmountWithDecimals(inputAmount);
    //         setBuyAmount(amount);
    //         const purchasePrice = await readContract({
    //             address: auctionModule_address,
    //             abi: auctionModule_abi,
    //             functionName: 'purchasePrice',
    //             args: [amount],
    //         });
    //         setPurchasePrice((purchasePrice));
    //     }
        
    //     if(inputAmount) {
    //         fetchData();
    //     }
    // }, [inputAmount]);
    
    // const buyAmountWithDecimals = (buyAmount: number) => {
    //     return Math.round(buyAmount * 10**18);
    // }
    
    // useEffect(() => {
    //     if (isBuying) {
    //         const buyNow = async() => {
    //             const config = await prepareWriteContract({
    //                 address: auctionModule_address,
    //                 abi: auctionModule_abi,
    //                 functionName: 'purchasePrice',
    //                 args: [buyAmount],
    //             })
                
    //             // const { hash } = await writeContract({
    //             //     address: auctionModule_address,
    //             //     abi: auctionModule_abi,
    //             //     functionName: 'purchasePrice',
    //             //     args: [buyAmount],
    //             // })
    //         }
    //         buyNow();
    //         setIsBuying(false);
    //     }
    // }, [isBuying]);

    // const handleBuyClick = () => {
    //     setIsBuying(true);
    // }

    return (
        <div className=" p-4 m-2">
            <div className="text-black-400 font-bold text-xl">Purchase Price </div>
            <div className="items-center">
                <label className="block mb-2 text-sm font-medium text-lg">Buy Amount : {inputAmount} 黹</label>
                <input type="number" value={inputAmount} onChange={e => setInputAmount((Number(e.target.value)))}/>
                {/* <button onClick={handleBuyClick}>Buy Now</button> */}
                <div>
                    <Infoblock info={"Purchase Price"} contractInfo={String((Number(purchasePrice) / 10 ** 18).toFixed(14)).concat(" Ξ")} /> 
                </div>
            </div>
        </div>
    )    
}

export default LaunchpadPanel;
