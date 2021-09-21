import React from 'react';
import {
  Button_AddAccount,
  Button_UpdateAccount,
} from '../../assets/styles/CustomStyles';

export default function addDc() {
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
          <input type='text' id='full-name' class='input' name='account_name' />
        </div>
        <br />
        <div className='text-input'>
          <label for='phone-number' class='label'>
            Phone Number :
          </label>
          <input
            type='number'
            id='phone-number'
            class='input'
            name='phone_number'
          />
        </div>

        <br />
        <div className='text-input'>
          <label for='email' class='label'>
            Email:
          </label>
          <input type='text' id='email' class='input' name='email' />
        </div>
        <br />
        <br />
        <Button_UpdateAccount></Button_UpdateAccount>
      </div>
    </div>
  );
}
