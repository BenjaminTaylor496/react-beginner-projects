import { questions } from '../questions';

export function Game({ step, question, onClickVariant }) {
	/**Внутри компонента Game вытаскиваю функцию onClickVariant и передаю ее внутри каждого <li>
	 * Вытаскиваю step
	 */
	/**Задача 1.
	 * Вытаскиваю из пропсов question и ренлерим его внутри компонента Game */

	/** Необходимо как-то сказать, что при каждом "верном" шаге, полоска должна сдвинуться.
	 * Для этого создаю функцию где находится следующая логика:
	 * Каждый step делю на количество вопросов, умножаю на 100
	 * Округляю полученный результат с помощью 'Math.round()'*/

	const percentage = (Number(step) / Number(questions.length)) * 100;

	console.log(percentage);

	return (
		<>
			<div className='progress'>
				<div style={{ width: `${percentage}%` }} className='progress__inner'></div>
			</div>
			<h1>{question.title}</h1> {/**Из массива question, необходимо вытащить title */}
			<ul>
				{
					/**Делается рендер списка ответов:
					 * В компоненте question имеется переменная variants
					 * C помощью map пробежись по каждому элементу массива variants
					 * Массив строчек преврати в массив элементов <li>
					 * ОБЯЗАТЕЛЬНО! Когда рендерится любой список необходимо указать "ключ". В данном примере ключом сделал в <li>
					 * Логика для того, чтобы понять какой вариант был выбран. Для этого, сделай следующее:
					 * Вытащи index;
					 * С помощью стрелочной функции вызови onClickVariant;
					 * И передай внутрь onClickVariant  индекс(index)
					 * Благодаря этому, теперь можно понять. Правилен тот вариант, что выбрал человек или нет. */
					question.variants.map((text, index) => (
						<li onClick={() => onClickVariant(index)} key={text}>
							{text}
						</li>
					))
				}
			</ul>
		</>
	);
}
