import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Burger from "../../assets/hero/hero-2.png"
import { Link } from 'react-router-dom'

function Banner() {
  return (
    <section className='hero_section'>
        <Container>
            <Row>
                <Col lg={7} className='mb-5 mb-lg-0'>
                    <div className='position-relative'>
                        <img src={Burger} className='img-fluid'></img>
                        <div className='price_badge'>
                            <div className='badge_text'>
                                <h4 className='h4_xs'>Only</h4>
                                <h4 className='h3_lg'>₹ 59</h4>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={5}>
                    <div className='hero_text text-center'>
                        <h1 className='text-white'>New BurpGer</h1>
                        <h2 className='text-white'>With Extra Cheese!</h2>
                        <p className='text-white pt-2 pb-4'>
                            Indudge yourself into the madness of cheesy sauces with crunchy aloo patty, 
                            layered with sizzling onions and fresh cut lettuce leaves. 
                            Get ready to throw a BURP of your life with all new Burp-Ger!
                        </p>
                        <Link to="/" className='btn order_now'>
                            Order Now
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner