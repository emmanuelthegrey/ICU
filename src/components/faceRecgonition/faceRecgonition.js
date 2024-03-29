import React from 'react';
import './faceRecgonition.css';

const FaceRecgonition = ({imageUrl, box}) => {
	return (
		<div className='center ma'>
			<div className='absolute mt2'>
			<img id='inputimage' alt="random" src={imageUrl} width='500px' height='auto'></img>
			<div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
			</div>
		</div>
	)
}

export default FaceRecgonition;