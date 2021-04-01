import React from 'react';

function Reviews({ name, status, qt, src }) {
	return (
		<blockquote>
			<div className="buyer-wrapper">
				<img src={src} alt="user" className="avatar" />
				<cite className="avatar-info">
					{name} <span>{status}</span>
				</cite>
			</div>

			<p className="lead">{qt}</p>
		</blockquote>
	);
}

export default Reviews;
