import React, { useEffect, useState } from 'react';
import { LikeMessIcon } from '../../IconsViewPost/IconsViewPost';
import './MessagePostItem.scss';
import MessViewPostButtons from './MessViewPostButtons/MessViewPostButtons';

const MessagePostItem = ({ className, name, photo, message, amountLikes, date, privacy, merge, reply, image, type }) => {

	let [privacyState, setPrivacyState] = useState(privacy);
	let [clickedLike, setClickedLike] = useState(false);
	let [amountLikeState, setAmountLikeState] = useState(amountLikes);
	let [showImage, setShowImage] = useState(false);

	const onLikeClickHandler = () => {
		setClickedLike(!clickedLike);

		if (!clickedLike) setAmountLikeState(++amountLikeState);
		else setAmountLikeState(--amountLikeState);
	}

	const onImageClickHandler = e => {
		setShowImage(!showImage);
	}



	return (
		<div className={
			`messages-post-item 
			${privacyState ? 'privacy' : ''}
			${className ? className : ''}`
		}>
			{type
				?
				<div className="messages-post-item__head">
					<p className='messages-post-item__merged-text'>Add an Estimate field</p>
					<div className={clickedLike
						? "messages-post-item__likes clicked"
						: "messages-post-item__likes"
					}>

						<p className='messages-post-item__likes-num'>
							{amountLikeState}<span>points</span>
						</p>
						<div className="messages-post-item__date">{date}</div>
					</div>
				</div>
				:
				<div className="messages-post-item__head">
					<div className={clickedLike
						? "messages-post-item__likes clicked"
						: "messages-post-item__likes"
					}
						onClick={onLikeClickHandler}>
						<LikeMessIcon className='messages-post-item__likes-icon' />
						<p className='messages-post-item__likes-num'>
							{amountLikeState}<span>likes</span>
						</p>
					</div>
					<div className="messages-post-item__date">{date}</div>
				</div>
			}
			<div className="messages-post-item__body">
				<div className="messages-post-item__photo-wrap">
					<img src={photo} alt={name} className="messages-post-item__photo" />
				</div>
				<div className="messages-post-item__content">
					<p className="messages-post-item__name">{name}</p>
					<p className="messages-post-item__mess">{message}</p>
					{image
						? <div className="messages-post-item__mess-img-wrap"

							onClick={onImageClickHandler}>
							<img src={image} alt="image" className="messages-post-item__mess-img" />
						</div>
						: <></>
					}
					{merge
						? <>
							<p style={{ marginBottom: '17px' }}>Merge in a post:</p>
							{merge.map(el => <MessagePostItem
								type={merge}
								className={'merge'}
								key={el.id}
								photo={el.photo}
								name={el.name}
								message={el.message}
								amountLikes={el.amountLikes}
								date={el.date}
								privacy={el.privacy}
								merge={el.merge}
								reply={el.reply}
								image={el.image}
							/>)}
						</>
						: <></>

					}

					<MessViewPostButtons
						privacy={privacyState}
						setPrivacy={setPrivacyState} />

					{reply
						? reply.map(el => <MessagePostItem
							className={'reply'}
							key={el.id}
							photo={el.photo}
							name={el.name}
							message={el.message}
							amountLikes={el.amountLikes}
							date={el.date}
							privacy={el.privacy}
							merge={el.merge}
							reply={el.reply}
							image={el.image}
						/>)
						: <></>

					}

				</div>
			</div>
		</div>
	)
}

export default MessagePostItem;