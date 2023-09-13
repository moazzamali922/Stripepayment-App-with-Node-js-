import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
// import { SP_KEY } from '@env';
import { StripeProvider } from '@stripe/stripe-react-native';
import PaymentScreen from './src/PaymentScreen';

const App = () => {

  return (
    <View style={{flex:1}}>
        <StripeProvider
          publishableKey='pk_test_51NaaV7GRYWUoiN5eL3EQfJfaK5DeB3QBgCmMAeVJE1sJOU2w7cEGlyEdwHLdpaoDL9sQ1O4pNkYy7B6tEgN5uKRQ00g22BYGbh'
          merchantIdentifier="merchant.identifier" 
          urlScheme="your-url-scheme" 
        >
          <PaymentScreen />
        </StripeProvider>


    </View>
  );
};


const styles = StyleSheet.create({

});

export default App;