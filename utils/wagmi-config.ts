import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { http } from 'wagmi';
import { base } from 'wagmi/chains';

export const rainbowkitConfig = getDefaultConfig({
  appName: 'fileverse.io',
  projectId: 'YOUR_PROJECT_ID',
  chains: [base],
  transports: {
    [base.id]: http(),
  },
});
