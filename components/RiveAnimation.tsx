import React from 'react';
import Rive, { useRive, useStateMachineInput } from 'rive-react';

export default function RiveLaunchPortal() {
  const { rive, RiveComponent } = useRive({
    src: 'Fileverse.riv',
    autoplay: true,
    animations: 'Hover',
  });

  return (
    <div className="h-[230px] w-[200px]">
      <RiveComponent onMouseOver={() => rive?.play()} />
    </div>
  );
}
