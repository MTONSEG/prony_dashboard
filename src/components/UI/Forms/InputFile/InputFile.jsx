import React, { useEffect, useState } from "react";
import '../Forms.scss';
import uploadFIle from '../../../../assets/icons/upload.svg';


const InputFile = ({ className, drag, setDrag }) => {
	const [files, setFiles] = useState();

	useEffect(() => {
		console.log(files)
	}, [files])

	useEffect(() => {
		if (!drag) setFiles('');
	}, [drag])

	function dragStartHandler(e) {
		e.preventDefault();
		setDrag(true);
	}
	function dragLeaveHandler(e) {
		e.preventDefault();
		setDrag(false);
	}
	function onDropHandler(e) {
		e.preventDefault();
		setFiles([...e.dataTransfer.files]);
	}

	function onChangeHandler(e) {
		setDrag(true);
		setFiles([...e.currentTarget.files])
	}

	return (
		<label className={className ? `${className} input-file` : 'input-file'}>
			<input
				type="file"
				className="input-file__input"
				onChange={e => onChangeHandler(e)}
			/>

			<div className={`input-file__custom ${drag ? 'active' : ''}`}
				onDragStart={e => dragStartHandler(e)}
				onDragLeave={e => dragLeaveHandler(e)}
				onDragOver={e => dragStartHandler(e)}
				onDrop={e => onDropHandler(e)}
			>
				<p className='input-file__text'>
					{
						files
							? files[0].name
							: <><img src={uploadFIle} alt="icon" /> <span>Add file</span> or drop files here</>
					}
				</p>
			</div>
		</label>
	)
}

export default InputFile;