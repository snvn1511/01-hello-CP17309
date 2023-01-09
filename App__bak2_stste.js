import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default App = () => {

  const [hoTen, sethoTen] = useState("ABC");
  
  const CapNhat = (dulieu)=>{
      sethoTen( dulieu );
  }
  const VietHoa = ()=>{
      sethoTen (   hoTen.toUpperCase()  );
  }
  return (
    <View style={{ padding: 50 }}>
      <Text style={{ fontSize: 20, color: "blue" }}>
        Ho ten:  {hoTen}
      </Text>

      <TextInput placeholder='Nhap ho ten'
          onChangeText={CapNhat} />

      <Button title='Viết hoa' onPress={VietHoa} />

    </View>
  );
}

