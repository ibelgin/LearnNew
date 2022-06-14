import React from 'react';
import { 
  Dimensions, 
  Text, 
  SafeAreaView , 
  StyleSheet 
} from 'react-native';

const Dev_Height = Dimensions.get("window").height
const Dev_Width = Dimensions.get("window").width

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    height: Dev_Height, 
    width: Dev_Width
  }
})

export default App;