/*
 *
 *
脚本功能：
软件版本：9.2.42
下载地址：
脚本作者：**
更新时间：2024-7.16
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：⚠️此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]

# > 喜马拉雅,会员.大师课,音效&音质,去广告,界面优化+++
^https?:\/\/.+((ximalaya)|(xmcdn)).+(mobile-user\/v2|mobile-web|queryCategoryPageData|discovery-feed\/v4|vip\/v1\/recommand|product\/detail\/v1|mobile\/v1\/album|playpage|album\/price\/ts|mobile\/user\/member).*$ url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/xmly.js
^https?:\/\/.+((ximalaya)|(xmcdn)).+\/[a-z]{6}\-[a-z]{8}\/track\/(v[0-9])\/[a-zA-Z]+\/ts.*$ url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/xmck.js
# > 去广告,
^https?:\/\/openapi\.mysteel\.com\/v5\/getAdv\.htm url reject
^https?:\/\/ulogs\.umeng\.com\/unify_logs url reject
^https?:\/\/adse\.ximalaya\.com\/ url reject
^https?:\/\/gslbali\.ximalaya\.com url reject
^https?:\/\/www\.taobao\.com\/help\/getip\.php url reject
^https?:\/\/.+location\.ximalaya\.com url reject
^https?:\/\/.+dbehavior\.ximalaya\.com url reject
^https?:\/\/ad\.ximalaya\.com url reject
^https?:\/\/.+audid-api\.taobao.com url reject
^https?:\/\/passport\.ximalaya\.com\/user-http-app\/v1\/token\/refresh url reject

[mitm] 
hostname =  43.159.71.*,ulogs.umeng.com,www.taobao.com,43.132.81.*,101.33.27.*,114*0.*,61.172.1*.*,43.141.11.*,114.80.99.86,180.153.255.*,114.80.99.*,*.mysteel.*,61.172.194.196,180.153.*.*,*xima*,*xmcdn*,*.ximalaya.com,*.xmcdn.com,180.153.255.*,180.153.140.*,180.153.250.*,114.80.99.*,114.80.139.237,114.80.161.29,1.62.62.64,51*.com,1.194.255.171, 23.236.99.89, 36.99.200.135, 42.81.4.198, 42.81.26.128, 42.81.120.58, 43.132.80.77, 43.132.83.175, 43.132.84.11, 43.152.24.12, 43.152.24.18, 43.152.25.127, 43.152.29.38, 43.175.16.34, 43.175.22.25, 43.175.44.15, 49.7.69.197, 49.51.224.95, 101.33.11.32, 101.33.11.106, 101.33.20.34, 101.33.29.110, 103.105.60.99, 114.80.99.90, 114.80.99.70, 114.80.99.71, 114.80.99.89, 114.80.99.91, 114.80.99.88, 114.80.99.87, 140.249.84.135, 140.249.85.189, 150.109.90.80, 150.109.91.35, 150.138.47.94, 150.138.136.145, 203.205.136.87, 203.205.136.100, 203.205.136.102, 203.205.136.159, 203.205.137.27, 203.205.137.87, 203.205.137.241, 203.205.250.111, 203.205.250.113, 211.152.137.25,ulogs.umeng.com,passport.ximalaya.com



*
*
*/












const ObjectKeys2LowerCase=_0x519601=>Object["\u0066\u0072\u006f\u006d\u0045\u006e\u0074\u0072\u0069\u0065\u0073"](Object["\u0065\u006e\u0074\u0072\u0069\u0065\u0073"](_0x519601)["\u006d\u0061\u0070"](([_0x4e15b7,_0x1008aa])=>[_0x4e15b7["\u0074\u006f\u004c\u006f\u0077\u0065\u0072\u0043\u0061\u0073\u0065"](),_0x1008aa]));const Hour=new Date()["\u0067\u0065\u0074\u0048\u006f\u0075\u0072\u0073"]();const headers=ObjectKeys2LowerCase($request["\u0068\u0065\u0061\u0064\u0065\u0072\u0073"]);let t={};if(Hour>(0xd2548^0xd2548)&&Hour<(0x9a707^0x9a70e)){t={"\u0075\u0073\u0065\u0072\u002d\u0061\u0067\u0065\u006e\u0074":'ting_v9.2.13_c5(CFNetwork,\x20iOS\x2014.6.1,\x20iPhone10,3)',"\u0063\u006f\u006f\u006b\u0069\u0065":'channel=ios-b1;\x201&_device=iPhone&075201B3-4A5F-487E-AAFF-0AC3E6697275&9.2.31;\x20net-mode=WIFI;1&_token=514354661&A4D79016-A5D8-4DAD-80D5-6EB49C812026;\x20device_model=Telegram:https://t.me/GieGie777'};}else if(Hour>(0x630c6^0x630cf)&&Hour<(0x63259^0x63257)){t={"\u0075\u0073\u0065\u0072\u002d\u0061\u0067\u0065\u006e\u0074":'ting_v9.2.13_c5(CFNetwork,\x20iOS\x2012.19,\x20iPhone10,3)',"\u0063\u006f\u006f\u006b\u0069\u0065":'channel=ios-b1;\x201&_device=iPhone&075201B3-4A5F-487E-AAFF-0AC3E6471740&9.2.31;\x20net-mode=WIFI;1&_token=514354694&50192481-3E96-40D6-8C74-0F06DB7BC76F;\x20device_model=Telegram:https://t.me/GieGie777'};}else if(Hour>(0xdcad6^0xdcad8)&&Hour<(0x2d02f^0x2d03c)){t={"\u0075\u0073\u0065\u0072\u002d\u0061\u0067\u0065\u006e\u0074":'ting_v9.2.13_c5(CFNetwork,\x20iOS\x2012.19,\x20iPhone10,3)',"\u0063\u006f\u006f\u006b\u0069\u0065":'channel=ios-b1;\x201&_device=iPhone&075201B3-4A5F-487E-AAFF-0AC3E6592259&9.2.31;\x20net-mode=WIFI;1&_token=514354724&680C454E-18F9-4BE7-A063-62E058436F27;\x20device_model=Telegram:https://t.me/GieGie777'};}else if(Hour>(0x87e78^0x87e6b)&&Hour<(0xaf0f0^0xaf0e6)){t={"\u0075\u0073\u0065\u0072\u002d\u0061\u0067\u0065\u006e\u0074":'ting_v9.2.13_c5(CFNetwork,\x20iOS\x2012.19,\x20iPhone10,3)','cookie':'channel=ios-b1;\x201&_device=iPhone&075201B3-4A5F-487E-AAFF-0AC3E6797051&9.2.31;\x20net-mode=WIFI;1&_token=514354744&FD4C789A-1F71-4361-B382-726338CBDF56;\x20device_model=Telegram:https://t.me/GieGie777'};}else{t={"\u0075\u0073\u0065\u0072\u002d\u0061\u0067\u0065\u006e\u0074":'ting_v9.2.13_c5(CFNetwork,\x20iOS\x2019.24,\x20iPhone10,3)',"\u0063\u006f\u006f\u006b\u0069\u0065":'channel=ios-b1;\x201&_device=iPhone&075201B3-4A5F-487E-AAFF-0AC3E6517651&9.2.31;\x20net-mode=WIFI;1&_token=514354762&CE224E85-BE9A-4A08-A33C-E0732D56F00A;\x20device_model=Telegram:https://t.me/GieGie777'};}Object['assign'](headers,{...t});$done({"\u0068\u0065\u0061\u0064\u0065\u0072\u0073":headers});
