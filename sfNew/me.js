/*
 * @Author: ygw
 * @Date: 2020-11-16 21:40:39
 * @LastEditors: your name
 * @Description: file content
 * @FilePath: /demo/sfNew/me.js
 */
angular.module('myApp', [])
.controller('myCtrl', ['$scope', '$http', function($scope, $http){
  $scope.telVisible = false;
  $scope.adVisible = false;
  $scope.tel = '';
  $scope.address = '';
  $scope.sourceData = {
    "userId": 1,
      "companyName": "\u4e00\u672c\u901a\u7269\u6d41\u6709\u9650\u516c\u53f8", 
      "logoUrl": "http://81.69.11.71:8000/media/logo/default1.png",
      "payDate": "2020-11-13",
      "expireDate": "2021-11-13", 
      "info": [
        {
          "address": "\u6b66\u6c49\u5e02\u4e1c\u897f\u6eaf\u533a\u65b0\u57ce\u5341\u4e03\u8def\u5982\u76bf\u4e5d\u5dde\u7bb1\u6d6a\u56edA\u533a66",
          "userName": "",
          "telNum": ["027-25486969", "58823636"]
        },
        {"address": "\u6b66\u6c49\u5e02\u4e1c\u897f\u6e56\u533a\u79bb\u6865\u5357\u4e94\u8def\u65b0\u6c49\u6b63\u897f\u7269\u6d41\u5e02\u573aB\u533a22\u53f7", "userName": "", "telNum": ["13586956666"]},
        {"address": "\u6b66\u6c49\u5e02\u4e1c\u897f\u6e56\u533a\u79bb\u6865\u4e8c\u8def\u7279\u4e00\u53f7\u76bf\u6c49\u81ea\u7559\u7bb114\u680bC6\u53f7", "userName": "", "telNum": ["15888886666"]},
        {"address": "\u6b66\u6c49\u5e02\u6d2a\u5c71\u533a\u6587\u5316\u5927\u9053\u674e\u6865\u7269\u6d41\u56ed", "userName": "", "telNum": ["15988889999"]},
        {"address": "\u6b66\u6c49\u5e02\u8be5\u7538\u533a\u5e38\u798f\u4eba\u6c11\u6c7d\u8f66\u57ce\u9f99\u738b\u4e94\u6bd4J", "userName": "", "telNum": ["13486689393"]},
        {"address": "\u90d1\u5dde\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a\u4e5d\u9f99\u94faI\u4e1a\u56ed\u516b\u91cc\u6d77\u6751\u5357200\u7c73\u8def\u897f", "userName": "", "telNum": ["18958583636"]},
        {"address": "\u5546\u4e18\u5e02\u4f20\u5316\u516c\u8def\u6e2f\u4e00\u7ffbL266", "userName": "", "telNum": ["18596964242"]},
        {"address": "\u5468\u53e3\u671d\u9633\u8def\u592a\u660a\u8def\u5357200\u7c73\u8def\u4e1c", "userName": "", "telNum": ["0370-1212633", "13728284646"]},
        {"address": "\u5468\u53e3\u534e\u7fe9\u57ceB\u533a", "userName": "", "telNum": ["0370-5858666"]}
      ]
  };
  // const id = location.search.match('id=(.*)')[1].split('&')[0];
  // $http.get(`http://81.69.11.71:8000/dbQuery/?id=${id}`).then(res => {
  //   $scope.sourceData = res.data;
  // })
  $scope.handleTel = function(tel) {
    $scope.telVisible = true;
    $scope.tel = tel;
  };
  $scope.handleHideTel = function() {
    $scope.telVisible = false;
    $scope.tel = '';
  };
  $scope.handleAddress = function(address, lat, lng) {
    // 这里需要补充： lat, lng信息
    $scope.address = address
    $scope.lat = lat,
    $scope.lng = lng,
    $scope.adVisible = true;
  };
  $scope.handleHideAddress = function() {
    $scope.adVisible = false;
    $scope.lat = '',
    $scope.lng = '',
    $scope.address = '';
  };
  $scope.handleMap = function(sign) {
    const maps = {
      bd: ` https://apis.map.qq.com/uri/v1/marker?marker=coord:${$scope.lat},${$scope.lng};title:超好吃冰激凌;addr:${$scope.address}&referer=myapp`,
      gd: `http://uri.amap.com/marker?position=${$scope.lng},${$scope.lat}&name=${$scope.address}&coordinate=gaode&callnative=1`,
      tx: `http://api.map.baidu.com/marker?location=${$scope.lat},${$scope.lng}&title=${$scope.address}&content=${$scope.address}&output=html&src=myapp`,
    }
    $scope.handleHideAddress();
    window.location.href = maps[sign];
  };
  $scope.handleCopy = function(e) {
    window.getSelection().selectAllChildren(e.target.parentNode.firstChild);
    document.execCommand('Copy');
  };
  $scope.$watch('tel', function(val) {
    $scope.telPhone = `tel:${val}`;
  });
}])
