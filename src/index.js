import React from 'react';
import ReactDOM from 'react-dom/client';
import { Counter } from './projects/Counter/Counter';

import { ModalWindow } from './projects/Modal/ModalWindow';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<ModalWindow />
	</React.StrictMode>,
);
