import React from 'react';
import "./digitalClock2.css"

const DigitalClock2 = () => {
    window.addEventListener("load",update);
    function update() {
        let time = new Date(),
            hr:any = time.getHours(),
            min:any = time.getMinutes(),
            sec:any = time.getSeconds();

        // prepend 0s to single digits
        if (hr < 10)
            hr = "0" + hr;
        if (min < 10)
            min = "0" + min;
        if (sec < 10)
            sec = "0" + sec;

        let timeStr = `${hr}${min}${sec}`,
            digits = document.querySelectorAll(".digit"),
            digitArr: Array<number> = [];

        for (let d in digits) {
            if (+d < digits.length) {

                digitArr[d] = Number(timeStr.substr(Number(d), 1));
                digits[d].className = "digit _" + digitArr[d];
            }
        }
        setTimeout(update,1000);
    }
    return (
            <div className="container">
                <div className="digit"></div>
                <div className="digit"></div>
                <div className="digit"></div>
                <div className="digit"></div>
                <div className="digit"></div>
                <div className="digit"></div>
                <div className="surface">
                    <div className="block b1">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b2">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b3">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b4">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b5">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b6">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b7">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b8">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b9">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b10">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b11">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b12">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b13">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b14">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b15">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b16">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b17">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b18">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b19">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b20">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b21">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b22">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b23">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b24">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b25">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b26">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b27">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b28">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b29">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b30">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b31">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b32">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b33">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b34">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b35">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b36">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b37">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b38">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b39">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b40">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b41">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b42">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b43">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b44">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b45">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b46">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b47">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b48">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b49">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b50">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b51">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b52">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b53">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b54">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b55">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b56">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b57">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b58">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b59">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b60">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b61">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b62">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b63">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b64">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b65">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b66">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b67">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b68">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b69">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b70">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b71">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b72">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b73">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b74">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b75">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b76">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b77">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b78">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b79">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b80">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b81">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b82">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b83">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b84">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b85">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b86">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b87">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b88">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b89">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b90">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b91">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b92">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b93">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="block b94">
                        <div className="block-outer">
                            <div className="block-inner">
                                <div className="bottom"></div>
                                <div className="front"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default DigitalClock2;