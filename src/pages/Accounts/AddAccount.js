import React, { useState } from 'react';
import { Formik, Form, useField, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { Button_AddAccount } from '../../assets/styles/CustomStyles';
import { addAccount } from '../../store/redux/accounts/accountAction';

import { TextInput } from './TextInput';

import '../../styles/styles.css';

export default function AddAccount() {
  const dispatch = useDispatch();
  const [accountData, setAccountData] = useState({
    accountName: '',
    phoneNumber: '',
    email: '',
    writerId: '',
    accountProvider: '',
  });

  const { accountName, phoneNumber, email, writerId, accountProvider } =
    accountData;

  const onChange = (e) => {
    setAccountData({ ...accountData, [e.target.name]: e.target.value });
  };

  const validationSchema = Yup.object().shape({
    accountName: Yup.string().required('Account Name is required'),
    phoneNumber: Yup.string()
      .max(10, 'More numbers provided')
      .min(10, 'Less numbers provided')
      .required('Phone number is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    writerId: Yup.string().required('Writer ID is required'),
    accountProvider: Yup.string().required('Account Provider is required'),
  });

  const onSubmit = () => {
    // e.preventDefault();
    dispatch(
      addAccount({ accountName, phoneNumber, email, writerId, accountProvider })
    );
  };

  return (
    <>
      <h2>Add Account</h2>
      <Formik
        initialValues={{
          ...accountData,
        }}
        validationSchema={validationSchema}
      >
        <Form>
          <TextInput
            label='Account Name'
            onChange={(e) => onChange(e)}
            // onChange={(e) => onChange(e)}
            value={accountName}
            name='accountName'
            type='text'
            placeholder='U1'
          />

          <TextInput
            label='Phone Number'
            onChange={(e) => onChange(e)}
            value={phoneNumber}
            name='phoneNumber'
            type='text'
            placeholder='0711...'
          />

          <TextInput
            label='Email'
            onChange={(e) => onChange(e)}
            value={email}
            name='email'
            type='text'
            placeholder='alphagal@gmail.com'
          />

          <TextInput
            label='Writer ID'
            onChange={(e) => onChange(e)}
            value={writerId}
            name='writerId'
            type='text'
            placeholder='4352625'
          />

          <TextInput
            label='Account Provider'
            onChange={(e) => onChange(e)}
            value={accountProvider}
            name='accountProvider'
            type='text'
            placeholder='Academia'
          />

          <Button_AddAccount onClick={() => onSubmit()}>
            Add Account
          </Button_AddAccount>
        </Form>
      </Formik>
    </>
  );
}
