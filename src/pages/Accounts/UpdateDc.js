import React from 'react';
import { Button_AddAccount } from '../../assets/styles/CustomStyles';

export default function updateDc() {
  return (
    <div>
      <div>
        <h2 id='transition-modal-title'>Update DC Details</h2>
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
        <div className='text-input'>
          <div id='label'>
            <label for='radio-group' class='label'>
              Session Active:
            </label>
          </div>
          <div id='radio-group'>
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
        <br />
        <br />
        <br />
        <br />
        <br />
        <Button_AddAccount></Button_AddAccount>
      </div>
    </div>
  );
}
