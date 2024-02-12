import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { http } from 'wagmi';
import { gnosis } from 'wagmi/chains';

export const rainbowkitConfig = getDefaultConfig({
  appName: 'fileverse.io',
  projectId: 'YOUR_PROJECT_ID',
  chains: [gnosis],
  transports: {
    [gnosis.id]: http(),
  },
});
