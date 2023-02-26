import React from 'react';
import axios from 'axios';

import { Collection } from './Collection';

import './index.scss';

const categories = [
	{ name: 'Все' },
	{ name: 'Море' },
	{ name: 'Горы' },
	{ name: 'Архитектура' },
	{ name: 'Города' },
];

export const Photos = () => {
	const [categoryId, setCategoryId] = React.useState(0);
	const [page, setPage] = React.useState(1);
	const [isLoading, setIsLoading] = React.useState(true);
	const [searchValue, setSearchValue] = React.useState('');
	const [collections, setCollections] = React.useState([]);

	React.useEffect(() => {
		setIsLoading(true);
		const fetchData = async () => {
			const category = categoryId ? `category=${categoryId}` : '';
			try {
				const res = await axios.get(
					`https://63fb4c937a045e192b669905.mockapi.io/photo_collections?page=${page}&limit=3&${category}}`,
				);
				setCollections(res.data);
			} catch (error) {
				console.warn(error);
				alert('Failed to get photos');
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();

		// fetch(
		// 	`https://63fb4c937a045e192b669905.mockapi.io/photo_collections?page=${page}&limit=3&${category}`,
		// )
		// 	.then(res => res.json())
		// 	.then(json => {
		// 		setCollections(json);
		// 	})
		// 	.catch(err => {
		// 		console.warn(err);
		// 		alert('Failed to get photos');
		// 	})
		// 	.finally(() => {
		// 		setIsLoading(false);
		// 	});
	}, [categoryId, page]);

	return (
		<div className='App'>
			<h1>Моя коллекция фотографий</h1>
			<div className='top'>
				<ul className='tags'>
					{categories.map((obj, i) => (
						<li
							onClick={() => setCategoryId(i)}
							className={categoryId === i ? 'active' : ''}
							key={obj.name}>
							{obj.name}
						</li>
					))}
				</ul>
				<input
					value={searchValue}
					onChange={e => setSearchValue(e.target.value)}
					className='search-input'
					placeholder='Поиск по имени'
				/>
			</div>
			<div className='content'>
				{isLoading ? (
					<h3>Идет загрузка...</h3>
				) : (
					collections
						.filter(obj => obj.name.toLowerCase().includes(searchValue.toLowerCase()))
						.map((obj, index) => <Collection key={index} name={obj.name} images={obj.photos} />)
				)}
			</div>
			<ul className='pagination'>
				{[...Array(5)].map((_, i) => (
					<li onClick={() => setPage(i + 1)} className={page === i + 1 ? 'active' : ''}>
						{i + 1}
					</li>
				))}
			</ul>
		</div>
	);
};
