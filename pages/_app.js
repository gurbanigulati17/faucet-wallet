import "../styles/globals.css";

import "@rainbow-me/rainbowkit/styles.css";

import {
  apiProvider,
  configureChains,
  getDefaultWallets,
  midnightTheme,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { chain, createClient, WagmiProvider } from "wagmi";

const { chains, provider } = configureChains(
  [
    chain.mainnet,
    chain.polygon,
    chain.goerli,
    chain.rinkeby,
    chain.polygonMumbai,
  ],
  [apiProvider.fallback()]
);

const { connectors } = getDefaultWallets({
  appName: "Wallet Connect App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiProvider client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={midnightTheme({accentColor: '#7b3fe4',
      accentColorForeground: 'white',
      borderRadius: 'large',
      fontStack: 'system',
    })} coolMode>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiProvider>
  );
}

export default MyApp;
