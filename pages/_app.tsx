// @ts-nocheck
// https://onboard.blocknative.com/examples/connect-wallet#step-1-install-dependencies
import { Web3OnboardProvider, init } from '@web3-onboard/react'
import injectedModule from '@web3-onboard/injected-wallets'
import infinityWalletModule from '@web3-onboard/infinity-wallet'
import fortmaticModule from '@web3-onboard/fortmatic'
import gnosisModule from '@web3-onboard/gnosis'
import keepkeyModule from '@web3-onboard/keepkey'
import keystoneModule from '@web3-onboard/keystone'

import portisModule from '@web3-onboard/portis'
import trezorModule from '@web3-onboard/trezor'
import walletConnectModule from '@web3-onboard/walletconnect'
import coinbaseModule from '@web3-onboard/coinbase'
import magicModule from '@web3-onboard/magic'
import dcentModule from '@web3-onboard/dcent'
import sequenceModule from '@web3-onboard/sequence'
import tahoModule from '@web3-onboard/taho'
import trustModule from '@web3-onboard/trust'
import frontierModule from '@web3-onboard/frontier'
// import ConnectWallet from './ConnectWallet'

import { ContractProvider } from '../contexts';
import Layout from '../components/layout';
import { createContext } from 'react';
import type { AppProps } from 'next/app';


import '../styles/globals.css';





const ALCHEMY_GOERLI_API_KEY  = process.env.ALCHEMY_GOERLI_API_KEY
const ALCHEMY_SEPOLIA_API_KEY = process.env.ALCHEMY_SEPOLIA_API_KEY
const ALCHEMY_MAINNET_API_KEY = process.env.ALCHEMY_MAINNET_API_KEY

const ALCHEMY_GOERLI_RPCURL = process.env.ALCHEMY_GOERLI_RPCURL
const ALCHEMY_SEPOLIA_RPCURL = process.env.ALCHEMY_SEPOLIA_RPCURL
const ALCHEMY_MAINNET_RPCURL = process.env.ALCHEMY_MAINNET_RPCURL



const injected = injectedModule()
const coinbase = coinbaseModule()
const dcent = dcentModule()

const infinityWallet = infinityWalletModule()

const keystone = keystoneModule()
const keepkey = keepkeyModule()
const gnosis = gnosisModule()
const sequence = sequenceModule()
const taho = tahoModule() // Previously named Tally Ho wallet
const trust = trustModule()
const frontier = frontierModule()

const trezorOptions = {
  email: 'test@test.com',
  appUrl: 'https://www.blocknative.com'
}

const trezor = trezorModule(trezorOptions)

const wallets = [
  injected,
  infinityWallet,
  keepkey,
  sequence,
  injected,
  trust,
  frontier,
  taho,
  coinbase,
  dcent,
  trezor,
  gnosis,
  keystone
  
]

const chains = [
  // {
  //   id: '0x1',
  //   token: 'ETH',
  //   label: 'Ethereum Mainnet',
  //   rpcUrl: ALCHEMY_MAINNET_RPCURL
  // },
  // {
  //   id: '0x5',
  //   token: 'ETH',
  //   label: 'Goerli',
  //   rpcUrl: ALCHEMY_GOERLI_API_KEY
  // },
  
  {
    id: '0xaa36a7',
    token: 'ETH',
    label: 'Sepolia',
    rpcUrl: ALCHEMY_SEPOLIA_RPCURL
  },
  
  {
    id: '31337',
    token: 'localETH',
    label: 'localhost',
    rpcUrl: 'http://localhost:8545'
  }
]

const appMetadata = {
  name: 'zi-launchpad',
  icon: '<svg>My App Icon</svg>',
  description: 'auctionModule for the Zi token',
  recommendedInjectedWallets: [
    { name: 'MetaMask', url: 'https://metamask.io' },
    { name: 'Coinbase', url: 'https://wallet.coinbase.com/' }
  ]
}

const web3Onboard = init({
  wallets,
  chains,
  appMetadata
})





function MyApp({ Component, pageProps }: AppProps) {
  return (

      <Web3OnboardProvider web3Onboard={web3Onboard}>
        <ContractProvider>
          <Layout >
            <Component {...pageProps} />
          </Layout>
        </ContractProvider>
      </Web3OnboardProvider>

  )
}


export default MyApp
