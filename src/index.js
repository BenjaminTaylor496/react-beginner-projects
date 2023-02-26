import React from 'react';
import ReactDOM from 'react-dom/client';

import { InvitedUsers } from './projects/UserList/InvitedUsers';
// import { ModalWindow } from './projects/Modal/ModalWindow';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<InvitedUsers />
	</React.StrictMode>,
);
