import { TextEffect, init } from "../Utilities/TextEffect.js";
import { Attribute } from "../Utilities/Attribute.js";

class HomePage extends HTMLElement {
  constructor() {
    super();
    // The line of code that below attaches this custom element to the DOM so that
    // The structure and styling will remain within this context
    this.attachShadow({ mode: "open" });
    this.attributeEnabler = false;
  }

  connectedCallback() {
    this._portfolioOwner = this.getAttribute("name") || "name goes here";
    this._logo = this.getAttribute("logo") || "logo";
    this._jobs = this.getAttribute("jobs") || ["Job 1", "Job2", "Job3"];
    this._id = this.getAttribute("id");

    this.shadowRoot.innerHTML = `
        <style>
          *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
          }
          
          :host{
            position: absolute;
            width: 100%;
            transition: all 1s ease-in-out;
            cursor: none;
          }
          
          .home{
            height: 100vh;
          }

          .home .content{
            height: 100%;
            display: flex;
          }

          .home .content .menu{
            flex: 0 0 0%;
            height: 100%;    
            width: 0%;   
            transition: all .5s linear; 
            flex;
            flex-direction: column;    
          }
          .home .content .menu .menu-header{
            height: 20vh;
            display: flex;
            justify-content: flex-end;
            padding: 1.7rem 1rem 0 0;
          }
          .home .content .menu .menu-header p{
            font-bold: bolder;
            cursor: pointer;
          }
          
          .home .content .menu .menu-body{
            height: 80vh;
          }
          .home .content .menu .menu-body ul li{
            padding: 1.5rem;
            font-size: 150%;
            display: flex;
            align-items: center;
            cursor: pointer;
            border-bottom: 1px solid #eee;
            box-shadow: 0 4px 2px rgba(0, 0, 0, .3);
            transition: all .2s ease-in;
          }

          .home .content .menu .menu-body ul li svg{
            height: 3rem;
            width: 3.5rem;
            display: flex;
            align-items: center;
          }

          .home .content .menu .menu-body ul li svg path{
            fill: black;
          }

          .home .content .menu .menu-body ul li:hover{
            transform: translateY(.2rem);
            background-color: #0d0d0d;
            color: #ccc;
            box-shadow: none;
          }

           .home .content .menu .menu-body ul li:hover path,   .home .content .menu .menu-body ul li:hover svg{
             fill: #ccc;
           }
         

          .home .content .cont{
            flex: 0 0 100%;
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            transition: all .5s linear;  
          }

          .home .content .menu.slide{
            flex: 0 0 25%;
            width: 25%;
          }

          .home .content .cont.slide{
            flex: 0 0 75%;
            width: 75%;
          }

          .home .content .cont .contText{
            flex: 0 0 100%;
            height: 87%;
            background-color: #0d0d0d;
            display: flex;
            flex-wrap: wrap;
          }

          .home .content .cont .contText nav{
            flex: 0 0 100%;
            height: 10%;
            width: 100%;
            padding: 1rem;
            padding-left: 1.5rem;
          }

          .home .content .cont .contText nav p{
            color: white;
            cursor: pointer;
          }

          .home .content .cont .contText .main{
            
            color: #ccc;
            height: 80%;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            padding: 5rem 0;
            flex-direction: column;
           
          }

          .cont .contText .main .div{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            margin-top: -3%;
          }

          .content .cont .contText .main h1{
            opacity: 0;
            font-size: 6rem;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 1rem;
            margin-top: 1rem;
            text-align: center;
            line-height: 110%;
            transition: all 4s linear;
          }

          .content .cont .contText .main h2{
            font-size: 4rem;
          }
          .home .content .cont .contText .main h4{
            font-size: 1.5rem;
            opacity: 0;
          }

          .home .content .cont .contText .btn{
            height: 10%;
            display: flex;
            alig-items: flex-end;
            justify-content: flex-end;
            padding: 1rem 5.5rem;
            width: 100%;
          }

          .home .content .cont .contText .btn p{
            color: #777;
            position: relative;
            transition: all .5s linear;
            cursor: pointer;
          }

          .home .content .cont .contText .btn p:hover{
            color: #ccc;
          }

          .home .content .cont .contText .btn p::after{
            position: absolute;
            content: '';
            height: .15rem;
            background: #ccc;
            right: 0;
            width: 0%;
            transition: all .5s linear;
            bottom: -1px;
          }

          .home .content .cont .contText .btn p:hover::after{
            width: 100%;
            left: 0;
          }

          .home .content .cont .footer{
            flex: 0 0 100%;
            height: 13%;
          }

          .txt-type {
            border-right: 0.2rem solid #777;
          }

          h2 span, h4 span{
            opacity: 0;
            transition: all .4s ease;
            display: inline-block;
            transform: translateY(1rem);
          }

          span.space{
            margin: 0 .25rem;
          }

          span.fade{
            opacity: 1;
            transform: translateY(0);
          }

          #menuBtn{
            display: flex;
            align-items: center;
            justify-content: center;
            padding: .2rem 1rem;
            width: 3.5rem;
          }

          .footer{
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #0d0d0d;
        
          }
          .footer p{
            color: #ccc;
            cursor: pointer;
            margin-right: 2rem;
            transition: all .3s ease-in-out;
          }
          .footer p:hover{
            transform: translateY(.2rem); 
          }

          .footer a svg{
            height: 2rem;
            width: 1.5rem;
            fill: #ccc;
          }

          .mouse, .mouseDot {
            border: 1px solid #ccc;
            border-radius: 50%;
            position: absolute;
            
            pointer-events: none;
            transform: translate(-50%, -50%);
            // transition-property: background, transform;
            transform-origin: center;
            z-index: 1;
           
          }

          .mouse{
              height: 2rem;
              width: 2rem;
              transition: all 0.1s linear;
          }

          .mouseDot{
            height: .2rem;
            width: .1rem;
            background: #ccc;
            transition: all 0.4s ease-in-out;
          }
          .mouse.grow {
            background: #000;
            padding: 1rem;
            transform: scale(3);
          }

          /*Responsive */
          @media screen and (max-width: 768px){
          
            .contText nav p{
              margin-left: -1rem;
            }
            .content .cont .contText .main h1{
              font-size: 4rem;
            }

            .content .cont .contText .main h2{
              font-size: 3.5rem;
            }

            .cont .contText .main .div{
              margin-top: -15%;  
            }

            .home .content .cont .contText .btn{
              padding: 0 1rem 0 0;
              align-items: center;
            }
            .home .content .cont .contText .btn p::after{
              bottom: -5px;
            }
             .home .content .menu.slide{
              flex: 0 0 100%;
              width: 100%;
            }

            .home .content .cont.slide{
              flex: 0 0 0%;
              width: 0%;
            }
            .footer a svg{
            height: 1.5rem;
            width: 1rem;
            fill: #ccc;
          }
          }
          @media screen and (max-width: 320px){
            .cont .contText .main .div{
              margin-top: -20%;  
            }
              .content .cont .contText .main h1{
              font-size: 3.5rem;
            }

            .content .cont .contText .main h2{
              font-size: 3rem;
            }

            .home .content .menu.slide{
              flex: 0 0 100%;
              width: 100%;
            }

            .home .content .cont.slide{
              flex: 0 0 0%;
              width: 0%;
            }
          }
          }
        </style>
        <div class="home components">
          <div class="content">
            <div class="menu">
              <div class="menu-header">
                <p class="menuBtn">
                  <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z" fill="#0d0d0d" fill-rule="evenodd" opacity=".601"></path>
                  </svg>
                </p>
              </div>

              <div class="menu-body">
                <ul>
                  <li id="2">
                    <span>
                      <svg  xmlns:anim="urn:oasis:names:tc:opendocument:xmlns:animation:1.0" version="1.2" viewBox="0 0 2540 3175" preserveAspectRatio="xMidYMid" fill-rule="evenodd" stroke-width="28.222" stroke-linejoin="round" xml:space="preserve" x="0px" y="0px">
                        <defs class="ClipPathGroup">
                        <clipPath id="a" clipPathUnits="userSpaceOnUse">
                          <rect x="0" y="0" width="2540" height="2540"/>
                        </clipPath></defs><g class="SlideGroup">
                        <g><g><g class="Slide" clip-path="url(#a)"><g class="Page"><g class="com.sun.star.drawing.ClosedBezierShape"><g>
                        <rect class="BoundingBox" stroke="none" fill="none" x="1004" y="1488" width="905" height="699"/>
                        <path fill="rgb(0,0,0)" stroke="none" d="M 1136,1491 L 1155,1570 1087,1570 1087,2007 1826,2007 1826,1570 1372,1570 1392,1490 C 1394,1490 1396,1489 1398,1488 L 1867,1488 C 1875,1488 1881,1490 1888,1494 1894,1497 1899,1502 1903,1509 1907,1515 1908,1522 1908,1529 L 1908,2049 C 1908,2056 1907,2063 1903,2069 1899,2076 1894,2080 1888,2084 1881,2088 1875,2090 1867,2090 L 1549,2090 1582,2138 1742,2138 1768,2185 1146,2185 1171,2138 1330,2138 1364,2090 1046,2090 C 1039,2090 1032,2088 1026,2084 1019,2080 1014,2076 1011,2069 1007,2063 1005,2056 1005,2049 L 1005,1529 C 1005,1522 1007,1515 1011,1509 1014,1502 1019,1497 1026,1494 1032,1490 1039,1488 1046,1488 L 1129,1488 C 1131,1489 1133,1490 1136,1491 Z"/></g></g><g class="com.sun.star.drawing.ClosedBezierShape"><g>
                        <rect class="BoundingBox" stroke="none" fill="none" x="242" y="593" width="794" height="984"/><path fill="rgb(0,0,0)" stroke="none" d="M 337,869 L 378,627 C 379,622 380,618 383,614 387,607 391,602 398,599 404,595 411,593 418,593 421,593 423,593 425,594 L 1001,689 C 1006,690 1010,691 1014,694 1021,698 1026,702 1029,709 1033,715 1035,722 1035,729 1035,732 1035,734 1034,736 L 1006,901 969,891 C 966,890 964,890 961,890 956,890 952,891 948,894 943,896 940,899 938,904 L 916,941 946,763 452,681 406,955 C 383,927 360,898 337,869 Z M 374,1148 L 330,1405 824,1487 890,1097 933,1140 C 931,1155 930,1170 930,1185 930,1198 931,1211 932,1224 L 863,1293 C 861,1295 860,1297 858,1299 856,1303 855,1308 855,1313 855,1318 856,1322 858,1326 L 917,1430 898,1541 C 897,1546 896,1551 893,1555 889,1562 885,1566 878,1570 872,1574 865,1576 858,1576 855,1576 853,1576 851,1575 L 276,1480 C 271,1479 267,1478 263,1475 256,1471 251,1466 248,1460 244,1453 242,1447 242,1439 242,1437 242,1435 243,1433 L 305,1063 C 328,1091 351,1120 374,1148 Z"/></g></g><g class="com.sun.star.drawing.ClosedBezierShape"><g><rect class="BoundingBox" stroke="none" fill="none" x="1426" y="477" width="900" height="906"/><path fill="rgb(0,0,0)" stroke="none" d="M 1664,1072 C 1664,1071 1665,1070 1666,1069 1685,1079 1705,1087 1726,1094 1772,1109 1822,1117 1875,1117 1877,1117 1878,1117 1879,1117 1880,1117 1881,1117 1882,1117 L 1882,1158 1882,1117 C 1883,1117 1884,1117 1884,1117 1885,1117 1886,1117 1887,1117 1888,1117 1888,1117 1889,1117 L 1887,1158 1889,1117 C 1890,1117 1890,1117 1891,1117 1892,1117 1894,1117 1895,1117 L 1890,1158 1895,1117 C 1896,1117 1896,1117 1897,1118 L 1892,1158 1897,1118 C 1898,1118 1898,1118 1898,1118 L 1893,1158 1898,1118 1899,1118 1900,1118 1901,1118 1897,1159 1901,1118 C 1901,1118 1902,1118 1903,1118 1903,1118 1904,1118 1905,1118 1912,1119 1917,1120 1923,1124 1929,1127 1934,1132 1938,1139 1938,1140 1939,1141 1940,1143 1949,1164 1964,1184 1982,1202 2001,1221 2024,1238 2050,1252 2066,1262 2084,1270 2103,1277 2099,1272 2096,1268 2093,1263 2078,1242 2066,1220 2057,1199 2052,1187 2048,1176 2045,1164 2042,1152 2040,1140 2040,1128 2040,1122 2041,1116 2042,1110 2043,1104 2044,1100 2047,1095 2051,1089 2055,1084 2062,1080 2063,1079 2064,1079 2066,1078 2093,1066 2118,1051 2140,1034 2161,1017 2180,998 2196,978 2211,957 2222,935 2230,912 2238,888 2243,864 2243,838 2243,819 2240,800 2236,782 2231,764 2225,747 2216,731 2207,714 2197,698 2184,684 2172,669 2157,655 2141,643 2108,617 2068,596 2024,582 1979,567 1929,559 1875,559 1822,559 1772,567 1726,582 1682,596 1643,617 1610,642 1594,655 1579,669 1566,684 1554,698 1543,714 1535,731 1526,747 1520,764 1515,782 1511,800 1508,819 1508,838 1508,857 1511,876 1515,893 1516,896 1517,899 1517,902 L 1465,917 C 1454,909 1443,902 1431,895 1428,876 1426,857 1426,838 1426,812 1429,786 1435,762 1441,738 1450,715 1462,692 1473,671 1487,650 1504,631 1520,611 1538,594 1559,578 1599,546 1647,521 1701,503 1754,486 1813,477 1875,477 1938,477 1996,486 2049,503 2103,521 2151,546 2192,578 2212,594 2231,611 2247,630 2263,650 2277,671 2289,692 2300,715 2309,738 2316,762 2322,786 2325,812 2325,838 2325,873 2319,907 2308,938 2297,970 2282,999 2262,1027 2242,1053 2218,1078 2190,1099 2170,1115 2148,1129 2124,1141 2124,1143 2125,1144 2125,1145 2127,1152 2129,1159 2132,1167 2139,1183 2149,1200 2161,1217 2185,1253 2216,1287 2240,1313 2242,1315 2244,1318 2246,1321 2250,1327 2251,1334 2251,1341 2251,1349 2250,1355 2246,1362 2242,1368 2237,1373 2231,1377 2224,1381 2218,1382 2210,1382 L 2209,1382 C 2176,1381 2142,1376 2107,1365 2073,1355 2040,1341 2009,1324 1977,1306 1948,1284 1924,1260 1905,1241 1889,1221 1876,1199 L 1875,1199 C 1813,1199 1754,1189 1701,1172 1667,1161 1634,1147 1605,1129 L 1664,1072 Z"/></g></g><g class="com.sun.star.drawing.ClosedBezierShape"><g><rect class="BoundingBox" stroke="none" fill="none" x="881" y="785" width="765" height="797"/><path fill="rgb(0,0,0)" stroke="none" d="M 1641,1311 L 1562,1447 1459,1418 C 1432,1440 1403,1459 1371,1470 L 1342,1580 1187,1580 1161,1471 C 1143,1464 1127,1457 1111,1447 1095,1438 1080,1427 1067,1416 L 958,1448 882,1312 961,1233 C 957,1200 956,1165 963,1130 L 884,1053 961,917 1068,946 C 1095,924 1125,905 1157,894 L 1186,785 1339,786 1367,895 C 1383,901 1399,908 1415,918 1430,926 1446,937 1459,949 L 1459,948 1567,916 1644,1053 1565,1131 C 1570,1166 1569,1200 1563,1235 L 1641,1311 Z M 1132,1106 C 1089,1181 1113,1272 1187,1315 1262,1358 1351,1334 1394,1258 1437,1183 1414,1093 1339,1050 1265,1007 1175,1030 1132,1106 Z"/></g></g><g class="com.sun.star.drawing.ClosedBezierShape"><g><rect class="BoundingBox" stroke="none" fill="none" x="141" y="754" width="466" height="572"/><path fill="rgb(0,0,0)" stroke="none" d="M 158,837 C 155,833 152,830 149,826 116,788 191,726 222,768 225,771 227,774 230,777 L 158,837 Z M 247,798 C 356,935 465,1072 574,1209 584,1247 595,1286 605,1324 572,1304 539,1285 506,1266 396,1130 285,994 175,858 L 247,798 Z"/></g></g><g class="com.sun.star.drawing.ClosedBezierShape"><g><rect class="BoundingBox" stroke="none" fill="none" x="457" y="356" width="1637" height="1676"/><path fill="rgb(0,0,0)" stroke="none" d="M 2036,1392 C 2055,1403 2074,1412 2093,1421 2083,1468 2068,1513 2050,1556 2023,1621 1989,1682 1947,1738 L 1947,1583 C 1957,1564 1966,1545 1974,1525 1993,1479 2008,1431 2018,1380 2024,1384 2030,1388 2036,1392 Z M 1587,509 C 1579,505 1570,501 1561,498 1467,459 1362,438 1251,438 1140,438 1035,459 941,498 875,525 814,561 759,603 L 653,586 C 727,517 814,461 910,422 1014,379 1129,356 1251,356 1373,356 1489,379 1593,422 1624,435 1654,449 1683,465 1649,477 1617,492 1587,509 Z M 555,1582 C 592,1653 638,1716 693,1772 763,1841 847,1897 941,1936 947,1938 953,1941 960,1943 L 960,2031 C 943,2025 926,2019 910,2012 806,1969 713,1907 635,1830 560,1755 500,1666 457,1566 L 555,1582 Z"/></g></g></g></g></g></g></g>
                      </svg>
                    </span>
                    Projects
                  </li>
                  <li id="3">
                    <span>
                       
                      <svg  viewBox="0 0 512 512"><path d="m272 384a96 96 0 1 0 96-96 96.108 96.108 0 0 0 -96 96zm96-64a8 8 0 1 1 -8 8 8 8 0 0 1 8-8zm-23.761 102.06 16-64a8 8 0 1 1 15.522 3.88l-15.719 62.879a8 8 0 0 0 15.958-.819 8 8 0 0 1 16 0 24 24 0 0 1 -48 0 7.977 7.977 0 0 1 .239-1.94z"/><circle cx="216" cy="112" r="80"/><path d="m272.6 442.613a111.947 111.947 0 0 1 71.217-167.976c-31.117-42.497-77.107-66.637-127.817-66.637-45.522 0-87.578 19.485-118.421 54.865-31.062 35.633-48.565 85.3-49.536 140.291 18.364 9.261 93.769 44.844 167.957 44.844a312.191 312.191 0 0 0 56.6-5.387z"/>
                      </svg>
                    </span>
                    About Me</li>
                  <li id="4"> 
                    <span>
                      <svg  version="1.1" x="0px" y="0px" viewBox="0 0 24 30" style="enable-background:new 0 0 24 24;" xml:space="preserve">
                        <g>
                          <path d="M17.59,3.356c-1.641,0-2.977,1.335-2.977,2.977S15.949,9.31,17.59,9.31c1.642,0,2.978-1.335,2.978-2.977   S19.232,3.356,17.59,3.356z"/><path d="M17.813,12.403l-0.548,0.863c-0.105,0.165-0.286,0.26-0.475,0.26c-0.058,0-0.117-0.009-0.175-0.027l-2.475-0.81   c-0.245-0.08-0.404-0.316-0.387-0.573l0.068-1.02c-0.126-0.099-0.249-0.204-0.366-0.313l-0.996,0.222   c-0.252,0.055-0.508-0.066-0.624-0.296l-1.177-2.323c-0.116-0.229-0.063-0.508,0.131-0.677l0.768-0.673   c-0.019-0.158-0.031-0.32-0.036-0.481l-0.862-0.547c-0.217-0.137-0.313-0.406-0.233-0.649l0.81-2.475   c0.08-0.245,0.299-0.411,0.573-0.387l1.018,0.068c0.101-0.126,0.205-0.248,0.315-0.367l-0.175-0.783   c-0.853-0.243-1.758-0.377-2.651-0.377c-3.781,0-7.211,2.266-8.535,5.64c-0.36,0.935-0.445,1.943-0.243,2.91   c0.074,0.38,0.163,0.609,0.172,0.632c0.734,1.315-0.527,3.592-0.674,3.847c-0.646,0.896-0.584,1.187-0.583,1.189   c-0.001-0.012,0.061,0.003,0.101,0.005c1.008,0.17,1.357,1.12,1.432,1.893c0.476,0.134,0.778,0.382,0.901,0.744   c0.158,0.465-0.064,0.922-0.286,1.232c0.491,0.915,0.245,1.873,0.118,2.24c0.214,0.186,1.386,0.252,2.446,0.108   c0.804-0.221,1.604-0.129,2.308,0.292c0.775,0.463,1.264,1.236,1.551,1.854c1.951-1.807,5.982-3.167,7.433-3.617   c-0.126-0.735-0.052-1.607,0.225-2.641c0.433-1.521,1.162-2.795,1.193-2.848c0.361-0.521,0.641-1.065,0.877-1.63l-0.457-0.523   C18.135,12.385,17.974,12.397,17.813,12.403z"/><path d="M22.537,6.413c0.005-0.307-0.018-0.612-0.069-0.91c-0.034-0.193,0.036-0.39,0.184-0.519l0.668-0.585l-0.782-1.544   l-0.867,0.193c-0.19,0.042-0.39-0.018-0.526-0.157c-0.213-0.22-0.446-0.42-0.694-0.593c-0.16-0.113-0.251-0.302-0.237-0.498   l0.059-0.887l-1.643-0.538l-0.477,0.749c-0.104,0.166-0.286,0.264-0.484,0.262c-0.31,0.002-0.616,0.019-0.912,0.069   c-0.198,0.032-0.39-0.038-0.519-0.185l-0.584-0.668l-1.543,0.782l0.193,0.867c0.043,0.191-0.017,0.39-0.158,0.526   c-0.217,0.21-0.417,0.444-0.594,0.693c-0.113,0.162-0.303,0.251-0.497,0.237L12.17,3.65l-0.538,1.643l0.75,0.477   c0.165,0.104,0.264,0.288,0.261,0.484c-0.005,0.31,0.018,0.616,0.069,0.911c0.034,0.193-0.036,0.39-0.184,0.519l-0.668,0.585   l0.782,1.544l0.866-0.193c0.192-0.042,0.391,0.018,0.526,0.157c0.212,0.219,0.445,0.419,0.695,0.595   c0.16,0.113,0.25,0.301,0.237,0.497l-0.059,0.888l1.643,0.538l0.477-0.752c0.105-0.165,0.295-0.244,0.484-0.26   c0.318,0.002,0.616-0.019,0.912-0.069c0.193-0.034,0.39,0.037,0.519,0.185l0.585,0.668l1.543-0.782l-0.193-0.866   c-0.043-0.191,0.017-0.391,0.158-0.527c0.217-0.21,0.417-0.444,0.594-0.693c0.113-0.162,0.3-0.255,0.497-0.237l0.886,0.059   l0.538-1.643l-0.75-0.477C22.633,6.793,22.534,6.608,22.537,6.413z M17.59,10.436c-2.262,0-4.102-1.841-4.102-4.102   s1.84-4.102,4.102-4.102s4.103,1.841,4.103,4.102S19.852,10.436,17.59,10.436z"/>
                        </g>
                      </svg>
                    </span>                  
                    My Skills
                  </li>
                  <li id="5">
                    <span>
                      <svg  viewBox="0 0 64 80" x="0px" y="0px">
                        <path d="M6,17a14.08,14.08,0,0,0-3.91,9c-.67,7.12,2.35,15,8.27,21.76C16.11,54.31,23.14,59,30.16,60.94a25.48,25.48,0,0,0,6.87,1,15.47,15.47,0,0,0,10.43-3.55A7.83,7.83,0,0,0,50.15,50c-.64-2-3.47-3-5.09-3.43-5.93-1.49-7.1-1.82-9.9-2.6-1.95-.56-3.11,1.23-3.87,2.42-.34.53-1.06,1.65-1.41,1.76-2.1-.56-4.69-2.38-7.4-5.15H58a2,2,0,0,0,2-2V4S60,4,60,4a1.83,1.83,0,0,0-.09-.52s0,0,0,0,0,0,0,0a1.83,1.83,0,0,0-.26-.5s0,0,0,0a1.56,1.56,0,0,0-.39-.38v0a2,2,0,0,0-.51-.25l-.07,0A2.26,2.26,0,0,0,58,2H8a2.12,2.12,0,0,0-.57.09l-.08,0a1.8,1.8,0,0,0-.5.25l0,0a1.56,1.56,0,0,0-.39.38l-.05,0a1.83,1.83,0,0,0-.26.5l0,0a.07.07,0,0,1,0,0A2.27,2.27,0,0,0,6,4S6,4,6,4V17ZM34.66,48.55c.09-.15.2-.32.31-.48,2.27.63,3.8,1,9.12,2.38a6.53,6.53,0,0,1,2.3.95,4.14,4.14,0,0,1-1.57,4h0c-3,2.65-8,3.27-13.58,1.7-6.29-1.76-12.64-6-17.88-11.94S5.51,32.42,6.07,26.4c.28-3,1.43-5.55,3.16-6.89a5.3,5.3,0,0,1,2.19-1l.75-.15c.59-.12,1.18-.24,1.59-.3.05.14.1.34.17.6s1.77,7,2.7,10.74c-2.25,1.6-5.72,4.17-4.22,7a4.94,4.94,0,0,0,.27.47,45.72,45.72,0,0,0,3.81,5.43h0c3,3.76,7.63,8.5,12.37,9.75C31.92,52.81,33.7,50,34.66,48.55ZM19,39h0c-.3-.4-.59-.78-.85-1.14L18,37.68l-.68-1-.12-.19-.54-.81-.07-.12c-.16-.25-.31-.48-.42-.67a16,16,0,0,1,2.94-2.43c1-.72,2.07-1.46,1.68-2.82-.54-2.18-2.89-11.6-3-12.08-1.07-4.07-3-3.88-6.42-3.18l-.75.15c-.21,0-.41.09-.62.15V8.16L31.76,25.27a2,2,0,0,0,2.48,0L56,8.16V39ZM52.22,6,33,21.16,13.78,6Z"/>
                      </svg>
                    </span>
                  Contact Me</li>
                </ul>
              </div>

            </div>
            <div class="cont">
              <div class="contText">
                <nav class="nav">
                  <p id="menuBtn" class="menuBtn">
                    <svg height="30" width="100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </p>
                </nav>
                <div class="main">
                  <div class="div">
                      <h2 id="h2">Hi there!</h2>
                      <h4>I am ${this._portfolioOwner}</h4>
                  </div>
                  <h1><span
                    class="text-type"
                    ></span>
                  </h1>
                </div>
                <div class="btn"><p>My works</p></div>
              </div>
              <div class="footer">
                <p>
                  <a href="https://twitter.com/faceOfALion1">
                  <svg enable-background="new 0 0 56.693 56.693"  viewBox="0 0 56.693 56.693"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path  d="M28.348,5.157c-13.6,0-24.625,11.027-24.625,24.625c0,13.6,11.025,24.623,24.625,24.623c13.6,0,24.623-11.023,24.623-24.623  C52.971,16.184,41.947,5.157,28.348,5.157z M40.752,24.817c0.013,0.266,0.018,0.533,0.018,0.803c0,8.201-6.242,17.656-17.656,17.656  c-3.504,0-6.767-1.027-9.513-2.787c0.486,0.057,0.979,0.086,1.48,0.086c2.908,0,5.584-0.992,7.707-2.656  c-2.715-0.051-5.006-1.846-5.796-4.311c0.378,0.074,0.767,0.111,1.167,0.111c0.566,0,1.114-0.074,1.635-0.217  c-2.84-0.57-4.979-3.08-4.979-6.084c0-0.027,0-0.053,0.001-0.08c0.836,0.465,1.793,0.744,2.811,0.777  c-1.666-1.115-2.761-3.012-2.761-5.166c0-1.137,0.306-2.204,0.84-3.12c3.061,3.754,7.634,6.225,12.792,6.483  c-0.106-0.453-0.161-0.928-0.161-1.414c0-3.426,2.778-6.205,6.206-6.205c1.785,0,3.397,0.754,4.529,1.959  c1.414-0.277,2.742-0.795,3.941-1.506c-0.465,1.45-1.448,2.666-2.73,3.433c1.257-0.15,2.453-0.484,3.565-0.977  C43.018,22.849,41.965,23.942,40.752,24.817z"/>
                  </svg>
                  </a>
                </p>
                <p>
                  <a href=" https://wa.me/+2348094939264">
                   <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                   </svg>
                  </a>
                </p>
                <p>
                  <a href="https://github.com/mikechibuzor">
                      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                  </a>
                </p>
              </div>
              <div class="mouse"></div>
              <div class="mouseDot"></div>
            </div>
        </div>
    `;

    this._h2 = this.shadowRoot.querySelector("#h2");
    this._h4 = this.shadowRoot.querySelector(".main h4");
    this._h1Span = this.shadowRoot.querySelector(".main h1 span");
    this._menuContainer = this.shadowRoot.querySelector(".menu");
    this._mainContent = this.shadowRoot.querySelector(".cont");
    this._burgerBtn = this.shadowRoot.querySelectorAll(".menuBtn");
    this._navLis = this.shadowRoot.querySelectorAll("ul li");
    this.mouseDiv = this.shadowRoot.querySelector(".mouse");
    this.mouseDot = this.mouseDiv.nextElementSibling;

    this.getNxtElId_ChnClass(this._navLis);

    this.slide();
    this.typingEffectFn();
    this.mouseEffect(this.mouseDiv, this.mouseDot);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue) {
      if (oldValue !== newValue) {
        this.attributeEnabler = !this.attributeEnabler;
        if (this.attributeEnabler) {
          Attribute.attributeFn(this._nextElementId, this);
        }
      }
    }
  }

  slide() {
    this._burgerBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        this._mainContent.classList.toggle("slide");
        this._menuContainer.classList.toggle("slide");
      });
    });
  }

  typingEffectFn() {
    setTimeout(() => {
      this.shadowRoot.querySelector("h1").style.opacity = 1;
      init(this._h1Span, this._jobs);
    }, 4000);

    TextEffect.textEffect1(this._h2);
    setTimeout(() => {
      this._h4.style.opacity = 1;
      TextEffect.textEffect1(this._h4);
    }, 2000);
  }

  getNxtElId_ChnClass(navLis) {
    navLis.forEach((li) => {
      li.addEventListener("click", () => {
        this._nextElementId = li.id;
        this.className = "hidden";
      });
    });
  }

  static get observedAttributes() {
    return ["class"];
  }

  mouseEffect(mouse, mouseDot) {
    window.addEventListener("mousemove", (e) => {
      mouse.style.top = `${e.pageY}px`;
      mouse.style.left = `${e.pageX}px`;
      mouseDot.style.top = `${e.pageY}px`;
      mouseDot.style.left = `${e.pageX}px`;
    });
  }
}

export function initHomepage() {
  customElements.define("home-page", HomePage);
}
