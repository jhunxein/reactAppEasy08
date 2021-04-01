function Ratings({ name, rate }) {
	return (
		<figure>
			<div
				className="stars"
				style={{ '--rating': rate }}
				aria-label={`${rate > 1 ? rate + ' star' : rate + ' stars'} out of 5`}
			></div>
			<figcaption>Rated 5 stars in {name}</figcaption>
		</figure>
	);
}

export default Ratings;
