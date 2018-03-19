(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('仙游县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"350322","properties":{"name":"仙游县","cp":[118.691637,25.362093],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@IAE@CD@@C@GA@@@A@@@@@@@@@@@@@AC@@A@@@@A@@@A@@@@A@@A@@@A@@@@@A@@@@@@A@@@A@@@@@@@A@@@@@@B@@@@@@A@@@AB@@AA@@A@@@@@A@@@@@AA@@@@@@A@@@@@@@@@A@@A@@A@@@A@@@@AA@@BAA@@@@B@AAB@A@B@@@@@@@AABB@AB@A@B@@@@@@@@@A@@A@@@@@A@BAA@A@@@@@@@@@@@A@@@B@A@@@A@@@@@@@@@@@@@A@@@@@@@@A@@@B@A@BA@B@A@@@@@C@@@A@@@@@ACCGC@A@@@@B@@AB@@A@@@B@BFBB@@A@ABA@@B@@AB@@@BA@@@@A@@@@@@@@C@C@@@A@A@AB@A@@@@@@BA@AB@AAAAAAAAA@AA@@A@EBA@CAAAAAC@ABA@@@@BCAABCAA@AAA@A@A@CBC@A@A@CCA@C@@BA@@B@@@@@BB@@DB@@@@@GAC@A@A@@@ECAAA@AAA@@A@@C@C@@@@A@@B@@@ACA@@@AAAACAAA@@@@AA@A@@@@AB@A@@@C@ABABA@@@A@A@A@C@@BA@A@@A@A@A@A@A@@@@AA@C@C@A@@@@BA@@BA@AAABA@AA@@EA@C@@AACA@@@@A@@@@@A@AA@@A@C@@@A@@@CC@@A@@A@@A@@@@@@A@@A@@@@ACBAB@@AB@@A@@@@AAABA@@@@ACC@@@AAAA@@@A@A@AA@@@A@@@@A@@A@@@@@@A@@@@A@@A@@A@A@A@@A@@@A@AAA@A@@A@@@AAABCB@@AAC@A@A@@AA@A@@@AAAA@@AA@@CA@@@@@@@@@A@A@@@CA@@@@@@A@@@@@A@@A@@@A@A@@@@@@@@A@@A@@@A@A@C@A@A@AAA@A@A@@@A@AA@A@@@@@A@@AA@@@@A@@@@BB@@@A@A@@@@B@@@@B@B@@@@@AB@@@BB@BB@@B@ABA@@@AA@@@@ABBB@B@@BB@@@@@B@B@@AB@@AB@@@B@@BBBB@B@@@@@B@@A@@@A@@@@@@B@@@@EBAB@@C@@@A@A@A@@@@BB@@B@@A@@BA@AB@@A@@AAB@@A@BB@@@@@@@B@@A@AB@@@BBB@B@@@B@@A@@@@B@@@B@@@B@@@@@B@@@@@BB@@@@B@@@BB@BB@@@B@@ABA@@@ABA@@@AB@@A@A@@@@@@@BB@B@@AB@@@@@@@B@@DB@BB@@@@@B@@@B@@@D@B@@@B@BA@@@@BB@@@BB@@B@@@@B@@B@@@BD@@@BB@B@B@B@@@@D@@@@B@@@@@@@@@B@@B@B@@@@BA@@@@BB@@@B@@B@@@@@@A@@@A@@A@@AA@@@@@AAB@B@@@B@@@D@@@@@@AA@@@@A@@@A@@@@AA@@BA@@@@@A@@@@AB@@A@@@A@@@AA@@@A@@BB@@@@B@BAB@B@@B@@B@@@F@@@BBB@@@@A@AB@B@B@@@@B@@@B@B@B@@@@@@F@@@@@BA@ADAB@@@@B@@@B@@BDBDB@@@B@@@BBB@@@BA@@@A@@@@@AB@@@@@B@@A@@B@B@@A@AB@@@B@B@@BB@@@@BDBB@D@B@@B@B@@BD@@@@@@@CD@@@@@@B@@@B@@@@@BB@@@@BB@@B@DB@@BA@@ABABAB@B@@A@@@ABA@@B@@@@A@@@A@A@@@AB@@ADA@ABA@@B@@@BA@@BAB@@A@@@C@AA@@A@@A@AA@@AAAAAAA@AABA@A@A@@@A@@@AB@@@@@AA@@A@@@@A@@BABAB@@@@A@B@@AA@@@@@@A@@@A@@AA@@@AAA@C@@@AAA@@A@@BA@@D@@@BA@CB@@A@CD@@@BAD@BA@A@@BA@@B@@@B@@@B@@@BB@BB@@@@@@BBA@BB@@@@@@B@@B@@@@@@B@@@B@@@@@B@@A@@@@BA@@@@BB@@@@@B@@B@B@BBBBB@B@@BBB@@@B@@@B@@BBB@AB@@A@@@@B@@@@B@@@@BB@@BFB@@@@@B@@A@AB@BAB@BABAB@BC@@@@@@BBBB@@B@BB@@@@BA@A@C@ABA@ABA@@@A@@@@@AAA@A@A@CA@@@AA@@@@@A@@BAB@@@@AA@@@A@@@@A@A@A@@@@@@@CB@@@@@B@@C@A@AB@@AB@AA@@@A@@B@AA@@@@A@@AAAAAAAA@@@@A@@@@@@AAA@AAAA@@A@AA@@@@BA@@BAB@@A@@B@@AA@@@AA@@@A@A@C@A@@@@B@@@@@B@@CBAA@@@BA@@@A@@@A@@@@@@@@B@BAB@@A@@@AA@A@@@@@A@@@AA@@@B@A@@@A@@BAB@@AB@@@B@@A@@BCB@BA@@B@@A@@AA@@@A@A@@AA@@AA@AA@@A@@@@@A@A@@@@@A@@@A@@@@@A@AB@AA@@@AAA@AA@@@@@B@@@BB@@B@@AB@@AA@@@B@@@B@@@@@@A@@@AAB@@@@A@@@@@@AA@@@@BA@@@A@@@A@@ABC@@B@@AA@@A@@@@@@A@@@A@@@@@A@@@A@@@@@@AB@@AB@@@@AABC@@B@@@@A@@@AB@A@@@@@@@@A@@B@@@@@AAA@BA@@@@@@@@BAA@BA@@@@@@A@AB@@@@ABBDA@@@@@A@A@@@C@C@CBCAA@@BA@A@@@A@AAA@C@A@AB@@AAACA@A@@@@@A@@B@@@@AB@@@@@@A@@B@@@B@@@B@@@@AAABA@A@AA@BA@@@AA@AA@A@A@@@AB@@BBBDAA@B@@@@BB@@@BAB@B@B@@B@@@AB@@A@@BA@@BAD@@@B@B@BAB@@A@@@@@BBB@BB@@BBB@@@@@@@@B@@@B@@@@@B@@@B@@BBB@@@@BB@@@AB@@@B@@@DB@@B@@@@@@A@@@@@@BA@@@@@A@@B@@@B@B@@@B@@@B@@C@AA@A@BAA@@@BA@@@@@@AA@AA@@@A@@@@@AA@@@@@@@@AB@AAB@@A@@@A@@@@A@CA@@A@@C@@@@A@@@@A@A@@B@@@B@@B@@@@@A@@@AA@@@@@A@@@@A@@@A@@A@A@@B@@AB@AA@AAABAB@@@BA@AB@@@B@B@B@BBB@BB@BB@@BBB@@BA@BB@@ABB@@@@B@@@B@@BB@@B@BB@@BBB@B@@B@@BAB@@AB@@@BBB@@BA@@@A@@B@@A@@@@@A@@@A@A@A@@B@B@@BB@A@@@B@@B@BD@@ADA@BB@B@@@@@BAB@BAD@B@BDB@@B@@B@@@BB@B@BBBB@@@@@B@@@@BB@@BB@@@@@B@@@@@@@@@@@B@@@@@@@@@@A@@B@@@@@@A@@@AB@BA@@@ABAA@@@@C@ABCBA@@@@@BBB@@@BB@@@@@@AB@@@@@B@@@@@B@B@@B@@@@B@@A@A@@@A@A@@@@B@B@B@@@@A@A@@@@BA@A@@BA@A@@B@@@@@@@@A@@BA@@@@B@@@B@AAB@@@BA@@B@@BBA@ABB@@@BB@@A@@BC@@@@@@@@@A@@@A@ABEC@@@D@@@B@@@BB@@B@@@@@@@B@@@@AACAEC@@@@A@@@AB@B@BAFA@B@@BB@B@@@B@@@@B@BB@@BBB@@@B@B@B@@DB@@@@ABABA@A@@AA@@B@@@B@@@@A@@@@@AA@@@@@A@@@@@@C@@BA@C@A@@B@@@@BB@BAB@BA@@@@BB@@B@@@B@@A@@@B@@BA@@B@BA@@DBB@@@BA@@D@@@@ABBBA@@@B@@BB@@BABAF@@A@@AA@@@A@A@@@A@@A@@A@E@@@A@A@A@A@@@@@A@A@A@@@@B@B@B@B@@@B@@@BA@@@@BA@@@@B@B@BA@ABA@A@@@@@A@BB@@@B@@D@@@AB@B@@AB@B@@AB@@ADAB@@@@BB@@@@@D@BBB@@@B@@@B@BB@DB@BBB@@BB@@@@B@@BBBBB@@@@@@@@@BDD@@@F@B@@@BBB@@B@@AB@B@@AB@A@@@@@@@BA@@B@@@BA@@BB@B@@@BA@@@@@C@@@@@@BD@BB@@@@E@B@@B@B@@D@@@@@@BA@A@@B@B@@B@@B@B@@@@BBB@A@A@ADB@B@B@@@B@@@@@ABAB@B@B@@@@A@@@AB@AA@@@@@A@A@@BAA@@@@A@@@@@@A@@AB@AA@@@AA@AABA@A@@B@@@@BD@@@@B@@@BB@AB@@@@@B@@@@@B@BB@@@@@@BB@@@@@B@BB@@@@B@BAB@@BB@BA@@@@@@B@@AA@@@@AA@@AA@@A@@@@@@@@BB@@@@BAB@@@@@@A@C@A@@@AB@@A@@B@BB@@BB@@BBD@B@@A@@@@@A@@BA@@AA@A@@@AB@@A@B@BB@@@@B@@B@@BB@@@@A@@BA@@@@B@B@@BB@@@@@BB@DB@@B@@@@BB@B@B@@@BBA@@@AB@@@BA@@@@@C@@@A@@@@@@@@@A@@AA@@@@@@@@@@BAB@@B@@@@@B@@@@@B@@@@@BB@@B@B@@@@@@@@BA@@B@@@B@@BB@@B@@B@@BBB@BB@@B@@BDBB@AB@B@B@@@@@@B@B@@BB@@BB@B@@@@BAB@@@@@B@@@@BB@@@B@@@@@BB@@@DD@@B@@B@@B@BB@BB@@@@@BB@@BB@@@@@@@@B@@@@B@@@@B@B@@@@B@D@@C@@@AB@BBBBBB@@BDBB@@B@@@@@B@@B@@BB@@@@B@@B@@@B@@@@@B@@B@@@@B@@@BA@@@BB@B@@BB@@BB@B@@@B@@A@@BBB@@@@B@@@@B@@B@@A@@B@@B@@@@B@B@B@@@@@B@@BB@@@BA@@@@BB@@BA@@BB@@B@@@B@@@@@BA@AA@@A@@@@@@@@B@BB@@B@@@BBBBB@@B@@@@@@@@BDB@BBB@@B@BBBB@B@@BA@BBB@@BB@B@@@B@@@@@B@@D@BBBBB@BB@@B@@B@BBBBB@BB@@BB@@BBBBDBB@BA@@@AB@@A@AB@B@@@@B@BB@@B@@@DA@@BA@B@@@@BBDDB@@@@ADA@BB@@@@@@BA@ABCBAB@@A@@BB@B@B@FBD@B@@@@B@@A@AB@@AF@@@BB@BBB@@@@B@@AB@@BBBDBBBD@@BB@@B@BB@@@@@@@@@@ABA@A@ABAB@B@@C@CBAAA@ABCBCBA@A@A@@@ABA@AB@@@BAB@@B@@BB@@@BDB@BB@BB@@BB@BBB@@BB@B@@@@@AB@@DDDB@@B@BBAB@@AB@@AB@@ADA@DB@BBB@B@@@@A@@@ABAB@@@@BB@@DB@BA@BB@@DBBBB@DFBB@BB@BA@@B@@AB@BA@@@@B@@@@BB@@@BBB@B@@BB@@@BB@@BBB@B@@B@@D@@@@@BA@AB@BA@@@@BA@ABA@@@C@@BBD@@BBBB@BBB@CBAB@@AD@@@@A@CB@@@@@@@D@B@B@@@@BBB@@@BB@@DB@A@@BC@@DCDABA@@@ABA@A@AB@@@@@BB@B@B@@BB@@B@@@BB@@@B@D@D@@AFB@FBD@@@@ABA@ABC@CB@@ADA@@F@B@@@@@BBBB@AB@@@@@@B@BBD@B@D@D@BA@@B@@@DADBB@@@@B@BB@@BA@@BC@@D@BBB@B@@@ABABAB@BAB@@@DAB@B@B@@DBDBB@@ABA@ABA@C@@@AB@@AB@BAB@D@BAB@@@@ABADABA@@B@B@B@@@B@@BFBBB@@@BCD@@@BB@@DBB@@@@BDBB@BB@B@D@@@B@@@BA@@BBB@B@@@BBB@BBB@@@D@B@B@@@B@B@@@@@@ABA@BB@@@B@B@@@@AB@@AB@D@B@BB@@B@BA@@B@@AB@B@@@B@@@@A@@BA@CBA@@B@@@@AB@B@@@B@@A@@@@@AC@@@@AA@AA@@A@@AA@@@A@AABAB@B@@@B@BB@@@@B@@AB@@@B@@ABBBA@B@@BAB@@@@@@@B@@A@@B@@@B@@@B@@B@@@@@@B@B@@@B@BBD@BA@@@@@@@ABAA@AA@A@A@@AAB@B@BBB@@@BA@@@AB@@@B@@@@@B@BBB@@@@@BA@AAA@@@AB@B@BAFC@@B@@BB@@@BB@BBBB@BBB@F@B@@@@B@@@@AB@@@@@B@B@B@@BA@@D@@ADABC@@@@@B@@@@@B@@@B@@@@B@@BB@BB@@@@@B@@@@B@B@@@@@@BB@@BDB@@@A@AAC@@@AA@@@@@@A@A@@@A@C@@AA@A@@AC@AA@@CAA@CAA@A@@@C@C@A@@BAB@B@B@D@BDB@@@@AA@@A@@AA@@B@@@BB@@B@@@B@@@@BB@@@D@@@A@@B@@@BA@BB@@BB@B@@@B@D@@BBBA@BB@@B@@@@BBB@@AAA@A@@@A@@@@@@@@F@BB@@BBBB@@@BB@@@B@@BB@@@B@@BBB@@BB@@BB@@BD@BBB@B@D@@@BABA@AB@@@B@@@BB@BB@@BA@@@AB@@@@@B@@@@ABA@@@@@@@A@@BA@@@A@@@@@AB@BA@@BA@@@@@AB@@@BB@@BBB@@@@@B@@ABC@@@@B@@BB@@@BAB@@@BB@@B@@@B@B@@A@@@@@@FBB@@B@@@B@@B@BBB@BBB@BBD@@@@BBB@@DAB@B@@@@DBB@@B@@BB@B@@BBBB@BB@@B@@@@B@@@@@BB@@@BBDBBD@@@B@@@BB@D@@@BB@@@@BBA@@BCBCB@AA@A@@B@@@B@@@BB@@@@A@@@AB@@BB@DB@BDB@@B@@@BD@@BD@@@B@@B@@@@@@@B@@@@@@@@@@@@@@@@@@AB@@@@@@@@@@@@@@@@@@@@@DA@@@@@@@@B@@@@@B@@@@@@@@@@@B@BBB@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@@B@@@@@@@@@B@@@@@@@@@@@BA@@@@@@@@@A@@@@@AB@@@@@B@@ABADA@AB@@@@@@A@A@@@@B@B@B@B@@A@@@AB@@A@@F@BBB@B@@@DC@ABA@AB@@@D@FAD@@@A@BE@@BA@@BAB@@AA@BAAA@A@A@A@@DA@@BA@A@A@@@A@@A@CA@@A@A@@A@ABCBAA@@A@@@A@A@@@@A@A@@@AA@@A@@@A@@@@@@@@CB@@A@A@@B@@A@@@ABA@@@@@AA@AA@@@@@@@ABA@@@AA@@@@ABA@@@AA@@A@A@@B@@BBA@@@@AA@@@@BA@@@@@@B@@A@@B@@@B@@@B@@@@@BCA@@@AA@CBA@CB@BC@@@@AAA@@@@@@A@@A@@@@@@@A@@@AA@@B@B@B@@@B@@B@ABBBB@@BA@@BB@@DA@@D@F@@@@ADBAA@@@@BA@@@@@A@@A@AA@AAAAA@@@@@A@A@@@@@A@@@@A@AA@A@@@@D@@@D@@A@@@@BAB@@@B@B@@@BB@@B@@@B@@@F@BA@@B@BAB@B@@@B@@@B@B@@@@@@@BA@@@@BBB@BBBBB@B@@@@AB@@@@@B@DCBA@@B@ACB@@@DB@@BAB@@@@@@A@@@@@@AA@@@AA@A@A@@A@@@A@@@@@A@@@@AA@AAAAA@AB@BAAA@@BA@@BA@@B@@@BA@@B@@B@@BB@@@A@@BA@AB@BBBA@BBAB@B@D@@@@@@@B@@BB@@@BB@@BBB@@@@B@@BB@@D@@@B@@BDB@@B@B@B@@@B@F@DA@@@A@@@A@@@@@A@@@AA@@@@@@AA@@@@A@A@@@@@A@@A@@@BA@A@@@@@ABAAAB@AABA@@@AB@@@@A@A@@CE@@@AA@@A@@@AAA@A@ABA@@BADAB@@A@@@AAA@@@@@@@A@@A@@AA@A@A@@A@A@AB@@AB@@AAABA@@BABC@@@@@@A@BA@@DAA@BA@@@@@ABA@@BAB@@A@C@A@@@A@@AA@@@@@AB@BA@@BA@CB@BA@A@A@A@A@@A@@AA@@@@@AA@@C@@A@@AA@@@A@A@@AAA@ABABAB@AA@@@@BAB@B@@@B@@@A@@A@@@@A@@@AAB@A@B@A@@A@@A@@@@@AA@A@A@A@@@A@@@A@@B@@@@AACAAC@@@BABAB@@@AA@A@@@A@@@AACA@@C@C@A@A@@@AA@@@@A@@@AB@@A@BB@@@@@@@B@@@@@@B@@@@@@@@BB@@B@@@@@B@@@@@@ABB@BB@@@@A@A@@@@@@B@@@@A@@@@F@@@A@BA@@B@@A@@@@@@B@BBB@@@B@@AB@@A@A@@@A@GD@BA@AB@@AF@@@@A@A@A@A@@AAA@@CAE@A@@@@A@@BA@@@@@@@A@@ACA@@A@@@@AB@@@@CAAA@BA@CA@@@@A@@B@@@@A@A@@@@B@@BB@B@@@BABAB@AA@@BAAA@AA@@CA@A@@BA@@BAA@@A@A@A@@@A@AA@@@AA@@A@AA@@A@@@AA@@@@@A@@A@C@@@@@@@@@A@@@A@@@@@@A@A@@@@A@@@@@A@@@@@A@@@@@@@@A@@@@@@DABB@@B@@A@@A@@@@A@@A@@@B@@A@@@@@A@@@@@A@@BA@@@@BA@@@@@A@@@A@@B@@@B@@@@@@@@@B@@A@@AA@@@@BA@A@@@A@@@AB@@AB@@BB@@@B@B@@@AA@A@@@A@A@@@@@@B@BB@B@BB@@@@@@A@A@A@@AA@@AAA@BA@@@@BA@@@B@AB@@BA@B@@@@@@@@@B@@A@@B@@B@@@AB@@AAE@@B@@A@CAABA@AAA@AAA@ACAAA@@@AA@AAAB@A@@A@@@ABAB@@A@AAAA@AAA@A@@@A@@@A@A@@BA@@@AAA@A@AAC@A@@@A@A@AA@@A@AAA@C@@@AAC@@A@@@A@@B@@AB@@@@@A@@@AA@@A@BAA@@@@@AA@@@@@@AA@@A@@@@@A@@@@@AA@@A@@@@@A@@@A@@@@B@A@@CAA@@AEBA@A@@@A@A@@@@@@@@@@@A@@@AB@@A@A@C@@@CB@AA@A@@CAA@A@A@@@@@A@AA@@A@AAA@CBC@A@@@@A@@B@@@BABA@A@@@@BA@@BB@ABAB@@AB@@A@A@@DE@A@@@AAA@@A@A@A@@AA@@@A@AB@@@A@@@ABA@@BA@@B@@AB@@A@@B@@@BA@@B@@B@@@@B@@@@@B@@@@@BBB@BAB@BA@BBBBBB@B@@B@@B@@BBD@@@@D@BABAB@@A@@@AB@BAB@@@@B@@@@B@@@@B@@BABE@@@C@@C@@AAAAA@A@@@@AA@@@@@A@@B@@@BA@@AA@@@@@@@@@A@@BC@ABC@@A@AAAAAAAC@A@ABG@CB@@@BA@A@ABABE@A@A@@@@AAA@@@@A@@@@@A@@@@A@ABA@@@@@@@@A@@@A@A@A@@BCDADE@A@C@@BA@@@@A@BA@@@@@@@@B@@A@@@@BA@A@@@@B@@@B@@@@@B@@A@@@@@A@A@A@@@@@C@C@@@@@@A@@AACCA@@BABA@AD@@A@@BA@@A@@A@@@A@@@A@@B@@@@A@@B@@@@A@@B@@@BAFE@A@@@AA@A@A@A@ABA@@@@A@@AAAB@AAB@@@@@A@@@@AAA@@A@@AACACEA@ACA@AA@@@@@@DABAB@B@DA@@@@D@BBB@B@@@B@@BBB@@@@BAB@B@@@@@@A@A@A@@@A@@@@@AA@A@@AA@AA@@BC@@@@B@@ABA@A@@B@@@DDB@@@BAAAA@@@BAB@BABAB@F@@@BADC@@@A@@@AA@@@CAA@@@A@AA@A@@@@@ABA@@BA@@@A@@@A@A@@D@DA@@B@B@B@@@B@BB@@B@@@B@@@DB@@@@@AB@@C@@D@@@@@B@B@B@@@B@BB@@@@@@BA@@@A@@@@D@@@B@@@@@@A@@@A@@@@B@@@@@@A@@B@AAB@@AAAA@AA@A@@@@@A@A@@@A@@@A@A@@@A@@@A@@BA@@@A@@@A@A@@@ABA@@@A@A@@BAA@AA@@@A@C@AA@AC@A@@@@@AB@BA@@@A@@@@@A@@@@B@@@@@@@@AB@@B@@@A@@@BBA@@@@@@@@B@@@@@@@@@@@B@@@@@@AB@@@@@B@@@@@@@BA@@@@B@@@@@@@@@@@@AB@@@@@@@@@@@@A@@B@@@@A@@@A@@FENKDIACUCOAQA"],"encodeOffsets":[[121745,25848]]}}],"UTF8Encoding":true});}));