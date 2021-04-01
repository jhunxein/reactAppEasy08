import { useState, useEffect } from 'react';

import Hero from './components/Hero';
import Ratings from './components/Ratings';
import Reviews from './components/Reviews';

import { buyer } from './data/buyers';

const ratings = [
	{
		name: 'Reviews',
		rate: 5,
	},
	{
		name: 'Report Guru',
		rate: 5,
	},
	{
		name: 'BestTech',
		rate: 5,
	},
];

function App() {
	const [buyersData, setBuyers] = useState(buyer);

	useEffect(() => {
		setBuyers(buyer);
	}, []);

	return (
		<main className="container">
			<article>
				<div className="container-wrapper">
					<Hero />

					{/* Star ratings */}
					<div className="wrapper">
						{ratings.map((rate, index) => {
							return <Ratings key={index} {...rate} />;
						})}
					</div>
				</div>

				<div className="card-holder">
					{buyersData.map((info) => {
						return <Reviews key={info.id} {...info} />;
					})}
				</div>
			</article>
		</main>
	);
}

export default App;
