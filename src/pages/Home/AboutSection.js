import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Pizza from '../../assets/about/pizza.png';
import Salad from '../../assets/about/salad.png';
import Delivery from '../../assets/about/delivery-bike.png';

const data = [
    {
        image: Pizza,
        title: "Fresh and Organic",
        paragraph : "Our products are made from Fresh ingredients fetched from our own farm. No preservatives added! 100% original!"
    },
    {
        image: Salad,
        title: "Top Quality",
        paragraph : "We never compromise on our quality and serve to make our customers like you happy and burpy always!"
    },
    {
        image: Delivery,
        title: "Fastest Delivery",
        paragraph : "We know you cant wait to taste our delicious burpgers! So, you too know that we also cant wait to deliver it to you asap."
    }

];

function AboutSection() {
  return (
    <>
        <section className='about_section'>
            <Container>
                <Row>
                    <Col lg ={{span: 8, offset:2}} className="text-center">
                        <h2>Taste the burger and Burp It out with family!</h2>
                        <p>
                            Get burger for your whole family and delve yourselves into the exciting flavors 
                            and cheesiness with our burp-gers! All the burgers are unique in themselves. 
                            Don't beleive us? Try out them yourself!
                        </p>
                        <Link to="/" className='btn order_now btn_red'>
                            Explore BurpGers!
                        </Link>
                    </Col>
                </Row>
            </Container>
        </section>
        <section className='about_wrapper'>
            <Container>
                <Row className='justify-content-md-center'>
                    {data.map((cardData, index)=>(
                        <Col md={6} lg={4} className='mb-4 mb-md-0' key ='index'>
                            <div className='about_box text-center'>
                                <div className='about_icon'>
                                    <img src={cardData.image} className='img-fluid' alt = 'icon' />
                                </div>
                                <h4>{cardData.title}</h4>
                                <p>{cardData.paragraph}</p>
                            </div>
                        </Col>   
                    ))}
                </Row>
            </Container>
        </section>
    </>
  )
}

export default AboutSection