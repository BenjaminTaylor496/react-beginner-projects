import React from 'react';
import ReactDOM from 'react-dom/client';

import { Photos } from './projects/Photos/Photos';
// import { ModalWindow } from './projects/Modal/ModalWindow';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<Photos />
	</React.StrictMode>,
);
