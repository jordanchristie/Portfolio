import React from 'react';
import styled from 'styled-components';


const SocialMedia = [
    {
        name: 'Github',
        url: 'https://github.com/jordanchristie',
        color: '#4183c4',
    },
    {
        name: 'Twitter',
        url: 'https://twitter.com/j0rdanchristie',
        color: '#00aced',
    },
    {
        name: 'Email',
        url: 'mailto:jordanchristie116@gmail.com',
        color: '#205081',
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/jordanchristiehfs',
        color: '#3b5998',
    },
]

const Footer = () => (
    <FooterWrapper>
        <SocialLinksWrapper>
            { SocialMedia.map(link => {
                return <SocialLink key={link.name}>
                    <a href={link.url}>
                    {link.name}
                    </a>
                </SocialLink>
            }) }
            <small>© {new Date().getFullYear()}</small>
        </SocialLinksWrapper>
         
    </FooterWrapper>
)

export default Footer

const FooterWrapper = styled.footer`
    
`

const SocialLinksWrapper = styled.ul`
    list-style: none;
    display: inline-block;
    margin: 0;
    padding: 0;
    @media screen and (min-width: 480px) {
        display: flex;
        justify-content: center;
    }
`;

const SocialLink = styled.li`
    margin: 0 1em;
    transition: color .3s ease;
    a {
        text-decoration: none;
        &:hover {
            color: #5691c8;
            transition: color .3s ease;
        }
    }
`