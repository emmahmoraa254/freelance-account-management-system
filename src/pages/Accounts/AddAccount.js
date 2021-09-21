import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Button_AddAccount } from '../../assets/styles/CustomStyles';
import { addAccount } from '../../store/redux/accounts/accountAction';

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

  const onSubmit = () => {
    console.log('Hello');
    // e.preventDefault();
    dispatch(
      addAccount({ accountName, phoneNumber, email, writerId, accountProvider })
    );
  };

  return (
    <div>
      <div>
        <h2 id='transition-modal-title'>Add Account</h2>
        <hr />
      </div>
      <div>
        <div className='text-input'>
          <label for='account-name' class='label'>
            Account Name :
          </label>
          <input
            onChange={(e) => onChange(e)}
            value={accountName}
            type='text'
            id='account-name'
            class='input'
            name='accountName'
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
          <br />
        </div>
        <div className='text-input'>
          <label for='writer-id' class='label'>
            Writer ID:
          </label>
          <input
            onChange={(e) => onChange(e)}
            value={writerId}
            type='number'
            id='writer-id'
            class='input'
            name='writerId'
          />
        </div>
        <br />
        <div className='text-input'>
          <label for='account-provider' class='label'>
            Account Provider :
          </label>
          <input
            onChange={(e) => onChange(e)}
            value={accountProvider}
            class='input'
            type='text'
            id='account-provider'
            name='accountProvider'
          />
        </div>
        <br />
        <div className='text-input'>
          <label for='radio-group' class='label'>
            IP Sensitive:
          </label>
          <div id='radio-group' name='radioButton'>
            <input type='radio' id='radio-true' class='radio' />
            <label for='radio-true' class='radio'>
              True
            </label>
            <br />
            <input type='radio' id='radio-false' class='radio' />
            <label for='radio-false' class='radio'>
              False
            </label>
          </div>
        </div>

        <Button_AddAccount onClick={() => onSubmit()}>
          Add Account
        </Button_AddAccount>
      </div>
    </div>
  );
}
