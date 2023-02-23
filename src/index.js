import React from 'react';
import ReactDOM from 'react-dom/client';

import { Quiz } from './projects/Quiz/Quiz';
// import { ModalWindow } from './projects/Modal/ModalWindow';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<Quiz />
	</React.StrictMode>,
);
