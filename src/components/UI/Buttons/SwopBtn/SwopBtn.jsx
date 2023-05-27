import React from 'react';
import { Link } from 'react-router-dom';
import { ExportIcon, ImportIcon } from '../../../Main/Posts/MainPosts/MainPostSVGs/MainPostSVGs';
import './SwopBtn.scss';

const SwopBtn = ({ className, type, importLink, exportLink }) => {
	return (
		<>
			{type === 'import'
				? <Link
					to={importLink
						? `${importLink}`
						: 'importLink'
					}
					className={className
						? `${className} swop-btn swop-btn_import`
						: 'swop-btn swop-btn_import'
					}>
					<ImportIcon />
					<p>Import</p>
				</Link>
				: <Link
					to={exportLink
						? `${exportLink}`
						: 'importLink'
					}
					className={className
						? `${className} swop-btn swop-btn_export`
						: 'swop-btn swop-btn_export'
					}>
					<ExportIcon />
					<p>Export</p>
				</Link>
			}

		</>
	)
}

export default SwopBtn;