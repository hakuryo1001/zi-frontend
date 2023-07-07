// @ts-nocheck

import { createContext, useContext, useEffect, useState } from 'react'

import contractConfig from "../contractConfig/contractConfig";

import { ethers } from 'ethers'



const ContractContext = createContext<any>({})

const ContractProvider = ({ children }: any) => {

    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);

    const [initialSupply, setInitialSupply] = useState(null);
    const [supplyLimit, setSupplyLimit] = useState(null);
    const [minterAddresses, setMinterAddresses] = useState(null);
    const [minters, setMinters] = useState(null);
    const [minterAllowance, setMinterAllowance] = useState(null);
    const [initialAllowance, setInitialAllowance] = useState(null);
    const [enabledMinters, setEnabledMinters] = useState(null);
    const [isMinter, setIsMinter] = useState(null);
    const [remainingSupply, setRemainingSupply] = useState(null);
    const [oneBipOfTotalSupply, setOneBipOfTotalSupply] = useState(null);
    const [allMinters, setAllMinters] = useState(null);
    const [totalSupply, setTotalSupply] = useState(null);

    const [token, setToken] = useState(null);
    const [tokenAddress, setTokenAddress] = useState(null);
    const [totalAuctionAmount, setTotalAuctionAmount] = useState(null);
    const [totalAmountSold, setTotalAmountSold] = useState(null);
    const [limit, setLimit] = useState(null);
    const [initialAuctionPrice, setInitialAuctionPrice] = useState(null);
    const [lastAvailableAuctionStartTime, setLastAvailableAuctionStartTime] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [timeToEmitAll, setTimeToEmitAll] = useState(null);
    const [halflife, setHalflife] = useState(null);
    const [decayConstant, setDecayConstant] = useState(null);
    const [emissionRate, setEmissionRate] = useState(null);
    const [criticalTime, setCriticalTime] = useState(null);
    const [criticalAmount, setCriticalAmount] = useState(null);
    const [purchasePriceForOne, setPurchasePriceForOne] = useState(null);


    const zi_address = contractConfig.Zi.contractAddress;
    const zi_abi = contractConfig.Zi.contractABI;
    const auctionModule_address = contractConfig.AuctionModule.contractAddress;
    const auctionModule_abi = contractConfig.AuctionModule.contractABI;


    useEffect(() => {

        if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
            // We are in the browser and metamask is running
            setProvider(new ethers.providers.Web3Provider(window.ethereum));
        }

    }, []);

    useEffect(() => {
        if (provider) {
            setSigner(provider.getSigner());
        }
    }, [provider]);

    useEffect(() => {
        if (!signer) return;

        const ziContract = new ethers.Contract(zi_address, zi_abi, signer);
        const auctionModuleContract = new ethers.Contract(auctionModule_address, auctionModule_abi, signer);

        const fetchData = async () => {
            const ziInitialSupply = await ziContract.initialSupply();
            const ziSupplyLimit = await ziContract.supplyLimit();
            // const ziMinterAddresses = await ziContract.minterAddresses();
            // const ziMinters = await ziContract.minters();
            // const ziMinterAllowance = await ziContract.minterAllowance();
            // const ziInitialAllowance = await ziContract.initialAllowance();
            // const ziEnabledMinters = await ziContract.enabledMinters();
            // const ziIsMinter = await ziContract.isMinter();
            const ziRemainingSupply = await ziContract.remainingSupply();
            const ziOneBipOfTotalSupply = await ziContract.oneBipOfTotalSupply();
            const ziAllMinters = await ziContract.allMinters();
            const ziTotalSupply = await ziContract.totalSupply();
            // const ziPurchasePrice = await ziContract.purchasePrice();    
            //
            
            const amTokenAddress                    = await auctionModuleContract.tokenAddress();
            const amTotalAuctionAmount              = await auctionModuleContract.totalAuctionAmount();
            const amTotalAmountSold                 = await auctionModuleContract.totalAmountSold();
            const amLimit                           = await auctionModuleContract.limit();
            const amInitialAuctionPrice             = await auctionModuleContract.initialAuctionPrice();
            const amLastAvailableAuctionStartTime   = await auctionModuleContract.lastAvailableAuctionStartTime();
            const amStartTime                       = await auctionModuleContract.startTime();
            const amTimeToEmitAll                   = await auctionModuleContract.timeToEmitAll();
            const amHalflife                        = await auctionModuleContract.halflife();
            const amDecayConstant                   = await auctionModuleContract.decayConstant();
            const amEmissionRate                    = await auctionModuleContract.emissionRate();
            const amCriticalTime                    = await auctionModuleContract.criticalTime();
            const amCriticalAmount                  = await auctionModuleContract.criticalAmount();
            const amPurchasePrice                   = await auctionModuleContract.purchasePrice(ethers.utils.parseEther("1.0"));

            setInitialSupply(ziInitialSupply)
            setSupplyLimit(ziSupplyLimit)
            // setMinterAddresses(ziMinterAddresses)
            // setMinters(ziMinters)
            // setMinterAllowance(ziMinterAllowance)
            // setInitialAllowance(ziInitialAllowance)
            // setEnabledMinters(ziEnabledMinters )
            // setIsMinter(ziIsMinter)
            setRemainingSupply(ziRemainingSupply)
            setOneBipOfTotalSupply(ziOneBipOfTotalSupply)
            setAllMinters(ziAllMinters )
            setTotalSupply(ziTotalSupply)
            
            
            setTokenAddress(amTokenAddress)
            setTotalAuctionAmount(amTotalAuctionAmount)
            setTotalAmountSold(amTotalAmountSold)
            setLimit(amLimit)
            setInitialAuctionPrice(amInitialAuctionPrice)
            setLastAvailableAuctionStartTime(amLastAvailableAuctionStartTime)
            setStartTime(amStartTime)
            setTimeToEmitAll(amTimeToEmitAll)
            setHalflife(amHalflife)
            setDecayConstant(amDecayConstant)
            setEmissionRate(amEmissionRate)
            setCriticalTime(amCriticalTime)
            setCriticalAmount(amCriticalAmount)
            setPurchasePriceForOne(amPurchasePrice)
        };

        fetchData();

            
    }, [signer]);

    const [accountAddress, setAccountAddress] = useState<any>()

    useEffect(() => {
        const fetchAccountData = async () => {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            setAccountAddress(accounts[0]);
        }
        
        fetchAccountData();
    }, [])

    
    return (
        <ContractContext.Provider value={{
             
            accountAddress, 
            initialSupply, 
            supplyLimit, 
            
            
            
            remainingSupply, 
            oneBipOfTotalSupply, 
            allMinters,
            totalSupply, 
            purchasePriceForOne,
            contractConfig,
                        accountAddress,
        }}>
            {children}
        </ContractContext.Provider>
    );
}
export { ContractContext, ContractProvider }

