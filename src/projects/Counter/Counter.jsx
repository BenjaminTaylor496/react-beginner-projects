import React from 'react';
import './index.scss';

export const Counter = () => {
	const [count, setCount] = React.useState(0); //Говорю useState, что нужно вытащить саму переменную и функцию, которая будет менять эту переменную
	const onClickPlus = () => {
		setCount(
			count + 1,
		); /**setCount ты должен получить новое значение и отобразить его там, где я скажу
  Бери count и прибавь его на 1 ед. и это новое значение сохрани в переменную count  */
	};

	const onClickMinus = () => {
		setCount(count - 1);
	};

	return (
		<div className='App'>
			<div>
				<h2>Счетчик:</h2>
				<h1>{count}</h1>
				<button onClick={onClickMinus} className='minus'>
					- Минус
				</button>
				<button onClick={onClickPlus} className='plus'>
					Плюс +
				</button>
			</div>
		</div>
	);
};
