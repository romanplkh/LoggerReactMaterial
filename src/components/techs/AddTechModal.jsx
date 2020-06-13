import React, { useState, useRef } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  let modal = useRef();

  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Please add first and last name' });
      M.Modal.init(modal.current).open();
    } else {
      console.log(firstName);

      setFirstName('');
      setLastName(false);
    }
  };
  return (
    <div ref={modal} id='add-tech-modal' className='modal'>
      <div className='modal-content'>
        <h4>New technicial</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor='firstName' className='active'>
              First Name
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='lastName'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor='lastName' className='active'>
              Last Name
            </label>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue waves-light btn'
        >
          Submit
        </a>
      </div>
    </div>
  );
};

export default AddTechModal;
