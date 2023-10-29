import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { pizzaGet } from 'services/pizzaServices';
import { IFullPizza } from 'types/misc';

const FullPizza: React.FC = () => {
	const [pizza, setPizza] = useState<IFullPizza>();
	const { id } = useParams();

	const fetchPizza = useCallback(async () => {
		try {
			const { data } = await pizzaGet(id);
			setPizza(data);
		} catch (error) {
			alert('error');
		}
	}, [id]);

	useEffect(() => {
		fetchPizza();
	}, [fetchPizza]);

	if (!pizza) {
		return <>...loading</>;
	}

	return (
		<div className='container'>
			<img src={pizza?.imageUrl} alt='' />
			<h2>{pizza?.title}</h2>
			<p>Lorem ipsum dolor sit amet.</p>
			<h4>{pizza?.price} $</h4>
		</div>
	);
};

export default FullPizza;
