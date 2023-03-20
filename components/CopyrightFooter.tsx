import React from 'react';

export const CopyrightFooter = () => {
  return (
    <div className="bg-[ffffff] text-[#777777] flex px-4 py-2 justify-center items-center gap-4 font-semibold">
      <p> &#169; 2022-2023 Fileverse ltd.</p>
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
