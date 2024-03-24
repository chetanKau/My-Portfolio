import React from "react";
import { useEffect } from "react";
import "./About_section1.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import FullWidthTabs from "./TabSwitch";
function About_section1() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <div className="aboutMain">
        <div className="left animate__animated animate__fadeInUp animate__slow">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 120 180"
            viewBox="0 0 1920 1080"
            id="women-typing-a-content-or-text-for-making-book"
          >
            <g>
              <path
                fill="#34c3ea"
                d="M754.6 700.1c-46.8-66.8-116.4-148.9-98-290.4 21-161.7 264.2-418.4 524.3-225.9 102.2 75.7 107.8 248.2 244.4 204s228.5 299 23.3 343.5-605.2 95.6-694-31.2z"
                opacity=".1"
              ></path>
              <ellipse
                cx="1101.3"
                cy="743.7"
                fill="#34c3ea"
                opacity=".1"
                rx="361.3"
                ry="36.4"
              ></ellipse>
            </g>
            <g>
              <path
                fill="#cce9ff"
                d="M1219.6 587.2c-10.7-7.8-89.3-4.9-96.6 0-7.4 4.9 8.3 18.8 33.1 32.8 10.4 5.9 16.8 11.7 31 .9 14.2-10.7 39.7-28.5 32.5-33.7z"
              ></path>
              <path
                fill="#cce9ff"
                d="M1160.6 615.3h20.9V710h-20.9zM1105.4 726.8h128.8c2.3 0 4.1-1.8 4.1-4.1 0-2-1.5-3.7-3.4-4l-53.3-8.6h-20.9l-55.8 8.6c-2 .3-3.5 2-3.5 4-.1 2.2 1.7 4.1 4 4.1zM1219.6 314.7c-64.9-2.8-83.9 56.4-87.6 94.5-3.7 38-13.9 72.4-43.7 88.4-29.9 16-58.1 23.3-40.9 49.1 17.2 25.8 76.3 51.8 129.4 50.5 53.1-1.2 107.4-29.7 122.2-105.8 14.7-76.1-15.1-173.9-79.4-176.7z"
              ></path>
              <path
                fill="#efaca5"
                d="m1162.8 713.1 3.9 14-18.9 5.7-6-17.2zM1048.3 703v11.2h16.8l1.9-11.2zM1177.3 378.5l-25.4 62.6-.6 1.4c-1.5 3.7-5.1 6-8.9 6l-72.2-.5c-2.9 0-5.3-2.4-5.3-5.3 0-2.6 2-4.8 4.5-5.2L1141 427l-9.5 7.4 17.1-65.4c2.1-8.1 10.4-13 18.5-10.8 8.1 2.1 13 10.4 10.8 18.5-.1.6-.4 1.2-.6 1.8z"
              ></path>
              <path
                fill="#e7ad87"
                d="m1078.1 436.2-24.7-.5c-6.1 0-11 5.5-11 12.3h36l-.3-11.8z"
              ></path>
              <path
                fill="#2a94f4"
                d="m1137.4 386.1 39.5 9.6 6.5-35.2c1.7-9.5-4.8-18.5-14.5-19.9-8.2-1.2-16 3.4-18.8 11.1l-12.7 34.4z"
              ></path>
              <path
                fill="#0b4870"
                d="m1178.2 454.6-121.7 61.8c-11.3 5.7-18.1 17.6-17.4 30.3l9.2 156.4h18.7l25.2-167.3 94.8-66.5-8.8-14.7zM1156.7 241s39.9-17.7 61.3 39.5c19.9 53-2.2 42.6-34.4 42.8-26.2.2-72.5 25-60.8-7.7 8.4-23.3 4-38.1 4-38.1l29.9-36.5z"
              ></path>
              <path
                fill="#2a94f4"
                d="m1183.7 324.5-17.5 7.8c-10.4 4.6-17.1 15-17 26.4.3 23 5.5 80 24.9 101.9h59.2c9.2-40.4 3.9-102.5 3.9-102.5.6-15.2-10.6-28.4-25.7-30.2l-27.8-3.4z"
              ></path>
              <path
                fill="#efaca5"
                d="M1185.4 343.4c-6.2.7-11.8-3.7-12.5-9.8L1168 296l22.5-2.6 4.8 37.3c.8 6.3-3.7 12-9.9 12.7z"
              ></path>
              <path
                fill="#fab9af"
                d="m1166.8 324-.9.1c-15 2-28.7-8.6-30.7-23.6l-4.3-32.8 55.2-7.2 4.3 32.8c1.9 15-8.6 28.8-23.6 30.7z"
              ></path>
              <path
                fill="#0b4870"
                d="m1192.2 280.7-4.7 9.8s-6.3 5.4-8.1-8.2c-1.5-11.6-9.9-9.6-9.9-9.6s-28.8 21.8-45.7 6.8c-13.3-11.8 8.2-33.4 32.9-38.5l32.4 14.1 3.1 25.6z"
              ></path>
              <path
                fill="#fab9af"
                d="M1184 289.2c.7 6 2.2 10.4 7.2 9.8 0 0 5-5 5.7-12.1.7-6-.2-10.2-5.2-9.6-4.9.6-8.4 5.9-7.7 11.9z"
              ></path>
              <path
                fill="#0b4870"
                d="M1233.3 460.6h-59.2l-94.7 57.2c-11.2 6.7-15.6 20.7-10.3 32.7l72.7 165.1 21-2.5-39.1-159.3c32.8-1.4 93.6-6.3 109.5-24.1 27-30 .1-69.1.1-69.1z"
              ></path>
              <path
                fill="#ffbe55"
                d="m1031.5 357 33.8 90.7H955.6l-31.2-85.5c-.9-2.6 1-5.3 3.7-5.3h103.4z"
              ></path>
              <path
                fill="#ffbe55"
                d="M1031.5 357h5.3c2.8 0 5.3 1.8 6.3 4.4l31.8 86.3h-9.6l-33.8-90.7zM958.2 456.5h107.1v-8.7H955.9v6.4c0 1.2 1 2.3 2.3 2.3zM1065.3 456.5h67.7c2.4 0 4.4-2 4.4-4.4 0-2.4-2-4.4-4.4-4.4h-67.7v8.8z"
              ></path>
              <path
                fill="#fff"
                d="M1004 402.1c2.1 6.3-.4 12.7-5.6 14.4-5.2 1.7-11-2-13.1-8.3-2.1-6.3.4-12.7 5.6-14.4 5.2-1.7 11.1 2 13.1 8.3z"
              ></path>
              <path
                fill="#fab9af"
                d="m1223.6 376.8-25.4 63.8-.6 1.4c-1.5 3.8-5.2 6.1-9 6.1l-72.3-.5c-2.9 0-5.3-2.4-5.3-5.4 0-2.7 2-4.9 4.6-5.2l71.5-10.6-9.6 7.5 17-66.6c2.1-8.2 10.4-13.1 18.6-11 8.2 2.1 13.1 10.4 11 18.6 0 .6-.3 1.3-.5 1.9z"
              ></path>
              <path
                fill="#fab9af"
                d="m1124.2 435.7-24.7-.5c-6.1 0-11 5.6-11 12.5h36l-.3-12z"
              ></path>
              <path
                fill="#31a1f4"
                d="m1183.5 384.7 39.5 9.8 6.5-35.9c1.7-9.6-4.8-18.8-14.5-20.2-8.2-1.2-16 3.5-18.8 11.3l-12.7 35z"
              ></path>
              <path
                fill="#0b4870"
                d="m1135.4 719.4-9.2 9.1-20.7 5c-2.1.5-3.9 2.1-4.6 4.2l-1.1 3c-.5 1.5.6 3 2.2 3l66.7-1.6c2.2 0 3.9-1.9 3.7-4.1l-5.3-18.9-10.1 2.4c-3.4 1.1-7.1.7-10.1-1l-3.6-2.1c-2.5-1.5-5.7-1.1-7.9 1zM1039.8 706.3l-9.2 9.1-20.7 5c-2.1.5-3.9 2.1-4.6 4.2l-1.1 3c-.5 1.5.6 3 2.2 3l60.3-1.3c2.2 0 3.9-1.9 3.7-4.1l-1.6-19.3-7.4 2.5c-3.4 1.1-7.1.7-10.1-1l-3.6-2.1c-2.6-1.5-5.8-1.1-7.9 1z"
              ></path>
            </g>
            <g>
              <path
                fill="#0b4870"
                d="M973.2 743.7c.2 0 .5 0 .7-.1 2.3-.4 3.9-2.3 3.5-4.4l-54.5-266.3c-.4-2.1-2.6-3.5-5-3.1-2.3.4-3.9 2.3-3.5 4.4L969 740.5c.3 1.9 2.1 3.2 4.2 3.2zM832.6 743.7c2.1 0 3.9-1.3 4.2-3.2L895 474.2c.4-2.1-1.2-4.1-3.5-4.4-2.4-.3-4.6 1.1-5 3.1l-58.2 266.3c-.4 2.1 1.2 4.1 3.5 4.4.3.1.5.1.8.1z"
              ></path>
              <path
                fill="#0b4870"
                d="M856.8 455.1h511.7v24.8H856.8z"
                transform="rotate(-180 1112.62 467.462)"
              ></path>
              <path
                fill="#0b4870"
                d="M850.3 642.5h104.9v7.5H850.3z"
                transform="rotate(-180 902.726 646.319)"
              ></path>
              <path
                fill="#0b4870"
                d="M1364.2 743.7c.2 0 .5 0 .7-.1 2.3-.4 3.9-2.3 3.5-4.4L1314 472.9c-.4-2.1-2.6-3.5-5-3.1-2.3.4-3.9 2.3-3.5 4.4l54.5 266.3c.3 1.9 2.2 3.2 4.2 3.2zM1223.6 743.7c2.1 0 3.9-1.3 4.2-3.2l58.2-266.3c.4-2.1-1.2-4.1-3.5-4.4-2.4-.3-4.6 1.1-5 3.1l-58.2 266.3c-.4 2.1 1.2 4.1 3.5 4.4.3.1.5.1.8.1z"
              ></path>
              <path
                fill="#0b4870"
                d="M1241.3 642.5h104.9v7.5h-104.9z"
                transform="rotate(-180 1293.752 646.319)"
              ></path>
              <path
                fill="#ffbe55"
                d="M900.3 359.4h-60.9c-5.8 0-10.5-4.7-10.5-10.5V288c0-5.8 4.7-10.5 10.5-10.5h60.9c5.8 0 10.5 4.7 10.5 10.5v60.9c0 5.8-4.7 10.5-10.5 10.5z"
              ></path>
              <path
                fill="#fff"
                d="M890 348.3h-53.4c-4.6 0-8.4-3.8-8.4-8.4v-53.4c0-4.6 3.8-8.4 8.4-8.4H890c4.6 0 8.4 3.8 8.4 8.4v53.4c0 4.6-3.7 8.4-8.4 8.4z"
                opacity=".39"
              ></path>
              <path
                fill="#fff"
                d="m877.3 328.4-3-8.5h-15l-3 8.5h-9.4l14.6-35.9h10.7l14.6 35.9h-9.5zm-5-14.8c-2.8-7.7-4.3-12.1-4.7-13.1-.3-1-.6-1.8-.7-2.4-.6 2.1-2.4 7.2-5.3 15.5h10.7z"
              ></path>
              <path
                fill="#ffbe55"
                d="M1049 189.6h-61c-5.8 0-10.5-4.7-10.5-10.5v-60.9c0-5.8 4.7-10.5 10.5-10.5h60.9c5.8 0 10.5 4.7 10.5 10.5v60.9c0 5.8-4.7 10.5-10.4 10.5z"
              ></path>
              <path
                fill="#fff"
                d="M1039.5 178.5h-53.4c-4.6 0-8.4-3.8-8.4-8.4v-53.4c0-4.6 3.8-8.4 8.4-8.4h53.4c4.6 0 8.4 3.8 8.4 8.4v53.4c0 4.6-3.7 8.4-8.4 8.4z"
                opacity=".39"
              ></path>
              <path
                fill="#fff"
                d="M1027.8 148.8c0 3.2-1.3 5.8-4 7.6-2.7 1.9-6.4 2.8-11.2 2.8-4.4 0-8.3-.7-11.7-2.2v-7c2.8 1.1 5.1 1.8 7.1 2.3s3.7.7 5.3.7c1.9 0 3.4-.3 4.4-1 1-.6 1.5-1.6 1.5-2.8 0-.7-.2-1.3-.7-1.9-.5-.5-1.1-1.1-2-1.6-.9-.5-2.7-1.3-5.3-2.4-2.5-1-4.4-2-5.7-3-1.3-.9-2.3-2-3-3.3-.8-1.3-1.1-2.7-1.1-4.4 0-3.2 1.2-5.6 3.7-7.5 2.5-1.8 5.9-2.7 10.3-2.7 2.1 0 4.2.2 6.1.7s4 1.1 6.1 1.9l-2.8 5.9c-2.2-.8-4-1.3-5.5-1.6-1.4-.3-2.9-.5-4.2-.5-1.7 0-2.9.3-3.8 1-.9.7-1.3 1.5-1.3 2.6 0 .7.2 1.3.5 1.7.4.5.9 1 1.7 1.4s2.6 1.3 5.5 2.5c3.9 1.6 6.5 3.2 7.9 4.8 1.5 1.7 2.2 3.6 2.2 6z"
              ></path>
              <path
                fill="#ffbe55"
                d="M1459.5 454.7h-60.9c-5.8 0-10.5-4.7-10.5-10.5v-60.9c0-5.8 4.7-10.5 10.5-10.5h60.9c5.8 0 10.5 4.7 10.5 10.5v60.9c0 5.8-4.7 10.5-10.5 10.5z"
              ></path>
              <path
                fill="#fff"
                d="M1450.1 443.6h-53.4c-4.6 0-8.4-3.8-8.4-8.4v-53.4c0-4.6 3.8-8.4 8.4-8.4h53.4c4.6 0 8.4 3.8 8.4 8.4v53.4c0 4.7-3.8 8.4-8.4 8.4z"
                opacity=".39"
              ></path>
              <path
                fill="#fff"
                d="M1422.6 423.8h-8.6v-35.7h23.6v6.2h-15v9.2h14v6.2h-14v14.1z"
              ></path>
              <path
                fill="#ffbe55"
                d="M1335.9 254.7H1275c-5.8 0-10.5-4.7-10.5-10.5v-60.9c0-5.8 4.7-10.5 10.5-10.5h60.9c5.8 0 10.5 4.7 10.5 10.5v60.9c0 5.8-4.7 10.5-10.5 10.5z"
              ></path>
              <path
                fill="#fff"
                d="M1326.1 243h-53.4c-4.6 0-8.4-3.8-8.4-8.4v-53.4c0-4.6 3.8-8.4 8.4-8.4h53.4c4.6 0 8.4 3.8 8.4 8.4v53.4c0 4.6-3.7 8.4-8.4 8.4z"
                opacity=".39"
              ></path>
              <path
                fill="#fff"
                d="M1322.3 205c0 5.9-1.9 10.4-5.8 13.5s-9.4 4.7-16.7 4.7h-11.7v-35.7h12.9c6.7 0 12 1.5 15.7 4.6 3.7 3 5.6 7.3 5.6 12.9zm-9.1.2c0-7.7-3.9-11.5-11.7-11.5h-4.7V217h3.8c8.4-.1 12.6-4 12.6-11.8z"
              ></path>
            </g>
          </svg> */}

          <svg
            id="eb113788-f1f1-4c1f-be62-f1d0ea2e1eb6"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            width="795.39431"
            height="574.03802"
            viewBox="0 0 795.39431 574.03802"
          >
            <defs>
              <linearGradient
                id="b2a81085-935f-40be-bb27-75940df8c338"
                x1="-450.78971"
                y1="2803.04671"
                x2="-450.78971"
                y2="2729.34772"
                gradientTransform="translate(3217.53309 1009.65784) rotate(90)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="gray" stopOpacity="0.25"></stop>
                <stop
                  offset="0.53514"
                  stopColor="gray"
                  stopOpacity="0.12"
                ></stop>
                <stop offset="1" stopColor="gray" stopOpacity="0.1"></stop>
              </linearGradient>
            </defs>
            <title></title>
            <ellipse
              cx="232.05775"
              cy="450.06897"
              rx="35.09476"
              ry="5.26421"
              transform="translate(-476.55674 294.92367) rotate(-63.61079)"
              fill="#292A2D"
            ></ellipse>
            <ellipse
              cx="670.57742"
              cy="667.85592"
              rx="35.09476"
              ry="3.57677"
              transform="translate(-428.03695 808.73554) rotate(-63.61079)"
              fill="#292A2D"
            ></ellipse>
            <rect
              x="397.95325"
              y="566.93514"
              width="21.05685"
              height="70.18951"
              transform="translate(274.52069 -285.26226) rotate(39.54732)"
              fill="#f55f44"
            ></rect>
            <rect
              x="409.32507"
              y="573.56618"
              width="23.69234"
              height="70.18951"
              transform="translate(489.54965 1134.58125) rotate(-166.7689)"
              opacity="0.05"
            ></rect>
            <rect
              x="411.92558"
              y="573.86778"
              width="21.05685"
              height="70.18951"
              transform="translate(492.0121 1135.47005) rotate(-166.7689)"
              fill="#f55f44"
            ></rect>
            <rect
              x="414.48638"
              y="314.08219"
              width="73.69899"
              height="489.57186"
              transform="translate(-452.20218 551.7936) rotate(-63.61079)"
              fill="url(#b2a81085-935f-40be-bb27-75940df8c338)"
            ></rect>
            <path
              d="M655.01556,699.105c-8.584-4.11751-444.8438-220.718-438.55625-217.5983,24.21371-36.95739,31.19689-62.87545,31.19689-62.87545l438.55625,217.5983S670.81132,663.25857,655.01556,699.105Z"
              transform="translate(-202.30284 -162.98099)"
              fill="#292A2D"
            ></path>
            <rect
              x="421.72508"
              y="519.09383"
              width="40.35897"
              height="70.18951"
              transform="translate(90.06389 -301.64381) rotate(26.38921)"
              opacity="0.05"
            ></rect>
            <rect
              x="423.47981"
              y="519.09383"
              width="36.8495"
              height="70.18951"
              transform="translate(90.06389 -301.64381) rotate(26.38921)"
              fill="#f55f44"
            ></rect>
            <rect
              x="428.83545"
              y="518.70387"
              width="24.56633"
              height="70.18951"
              transform="translate(89.80867 -301.33512) rotate(26.38921)"
              opacity="0.05"
            ></rect>
            <rect
              x="430.59019"
              y="518.70387"
              width="21.05685"
              height="70.18951"
              transform="translate(89.80867 -301.33512) rotate(26.38921)"
              fill="#f55f44"
            ></rect>
            <circle
              cx="261.30557"
              cy="563.92499"
              r="2.92569"
              fill="#dbdbdb"
            ></circle>
            <g opacity="0.5">
              <rect
                x="29.39431"
                y="482"
                width="3"
                height="17"
                fill="#47e6b1"
              ></rect>
              <rect
                x="231.69716"
                y="644.98099"
                width="3"
                height="17"
                transform="translate(684.3753 257.30284) rotate(90)"
                fill="#47e6b1"
              ></rect>
            </g>
            <g opacity="0.5">
              <rect
                x="785.39431"
                y="270"
                width="3"
                height="17"
                fill="#47e6b1"
              ></rect>
              <rect
                x="987.69716"
                y="432.98099"
                width="3"
                height="17"
                transform="translate(1228.3753 -710.69716) rotate(90)"
                fill="#47e6b1"
              ></rect>
            </g>
            <g opacity="0.5">
              <rect
                x="47.39431"
                y="59"
                width="3"
                height="17"
                fill="#47e6b1"
              ></rect>
              <rect
                x="249.69716"
                y="221.98099"
                width="3"
                height="17"
                transform="translate(279.3753 -183.69716) rotate(90)"
                fill="#47e6b1"
              ></rect>
            </g>
            <g opacity="0.5">
              <rect
                x="695.39431"
                y="33"
                width="3"
                height="17"
                fill="#47e6b1"
              ></rect>
              <rect
                x="897.69716"
                y="195.98099"
                width="3"
                height="17"
                transform="translate(901.3753 -857.69716) rotate(90)"
                fill="#47e6b1"
              ></rect>
            </g>
            <path
              d="M214.59252,416.4373a3.67458,3.67458,0,0,1-2.04749-4.441,1.76592,1.76592,0,0,0,.0799-.40754h0a1.84257,1.84257,0,0,0-3.31045-1.22119h0a1.76637,1.76637,0,0,0-.2039.3618,3.67459,3.67459,0,0,1-4.441,2.04749,1.766,1.766,0,0,0-.40754-.07991h0a1.84258,1.84258,0,0,0-1.22119,3.31045h0a1.76606,1.76606,0,0,0,.3618.20389,3.67462,3.67462,0,0,1,2.04749,4.441,1.76594,1.76594,0,0,0-.07991.40754h0a1.84257,1.84257,0,0,0,3.31045,1.22119h0a1.7659,1.7659,0,0,0,.2039-.3618,3.67459,3.67459,0,0,1,4.441-2.04749,1.76665,1.76665,0,0,0,.40755.07991h0a1.84257,1.84257,0,0,0,1.22119-3.31045h0A1.76684,1.76684,0,0,0,214.59252,416.4373Z"
              transform="translate(-202.30284 -162.98099)"
              fill="#4d8af0"
              opacity="0.5"
            ></path>
            <path
              d="M386.59252,219.4373a3.67458,3.67458,0,0,1-2.04749-4.441,1.76592,1.76592,0,0,0,.0799-.40754h0a1.84257,1.84257,0,0,0-3.31045-1.22119h0a1.76637,1.76637,0,0,0-.2039.3618,3.67459,3.67459,0,0,1-4.441,2.04749,1.766,1.766,0,0,0-.40754-.07991h0a1.84258,1.84258,0,0,0-1.22119,3.31045h0a1.76606,1.76606,0,0,0,.3618.20389,3.67462,3.67462,0,0,1,2.04749,4.441,1.76594,1.76594,0,0,0-.07991.40754h0a1.84257,1.84257,0,0,0,3.31045,1.22119h0a1.7659,1.7659,0,0,0,.2039-.3618,3.67459,3.67459,0,0,1,4.441-2.04749,1.76665,1.76665,0,0,0,.40755.07991h0a1.84257,1.84257,0,0,0,1.22119-3.31045h0A1.76684,1.76684,0,0,0,386.59252,219.4373Z"
              transform="translate(-202.30284 -162.98099)"
              fill="#4d8af0"
              opacity="0.5"
            ></path>
            <path
              d="M596.59252,730.4373a3.67458,3.67458,0,0,1-2.04749-4.441,1.76592,1.76592,0,0,0,.0799-.40754h0a1.84257,1.84257,0,0,0-3.31045-1.22119h0a1.76637,1.76637,0,0,0-.2039.3618,3.67459,3.67459,0,0,1-4.441,2.04749,1.766,1.766,0,0,0-.40754-.07991h0a1.84258,1.84258,0,0,0-1.22119,3.31045h0a1.76606,1.76606,0,0,0,.3618.20389,3.67462,3.67462,0,0,1,2.04749,4.441,1.76594,1.76594,0,0,0-.07991.40754h0a1.84257,1.84257,0,0,0,3.31045,1.22119h0a1.7659,1.7659,0,0,0,.2039-.3618,3.67459,3.67459,0,0,1,4.441-2.04749,1.76665,1.76665,0,0,0,.40755.07991h0a1.84257,1.84257,0,0,0,1.22119-3.31045h0A1.76684,1.76684,0,0,0,596.59252,730.4373Z"
              transform="translate(-202.30284 -162.98099)"
              fill="#4d8af0"
              opacity="0.5"
            ></path>
            <circle
              cx="759.39431"
              cy="444"
              r="6"
              fill="#f55f44"
              opacity="0.5"
            ></circle>
            <circle
              cx="627.39431"
              cy="482"
              r="6"
              fill="#4d8af0"
              opacity="0.5"
            ></circle>
            <circle
              cx="103.39431"
              cy="541"
              r="6"
              fill="#47e6b1"
              opacity="0.5"
            ></circle>
            <circle
              cx="411.39431"
              cy="6"
              r="6"
              fill="#f55f44"
              opacity="0.5"
            ></circle>
            <path
              d="M407.19716,520.481l-24,36s8,37,185,36,191-36,191-36l-33-48-101-69Z"
              transform="translate(-202.30284 -162.98099)"
              fill="#E3405F"
            ></path>
            <path
              d="M407.19716,520.481l-24,36s8,37,185,36,191-36,191-36l-33-48-101-69Z"
              transform="translate(-202.30284 -162.98099)"
              opacity="0.15"
            ></path>
            <polygon
              points="715.394 224 400.394 363 16.394 224 368.394 64 541.184 143.67 547.374 146.53 715.394 224"
              fill="#E3405F"
            ></polygon>
            <polygon
              points="715.394 224 400.394 363 16.394 224 368.394 64 541.184 143.67 547.374 146.53 715.394 224"
              opacity="0.15"
            ></polygon>
            <polygon
              points="553.894 257.32 547.894 257.68 541.184 143.67 547.374 146.53 553.894 257.32"
              fill="#f5f5f5"
            ></polygon>
            <path
              d="M411.19716,386.481l-28,170s201-65,376,0l-26-180S498.19716,347.481,411.19716,386.481Z"
              transform="translate(-202.30284 -162.98099)"
              fill="#E3405F"
            ></path>
            <ellipse
              cx="553.39431"
              cy="272"
              rx="29"
              ry="20"
              fill="#f5f5f5"
            ></ellipse>
          </svg>
        </div>
        <div className="right animate__animated animate__fadeInUp animate__slow">
          <h1
            style={{
              color: "rgb(19, 185, 185)",
              textAlign: "left",
              paddingLeft: "20px",
            }}
          >
            About Me
          </h1>
          <br />
          <hr id="hr" />
          <p>
            {" "}
            As a{" "}
            <span style={{ color: "rgb(19, 185, 185)" }}>
              Computer Science and Engineering graduate,
            </span>{" "}
            I've honed my skills in both theory and practical applications. My
            technical skills in web development further fortified my understanding and
            proficiency in this domain. Driven by a passion for technology, I'm
            perpetually engaged in learning and exploration, always eager to
            delve into the latest trends and advancements. This innate curiosity
            fuels my journey as a lifelong learner and tech enthusiast. For a
            more comprehensive overview of my experiences and achievements, I've
            provided detailed insights in the sections below.
          </p>
        </div>
      </div>

      <div className="aboutSection2">
        <FullWidthTabs id="tab"/>
      </div>
    </>
  );
}

export default About_section1;