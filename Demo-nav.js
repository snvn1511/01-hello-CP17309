import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Text, TextInput, View, StyleSheet, TouchableHighlight } from 'react-native';
 
 
const StackDemo = createNativeStackNavigator();

 
 // Bước 4: Định nghĩa component các màn hình ------------------------------------------------
const TrangChu = ( {navigation, route} ) => {
 
  return (
    <View style={{ backgroundColor: "yellow", flex:1 }}>
      <Text style={{ fontSize: 30 }}>Đây là màn Home </Text>
      <Text>
        Tên app:  {route.params.tenApp} -- {route.params.lop}
      </Text>
 
      <TouchableHighlight  activeOpacity={0.6}  underlayColor="pink"
        onPress={() => { navigation.navigate('About', {hoTen:'N V A'}) }}>
        <Text> Sang màn hình Giới thiệu</Text>
      </TouchableHighlight>
 
    </View>
  );
}
const GioiThieu = ( {navigation, route} ) => { 
 
  return (
    <View style={{ backgroundColor: "cyan" }}>
      <Text style={{ fontSize: 30 }}>Màn hình giới thiệu  {"\n"} 
        Họ tên: {route.params.hoTen}
         </Text>
 
      <Text onPress={() => { navigation.navigate('Home') }}>Về trang chủ</Text>
 
    </View>
  );
}

 
const DemoApp =()=>{
  return (
    <NavigationContainer>
          <StackDemo.Navigator  initialRouteName='Home'>
            <StackDemo.Screen name='Home' component={TrangChu} options={ {title:'Trang chủ'}}
              initialParams={ {tenApp: 'Demo RN', lop: 309 }  }
            />
            <StackDemo.Screen name='About' component={GioiThieu} options={ {title:'Giới thiệu'}} />
		          {/* viết tiếp các màn hình khác vào đây */}
          </StackDemo.Navigator>
      </NavigationContainer>
  );
}
export default DemoApp;