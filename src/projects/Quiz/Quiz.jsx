import './index.scss';
import React from 'react';

import { questions } from './questions';
import { Result } from './components/Result';
import { Game } from './components/Game';

/**Любое приложение разбивается на маленькие задачи. Именно таким способом разрабатываются любые приложения. Не делается огромный объем задач за 1 раз
 * Задача 1: Необходимо вытащить из массива 'questions' вопрос и отрендерить на главной странице
 * Задача 2: Необходимо понять, правильный ответ я выбрал или нет. И не важно выбрал я правильный ответ или нет, надо чтобы вопрос сменился */

export const Quiz = () => {
	const [step, setStep] = React.useState(0);
	/** Говорю 'React.useState(0)' , что надо отрендерить первый вопрос
	 * Теперь с помощью 'step' надо выбрать 1 из объектов, который хранится в 'questions'
	 */

	/**useState внизу будет отвечать за количество правильных ответов из общей суммы вопросов которые есть в компоненте questions */
	const [correct, setCorrect] = React.useState(0);

	const question = questions[step]; //С помощью переменной question, по индексу бери вопрос из массива questions

	const onClickVariant = index => {
		/**Эта функция будет получать 1 из вариантов пусть будет "index"*/
		/**<= Функция, которая будет понимать, что сейчас произошел "клик" на какой-либо вариант */
		console.log(step, index);
		// В консоли будет выводиться 2 значения: 1) вариант, что выбрали; 2) вариант который правильный
		setStep(step + 1);
		// А тут, если ответ правильный, то к step прибавится 1

		if (index === question.correct) {
			setCorrect(correct + 1);
		}
	};

	return (
		<div className='App'>
			{step !== questions.length ? (
				/**Теперь вопрос, который был взят из массива был передан внутрь компонента 'Game'*/
				<Game step={step} question={question} onClickVariant={onClickVariant} />
			) : (
				<Result correct={correct} />
			)}
		</div>
	);
};
