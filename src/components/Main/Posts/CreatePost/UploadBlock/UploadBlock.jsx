import React, { useState } from 'react';
import InputFile from '../../../../UI/Forms/InputFile/InputFile';
import delUploadIcon from '../../../../../assets/icons/close-round.svg';
import './UploadBlock.scss';

const UploadBlock = ({ className, title, image, drag, setDrag }) => {
	return (
		<div className={`upload-block ${className ? className : ''}`}>

			<p className="upload-block__title">{title}</p>
			<InputFile
				drag={drag}
				setDrag={setDrag}
				className='upload-block__upload' />
			{image
				? drag
					? <div className="upload-block__uploaded">
						<img src={image} alt="image" />
						<div className='upload-block__uploaded-del'
							onClick={() => { setDrag(!drag) }}>
							<img src={delUploadIcon} alt="del" />
						</div>
					</div>
					: <></>
				: <></>
			}

		</div>
	)
}

export default UploadBlock;