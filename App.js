import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const CompInfo = (props)=>{
    props.goiCha ("xxxxxxxxxxxxxx");// gửi dữ liệu sang comp cha

    return (
      <View>
        <Text>Ho ten: {props.hoTen} {"\n"} tuoi = {props.tuoi}
        </Text>
      </View>
    );
} 

export default App = () => {

  const [duLieuCon1, setduLieuCon1] = useState("");
  const callback_CompCon1 = ( data_con )=>{
        setduLieuCon1 (data_con );
  }
 
  return (
    <View style={{ padding: 50 }}>
      
        <Text> Du lieu con = {duLieuCon1}  </Text>

      <CompInfo hoTen="Nguyen van A" tuoi="20"
       goiCha={callback_CompCon1}  />
        

    </View>
  );
}

