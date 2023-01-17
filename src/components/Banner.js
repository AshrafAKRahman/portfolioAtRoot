import { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import headerImg from "../assets/img/header-img.png"
import carousel1 from "../assets/img/carousel1.png"
import carousel2 from "../assets/img/carousel2.png"
import carousel3 from "../assets/img/carousel3.png"


export const Banner = () => {
    const [loopNum, setLoppNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["Software Developer", "Team Player", "Problem Solver"]
    const [text, setText] = useState ('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const [index, setIndex] = useState(1);
    const period = 2000;


    useEffect (() => {
        let ticker = setInterval(() => {
            tick();
        },delta)

        return() => { clearInterval(ticker)};
    }, [text]) 
    
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -4): fullText.substring(0, text.length + 4);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 4)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoppNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        }else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="banner" id ="home">
            <Container>
                <Row>
                    <Col xs={12} md={6} xl={7}>
                        {/* <span className="tagline" >Welcome to my Portfolio</span> */}
                        <div id="header-div">
                        <h1> {`Hi I'm Ashraf:`} <span className="wrap">{text}</span></h1>                        
                        </div>
                        {/* <div id="banner-content"> */}
                        <Splide aria-label="My Favorite Images">
                        <SplideSlide>
                            <img src={carousel1} alt="software-developer" className="carousel" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src={carousel2} alt="team-player" className="carousel"/>
                        </SplideSlide>
                        <SplideSlide>
                            <img src={carousel3} alt="carousel3" className="carousel"/>
                        </SplideSlide>
                        </Splide>
                            
                        {/* </div> */}
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    <div id="banner-img">
                        <img src={headerImg} alt="Header Img"/>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner