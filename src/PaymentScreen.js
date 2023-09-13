import {
  Alert,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from 'react-native';
import React, {useState} from 'react';
// import ButtonComp from './Components/ButtonComp';
import {CardField, confirmPayment} from '@stripe/stripe-react-native';
// import creatPaymentIntent from './apis/StripeApis';
import axios from 'axios';

const PaymentScreen = () => {
  const [cardInfo, setCardInfo] = useState(null);

  const fetchCardDetail = cardDetail => {
    if (cardDetail.complete) {
      setCardInfo(cardDetail);
    } else {
      setCardInfo(null);
    }
  };
  const onDone = async () => {
    axios
      .post('http://192.168.0.101:4002/payment-sheet1', {
        currency: 'usd',
        paymentMethodType: 'Card',
        amount: 500,
      })
      .then(response => {
        if (response.data.paymentIntent) {
          let confirmPaymentIntent = confirmPayment(
            response?.data?.paymentIntent,
            {paymentMethodType: 'Card'},
          );
          console.log('confirmPaymentIntent res++++', confirmPaymentIntent);
          Alert.alert('Payment!', 'Response received!', [
            {text: 'OK', onPress: () => ''},
          ]);
        }
        console.log(response.data);
      })
      .catch(error => {
        console.warn('Error while creating payment intent: ' + error);
      });
  };

  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <View style={{padding: 16}}>
          <CardField
            postalCodeEnabled={false}
            placeholders={{
              number: '4242 4242 4242 4242',
              textColor: 'black',
            }}
            textColor={'black'}
            cardStyle={{
              backgroundColor: '#FFFFFF',
              textColor: 'black',
            }}
            style={{
              width: '100%',
              height: 50,
              marginVertical: 30,
            }}
            onCardChange={cardDetails => {
              fetchCardDetail(cardDetails);
            }}
            onFocus={focusedField => {
              console.log('focusField', focusedField);
            }}
          />
          {/* <ButtonComp onPress={onDone} disabled={!cardInfo} /> */}
          <TouchableOpacity
            disabled={!cardInfo}
            style={{
              backgroundColor:cardInfo?"#D7654D":'#ccc',
              height: 42,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => {
              onDone();
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 16, color: '#fff'}}>
              DONE
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default PaymentScreen;
