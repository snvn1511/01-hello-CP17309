import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const CompInfo = (props)=>{
    return (
      <View>
        <Text>Ho ten: {props.hoTen} {"\n"}
                tuoi = {props.tuoi}
        </Text>
      </View>
    );
} 

export default App = () => {
 
  return (
    <View style={{ padding: 50 }}>
      
      <CompInfo hoTen="Nguyen van A" tuoi="20"  />
      <CompInfo hoTen="Tran Van B" />

    </View>
  );
}

