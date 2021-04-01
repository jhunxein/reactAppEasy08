function Ratings({ name, rate }) {
	return (
		<figure>
			<img
				src="/"
				alt="star rating"
				className="stars"
				style={{ '--rating': rate }}
				aria-label={`${rate > 1 ? rate + ' star' : rate + ' stars'} out of 5`}
			/>
			<figcaption>Rated 5 stars in {name}</figcaption>
		</figure>
	);
}

export default Ratings;
