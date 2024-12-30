import React from 'react';

import { useMediaQuery } from '@mui/material';

export const CopyrightFooter = () => {
  const isMediaMax1025px = useMediaQuery('(max-width: 1025px)');

  return (
    <div
      className={` ${
        isMediaMax1025px ? 'text-xxs inline ' : ''
      }bg-[ffffff] text-[#777777] flex px-4 
    py-2 justify-center items-center gap-4 font-semibold`}
    >
      <p> &#169; 2024-2025 Fileverse PTE. LTD.</p>
      <p>|</p>
      <p>
        <a
          href="https://portal.fileverse.io/#/acceptable-use-policy"
          target="_blank"
          className="text-[#303030] font-bold"
          rel="noreferrer"
        >
          Acceptable Use
        </a>
      </p>
      <p>|</p>
      <p>
        <a
          href="https://portal.fileverse.io/#/terms-and-condition"
          target="_blank"
          className="text-[#303030] font-bold"
          rel="noreferrer"
        >
          Terms
        </a>
      </p>
      <p>|</p>
      <p>
        <a
          href="https://portal.fileverse.io/#/privacy-policy"
          target="_blank"
          className="text-[#303030] font-bold"
          rel="noreferrer"
        >
          Privacy
        </a>
      </p>
    </div>
  );
};
