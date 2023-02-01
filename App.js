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
      // gán dữ liệu vào state ở đây ,,,,, 
    })
    .catch((err) => {
      console.log(err);
    });

}

// thêm mới dữ liệu:
const postAddSP = () => {
  //1. Chuẩn bị dữ liệu
  let objSP = { name: "Điện thoại gì đó", price: 3333333 };
  // giá trị các thuộc tính có thể lấy từ state của TextInput
  //2. Dùng fetch để post dữ liệu
  fetch(api_url, {
    method: 'POST',// thêm mới: POST, sửa: PUT, xóa: DELETE
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(objSP)
  })
    .then((res) => {
      console.log(res);
      if (res.status == 201)
        alert("Thêm thành công");
    })
    .catch( (err)=>{ console.log(err);  })
    ;

}

const DemoApp = () => {
  return (
    <View>
      <View style={{ margin: 20 }} />
      <Button title='Get list' onPress={getListSP} />
      <View style={{ margin: 20 }} />
      <Button title='Add new SP' onPress={postAddSP} />
    </View>
  )
}

export default DemoApp;