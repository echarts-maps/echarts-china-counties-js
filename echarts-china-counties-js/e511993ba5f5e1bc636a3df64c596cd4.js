(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('沙市区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"421002","properties":{"name":"沙市区","cp":[112.25193,30.326009],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@DE@CCEAAEE@AC@CD@BBBEFBB@BLHADGLABEJ@BCDKEADCDJDADFBBALDL]BCBEBG"],["@@ABABABABCB@@A@E@C@A@E@@@A@C@A@A@@BCBABED@@EDCBCBI@I@GBC@MDA@ODC@KBABAF@@@F@B@F@FADGBMBAAAAAG@E@CCCEBEFI@CBGBBBBLDH@JAR@LITKPMNABABGHCBKFABCBEBEDGFCDGFEDGFCBA@@@ABE@EBBTABAF@B@@AD@B@B@@B@@@BB@@@BBBAB@@A@@@ABAB@@BBB@BADAB@@@B@@@BD@@@BBD@@DD@@BDDDBB@@BB@@B@@@BBFBDBBB@@@@BB@@BD@DAB@D@BBBBDBDDFBH@B@D@B@DBBBBD@DBB@B@FBJBB@@@B@BBB@BB@@BD@@@BBD@JDDF@HAHEB@FEJEJG@@JE@@JCDAJBP@F@FB@@HDHHDDDFJVNF@@HDJFJFJHDBRLNBLBF@FBJAP@HAFCHAF@HBF@B@BFDDBHBDHFLDH@DAHAJ@FCNEHELGNGPGJEHEFGZSFCBADAL@B@JB@U@KK@C@MG@DG@@BO@@FC@G@AAECAA@C@C@C@ABA@@BAB@B@@CDA@CDEDCDADABCD@DC@@BG@A@A@@@@@A@A@CHAJA@G@C@C@CAA@AS@@@EU@OBKBGDO@A@EBA@ABC@@DGBA@A@@B@BE@@@@CAiiACAC@EAEAECEEECAAAEAYIGAE@KAGD@C@EACA@CA[BI@CA@@@E@AA@C@A@ABAFCBC@@@AE@@A@@B@@ABCBG@@@@DAB@@A@AAA@@C@@AAA@@@A@C@ADADBD@B@B@@EBE@C@A@@A@IAAAA@GK^KCABEABCICDCBCC@HMBABAA@DA@A@@@ABA@@B@B@@@@ADC@@BC@AAAFEAA"]],"encodeOffsets":[[[115099,30933]],[[115091,30923]]]}}],"UTF8Encoding":true});}));