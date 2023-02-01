import * as React from 'react';

import { Button, View } from 'react-native';
// Demo lấy danh sách sản phẩm
var api_url = "https://63da3789b28a3148f68161a2.mockapi.io/demo-api/sanpham";

const getListSP = () => {
  fetch(api_url)
    .then((res) => {
      return res.json();  // chuyển đổi dữ liệu về dạng json
    })
    .then((dulieu_json) => {
      console.log(dulieu_json); // đối tượng dạng json
      alert("Kết quả: " + JSON.stringify(dulieu_json));
    })
    .catch((err) => {
      console.log(err);
    });

}

const DemoApp = () => {
  return (
    <View>
      <View style={{ margin: 20 }} />
      <Button title='Get list'  onPress={getListSP} />
    </View>
  )
}

export default DemoApp;