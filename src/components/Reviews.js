import React from 'react'
import styled from 'styled-components'

const ReviewsStyled = styled.div`
	height: 250px;	
	display: flex;
	justify-content: space-around;
	align-items: center;
`

const CustomerFrame = styled.div`
	width: 25%;
	height: inherit;
`

function Reviews() {
	return (
		<div style={{height: "750px", background: "#f0ca78", color: "white"}}>
			<ReviewsStyled>
				<h2>Customer stories</h2>
			</ReviewsStyled>
			<ReviewsStyled >
				<CustomerFrame>
				<h3 style={{textAlign: "center"}}>Marut Hayrapetyan / One way tour</h3>
				<p>
					Our team has already taken part in the entertainment events 
					organized by <b>Gyoogh</b>, and the impressions are indescribably 
					amazing. Interesting and intellectual games, a perfect atmosphere,
					a great approach to work. We are thankful to all of you for
					the services you perform. Our team wishes you future success and new achievements!
				</p>
				</CustomerFrame>
				<CustomerFrame>
				<h3 style={{textAlign: "center"}}>Narine Vardanyan / One way tour</h3>
				<p>
					I have already participated in the games organized by <b>Gyoogh</b> for a few times,
					and I am very impressed and full of emotions. These days were unforgettable and fulfilling!
					The idea of the project is unique. I am grateful to the organizers for granting us this opportunity.
					I am impatiently waiting for the next invitation!
				</p>
				</CustomerFrame>
				<CustomerFrame>
				<h3 style={{textAlign: "center"}}>Mariam Xloyan / Cinema Star</h3>
				<p>
					I was happy to take part in this project. The format of the service is innovative
					and pleasing, as it organizes... ,and at the same time it implements...
					I would particularly like to note, that this is the best method of Team Building.
					Trust <b>Gyoogh</b> and have an amazing, adventurous, pleasant day with a friendly 
					atmosphere and lots of emotions, and you will be one step closer to the treasure
					of the rural life!
				</p>
				</CustomerFrame>
			</ReviewsStyled>
		</div>
	)
}

export default Reviews