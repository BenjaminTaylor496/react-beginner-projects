import './index.scss';
import React from 'react';
import { Modal } from './components/Modal';

export const ModalWindow = () => {
	const [open, setOpen] = React.useState(false);

	const onClickOpen = () => {
		setOpen(true);
	};

	const onClickClose = () => {
		setOpen(false);
	};

	console.log(open);

	return (
		<div className='App'>
			<button onClick={onClickOpen} className='open-modal-btn'>
				✨ Открыть окно
			</button>
			<Modal open={open} onClickClose={onClickClose}>
				<img src='https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif' alt={'img'} />
				<h3>This is Modal Window</h3>
			</Modal>
		</div>
	);
};
