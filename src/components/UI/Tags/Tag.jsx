import React, { useState } from 'react';
import './Tag.scss';

const Tag = ({ className, title, color }) => {
	return (
		<div className={`tag ${className ? className : ''}`}
			style={{ background: color }}
		>{title}</div>
	)
}

export default Tag;