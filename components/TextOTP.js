import React, {useState} from 'react';
import {Keyboard} from 'react-native';
import {Container} from './styles/Container';
import {Input} from './styles/TextInput';

const TextOTP = () => {
  const [otp1, setOtp1] = useState('');
  const [otp2, setOtp2] = useState('');
  const [otp3, setOtp3] = useState('');
  const [otp4, setOtp4] = useState('');
  const [otp5, setOtp5] = useState('');
  const [otp6, setOtp6] = useState('');

  return (
    <Container>
      <Input
        placeholder="1"
        keyboardType="phone-pad"
        ref={input => {
          setOtp1(input);
        }}
        onSubmitEditing={() => {
          otp2.focus();
        }}
        onChangeText={otp1 => {
          setOtp1(otp1), otp1 == '' ? null : otp2.focus();
        }}
      />
      <Input
        placeholder="1"
        keyboardType="phone-pad"
        ref={input => {
          setOtp2(input);
        }}
        onSubmitEditing={() => {
          otp3.focus();
        }}
        onChangeText={otp2 => {
          setOtp2(otp2), otp2 == '' ? null : otp3.focus();
        }}
      />
      <Input
        placeholder="1"
        keyboardType="phone-pad"
        ref={input => {
          setOtp3(input);
        }}
        onSubmitEditing={() => {
          otp4.focus();
        }}
        onChangeText={otp3 => {
          setOtp3(otp3), otp3 == '' ? null : otp4.focus();
        }}
      />
      <Input
        placeholder="1"
        keyboardType="phone-pad"
        ref={input => {
          setOtp4(input);
        }}
        onSubmitEditing={() => {
          otp5.focus();
        }}
        onChangeText={otp4 => {
          setOtp4(otp4), otp4 == '' ? null : otp5.focus();
        }}
      />
      <Input
        placeholder="1"
        keyboardType="phone-pad"
        ref={input => {
          setOtp5(input);
        }}
        onSubmitEditing={() => {
          otp6.focus();
        }}
        onChangeText={otp5 => {
          setOtp5(otp5), otp5 == '' ? null : otp6.focus();
        }}
      />
      <Input
        placeholder="1"
        keyboardType="phone-pad"
        ref={input => {
          setOtp6(input);
        }}
        onSubmitEditing={() => {
          Keyboard.dismiss();
        }}
        onChangeText={otp6 => {
          setOtp6(otp6), otp6 == '' ? null : Keyboard.dismiss();
        }}
      />
    </Container>
  );
};

export default TextOTP;
