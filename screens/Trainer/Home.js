import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import Button from "../../components/Button"
import TraineeTrainer from "../../components/Trainee-trainer"

export default class Home extends React.Component {
  render() {  
   return (


  <View style={{
    flex: 1,
  }}>
    <View style={styles.Secondview}>

 {/*contain a header pic*/}
      <View style={styles.blockHeader}>
        <Image
        style={styles.imageStyle}
        source={require('../../assets/images/header.jpg')}/>  
      </View>


      <View style={styles.textViewStyle}>
         <Text style={{fontSize:17,color:'gray',  bottom:'5%'}}> Choose what you like to be  </Text>
      </View> 

{/*component for the views below 'Choose what you like to be' text */}
      <TraineeTrainer/>

{/*Sign up buton */}
      <TouchableOpacity style={styles.BlockButton}> 
      <Text style={{fontSize:25,color:'#fff',textAlign: 'center'}}>Sign Up</Text>
      </TouchableOpacity>

{/*  Button component refer to a text button 'it can be changed to any text'*/}
      <View style={styles.textViewStyle}>
          <Text style={{fontSize:15,color:'gray',marginLeft:'9%'}}> Don't have an account?  </Text>
         <Button
         name='Login'/>
     </View>  


    </View>
  </View>
);
} }




const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
},

blockHeader:{
flex: 6,
width: "100%", 
flexDirection:"row-reverse",
justifyContent: 'center',
backgroundColor: 'white',

},

BlockButton:{
  flex: 0.75,
  margin:'3%',
  width: "95%", 
  height:"100%" ,
  backgroundColor:'#f47373',
  alignContent:'center',
  justifyContent:'center',
  borderRadius:10,
  
},

imageStyle: {
  width: '100%',
  height: 300,
  alignSelf: 'center',
  //marginBottom:'10%',
  //borderRadius:70,
  
},
Secondview:{
  flex: 1,
  marginTop:10,
  width:"100%",
  height:"100%",
  justifyContent:"center",
  backgroundColor:"#fff"

},
  
textViewStyle:{
  flexDirection:'row',
  justifyContent:'center',
  alignContent:'center',
  marginBottom:'5%',
  marginTop:'5%',
  bottom:'5%' }

});