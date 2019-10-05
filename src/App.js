import React from 'react';
import Navigation from './components/navigation/navigation';
import Logo from './components/logo/logo';
import Rank from './components/rank/rank';
import ImageLinkForm from './components/imageLinkForm/imageLinkForm';

import './App.css';

function App() {
  return (
    <div className="App">
		<Navigation />
		 <Logo />
		 <Rank />
		<ImageLinkForm />
		{/*<FaceRecgonition /> */}
    </div>
  );
}

export default App;
