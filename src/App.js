import React, { Component } from 'react';
import Navigation from './components/navigation/navigation';
import Logo from './components/logo/logo';
import Rank from './components/rank/rank';
import ImageLinkForm from './components/imageLinkForm/imageLinkForm';
import SignIn from './components/signin/signin';
import Register from './components/register/register';
import FaceRecgonition from './components/faceRecgonition/faceRecgonition';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

import './App.css';

const app = new Clarifai.App({
	apiKey: '2e160a4e9ef1423ba0d8f58490998775'
});

const particlesOptions = {
	particles: {
		number: {
			value: 70,
			density: {
				enable: true,
				value_area: 500
			}
		}
	}
}

class App extends Component {
	constructor() {
		super();
		this.state = {
			input: '',
			imageUrl: '',
			box: {},
			route: 'signin',
			isSignedIn: false,
		}
	}

	calculateFaceLocation = (data) => {
		const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
		const image = document.getElementById('inputimage');
		const width = Number(image.width);
		const heigt = Number(image.height);

		return {
			leftCol: clarifaiFace.left_col * width,
			topRow: clarifaiFace.top_row * heigt,
			rightCol: width - (clarifaiFace.right_col * width),
			bottomRow: heigt - (clarifaiFace.bottom_row * heigt)
		}
	}
	onRouteChange = (route) => {
		if(route === 'signout'){
			this.setState({isSignedIn: false})
		}else if(route === 'home'){
			this.setState({isSignedIn: true})
		}
		this.setState({route: route});
	}

	displayFaceBox = (box) => {
		console.log(box);
		this.setState({box: box});
	}

	onInputChange = (event) => {
		this.setState({ input: event.target.value })
	}

	onSubmit = () => {
		this.setState({ imageUrl: this.state.input })
		app.models
			.predict(
				Clarifai.FACE_DETECT_MODEL,
				this.state.input)
			.then(response => this.displayFaceBox( this.calculateFaceLocation(response)))
				.catch(err => console.log(err));
	}

	render() {
		const	{ isSignedIn, imageUrl, route, box } = this.state;
		return (
			<div className="App">
				<Particles className='particles'
					params={particlesOptions}
				/>
				<Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
				{ route === 'home' ?
				<div>
				<Logo />
				<Rank />
				<ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
				<FaceRecgonition box={box} imageUrl={imageUrl} />
				</div>
				:(
					route === 'signin' ?
					<SignIn onRouteChange={this.onRouteChange} />
					:<Register onRouteChange={this.onRouteChange} />
				)
				}
			</div>
		);
	}
}

export default App;
