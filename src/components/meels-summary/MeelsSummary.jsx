import React from 'react'
import { styled } from 'styled-components'
import { MeelBannerImage } from '../../assets'

const MeelsSummary = () => {
  return (
    <section>
        <MailImageWrapper>
            <img src={MeelBannerImage} alt='Meels'></img>
        </MailImageWrapper>
        <MeelsSummaryContainer>
            <h2>Delicious Food, Delivered To You</h2>
            <p>
                Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.
            </p>
            <p>
                All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!
            </p>
        </MeelsSummaryContainer>
    </section>
  )
}
 const MailImageWrapper = styled('div')`
    width: 100%;
    height: 25rem;
    z-index: 0;
    overflow: hidden;
    & > img {
        object-fit: cover;
    }
 `

 const MeelsSummaryContainer = styled('div')`
    text-align: center;
    max-width: 45rem;
    width: 100%;
    margin: 0 auto;
    background-color: #383838;
    color: white;
    border-radius: 16px;
    padding: 1rem;
    box-shadow: 0px 6px 16px 0px #0000004D;
    margin-top: -7rem;
    position: relative;
    & > h2{
        font-size: 2rem;

    }
`
export default MeelsSummary