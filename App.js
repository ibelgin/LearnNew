import React from 'react';
import { 
  Dimensions, 
  Text, 
  SafeAreaView , 
  StyleSheet,
  Image,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Dev_Height = Dimensions.get("window").height
const Dev_Width = Dimensions.get("window").width

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imagemainview}>
        <Image
          source={require("./assets/signin.png")}
          style={styles.imagestyle}
          resizeMode="contain"
        />
      </View>

      <View style={{height:"12%",width:"100%",justifyContent:"center"}}>
        <Text style={{fontSize:25,fontWeight:"bold",color:"#17255A",marginLeft:"5%"}}t>Sign In</Text>
      </View>

      <View style={styles.inputmainview}>
        <TextInput
         style={styles.textinput}
         placeholder="Enter the Email"
         placeholderTextColor="#717FC4"
        />
      </View>

      <View style={{...styles.inputmainview, marginTop:"5%"}}>
        <TextInput
         style={styles.textinput}
         placeholder="Enter the Password"
         placeholderTextColor="#717FC4"
        />
      </View>

      <View style={{height:"12%",width:"100%",justifyContent:"center",alignItems:"center",marginTop:"3%"}}>
        <TouchableOpacity style={{height:"80%",width:"90%",justifyContent:"center",alignItems:"center",backgroundColor:"#7180C4",borderRadius:15}}>
          <Text style={{color:"#FFF",fontSize:19,fontWeight:"500"}}>Sign In</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    height: Dev_Height, 
    width: Dev_Width
  },
  imagemainview:{
    height : "40%",
    width:"100%",
    justifyContent:"center",
    alignItems:"center"
  },
  imagestyle: {
    height : "100%", 
    width:"100%"
  },
  inputmainview:{
    height : "10%",
    width : "100%",
    justifyContent:"center",
    alignItems:"center"
  },
  textinput:{
    height: "90%",
    width:"90%",
    borderWidth:3,
    borderColor:"#717FC4",
    borderRadius:15,
    paddingHorizontal:10
  }
})

export default App;