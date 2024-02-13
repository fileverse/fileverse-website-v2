import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { http } from 'wagmi';
import { mainnet } from 'wagmi/chains';

export const rainbowkitConfig = getDefaultConfig({
  appName: 'fileverse.io',
  projectId: 'ff71575e67eb530fe9b1a99d0a1d8a37',
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
  ssr: true,
});
