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

    const [ziContract, setZiContract] = useState(null);
    const [auctionModuleContract, setAuctionModuleContract] = useState(null);

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

        const _ziContract = new ethers.Contract(zi_address, zi_abi, signer);
        const _auctionModuleContract = new ethers.Contract(auctionModule_address, auctionModule_abi, signer);

        const fetchData = async () => {
             
            const _ziInitialSupply = await _ziContract.initialSupply();
            const _ziSupplyLimit = await _ziContract.supplyLimit();
            // const _ziMinterAddresses = await _ziContract.minterAddresses();
            // const _ziMinters = await _ziContract.minters();
            // const _ziMinterAllowance = await _ziContract.minterAllowance();
            // const _ziInitialAllowance = await _ziContract.initialAllowance();
            // const _ziEnabledMinters = await _ziContract.enabledMinters();
            // const _ziIsMinter = await _ziContract.isMinter();
            const _ziRemainingSupply = await _ziContract.remainingSupply();
            const _ziOneBipOfTotalSupply = await _ziContract.oneBipOfTotalSupply();
            const _ziAllMinters = await _ziContract.allMinters();
            const _ziTotalSupply = await _ziContract.totalSupply();
            // const _ziPurchasePrice = await _ziContract.purchasePrice();    
            //
            
            
            const _amTokenAddress                    = await _auctionModuleContract.tokenAddress();
            const _amTotalAuctionAmount              = await _auctionModuleContract.totalAuctionAmount();
            const _amTotalAmountSold                 = await _auctionModuleContract.totalAmountSold();
            const _amLimit                           = await _auctionModuleContract.limit();
            const _amInitialAuctionPrice             = await _auctionModuleContract.initialAuctionPrice();
            const _amLastAvailableAuctionStartTime   = await _auctionModuleContract.lastAvailableAuctionStartTime();
            const _amStartTime                       = await _auctionModuleContract.startTime();
            const _amTimeToEmitAll                   = await _auctionModuleContract.timeToEmitAll();
            const _amHalflife                        = await _auctionModuleContract.halflife();
            const _amDecayConstant                   = await _auctionModuleContract.decayConstant();
            const _amEmissionRate                    = await _auctionModuleContract.emissionRate();
            const _amCriticalTime                    = await _auctionModuleContract.criticalTime();
            const _amCriticalAmount                  = await _auctionModuleContract.criticalAmount();
            const _amPurchasePrice                   = await _auctionModuleContract.purchasePrice(ethers.utils.parseEther("1.0"));

            setInitialSupply(_ziInitialSupply)
            setSupplyLimit(_ziSupplyLimit)
            // setMinterAddresses(_ziMinterAddresses)
            // setMinters(_ziMinters)
            // setMinterAllowance(_ziMinterAllowance)
            // setInitialAllowance(_ziInitialAllowance)
            // setEnabledMinters(_ziEnabledMinters )
            // setIsMinter(_ziIsMinter)
            setRemainingSupply(_ziRemainingSupply)
            setOneBipOfTotalSupply(_ziOneBipOfTotalSupply)
            setAllMinters(_ziAllMinters )
            setTotalSupply(_ziTotalSupply)
            setTokenAddress(_amTokenAddress)
            setTotalAuctionAmount(_amTotalAuctionAmount)
            setTotalAmountSold(_amTotalAmountSold)
            setLimit(_amLimit)
            setInitialAuctionPrice(_amInitialAuctionPrice)
            setLastAvailableAuctionStartTime(_amLastAvailableAuctionStartTime)
            setStartTime(_amStartTime)
            setTimeToEmitAll(_amTimeToEmitAll)
            setHalflife(_amHalflife)
            setDecayConstant(_amDecayConstant)
            setEmissionRate(_amEmissionRate)
            setCriticalTime(_amCriticalTime)
            setCriticalAmount(_amCriticalAmount)
            setPurchasePriceForOne(_amPurchasePrice)

            setZiContract(_ziContract);
            setAuctionModuleContract(_auctionModuleContract);

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
            
            ziContract,
            auctionModuleContract,
            
            
            
        }}>
            {children}
        </ContractContext.Provider>
    );
}
export { ContractContext, ContractProvider }

