import React, { useState, useRef, useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import { clearCurrent, updateLog } from '../../actions/logActions';

const EditLogModal = ({ currentLog, clearCurrent, updateLog }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  useEffect(() => {
    if (currentLog) {
      setMessage(currentLog.message);
      setAttention(currentLog.attention);
      setTech(currentLog.tech);
    }
  }, [currentLog]);

  let modal = useRef();

  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Please add message and tech' });
      M.Modal.init(modal.current).open();
    } else {
      updateLog({
        ...currentLog,
        date: new Date(),
        message,
        attention,
        tech
      });
      clearCurrent();

      M.toast({ html: 'Log updated' });
      setMessage('');
      setAttention(false);
      setTech('');
    }
  };
  return (
    <div ref={modal} id='edit-log-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Enter System Log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor='message' className='active'>
              Log Message
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <select
              name='tech'
              value={tech}
              className='browser-default'
              onChange={(e) => setTech(e.target.value)}
            >
              <option value='' disabled>
                Select Technician
              </option>
              <option value='John Doe'>John Doe</option>
              <option value='Roman Doe'>Roman Doe</option>
              <option value='Zoia Doe'>Zoia Doe</option>
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  name='attention'
                  checked={attention}
                  value={attention}
                  className='filled-in'
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
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

const modalStyle = {
  width: '75%',
  height: '75%'
};

const mapStateToProps = (state) => ({
  currentLog: state.log.current
});

export default connect(mapStateToProps, { clearCurrent, updateLog })(
  EditLogModal
);
