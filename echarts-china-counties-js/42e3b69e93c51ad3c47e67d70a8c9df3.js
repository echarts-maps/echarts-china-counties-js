(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('夷陵区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"420506","properties":{"name":"夷陵区","cp":[111.32638,30.770006],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@E@GAGAIAC@C@C@ACCAC@E@CBAACAAAC@EBGBE@C@C@CAGCC@E@E@C@AC@CAG@C@A@CCIACGAE@CA@C@CBA@EAAAAGB@C@ACACCA@CAECCACAC@C@EBGFCBWRABGBA@AHBDDBBFBDABCDCBCD@B@PIPGH@DCFCNBDAD@@EDGB@BAD@D@F@D@DA@ABABBB@DAFABADBBCBABD@@D@B@D@D@DBD@BADGH@B@BBBF@BBDDDDD@F@D@DDDFBB@B@BABC@C@A@E@IDCBABABCDA@ECECAAAA@AAEAAAC@CAA@A@@@ABA@@B@@A@AA@CCAAEA@AAAAAAA@AEA@@A@C@E@A@ACCCAACCCEA@@@ED@BBBBH@B@@C@AB@@@@DFADEJADA@@@@BB@@@B@D@@@BB@B@D@BBBABABABEBA@A@A@@B@B@D@BA@G@C@A@@BAB@@@B@BAB@BC@EBIAE@A@G@C@AB@@@@AD@DDF@BADA@EDAB@@@D@DHHBFBB@BABC@C@AB@BBBBDBD@B@@@BADAD@@CDAB@@@FBF@BBBBBBD@BADCB@@AB@BAD@DB@@DABABA@A@ACCCGACCCAA@AB@@@@GDA@CA@@AB@BBBBBBDBD@BADCFC@@@CBECC@CBA@@@C@CAEACAAAEAA@ABA@A@A@GA@@A@E@EBABEBEDA@CDA@ADAD@D@B@BA@AB@@@BA@EBA@@B@BBDADE@C@ABBD@@BBAD@B@BAD@BGFCB@@A@C@CAA@E@C@EBEBEB@@ABA@ABA@A@@@A@A@CBA@E@C@@@EBC@EBCBCAAAA@@CBIAC@CCCCEA@CCAADI@ABAB@G@O@O@E@GBGBUFMB@@AAAACCGAGBKDEACCACMKQGaMKIGIA@@ACEECC@ABBDDN@DCBIBEBCBCDCBCA@CCCA@E@A@CAAAAABA@A@AA@C@E@E@CAIGSQAAC@Q@CAMECCCAAAC@C@AA@@@AAAA@A@IBA@A@A@@AAAAAA@C@A@A@A@ED@@ABAAA@AAA@@AAC@@AC@AAAAAA@A@A@A@A@A@AAAAAAA@A@@@A@ABA@ABABA@C@A@A@A@AAA@E@A@A@A@G@ABA@A@ABA@C@C@A@A@CBEDEACD@DFLBABADADAFAFAJAD@D@DDDFDFDH@@D@@@BBDF@D@B@DFDHDHBLBFBHDD@DH@@BB@D@DIDCD@DAFBFFFFFFFFFFDBDB@@@@B@B@@@F@D@B@B@@@BBD@@@BA@EBCDCBGBGDAD@D@D@F@DAFBBB@HCB@D@@B@B@BA@CBADAB@BBBB@BBBABADCB@D@BB@BB@@H@FABABCBABAFIJCHCDEJADABEFCDGHGFEBMDGBK@@@A@OBGBMFIDABMFOFMDA@KAG@C@ABAD@F@@@B@B@B@@@BBD@DADAFABCBABAAG@IDEFGDCBCDAHAFBH@DFDFBB@FBFBB@DBBBBD@DABBDAFCHKLCFEFAHAHCJ@DALCHAF@@@B@BBD@HADABABAF@B@D@DBD@BAB@BABADADBF@F@@BBFDHBD@B@F@JCB@B@FDFBDBDDBB@@@@ABCD@B@F@F@BBBBBB@BBD@LBXHHBJL@BABADABA@ABE@EAGCA@A@ABABAAA@A@ABA@ABAD@DAFADABB@BDFBHBPBFBBBB@BB@@ADBBDB@@@B@B@BA@@BBD@@BBB@@BBADA@@D@B@BBDB@@BDBD@F@DAJ@HBJBFBBB@BBF@BAB@BADAFAF@FBD@B@B@BADEDAB@BABADIBCDALCDAD@B@H@H@@@BA@ABAD@J@DADABA@AFAB@@@DA@BDBBDBFAH@BAB@B@BBBDDDFBDAJ@BAD@BAF@B@BFDHBDBDAFAB@FBJFJ@DB@DDFDDFCH@JFRHFD@FBBDBBDBB@DBBD@F@BBB@BFBDF@FAJBH@DD@BCF@DBHCJ@L@BBBFFJDJBLHNfADGDI@GBCBADAFAFADAHAD@D@FCDADABEBCD@DCBAFBD@HHJAP@FBBFBH@DBLL@BABCBGFGJGRCD@FDBDFFBD@NCL@DDBH@BLVDHADAH@D@H@DADCBCBIBGFCBEBCBAH@BADEDABEBCDADAF@BADCDCDCD@F@D@D@FBFBDBHAD@@IDCBABA@@BDBD@HDFAJBBBBFDAD@D@F@D@JGD@B@DBBBBF@FBBDHBDBDDBHFDDBBDBBBD@F@DABADCB@BAB@DBDAB@BBFDHDFBDBBBBDFHDDDDB@B@DADA@ADEBEBAD@DBBB@DDBFADCDADABCBADAD@D@FBDFFLBFBHDDBDBBBBFDD@FBJ@LAFANETENCJAFEFCDCBCDGBGAEAKEKCAICAAACBGDEDA@CAG@IJQFEDAJAFBF@J@NAD@BADCDADAD@H@B@BA@C@AACAC@C@ABA@ABCBAD@BAB@FEDEHAFAHADAAAIC@ABADCBEFEDCDE@CACKGEAA@A@A@ONGHEFGDK@EAG@ICOM[QAA@@ACACACBADGBADAJCBA@CACCCGEICIK@GFGDAJALCHIDEBABABCHCFA`BHADC@C@CSMGCEBEBIFMFK@GAEEI[AE@K@O@GCECCCCC@K@C@CA@C@O@EBEBAFCD@JADEJELEH@H@DADAPQFCDAF@HBJFD@F@BCBCBCB@N@B@D@FCDCDEDCJEFELCD@HFJDB@D@BABADAB@BA@A@@@AA@C@CAA@AA@AAA@E@AAACC@A@A@@DA@A@@A@@AA@@BA@@A@@BAFARBBAPEDAF@LCFADAHAJCHCDADCFADCFAFADADADADCBA@@BADABC@@@@HABABADABA@ABGDC@ADEBEDEBABABABAB@B@B@B@FDDBBBH@BAH@FAJEB@FABA@AB@@ABABA@AB@D@DBB@DBD@@@BEAMACAACAE@CA@C@ECEACCGBKBABAF@D@BABCB@BAB@DBJHD@FBFDJ@FADADADCFADC@ABCDADABEAAACIEEAGGAC@C@CBABCBABCAAB@BAB@@C@EBE@C@CAA@EAABAB@D@B@BAAA@ACAAAAACAAA@@@@AAAC@A@A@A@ABA@A@@@A@@FQBG@C@AAAAACAEEAAACAC@A@CBCBADAD@FCBABADGBABADCBAD@BABABALCJABABABA@AAEKEAACEAG@G@ADAB@DDBBBBF@B@@@DABCBC@EAI@AA@@AAA@A@@BAHAFADAFCFAHCHCBADADC@ABC@C@AACEGAC@C@ABAB@F@B@@ABA@A@AAA@A@C@GBE@A@EAGAA@EACAEACGKAA@C@A@CDG@CAAA@EBC@AB@AA@@AACBC@C@A@C@A@A@A@AGA@AAEAEAECAAC@C@ADCBCBAFEDCDEBCBE@CBC@AAEAA@A@CBOFOBIBE@CBC@CBEBIFG@EBE@CAC@CBABEBABADCDAB@D@DBBD@B@DBD@@@BBDBBBBB@BBBB@D@D@BBBB@B@BA@@@CBEDAFAB@DCBB@DBB@B@B@B@@DBF@DADAB@@ABA@ABADEB@AA@AAC@A@CBC@A@@AA@AC@A@AB@@A@A@AA@AAACC@@AC@AB@@ABA@A@CAAAACC@@BABAB@@ADC@ADCDA@ABADABA@@@A@A@AA@BC@AAC@A@@BA@AD@DBBBBB@BB@@@DCB@BHBBDBD@FB@BBC@C@ABCBADEBADC@AACAABADE@A@A@AA@@AB@@@AAA@A@@@AAA@@@@A@@AA@@@@@@@AA@@@A@@B@@A@@@A@@@@AA@AA@@A@@@@@@@A@@@A@@A@@@@A@A@@@@@@@A@@@@@@@@AA@@@AAC@A@@@@@A@@@AA@@AA@@C@A@A@@A@@@AAAC@@A@@@AAA@AA@CC@BA@@@A@@@@AB@@A@@A@A@@@@@@A@AA@A@C@A@EAA@"],"encodeOffsets":[[114291,31325]]}}],"UTF8Encoding":true});}));