import React from 'react';
import App from './App';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Activos from './components/Activos';
import Error from './components/Error';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders without crashing', () => {
    shallow(<Header />);
});
  
it('renders without crashing', () => {
shallow(<Formulario />);
});

it('renders without crashing', () => {
    shallow(<Activos />);
});
  

it('renders without crashing', () => {
shallow(<Error />);
});
  