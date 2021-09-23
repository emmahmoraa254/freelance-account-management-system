import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Button_AddAccount } from '../../assets/styles/CustomStyles';
import { addDc } from '../../store/redux/accounts/accountAction';

export default function AddDc() {
  const dispatch = useDispatch();

  const [dcData, setDcData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
  });

  const { fullName, phoneNumber, email } = dcData;

  const onChange = (e) => {
    setDcData({ ...dcData, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    console.log('submit');
    dispatch(addDc({ fullName, phoneNumber, email }));
  };

  return (
    <div>
      <div>
        <h2 id='transition-modal-title'>Add DC</h2>
        <hr />
      </div>
      <div>
        <div className='text-input'>
          <label for='full-name' class='label'>
            Full Name :
          </label>
          <input
            onChange={(e) => onChange(e)}
            value={fullName}
            type='text'
            id='full-name'
            class='input'
            name='fullName'
          />
        </div>
        <br />
        <div className='text-input'>
          <label for='phone-number' class='label'>
            Phone Number :
          </label>
          <input
            onChange={(e) => onChange(e)}
            value={phoneNumber}
            type='number'
            id='phone-number'
            class='input'
            name='phoneNumber'
          />
        </div>

        <br />
        <div className='text-input'>
          <label for='email' class='label'>
            Email:
          </label>
          <input
            onChange={(e) => onChange(e)}
            value={email}
            type='text'
            id='email'
            class='input'
            name='email'
          />
        </div>
        <br />
        <br />
        <Button_AddAccount onClick={() => onSubmit()}>Add DC</Button_AddAccount>
      </div>
    </div>
  );
}
