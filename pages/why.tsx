import React from 'react';

import { useMediaQuery } from '@mui/material';

import BodyWrapper from '../components/BodyWrapper';

const Why = () => {
  const isMediaMax1025px = useMediaQuery('(max-width: 1025px)');
  return (
    <BodyWrapper>
      <>
        <div className="h-[5vh]"></div>

        <div
          className={`py-4 w-full flex flex-col justify-center h-full ${
            isMediaMax1025px ? 'px-4' : 'px-40'
          }`}
        >
          <div
            className={`rounded-lg mt-8 py-8 bg-white overflow-auto styled-scrollbar ${
              isMediaMax1025px ? 'px-6' : 'px-20'
            }`}
          >
            <h1 className="font-bold mb-4 text-lg">About Fileverse</h1>
            <div className="mb-6 text-gray-600">
              File-sharing and access management is one of the most important
              and basic activities on the Internet.
              <br />
              <br />
              We do it to share our ideas, our work, our memes. We do it to
              collaborate with each other online, to create an identity or
              simply to communicate with others.
              <br />
              <br />
              Now is the time to do it with a Web3 tech stack. Now is the time
              to use Fileverse.
              <br />
              <br />
              Fileverse gives everyone the ability to securely store and share
              content (audio, video, images, documents, and more) in just a few
              clicks –using nothing but their digital wallet. Share files with
              anyone, chat with friends, collaborate with everyone à la Web3.
              <br />
              <br />
              Forget Dropbox, WeTransfer & Google Drive/Workplace. Start sharing
              files and information like a true Web3 native.
            </div>
            <div className="font-bold mb-4 text-lg">
              Why it matters? web2 vs new alternatives
            </div>
            <div className="font-semibold ">Files x Web2</div>
            <div className="mb-6 text-gray-600">
              <br />
              All of us distribute and provide access to <b>digital media</b>:
              multimedia (images, audio and video), all types of documents,
              sketches, electronic books, amongst others.
              <br />
              Today, consumer file-storage, sharing, and access management
              happens via <b>centralised services (Web2)</b>.
              <br />
              <br />
              Traditional services made it easy and free to share files with
              access restrictions. But, they all come with{' '}
              <b>recurring problems</b>:
              <br />
              <ul className="list-disc">
                <li className="ml-8">
                  Intrusive advertisement, server outages, privacy invasions,
                  identity / personal data leakage, censorship and opt-in (if
                  any at all) content encryption.
                </li>
                <li className="ml-8">
                  When they offer free solutions, you become the product.
                </li>
              </ul>
            </div>
            <div className="font-semibold ">Files x Web3</div>
            <div className="mb-6 text-gray-600">
              <br />
              Fileverse solves the main pain points of Web2 file sharing
              services, while also innovating in access rights management and
              content encryption. We believe that now is the time to share
              information by using a Web3 tech stack.
              <br />
              <br />
              Yes. <b>Fileverse is the product, not you</b>.
              <br />
              <br />
              Fileverse is your Web3 file-sharing tool leveraging p2p storage
              networks (like IPFS) and encryption enabled via crypto wallets’
              (eg. MetaMask) private key signatures.
              <br />
              <br />
              No names, no emails, no server outage, no privacy violations, no
              censorship. File sharing for on-chain communities should only use
              wallets, alphanumeric strings, EVM chains and p2p storage.
              <br />
              <br />
              Our DApp collapses all the complexities and benefits of IPFS and
              other peer-to-peer storage networks, Ethereum/EVMs, Layer 2
              chains, and wallet-enabled file encryption, into one intuitive &
              simple-to-use tool for communication and collaboration.
              <br />
              <br />
              Your file. Your wallet. Your rules.
            </div>
            <div className="font-bold mb-4 text-lg">What&apos;s next?</div>
            <div className="mb-6 text-gray-600">
              <b>
                On-chain individuals and communities need (private!) on-chain
                tools for communication and collaboration.
              </b>
              <br />
              <br />
              There has never been a better time to build a mainstream,
              non-hyper-financial Web3 application.
              <br />
              <br />
              Vitalik and many others in the space have been calling for this
              for a long time, but it has only now become possible to develop
              DApps ready for mass usage thanks to recent L2 developments, ZK
              tech advancements, the growing user-base of popular wallets like
              MetaMask, and the scaling of IPFS, Arweave and others.
              <br />
              <br />
              On this exciting journey to decentralization and scalability, we
              need intuitive apps, ease-of-use, and a low barrier to entry for
              users –doing away with obligatory token purchase/spending or high
              technical knowledge to use a DApp.
              <br />
              <br />
              We are all on a journey to bring the next billion users to Web3.
            </div>
            <div className="font-bold mb-4 text-lg">The Fileverse way</div>
            <div className="mb-6 text-gray-600">
              Here at Fileverse we are contributing by building a useful, secure
              & decentralised file-sharing tool. An app with a low barrier to
              entry for one of the most important activities on the internet:
              file sharing. This is Fileverse.
              <br />
              <br />
              It all started with a gitcoin grant and a big dream –building a
              public good that is just as appealing to Web2 users as to Web3
              users. More than 7300 donors and some of our favourite Ethereum
              builders supported this vision to build a tool you will all love
              because of its simplicity and usefulness, without cutting corners
              on decentralization!
              <br />
              <br />
              Our research and product development efforts are driven by two
              core objectives:
              <br />
              <br />
              <ul className="list-disc">
                <li className="ml-8">
                  Building a public good that is just as appealing to Web2 users
                  as it is to Web3 users.
                </li>
                <li className="ml-8">
                  Educate & onboard the next big wave of new users to Web3
                  without compromising on decentralisation.
                </li>
              </ul>
              <br />
              <br />
              We collapse all the complexities and benefits of IPFS,
              Ethereum/EVMs, Layer 2 chains, and wallet-enabled file encryption,
              into one super simple-to-use tool for communication and
              collaboration.
              <br />
              <br />
              Fileverse wouldn&apos;t exist without these trailblazers: -
              <a
                href="https://twitter.com/ethereum"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600"
              >
                @ethereum &nbsp;
              </a>
              & &nbsp;
              <a
                href="https://twitter.com/0xPolygon"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600"
              >
                @0xPolygon &nbsp;
              </a>
              -{' '}
              <a
                href="https://twitter.com/ipfs"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600"
              >
                @IPFS &nbsp;
              </a>
              -{' '}
              <a
                href="https://twitter.com/metamask"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600"
              >
                @MetaMask &nbsp;
              </a>
              -{' '}
              <a
                href="https://twitter.com/gnosischain"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600"
              >
                @gnosischain &nbsp;
              </a>
              &{' '}
              <a
                href="https://twitter.com/StarkWareLtd"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600"
              >
                @StarkWareLtd &nbsp;
              </a>
              - @orbitDB &{' '}
              <a
                href="https://twitter.com/pinatacloud"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600"
              >
                @pinatacloud&nbsp;
              </a>
              -
              <a
                href="https://twitter.com/dappNode"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600"
              >
                @dappNode &nbsp;
              </a>
              -{' '}
              <a
                href="https://twitter.com/MoralisWeb3"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600"
              >
                @moralis &nbsp;
              </a>
              -
              <a
                href="https://twitter.com/nftport_xyz"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600"
              >
                @nftport_xyz &nbsp;
              </a>
              -{' '}
              <a
                href="https://twitter.com/zapper_fi"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600"
              >
                @zapper_fi &nbsp;
              </a>
              - @Alchemy And MANY more individual cryptographers & developers
              who built several components and tools at the heart of Fileverse
              🙌
            </div>
          </div>
        </div>
      </>
    </BodyWrapper>
  );
};

export default Why;
