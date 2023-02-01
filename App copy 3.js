 
import React, {useState} from 'react'
import { View, Text, Button } from 'react-native'
// khai báo component con số 1
const CompPropCon1 = (props)=>{
   const gui2 = ()=>{
       props.guiDuLieu("Nguyen Van A 11111");
   }
   return (
   <View style={{backgroundColor:"yellow"}}>
     <Text>Ho ten: {props.hoTen}</Text>
     <Button title='Gui sang 2' onPress={gui2}/>
   </View>
   );
}
// khai báo component con số 2
const CompPropCon2 = (props)=>{
   const gui1 = ()=>{
       props.guiDuLieu("Nguyen Van B 2222");
   }
   return (
   <View style={{backgroundColor:'cyan'}}>
     <Text>Ho ten: {props.hoTen}</Text>
     <Button title='Gui sang 1' onPress={gui1}/>
   </View>
   );
}
 
// component cha làm trung gian 
const CompPropCha = (props) =>{
   const [dulieuCon1, setdulieuCon1] = useState("");
   const [dulieuCon2, setdulieuCon2] = useState("");
   // khai báo các hàm callback để cho component con gọi lại
   const callback1 = (data) =>{
       setdulieuCon1 (data);
   }
   const callback2 = (data) =>{
       setdulieuCon2 (data);
   }
 
 return (
   <View>
     <View style={{height:30}} />
     <Text>Demo gui du lieu </Text>
     <View style={{height:30}} />
      <CompPropCon1 hoTen = {dulieuCon1} guiDuLieu={callback2} />
      <View style={{height:30}} />
      <CompPropCon2 hoTen = {dulieuCon2} guiDuLieu={callback1} />
   </View>
 )
}
export default CompPropCha;