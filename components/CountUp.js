"use client";

import React from "react";
import CountUpComponent from "react-countup";

function CountUp(props) {
    const { endNum } = props;

    return <CountUpComponent end={endNum} separator="" enableScrollSpy />;
}

export default CountUp;
