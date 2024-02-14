import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { http } from 'wagmi';
import {
  gnosis,
  goerli,
  mainnet,
  optimism,
  polygon,
  polygonMumbai,
  sepolia,
} from 'wagmi/chains';

export const rainbowkitConfig = getDefaultConfig({
  appName: 'fileverse.io',
  projectId: 'ff71575e67eb530fe9b1a99d0a1d8a37',
  chains: [mainnet, sepolia, gnosis, polygon, polygonMumbai, optimism, goerli],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [gnosis.id]: http(),
    [polygon.id]: http(),
    [polygonMumbai.id]: http(),
    [optimism.id]: http(),
    [goerli.id]: http(),
  },
  ssr: true,
});
