import React from 'react';

import { Skeleton } from './Skeleton';
import { User } from './User';

export const UserList = ({
	items,
	isLoading,
	searchValue,
	onChangeSearchValue,
	invites,
	onClickInvite,
	onClickSendInvites,
}) => {
	return (
		<>
			<div className='search'>
				<svg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
					<path d='M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z' />
				</svg>
				<input
					/**Здесь, в месте где рендерится input вписал в value searchValue и в onChange вписал onChangeSearchValue */
					value={searchValue}
					onChange={onChangeSearchValue}
					type='text'
					placeholder='Найти пользователя...'
				/>
			</div>
			{isLoading ? (
				<div className='skeleton-list'>
					<Skeleton />
					<Skeleton />
					<Skeleton />
				</div>
			) : (
				<ul className='users-list'>
					{
						/**Перед тем, как отрендерить список пользователей, в начале сделай фильтрацию в котором есть obj
						 * Создай переменную fullName, в котором содержится 2 элемента объекта, и переведи их на нижний регистр.
						 * Затем, верни fullName и obj.email в котором есть то, что есть в searchValue и так же переведи их в нижний регистр(далее "н/р").
						 * А условие '||' должен вернуть true из fullName или из obj.email. Как и сами значения, так и searchValue переведи в н/р
						 *
						 * Необходимо передать ключ c obj.id, так как в каждом объекте имеется свой id.
						 * !! Так как все объекты рендерятся с помощью .map() необходимо вводить "КЛЮЧ"!!
						 * Все свойства obj передай в качестве пропсов в компонент User.
						 * Так делать куда проще, чем писать следующее: first_name ={obj.first_name}.
						 * Для всех сво йств, которые хранятся в obj. Таким образом можно значительно уменьшить код */

						items
							.filter(obj => {
								const fullName = (obj.first_name + obj.last_name).toLowerCase();

								return (
									fullName.includes(searchValue.toLowerCase()) ||
									obj.email.toLowerCase().includes(searchValue.toLowerCase())
								);
							})
							.map(obj => (
								<User
									onClickInvite={onClickInvite}
									isInvited={invites.includes(obj.id)}
									key={obj.id}
									{...obj}
								/>
								/**Получи items, получить из него каждый объект(В данном примере каждого пользователя)
								 * И передать компоненту User*/
							))
					}
				</ul>
			)}
			{invites.length > 0 && (
				<button onClick={onClickSendInvites} className='send-invite-btn'>
					Отправить приглашение
				</button>
			)}
		</>
	);
};
