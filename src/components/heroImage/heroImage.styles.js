import styled from 'styled-components'

export const Wrapper = styled.div`
    background: linear-gradient(
        to bottom,
        rgba(0,0,0,0) 41%,
        rgba(0,0,0,0.65) 100%
    ), url(${({ image }) => image}), var(--darkGrey);
    background-position: center;
    background-size: 100%, cover;
    position: relative;
    height: 600px;
    animation: animatedHeroImage 1s;

    @keyframes animatedHeroImage{
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }


`

export const Content = styled.div`
    padding: 20px;
    max-width: var(--maxWidth);
    margin: 0 auto;
`

export const Text = styled.div`
    z-index:100;
    max-width: 700px;
    position: absolute;
    bottom: 40px;
    margin-right: 20px;
    min-height: 100px;
    color: var(--white);


    h1{
        font-size: var(--fontSuperBig);
        
        @media (max-width:720px){
           font-size: var(--fontBig);
        }
    }

    p{
        font-size: var(--fontMed);
        
        @media (max-width:720px){
           font-size: var(--fontSmall);
        }
    }
`
