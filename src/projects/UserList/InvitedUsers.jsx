import React from 'react';
import './InvitedUsers.scss';

import { Success } from './components/Success';
import { UserList } from './components/Users/UserList';
// import { User } from './components/User';

// Тут список пользователей: https://reqres.in/api/users

export const InvitedUsers = () => {
	const [users, setUsers] = React.useState([]);
	const [invites, setInvites] = React.useState([]);
	const [isLoading, setLoading] = React.useState(true);
	const [success, setSuccess] = React.useState(false);
	const [searchValue, setsearchValue] = React.useState('');

	React.useEffect(() => {
		/**fetch получи ответ с бэкэнда*/
		fetch('https://reqres.in/api/users')
			//Если ответ будет успешным, тогда преобразуй его в формат JSON
			.then(res => res.json())
			//Ответ, который был получен, необходимо вытащить:
			.then(json => {
				//Из всего JSON-а нужно вытащить информацию, которая хранится в data
				setUsers(json.data);
			})
			/**Если произошла ошибка отлови её с помощью catch.
			 * Напиши в консоль ошибку и оповести пользователя об ошибке*/
			.catch(err => {
				console.warn(err);
				alert('Error adding user =(');
				/**Не важно получил от сервера успешный ответ или ошибку финальная часть fetch будет менять setLoading c true на false */
			})
			.finally(() => setLoading(false));
	}, []); /**Здесь при первом рендере отправляется запрос на бэкэнд */

	const onChangeSearchValue = event => {
		setsearchValue(event.target.value);
	};

	const onClickInvite = id => {
		if (invites.includes(id)) {
			setInvites(prev => prev.filter(_id => _id !== id));
		} else {
			setInvites(prev => [...prev, id]);
		}
	};

	const onClickSendInvites = () => {
		setSuccess(true);
	};

	return (
		<div className='App'>
			{success ? (
				<Success count={invites.length} />
			) : (
				<UserList
					onChangeSearchValue={onChangeSearchValue}
					searchValue={searchValue}
					items={users}
					isLoading={isLoading}
					invites={invites}
					onClickInvite={onClickInvite}
					onClickSendInvites={onClickSendInvites}
				/>
			)}
		</div>
	);
};
