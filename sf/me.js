/*
 * @Author: ygw
 * @Date: 2020-11-14 20:23:44
 * @LastEditors: your name
 * @Description: file content
 * @FilePath: /demo/faceToFace/sf/me.js
 */
new Vue({
  el: '#app',
  data: {
    baseUrl: 'http://81.69.11.71:8000',
    sourceData: {
      // "userId": 1,
      // "companyName": "\u4e00\u672c\u901a\u7269\u6d41\u6709\u9650\u516c\u53f8", 
      // "logoUrl": "http://81.69.11.71:8000/media/logo/default1.png",
      // "payDate": "2020-11-13",
      // "expireDate": "2021-11-13", 
      // "info": [
      //   {
      //     "address": "\u6b66\u6c49\u5e02\u4e1c\u897f\u6eaf\u533a\u65b0\u57ce\u5341\u4e03\u8def\u5982\u76bf\u4e5d\u5dde\u7bb1\u6d6a\u56edA\u533a66",
      //     "userName": "",
      //     "telNum": ["027-25486969", "58823636"]
      //   },
      //   {"address": "\u6b66\u6c49\u5e02\u4e1c\u897f\u6e56\u533a\u79bb\u6865\u5357\u4e94\u8def\u65b0\u6c49\u6b63\u897f\u7269\u6d41\u5e02\u573aB\u533a22\u53f7", "userName": "", "telNum": ["13586956666"]},
      //   {"address": "\u6b66\u6c49\u5e02\u4e1c\u897f\u6e56\u533a\u79bb\u6865\u4e8c\u8def\u7279\u4e00\u53f7\u76bf\u6c49\u81ea\u7559\u7bb114\u680bC6\u53f7", "userName": "", "telNum": ["15888886666"]},
      //   {"address": "\u6b66\u6c49\u5e02\u6d2a\u5c71\u533a\u6587\u5316\u5927\u9053\u674e\u6865\u7269\u6d41\u56ed", "userName": "", "telNum": ["15988889999"]},
      //   {"address": "\u6b66\u6c49\u5e02\u8be5\u7538\u533a\u5e38\u798f\u4eba\u6c11\u6c7d\u8f66\u57ce\u9f99\u738b\u4e94\u6bd4J", "userName": "", "telNum": ["13486689393"]},
      //   {"address": "\u90d1\u5dde\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a\u4e5d\u9f99\u94faI\u4e1a\u56ed\u516b\u91cc\u6d77\u6751\u5357200\u7c73\u8def\u897f", "userName": "", "telNum": ["18958583636"]},
      //   {"address": "\u5546\u4e18\u5e02\u4f20\u5316\u516c\u8def\u6e2f\u4e00\u7ffbL266", "userName": "", "telNum": ["18596964242"]},
      //   {"address": "\u5468\u53e3\u671d\u9633\u8def\u592a\u660a\u8def\u5357200\u7c73\u8def\u4e1c", "userName": "", "telNum": ["0370-1212633", "13728284646"]},
      //   {"address": "\u5468\u53e3\u534e\u7fe9\u57ceB\u533a", "userName": "", "telNum": ["0370-5858666"]}
      // ]
    },
    telVisible: false,
    adVisible: false,
    tel: '',
    address: '',
  },
  // 请求接口的方法，本地调用无法拿到数据, 可以尝试去掉mode，由后端解决跨域问题
  mounted() {
    const id = location.search.match('id=(.*)')[1].split('&')[0];
    fetch(`http://81.69.11.71:8000/dbQuery/?id=${id}`, {
      method: 'get',
      mode: 'no-cors',
      headers: {
        'content-type': 'application/json'
      },
    }).then(resp => resp.json()).then(res => {
      this.sourceData = res.data;
    })
    // setTimeout(() => {
    //   this.sourceData = {
    //     "userId": 1,
    //     "companyName": "\u4e00\u672c\u901a\u7269\u6d41\u6709\u9650\u516c\u53f8", 
    //     "logoUrl": "http://81.69.11.71:8000/media/logo/default1.png",
    //     "payDate": "2020-11-13",
    //     "expireDate": "2021-11-13", 
    //     "info": [
    //       {
    //         "address": "\u6b66\u6c49\u5e02\u4e1c\u897f\u6eaf\u533a\u65b0\u57ce\u5341\u4e03\u8def\u5982\u76bf\u4e5d\u5dde\u7bb1\u6d6a\u56edA\u533a66",
    //         "userName": "",
    //         "telNum": ["027-25486969", "58823636"]
    //       },
    //       {"address": "\u6b66\u6c49\u5e02\u4e1c\u897f\u6e56\u533a\u79bb\u6865\u5357\u4e94\u8def\u65b0\u6c49\u6b63\u897f\u7269\u6d41\u5e02\u573aB\u533a22\u53f7", "userName": "", "telNum": ["13586956666"]},
    //       {"address": "\u6b66\u6c49\u5e02\u4e1c\u897f\u6e56\u533a\u79bb\u6865\u4e8c\u8def\u7279\u4e00\u53f7\u76bf\u6c49\u81ea\u7559\u7bb114\u680bC6\u53f7", "userName": "", "telNum": ["15888886666"]},
    //       {"address": "\u6b66\u6c49\u5e02\u6d2a\u5c71\u533a\u6587\u5316\u5927\u9053\u674e\u6865\u7269\u6d41\u56ed", "userName": "", "telNum": ["15988889999"]},
    //       {"address": "\u6b66\u6c49\u5e02\u8be5\u7538\u533a\u5e38\u798f\u4eba\u6c11\u6c7d\u8f66\u57ce\u9f99\u738b\u4e94\u6bd4J", "userName": "", "telNum": ["13486689393"]},
    //       {"address": "\u90d1\u5dde\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a\u4e5d\u9f99\u94faI\u4e1a\u56ed\u516b\u91cc\u6d77\u6751\u5357200\u7c73\u8def\u897f", "userName": "", "telNum": ["18958583636"]},
    //       {"address": "\u5546\u4e18\u5e02\u4f20\u5316\u516c\u8def\u6e2f\u4e00\u7ffbL266", "userName": "", "telNum": ["18596964242"]},
    //       {"address": "\u5468\u53e3\u671d\u9633\u8def\u592a\u660a\u8def\u5357200\u7c73\u8def\u4e1c", "userName": "", "telNum": ["0370-1212633", "13728284646"]},
    //       {"address": "\u5468\u53e3\u534e\u7fe9\u57ceB\u533a", "userName": "", "telNum": ["0370-5858666"]}
    //     ]
    //   };
    // }, 100)
  },
  methods: {
    handleTel(tel) {
      this.telVisible = true;
      this.tel = tel;
    },
    handleHideTel() {
      this.telVisible = false;
      this.tel = '';
    },
    handleAddress(address, lat, lng) {
      // 这里需要补充： lat, lng信息
      this.address = address
      this.lat = lat,
      this.lng = lng,
      this.adVisible = true;
    },
    handleHideAddress() {
      this.adVisible = false;
      this.lat = '',
      this.lng = '',
      this.address = '';
    },
    handleMap(sign) {
      const maps = {
        bd: ` https://apis.map.qq.com/uri/v1/marker?marker=coord:${this.lat},${this.lng};title:超好吃冰激凌;addr:${this.address}&referer=myapp`,
        gd: `http://uri.amap.com/marker?position=${this.lng},${this.lat}&name=${this.address}&coordinate=gaode&callnative=1`,
        tx: `http://api.map.baidu.com/marker?location=${this.lat},${this.lng}&title=${this.address}&content=${this.address}&output=html&src=myapp`,
      }
      window.location.href = maps[sign];
    },
    handleCopy(e) {
      window.getSelection().selectAllChildren(e.target.parentNode.firstChild);
      document.execCommand('Copy');
    },
  },
  watch : {
    tel: function(val) {
      this.telPhone = `tel:${val}`;
    },
    'sourceData.logoUrl': function(val) {
      if (val.indexOf('http') > -1) {
        this.logoUrl = val;
      } else {
        this.logoUrl = `${baseUrl}${val}`
      }
    },
  }
})