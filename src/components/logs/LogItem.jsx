import React from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteLog, setCurrentLog } from '../../actions/logActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const LogItem = ({ log, deleteLog, setCurrentLog }) => {
  const onDeleteLog = (id) => {
    deleteLog(id);
    M.toast({ html: 'Log deleted' });
  };

  const onSetCurrentLog = () => {
    setCurrentLog(log);
  };
  return (
    <li className='collection-item'>
      <div>
        <a
          href='#edit-log-modal'
          className={`modal-trigger ${
            log.attention ? 'red-text' : 'blue-text'
          }`}
          onClick={onSetCurrentLog}
        >
          {log.message}
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'>ID #{log.id}</span> last updated by{' '}
          <span className='black-text'>{log.tech}</span> on{' '}
          <Moment format='MMM Do YYYY, h:mm:ss a'>{log.date}</Moment>
        </span>
        <a
          href='#!'
          className='secondary-content'
          onClick={onDeleteLog.bind(null, log.id)}
        >
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

export default connect(null, { deleteLog, setCurrentLog })(LogItem);
