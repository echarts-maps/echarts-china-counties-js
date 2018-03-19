(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('洋县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"610723","properties":{"name":"洋县","cp":[107.545836,33.222738],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@AA@@@A@@AA@@@A@ABAAAAA@@@@A@AAA@A@A@C@AACAC@A@AA@@@AAA@CAAA@@AA@@C@@@A@AA@@AAA@A@ACC@@CAA@@AAA@AAE@A@A@C@@BABAF@@A@A@A@CBC@AA@@AA@AA@A@AB@@A@EBACE@@BABA@ABA@@@A@@A@@@A@A@AA@CAA@A@@BA@A@A@A@A@@AA@@@@@A@A@@@AAA@A@@@@AAAAA@@AAC@@@AA@AA@AB@@A@@BA@A@@AA@@AA@A@@B@@@@@@@BBB@BB@BB@@@B@@AB@@A@A@A@@@A@@@A@A@A@EAAACACAAA@@CA@@ABABA@CB@@@BA@A@@@ABAB@B@@@@@DB@@B@@B@B@B@@@@@@B@@@@CB@@A@@B@B@BA@@@ABA@@@@B@B@D@@A@ABA@@@@BA@A@ABABA@C@A@CA@@AB@BA@@@A@@@A@@AAA@A@A@@EAA@C@A@@@AA@AAC@AAA@@E@A@A@A@ABABA@A@@@C@@@AB@@C@A@@@A@@@A@@@@@AB@@@B@@C@@@ABAB@B@@B@B@@@@B@@EBAB@@ADAB@BAB@BAB@@@@BD@B@BB@@B@@@@AD@@@@@BB@@@BB@B@B@B@@BB@@BB@B@@A@A@G@@BA@A@ABCD@B@B@B@BCBCD@@@B@@@BBBFDBBBB@@BD@B@B@@@B@@@BB@@@BAB@@@BBBB@@BB@BA@ABA@ABA@@@@B@BA@CBC@A@C@@@@BA@AB@@@D@B@@@BA@A@@@AAAA@@CAAA@@AAA@AA@@A@A@A@@BA@BB@@BBDBB@@B@@@B@BA@@BA@A@A@@@ADAB@@@BB@@B@BB@@@D@@@BB@@@B@B@B@@CB@@AB@@@B@D@@AB@@CBA@ABAB@@DFDBBBB@BBDDBFBB@@@BA@A@AAAACACACAC@EBA@A@C@ABA@CBC@EDA@EDEBCBABEBC@A@@B@@BBBBBB@DA@@@@BBF@FA@AD@BCBABA@@B@BDN@H@D@B@BA@@@@@@B@BAB@@A@C@@@AB@@@@BDB@@B@BAF@D@BB@@B@BAD@D@B@B@F@BABA@@@AB@@A@A@@@AACA@AAAA@CB@@A@A@A@A@@B@@@B@DBB@@BD@@@BB@@B@@DA@@@BB@@@@B@@AB@@A@@@@DA@A@A@@@A@A@AB@BA@A@A@@@@B@@A@@B@B@B@B@@BB@B@B@@@DA@C@@@@B@@@D@@BD@B@@AB@@@BA@DB@B@BABBD@B@@B@@@B@B@@@@@@HAHAB@BB@@@BB@@BDBB@BAB@D@B@B@B@D@B@BABAB@@BBAB@BA@C@@@@B@DB@@@BBB@BBBB@BB@@BFBBBB@B@BB@@BB@B@B@@@@@B@B@BBDDBDBBB@@@@@@AD@@@BA@ABA@@@AB@B@@A@ABAB@@@B@B@@FF@@BB@B@@@BBB@B@@@BBBBBB@@@BD@B@@@BA@@BA@@@AB@B@BABCB@@ABBD@@ABADA@ABABA@A@@@@B@@@@BB@BA@ABABABAB@BCD@@CBCB@@@@@BB@BB@@BBBB@@@F@B@@@BABABAB@@@B@B@BBBAD@@@@BD@B@D@BA@A@@@BBBDBBDDBF@B@@@BABCB@BA@@B@B@@BD@B@B@B@@ADAB@B@@ABABABA@AB@@ABABABABAB@B@@BB@@@B@@ABA@A@C@@@ABAB@BAD@BAB@@@BBD@@AB@B@BB@@B@B@D@@DB@@@BB@BBBB@B@D@@DB@@@BABAD@@BB@BBB@@D@BBBB@@@@AB@BAB@D@B@@@BA@@DBBDB@BB@D@FBDB@BB@DBBBDBB@@BB@@BBBBB@@B@BDB@@BA@@D@B@DBB@BB@@D@B@@@@AB@BABAD@@AB@BB@@B@B@B@D@B@BA@CB@B@@AB@@@B@BBDA@@B@DA@ADA@CD@B@@@B@@@BBB@BB@FDB@BBF@D@@BB@B@F@DBD@@@@ADE@@BAB@BAD@B@D@D@BBB@DDB@BDDBB@BBB@@B@@BADADA@AB@B@DAD@B@B@DDDDBB@@BBDB@@DB@@B@BBBBBBBBJBD@FB@@B@B@@@BBB@@B@B@@ABABAF@B@BB@ABAD@B@BAD@@A@A@@@A@ADA@CDA@ABA@AB@@@BADABA@@BB@@B@B@@CBEB@@ABCBAB@@A@AAACA@A@CAA@A@A@ABA@A@AB@B@@AB@@@B@@A@A@A@C@A@@@A@A@A@@@A@A@A@C@C@@@CB@BA@@BA@C@C@CBABA@ADABCB@@ABADAD@BAB@@AB@BAD@@ABABCBA@@BAB@@A@ADA@@B@@@B@B@BAB@BBDBB@B@B@B@B@@@BA@@@ABCB@BCA@AC@A@E@CAA@A@C@A@@@ADAB@BCBABABC@@@@@@AB@@A@@@A@@B@BC@A@A@@A@ABA@@@E@@@AA@@A@@BC@ABC@@@A@CBC@GBABEBABCBA@@BABAB@BABABC@A@@@C@A@CAC@A@A@A@@@CB@@GAAA@@A@CBA@A@AAC@C@A@@AC@C@A@@@A@ABA@A@EB@@A@A@CAA@A@CAA@G@AAC@E@C@CBA@A@AB@@A@ABA@@@@B@B@B@B@B@B@B@@ABA@CDAB@@@BA@AD@B@B@B@B@@ABABAD@@ABA@A@CBABA@ABABABA@ABAA@B@B@@@F@B@@@BA@CDAB@@@BBDAH@DD@BBBA@@DADA@AB@F@D@D@D@B@B@B@@BB@D@BB@@DB@@D@B@@@B@B@@@B@@BB@@@B@@@B@B@BB@@B@B@B@D@B@BB@@@B@B@@B@B@BB@@BBB@@BB@B@BBD@BBB@BBBBBBBB@BB@@@D@H@@@@AB@@@B@D@D@@@D@B@BB@@B@BBB@BBBBBD@D@@BBBB@DBB@B@@ADAB@@BB@BB@@BBB@@BBBB@@B@B@@BB@@@B@B@@@B@@@B@D@@@BB@B@@@BBAB@B@DAB@D@@BB@DBDBB@@@@@@AFAB@BAD@F@D@BAB@DA@@B@@@@@@ABAB@@C@ABC@@B@B@@AB@BAB@B@B@B@D@@@D@B@B@BCBADAB@B@DAB@B@DAB@@@BADC@@B@FAB@BBB@B@@@B@@@BC@@@@B@@@BB@@BBB@BBBDBB@@B@B@@@D@B@@@DADCDA@@@@BCBAB@@AB@B@BAB@BABA@A@@@A@@AC@@@A@@BAB@@CFEBCB@DA@A@@DAB@@@@@@ABA@@DA@@BA@@AC@@AA@A@A@A@AAA@@@@BAB@B@DA@AB@@ADAB@@AB@@@D@B@BA@@@BBBB@@@B@B@D@@@D@@@B@@@B@@BB@B@B@B@@BD@@BDDB@B@B@B@D@BBBAB@B@@ABABA@@@@BB@BBB@@@B@BBB@@@B@BBBBBB@BBB@FBF@D@B@@AB@@@B@@@DBDBB@DBDBBBDD@@@@DB@@@B@B@@@BB@BBD@DB@@B@@A@@@@FBDBB@BB@B@BBDB@BB@@B@@@@@B@@B@@AB@B@@B@@BB@@@@@ABA@@@@B@@@BB@@B@@@@BA@@BAD@D@@@BBBBB@B@BBB@B@@@DABAD@DAB@BA@@BBB@B@D@BAD@B@DAD@@@B@BBBB@@B@DBB@HDB@BBB@BB@B@B@B@@@D@B@@BBB@@BB@@@B@@BB@B@@BB@B@B@B@BAB@@@BDBBBBBB@B@@@BB@@@FBB@B@BB@@B@B@B@B@B@BAB@BAB@BAB@B@@@BAD@DAD@B@DABC@@B@BBB@BBFD@BBBFBDBB@B@@B@BBBBB@BBBBBBBBBDBB@F@B@BA@@BBB@BBB@D@DB@@B@B@B@B@BBD@B@FAD@F@@@DC@@B@@@@A@ABA@@B@BEBABADC@AB@@AB@@BD@BBB@HEDADA@@D@D@D@BB@@D@D@@@BA@@@ABCB@BA@@@A@A@A@A@AAC@AAEAA@@@A@EBC@E@CBAB@@@B@@A@@@CAA@@@AAC@A@@@A@@@@BGB@@AB@BBBAB@@ABA@ABA@AA@BA@A@@A@@A@@@@BAB@B@@ABB@@D@B@B@B@F@@@BA@@@A@A@@HABAB@@@@@B@@B@@D@BBDADAB@D@FA@@DBF@B@DA@@FABA@@B@B@@@@A@A@ABA@ABC@A@A@ABABA@AB@@ABA@A@@BA@ADE@@BA@@@@@A@@@A@@@AACA@A@@A@A@A@A@A@@@@@A@A@ABA@AAA@@@CBABA@AA@@@@A@AB@@A@CBAA@@A@A@@@@BA@A@AAA@@BA@A@@AAAA@@BAAABACAA@AA@AA@AA@@A@@A@AAA@AA@@@@A@@@A@@@AB@B@BA@@BCAEBA@A@A@@A@@A@@@A@@AA@@@A@@AA@@AA@AAC@A@A@AAC@@@@@@B@BABB@AB@@ABA@A@A@@AC@EA@@@AA@@@ACC@AA@@AA@@@AA@@@A@@BA@@BA@@@@BA@AB@@A@@BA@AA@@A@@@A@A@@@CBA@@@@@ABA@@@A@@@A@@@@@AB@@AB@BC@A@A@@AAAA@AA@@A@@@CBE@EBG@A@A@AAC@CDABA@A@@@A@CBC@@BABABABABAFCHEBABABABA@@HCD@@A@@@CBAB@B@FCB@BB@@@@DCB@B@DABABA@@B@DA@@B@B@B@BA@@B@D@B@@@B@BA@@@@DAF@D@F@B@B@B@@AB@@BBABBB@B@@@@BB@@B@@B@@BB@@@D@@@BAB@@BD@D@BAB@@@BAB@B@B@@@D@@@B@B@B@D@F@BBB@B@B@@@@A@A@A@A@@@AB@BADABABA@A@A@A@@@AAAACA@BAD@@A@@DC@@@AD@B@B@@@B@BAB@@AB@BBB@FDDB@BDA@@D@@@@@@@@B@BB@B@@@B@@@@ABADCB@@AB@DBBB@@DD@@BBDDB@D@BBDABADADA@AB@@@DABAB@@AB@@A@@@@B@@@B@BBB@DAD@B@DAB@HABBB@B@B@D@D@B@DABA@ABA@ABABE@A@C@@@CB@@@FAB@@AB@@@@CA@BC@@@AB@BA@A@A@AA@ACAA@C@CACBA@A@AAA@@@A@A@A@AB@B@BA@ADA@@D@B@B@B@@ABABA@@@@DA@@F@@@BABABA@A@@@A@@BABCBAB@DCBA@A@@BA@@AC@@A@@A@@@AA@@@A@@A@@@C@@@AA@@A@A@C@@BA@C@AB@@ABA@@@AB@@@@AAG@AAEBADADABA@ABA@@DAD@@@B@@AHAD@B@DAFAB@@A@@@A@ABA@@@A@A@A@A@@AA@A@AA@BA@@@@B@BCBA@AB@@ABA@@@@@G@@@@@C@@@A@@BC@A@AAA@A@@ACBA@A@ABABA@A@@A@A@@A@@@CAAAAAAA@AAAC@C@@@@@AB@@ABABA@A@@BAB@@AB@@AA@AA@@@CAA@C@@@ABABADABA@@B@@@AA@@@A@@@A@@B@@AA@@@@A@A@@FDBBBBB@@BB@@@D@FAB@@A@@B@B@D@D@B@BBB@@@BBB@B@@@BBBB@@@BBD@D@@B@@@@@B@B@@@B@@@BB@@BB@@B@@@B@B@BCDCBAB@@AB@@AA@@A@@@@BE@@B@@ADAB@B@B@@@BA@@@CBA@@@@B@@@B@B@B@@AB@@A@@EC@A@@@A@@@@BA@@@@@CB@@@FCBA@@B@@@BBBB@@B@@@BAB@@ADCD@B@B@@A@@BA@@@ABA@A@A@@@A@A@@@A@AB@@@@AAAEC@@@A@A@AAA@@AA@@CAA@AA@@@@BCB@BAB@@@BA@@DC@@@C@ABA@@E@CAA@@@BC@A@A@A@@@@AAA@@@@AAABA@@B@BA@@@@@AAA@@@AA@@@C@A@C@A@@@@@BA@@A@C@A@@@@A@A@A@@@ACEAA@AA@@ABAB@@A@AA@CCAA@@AAA@@@CBADAB@B@F@B@@@@B@B@@BBBB@@@BB@@@D@@@@@@@B@@AAAAA@A@A@AB@@@@AAA@CDCBA@AB@BAB@@AAA@AAAA@A@@@ABABA@@@AACAA@A@@BC@A@C@@A@@A@@BABA@@@@@C@A@@@@A@ABA@@BB@@B@BA@@@@ACAAAA@A@ABGFABAB@@A@CAAAAAAAACAACC@AA@@@A@CB@@CB@BABAB@BA@CBAB@@A@@@AAAA@A@E@CBCDC@C@A@AAAACECA@AAA@ABA@@@CA@@AB@@@BCBADA@@@A@CB@@A@@BABA@@@@@@BBB@DGDEDCBC@KAGAEACACC@ACBCA@@A@AC@@@A@AA@CAA@@BA@ABA@@@AA@@CA@@ABA@AAA@@@ABA@A@@@AAA@A@A@I@@@AD@@AF@B@@@@A@ACACAA@@AAAA@@A@A@@@AB@@@BAB@B@BA@@B@@@@AB@B@@@BAB@B@B@@A@@@A@@@AAAA@@A@C@A@@@@@@AAA@@A@@@CBABA@A@AA@@EBEBA@@@@AA@@AA@A@AAA@@AAAA@A@C@A@A@A@C@A@@@A@CD@@@@CBAB@@ABA@A@@@@@@A@@@@@ABA@A@C@@@A@@@A@@@AA@ECAA@@@A@C@CAAA@A@AA@@AAAA@@A@@AA@@A@@AA@AA@A@C@A@@@@A@AA@@A@@A@A@@@AAA@ACAA@A@@AAAA@ACC@@AAB@@AB@@A@@@A@A@ABA@A@A@AC@AAA@A@A@C@A@A@@@ADA@@BA@@@A@@@C@C@@@AA@@C@C@A@@@@@AC@AA@ABC@C@@@A@A@@AA@AAC@A@@@@AAAA@@AA@@AA@E@@@A@@@@ABA@@BCB@@A@@@@AAACACA@AA@@@A@@@@A@AAA@C@AC@@ACAA@@ABCB@@@@A@@AA@A@A@@@AA@@@A@C@@@ACA@@C@CA@@@A@A@@AA@@AAA@@AA@ABA@@@A@@@@@AA@ACAA@@@A@A@@@A@@ACC@@@AC@AA@@@A@AAA@@A@A@AAA@AC@@@A@@@A@AA@@@AA@@@CAA@@AAA@AA@@CBA@A@@B@@ABA@A@C@A@@AA@@@@B@@C@A@ACAA@AA@AC@@@@A@A@AACBA@@@A@AB@@C@@B@@CDA@A@ABC@A@@BA@@BA@@@BB@DABAB@BA@A@ABAB@@A@@@A@AAA@CCAA@AA@@@A@@BABADA@ABA@BBAB@@@B@BA@@@A@AAA@A@C@ABCAA@ACAAA@A@A@AC@@A@@A@@@@@A@A@@ACA@CAAA@AA@A@ABC@@@GB@BABA@A@AB@@CBA@@CC@@ACC@A@@"],"encodeOffsets":[[110192,33865]]}}],"UTF8Encoding":true});}));