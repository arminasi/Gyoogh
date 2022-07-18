import React from 'react'
import styled from 'styled-components'
import image1 from "../assets/Persons/1stPlace.svg"
import image2 from "../assets/Persons/Adventure.svg"
import image7 from "../assets/Persons/Helping.svg"
import image9 from "../assets/Persons/Solved.svg"
import image10 from "../assets/Persons/Working.svg"

const color1 = "#9cd996";
const color2 = "#f0ca78";

const IntroStyled = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	text-align: center;
	width: 100%;
	height: 100vh;
	background: 
		linear-gradient(to right, 
		${color1} 0%,
		${color1} 50%,
		${color2} 50%,
		${color2} 100%)
`

const IntroText = styled.div`
	width: 400px;
	height: 50px;
	font-weight: bold;
	color: white;
	cursor: pointer;
	box-sizing: border-box;
	margin-top: 105px;
	transition: 0.2s;
	&:hover {
		font-weight: bold;
		transform: scale(1.4);
		animation: pulse 2s infinite;
		background:
		linear-gradient(to right, 
		${color2} 0%,
		${color2} 50%,
		${color1} 50%,
		${color1} 100%)	
	}
`

const StoryStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background: #39a6e6;
`

const StoryFrame = styled.div`
	width: 100%;
	box-sizing: border-box;
	padding: 0 15%;
	margin-top: 8%;
	display: flex;
	flex-direction: wrap;
	justify-content: space-between;
	align-items: center;
	text-align: center;
	color: white;
	font-size: 1.4em;
`

const TextFrame = styled.div`
	width: 40%;
	height: 50%;
`

const ImgFrame = styled.img`
	width: 40%;
`

function Story() {
	const story = React.useRef(null);
	const scrollToStoryStyled = () => {
    story.current?.scrollIntoView({behavior: 'smooth'});
  };

	return (
		<div>
			<IntroStyled>
				<IntroText onClick={scrollToStoryStyled}>Are you ready to solve problems by playing games with your team? </IntroText>

				<img style={{position: "absolute", marginTop: "10%", left: "25%", bottom: "0px"}} width="50%" src={image10}></img>
			</IntroStyled>
			<StoryStyled ref={story}>
				<StoryFrame>
					<ImgFrame src={image2}/>
					<TextFrame>
						<p>
							Explore yourself differently,
							travel with the beautiful 
							places of Armenia.
						</p>
					</TextFrame>
				</StoryFrame>
				<StoryFrame>
					<TextFrame>
					<p>
						Support, fight and overcome
						the challenges with a team work.
					</p>
					</TextFrame>
					<ImgFrame src={image7}/>
				</StoryFrame>
				<StoryFrame>
				<ImgFrame src={image1}/>
					<TextFrame>
					<p>
						Best results based on the 
						best organized team work.
					</p>
					</TextFrame>
				</StoryFrame>
				<StoryFrame>
					<TextFrame>
					<p>
						Get ready for the easy 
						solutions of next "hard"  problems
					</p>
					</TextFrame>
					<ImgFrame src={image9}/>
				</StoryFrame>
			</StoryStyled>
		</div>
	)	
}

export default Story