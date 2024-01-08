import React from 'react';
import './App.css';
import {Header} from './site/Header';
import {Footer} from './site/Footer';
import {Body} from './site/Body';

function App() {
    return (
        <>
            <Header titleForHeader='New Body'/>
            <Footer titleForFooter='New Footer'/>
            <Body titleForBody='New Body'/>
        </>
    );
}

export default App;
