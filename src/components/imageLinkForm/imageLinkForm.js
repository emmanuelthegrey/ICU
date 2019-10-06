import React from 'react';
import './imagelinkform.css'

const ImageLinkForm = ({onInputChange, onSubmit}) => {
	return (
		<div>
			<p className='f3'>
				{'I never forget a face. Try me.'}
			</p>
			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
					<input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
					<button onClick={onSubmit} className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Scan</button>
				</div>
			</div>
		</div>
	)
}

export default ImageLinkForm;