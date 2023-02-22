import React from 'react';
import Rive, { useRive, useStateMachineInput } from 'rive-react';

export default function RiveLaunchPortal() {
  const STATE_MACHINE_NAME = 'Hover animations';
  const INPUT_NAME = 'Hover';
  const { rive, RiveComponent } = useRive({
    src: 'Fileverse.riv',
    autoplay: true,
    animations: 'Hover',
  });

  const onClickInput = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    INPUT_NAME
  );

  return <RiveComponent onMouseOver={() => rive?.play()} />;
}
