import React from 'react'
import { useState, useEffect } from "react";

import { Image, FlexWrapper, TextRegular } from "components";

function StickyHeader() {
  // 900sec is 15 minutes
  const [timer, setTimer] = useState(900);

  useEffect(() => {
    let interval: any = null;
    interval = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
    if (timer < 1) {
      setTimer(900);
    }
    return () => clearInterval(interval);
  }, [timer]);

  function secondsToHms(seconds: number) {
    seconds = seconds;
    let h = Math.floor(seconds / 3600);
    let m = Math.floor((seconds % 3600) / 60);
    let s = Math.floor((seconds % 3600) % 60);
    if (h < 10) {
      h = 0 + h;
    }
    if (m < 10) {
      m = 0 + m;
    }
    if (s < 10) {
      s = 0 + s;
    }
    let hDisplay = h > 0 ? `${h} + ":"` : "00:";
    let mDisplay = m > 0 ? `${m}:` : "00:";
    let sDisplay = s > 0 ? s : "00";

    return hDisplay + mDisplay + sDisplay;
  }

  return (
    <FlexWrapper padding="1rem" backgroundColor="#90CAF9" alignItems="center" justifyContent="center">
      <Image src="offerImg" />
      <TextRegular margin="0 0 0 1.5rem" fontWeight={700} color="white">50% discount only valid for {secondsToHms(timer)} </TextRegular>
    </FlexWrapper>
  );
}

export default StickyHeader;
