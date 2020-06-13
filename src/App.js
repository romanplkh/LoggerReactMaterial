import React, { Fragment, useEffect } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddButton from './components/layout/AddButton';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';

function App() {
  useEffect(() => {
    //Init Materialize JS -- allows to use modals etc...
    M.AutoInit();
  });

  return (
    <Fragment>
      <SearchBar />
      <div className='container'>
        <AddButton />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
        <Logs />
      </div>
    </Fragment>
  );
}

export default App;
