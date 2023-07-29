"use client";

import React, { Component } from "react";
import CountUpComponent from "react-countup";

export default class CountUp extends Component {
    render() {
        const { endNum } = this.props;

        return <CountUpComponent end={endNum} separator="" enableScrollSpy />;
    }
}
