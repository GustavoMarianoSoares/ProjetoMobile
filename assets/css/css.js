import React from 'react';
import {StyleSheet} from 'react-native'

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEC456',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto:{
    fontSize: 24,
    marginBottom: 20,
    padding: 30,
    backgroundColor:'pink'
  },

  texto2:{
    fontSize: 24,
    marginBottom: 20,
    padding: 30,
  },

  qr__code:(display='flex')=>({
    width:'100%',
    height:'100%',
    backgroundColor:'black',
    justifyContent:'center',
    display:display
  }),
});

export {css};