import React from 'react';
import {
  Button_AddAccount,
  Button_UpdateAccount,
} from '../../assets/styles/CustomStyles';

export default function addAccount() {
  return (
    <div>
      <div>
        <h2 id='transition-modal-title'>Update Account</h2>
        <hr />
      </div>
      <div>
        <div className='text-input'>
          <label for='account-name' class='label'>
            Account Name :
          </label>
          <input
            type='text'
            id='account-name'
            class='input'
            name='account_name'
          />
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
          <br />
        </div>
        <div className='text-input'>
          <label for='writer-id' class='label'>
            Writer ID:
          </label>
          <input type='number' id='writer-id' class='input' name='writer_id' />
        </div>
        <br />
        <div className='text-input'>
          <label for='account-provider' class='label'>
            Account Provider :
          </label>
          <input
            class='input'
            type='text'
            id='account-provider'
            name='account_provider'
          />
        </div>
        <br />
        <div className='text-input'>
          <label for='radio-group' class='label'>
            IP Sensitive:
          </label>
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
        <div className='text-input'>
          <label for='radio-group' class='label'>
            Disable:
          </label>
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
        <Button_UpdateAccount></Button_UpdateAccount>
      </div>
    </div>
  );
}
