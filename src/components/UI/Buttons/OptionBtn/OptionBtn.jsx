import React from 'react';
import { OptionIcon } from '../../SVGIcons/SVGIcons';
import './OptionBtn.scss';

const OptionBtn = ({ className, active, setActive }) => {

	const onClickHandler = () => { setActive(!active) }

	return (
		<div className={className
			? `${className} card-option-btn`
			: 'card-option-btn'
		}
			onClick={onClickHandler}>
			<OptionIcon
				className={'table-boards__icon'} />
		</div>
	)
}

export default OptionBtn;