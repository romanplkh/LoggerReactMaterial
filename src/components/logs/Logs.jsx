import React, { useState, useEffect } from 'react';
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      getLogs();
    }, 2000);

    //eslint-disable-next-line
  }, []);

  const getLogs = async () => {
    try {
      const res = await fetch('/logs');
      const data = await res.json();
      setLogs(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

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

export default Logs;
