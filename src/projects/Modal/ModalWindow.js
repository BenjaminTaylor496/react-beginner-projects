import './index.scss';
import React from 'react';

const Modal = ({ open, onClickClose, children }) => {
	<div className={`overlay animated ${open ? 'show' : ''}`}>
		<div className='modal'>
			<svg height='200' viewBox='0 0 200 200' width='200' onClick={onClickClose}>
				<title />
				<path d='M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z' />
			</svg>
			{children}
		</div>
	</div>;
};

export const ModalWindow = () => {
	const [open, setOpen] = React.useState(false);

	const onClickOpen = () => {
		setOpen(true);
	};

	const onClickClose = () => {
		setOpen(false);
	};

	return (
		<div className='App'>
			<button onClick={onClickOpen} className='open-modal-btn'>
				✨ Открыть окно
			</button>
			<Modal open={open} onClickClose={onClickClose}>
				<img src='https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif' alt='GIF' />
				<h3>This is Modal Window</h3>
			</Modal>
		</div>
	);
};
