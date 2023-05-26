import React from 'react';
import { ExportIcon, ImportIcon } from '../../../Main/Posts/MainPosts/MainPostSVGs/MainPostSVGs';
import './SwopBtn.scss';

const SwopBtn = ({ className, type }) => {
	return (
		<>
			{type === 'import'
				? <div className={className
					? `${className} swop-btn swop-btn_import`
					: 'swop-btn swop-btn_import'
				}>
					<ImportIcon />
					<p>Import</p>
				</div>
				: <div className={className
					? `${className} swop-btn swop-btn_export`
					: 'swop-btn swop-btn_export'
				}>
					<ExportIcon />
					<p>Export</p>
				</div>
			}

		</>
	)
}

export default SwopBtn;