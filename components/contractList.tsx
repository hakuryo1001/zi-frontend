import { useContext } from 'react';
import { ContractContext } from '../contexts';


const ContractList = () => {
    const { contractConfig } = useContext(ContractContext);
    
    return (
        <div>
            <h2>Contract List</h2>
            <ul>
                {Object.keys(contractConfig).map((contractName) => (
                    <li key={contractName}>
                        <strong>{contractName}</strong>: {contractConfig[contractName].contractAddress}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContractList;
