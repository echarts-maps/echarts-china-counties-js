(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('天峻县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"632823","properties":{"name":"天峻县","cp":[99.022984,37.300851],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@GDKBMLEDQBG@GAG@MAKGKAC@ECG@QCC@KEAAACCCAECIGOAC@AEC@@@EBI@AA@CCCAAAMEMEKAMAGAC@G@E@E@C@EDGDGBG@EBADABBDBFFFDFDDBD@DBB@BDDBBBDBFFFDDB@B@DAB@B@DDDBNJBBB@J@DBDBDBFBF@BB@BBD@BBBBBBB@B@DBT@BA@K@G@C@CBCBEBABEJGDCD]`QAJU|KHwS@@@@KCsIEDAhO^KXFlah@@EAC@C@A@ADAB@FBFADADKF@@AFADEHADAD@BDDBD@DAFBDBDJFDFHDDD@B@FADOLKJKFABCDADABABEBKBKBIDIDIBC@E@EAIEA@@@C@CDEDOHA@K@A@CBCDABA@CAIEGAA@EDIDEBOJGBABABCBCBGFCFADCBCBIDMHGDE@EAC@CDADAFCFCDC@ACCAAAEAGAE@ABCDA@C@E@A@KHA@A@OAA@ABCFADABOCI@YAI@E@IBEBE@C@EAAACAA@E@E@E@A@GCGAEAGAQBG@QAEAEEQOGEC@CAAAAA@C@C@A@@A@A@CDCHABCDAB@B@BADADCJADCFEFCD@FBF@DCHGJEJGFENADCHEJABWEG@CCAAECSKYKCACAE@CAKCEAE@E@GDE@IBG@ICcGsOUEkMaKICEAAAACCMACBC@C@A@@AAA@C@CBABI@@AA@BABC@ABA@CCGCIACEIACAEAGAEC@CBEFCBC@G@E@CAECEAE@E@EBG@IBIDEBEBE@GCC@E@CBCB@@AFADABCDA@@@ICA@C@CBSJEBC@CB@@AB@D@B@B@BBDDB@B@B@FAHAD@BCBA@E@EBABCB@B@BBFDFJHHFDD@DFHFDDFHDD@JCJ@LDBBB@@BABED@B@BBD@BADCBEDAB@HAFCDCBCBC@A@ABABADABKBA@@BAD@BBFFFDD@BDBHBLFJFJHDDVV@DFB@DBDBJ@HCNADANBH@DAHBBAB@@@@G@GAE@K@E@ABA@A@ADA@ABA@AB@@@B@DBD@BADAB@BBFABAFCFADADCBMDKFAB@BBJBDFDLDDBBBBB@JBDFJ@BCH@NAJ@DBB@@ABGAG@CB@B@@FDBBBFDFBDDBFBB@@B@@@BCDGHAB@F@F@@BBHDDBDD@B@D@JGPAJABEBKBCBC@CBG@M@E@A@CDEBODIBGBABG@A@A@@AA@A@A@ABCBCFCB@BEP@DBBBD@D@BCL@D@F@B@B@BB@HDB@@B@BADADCDABC@A@AB@B@@BBHDDBDBDDDDJBBB@B@@ADEB@B@LABADEBA@OBA@@B@BDBBDHLDD@BBD@DADBBBBDDLDLBDBDDDDBD@B@DAD@B@BD@DBDBDDBBA@ABA@GACBA@ADADBH@BA@CAC@C@GBA@AAA@AACGAEAA@@AAGAIAA@AAECA@A@EDIFCD@B@DBDBFBD@BABA@E@ABA@@B@D@B@BA@IBE@ABABAFBFABABEDABCDCFA@CDC@CBKBE@EBEBEF@@EHEDUDA@A@KECAC@CBA@GHKLAD@BBDBBBFBFFHDBFDBBB@@DABEFAFADCHCHABABE@K@S@C@A@CBABCH@DBD@B@D@BEHGHEFGJABEBE@G@C@IAA@A@ABEHAD@D@@@D@B@BCBGFAB@BBDHPBDBH@FADCFEFEDKHCDAF@FABCFKJKFIDCBCDGJEH@DBD@D@HEHAHCDCDGDG@CBEBABCB@BC@C@C@A@A@CBABEDGDIDGDCFAD@HBHBDCFCHCJCHADCDADHRBF@F@FBF@HBH@D@D@B@@DBBDBBBDDL@DBLDDBFHHDDDFFBHFDBHFBDABADAD@B@B@F@@ABCBA@ABADADABADBF@B@FBHBFDNDFRRHJBBFDNLBDBBADCDCDILABADEDADCF@BADCFADGFKJGHADABBFADAF@BILEHCHMTAD@DDD@B@D@@ADBBFFDDBBDDBBBB@DBB@B@BBJ@DB@@BBBDDBBBDBFDD@BBBBJDJBD@B@D@B@F@@@B@B@B@D@H@F@BBD@BAD@@AB@B@BAB@@@BA@@B@B@DAD@@@B@@A@@@@BA@AD@@@@@BA@@@AB@@AB@BA@@BABA@@BA@@B@@A@ABA@@@EDAB@@A@A@ABA@C@A@@@A@@@AC@@@@ABABA@AB@@ABA@CB@BB@AB@@A@ABAB@@AD@BA@@BAB@@A@@@@BA@@B@@ABABABCB@@CD@@ABA@CDABA@CBCBEBABCDEBABABEBAB@BCBCBABAB@BCBCBCDCFABABABABA@AD@BA@ADABCBEDAB@BAB@@CBABA@ABA@A@@B@BA@@B@@@BABADABAHA@ABCD@@C@AB@@AB@B@@CBAB@BA@A@EBABCBG@CBGBCAABA@@@A@C@G@ABA@AACBEBC@@@EDCBA@CBCBEDABABAB@@GBCDCBA@EDCBEBA@C@AB@@AAEAECA@@@C@@@C@CAA@@@C@A@A@A@@@A@EAEAE@@@C@A@ABA@AACBC@ABA@@BA@@A@@C@C@A@G@ABA@@@CBABC@ABCBEBA@A@C@CAC@@@A@@@@@A@A@@AA@C@A@@@ABA@CB@B@@EBC@C@CBI@EA@@ABCDMBGDIDEBKBCBIDIBEBEBGDEBG@CBGBIBGDEDEBEHEFADCFADAHAHCHBF@F@HHDLJFHDFBBBBBBB@DFBBDBBB@@AB@BA@IFEBAD@DCDCBCBMBE@YBGAG@CBCBCBGHEBEBE@IBM@IBC@GTADE@EBCBEB@D@FFZ@DBFDDHBFDDDDDBHDBB@DBJ@FBB@BB@BBDABEBABBBDHBB@D@BABGHCD@D@B@F@TA@EBG@EBAB@@@BBFDFBFDHBD@BAD@D@D@B@@A@ABE@I@C@ABA@@BBH@B@@ABIBGDCBABEAEAC@A@KBG@CBA@ABGFADA@CBEF@@CDAFAH@DBBDJ@BAF@BBBDDFFBHDH@FABGBMBWBE@C@IECAC@C@E@EACAEAAEECECCAE@IFGDCBKFG@KDEBEBCDCJCBGBGBGBCDCBAFABEDIDMHCDCFAF@BDFBDBF@DCBIDEDCD@B@D@D@H@FADCJI\\AFBJ@BALAHAH@BBDFDNJFFHJBBLHFFBD@FFPBJ@BBB@B@B@D@D@B@@BDBBBB@B@@A@CBC@EAA@A@CBCBC@A@C@IEIAE@A@IBEBEBA@EF@@GBA@CDABA@@@A@CAECGAC@IAGBA@CBCDEDKDG@CAA@A@CBEBIFABCDCBIDA@CAIAAACA@@IFGBCBA@EAOGQEC@A@EBCBCBABABC@ABIAC@@@@@@BEBA@@AGBC@EBA@A@CAA@EDKAUPIVI@ID@VHTJVENGFGNBRDPFPHZNTT^DRIPIPBPDRFLIVHDNDBT@TLLZZ\\`@@BBDB@BB@BBB@@@BDBBBBBB@BA@@@@@A@@BCD@BA@@@A@A@A@A@@B@BBD@@@@AB@@A@A@A@A@ABA@@@@B@@@B@B@@@B@@A@@B@B@@@@@B@@AB@@BB@@@B@@AB@@@B@@@BA@@@A@A@AB@@A@A@AB@@AB@@BBDB@@@@@B@@@BAB@@A@AB@@A@@@A@@@@@@BBB@@AB@@ADA@A@@@@@A@AA@AA@@@@@AB@BA@@@A@@@A@ABA@ABABA@AB@B@@BB@D@@@B@@AB@B@@@B@@@BABABA@ABA@A@A@A@@B@@@B@B@@@B@@BBLB\\DdHbFb@R@JAPIJIPC^@`DR@`BfBXAPEFA^@^@zCfKlO\\K\\GXGRBLCH@F@JBH@HBHBHBD@FADADAFCDCBEBG@@BABCBEBCBCFCDAHAHAF@HDDBHBJBHBHBFCDCFEHIDCFCFCHEFAFCBBDB@BD@BCBCFCD@F@H@HAHADADAFADCDAFEDAFEDCDEDCDGDCBCBCDCDEDCDAFCFAJCFAFAJAHAFAFAF@JAFAHAFAFADADCJCJAHCFAJAJCJCHCHCJEFCFCHAFCHCFAFCHCDADAFAFALAFAFAHADCLEFCDAFAF@FAFAJAHCHCDADCBCDEBEBCBCBCBE@ECICE@C@CBEBCFCFEFAJADAH@H@H@J@JAHADAHEDCJCFCFAF@HAD@FAFAHAF@D@F@F@F@F@DAHAFAHCJCFADAFAD@FAHAFAHCHEHCFCHCJEHCFEFCFEFCFEFADCHEFAJCHAFCFAFAHAHCFCDAF@HAFAH@HAHAJAFALAFCDC@@B@FBFADCBCDABAFAJCFAFAFAFAD@F@LBH@FAF@JAFAFAHEDELIDABC@A@C@C@CBCBADCBADALADADCFGBADADCD@FBF@F@FAHEDE@CFGHMDCFEFEFEDCDAB@@@@EBC@ABADEB@FCBABABEFGFIBABAB@BAJAP@D@JGFEDEBCBCBEBE@E@E@C@EACAECCACAG@GDCBCBEFGFCJAD@JADABCDCDEDCDEDCDCDEBCBCHGDAF@FAN@F@H@H@H@F@FAJ@J@JAD@H@H@H@FADAFEHGDCDEDEDEDADAHAFBBH@H@HAH@DBDHDF@FAF@H@H@JEFCFCHEFCHEFEJEHCHCFCHCJGJEHELGJEJEHCNENELAJCHAB@JCLCFAFAJAL@LALAHAHAJAVCJCLALAL@P@P@L@LAJAJALAF@FCFAHCFEFCDGDIDGDCFCFEFCJEFCHCDCHEHCLGJCLELCJAJAJALAHAJ@F@HBLBH@J@JBJDLDHBHBJ@HAH@HAFAFCB@BCDADCDE@CBCBC@EBC@EBCBCDCDGHEHEDCHCHAHAJAF@JAHAF@FAJAJ@F@LBJBLBL@H@FBFBF@FAJCHAHAJ@F@H@PAJBH@L@JAH@JAJAHCJAB@HCHAFCHCFCHCJEHCNEFAFAJEHCHEFCHEDCDCFCBADCBCDCDGBEBEBGDEBEFEBCFEDC@GCCCCGAGBG@KBG@E@G@EAG@EAEAGEAECG@CEEECECEAEAIAECEE@EBIDEDAFADAJCD@FAHAFAF@FCFADG@CCGAECCECGECAGEECCCEAGGCCCACE@C@EACBAACAABCJEHCD@DAH@BAFADCB@H@BAF@BADCDCDAD@DADBDBDBFBDBDDFBB@B@BCDAFABAJADBD@DDBBDBLAH@FBBBD@BAD@BCDABCBCBC@ABAJADAB@BABCBAF@HATEBAB@BBB@FFLAL@L@JBNBLBNBHBHBLBJDNDPFFDFFLJHDRLVDDAJGHBDFBHBP@JFDXAVJJBTBLFHH@HDDJBNBTADADIFCLGBCAEIMEC@CFKFGBCHCHEFCHEHCHEHALCFAFCJAJANAJ@JAHCHCLCHCHEHCHAFCHADAHAH@H@JBHBLBHDHDHDHBJ@HBL@FBJ@H@F@HAH@HAFAFAHCHAFADAFADAF@F@F@HBJBF@H@HBHAB@DADAJG@EBGBE@EBG@EDGDEFEFCBCDCHCFCD@F@BB@@F@B@BAFCB@FADAD@@@@BABCD@BBBBF@B@BCD@B@BB@D@DCBADEBCBAB@HAFAJAJAF@BAB@DADABG@ABIHKBC@CBOCEHOAC@EM]CIAKCGAEAOAI@E@CBAF@B@FED@DAFAD@HARELCB@H@FADCBA@ADCDCF@FALIFAB@@CBABAD@FBBAFAD@B@FDBBDADCHEFAFAJ@B@D@DA@@FC@@@@O@EACEEAECAAE@EEA@C@EACC@AAACAA@EBAFE@E@ECC@E@GB]AYEWMMEOKOGQAWDqFYEWB·]UD[LI@eO]YYCUBCLE\\MFKJELADKEGIAMEAAEG@IHCFCD@LIHAF@F@BCFEDAXKVGTCXOVS\\KBSFcLOX@F@TRHVP@RGXG^IT@fGbINMLEVCXIVCFAHAFADAHCBCBC@EACACECEEE@CCCACEAE@EBG@E@GBGBE@KBGBGBIDGBEDEBEBCDCJEJCHAH@JAFCFEDGFIBEBEBGBI@G@E@G@EAEACEGAEEEEAGCG@E@E@G@IAEAGAGCE@ECICEAECECCACCCCCCCECECEEEEEECECEEECGGECCCEECAC@EACBIBEBEBGAE@GAECEAECCCCCCCGEAEAE@C@CBEDEDCBCBE@EAC@CACACCCCAEAECEAGAGAGAIAICCCEEECGIEGACCCCEAICIAGCGEE@@ACCGCECGEECCCCCCACAC@E@EDEBEDEDEDEBCDG@GBEBEBI@E@E@E@E@I@EAE@C@CAGAAGGCAACCEACKECCECGEMEKEK@IACAECCECGACACAaDUBUDABCDCFCDABIDAHE@C@A@C@CDAFG@A@G@GBCBCBAFCBCCCECE@@CAE@ACEEC@A@KACAACAAA@ABI@AAACAEAAAAA@CDCDEDCDCLK@AAEAA@CBCFG@AEI@CBABCAGAQEUBIDAVCTADC@CAOAG@CA@EDEBEBCAC@A@EAE@EDABGBEBC@EAA@CBCHCDEBA@CACCIACACBCDCBEAEAE@GDEBABEDED@@A@CG@ECIAI@EAE@EAGAE@I@EGGEGAACEEAE@CBGAG@KBM@EAAABC@ACAGBCBCA@@AA@CACAAGGECC@EDGAGACE@E@ECEEAC@CECACAAA@ECKCECGAIGOOeES@C@CAK@CCEAI@C@CCCAGACAC@EGGGIAC@IAEKGIEMASIKEE@GD_DOHIDK@AAJS@EAEFASAC@G@@ACAAEACEACBGBKDGDEDI@G@GIA@C@EDIHGDA@GAI@IB"],"encodeOffsets":[[101458,37843]]}}],"UTF8Encoding":true});}));