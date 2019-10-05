import React from 'react';
import Navigation from './components/navigation/navigation';
import Logo from './components/logo/logo';
import ImageLinkForm from './components/imageLinkForm/imageLinkForm';

import './App.css';

function App() {
  return (
    <div className="App">
		<Navigation />
		 <Logo />
		<ImageLinkForm />
		{/*<FaceRecgonition /> */}
    </div>
  );
}

export default App;
