import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return <main>
    <PageHero title="About" />
    <Wrapper className='page section section-center'>
      <img src={aboutImg} alt="Nice desk" />
      <article>
        <div className="title">
          <h2>Our Story</h2>
          <div className="underline"></div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, molestias veritatis? Perspiciatis quis amet magnam laborum unde quidem dolorum, repudiandae in voluptate nisi porro nesciunt commodi earum ipsam tempore voluptates rerum officia eius necessitatibus natus suscipit velit molestias consequatur. Illum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti maxime sunt facere unde sequi reiciendis natus asperiores modi, voluptatem cum ut distinctio quae. Dolor, odit!</p>
      </article>
    </Wrapper>
  </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
