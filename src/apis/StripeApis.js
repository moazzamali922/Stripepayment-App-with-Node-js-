// import axios from 'axios';

// const createPaymentIntent = async (data) => {
//     try {
//         const response = await axios.post('http://192.168.100.71:4002/payment-sheet1', data);
//         return response.data; // The response data should contain paymentIntent, ephemeralKey, and customer.
//     } catch (error) {
//         throw new Error('Error while creating payment intent: ' + error.message);
//     }
// };

// export default createPaymentIntent;

// import axios from "axios"; 
// const creatPaymentIntent = (data) => {
//     return new Promise((resolve, reject) => {
//         axios.post('http://192.168.100.71:4002/payment-sheet1', data).then(function (res) {
//             resolve(res)
//         }).catch(function (error) {
//             reject(error)
//         })
//     })
// }

// export default creatPaymentIntent
