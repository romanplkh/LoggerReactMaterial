import React, { useEffect } from 'react';
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';
import { connect } from 'react-redux';
import * as action from '../../actions/logActions';

const Logs = ({ getLogs, logs: { logs, loading } }) => {
  useEffect(() => {
    setTimeout(() => {
      getLogs();
    }, 2000);

    //eslint-disable-next-line
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <ul className='collection with-header'>
      <li className='collection-heder'>
        <h4 className='center'>System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <h2 className='center'>No logs</h2>
      ) : (
        logs.map((l) => <LogItem log={l} key={l.id} />)
      )}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  logs: state.log
});

const mapDispatchToProps = (dispatch) => ({
  getLogs: () => dispatch(action.getLogs())
});

export default connect(mapStateToProps, mapDispatchToProps)(Logs);
