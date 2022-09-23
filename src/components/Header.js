import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.svg"/>
            <NavMenu >
                <a>
                    <img src="/images/home-icon.svg"  />
                    <span>HOME</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg"  />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg"   />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg"  />
                    <span>ORIGINAL</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg"  />
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg" alt=""   />
                    <span>SERIES</span>
                </a>
            </NavMenu >
            <UserImg src="/images/shazhad.jpg" />
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height: 100px;
    background-color: #090b13;
    display: flex;
    padding: 0 45px;
    grid-column-gap: 20px;


`
const Logo = styled.img`
    width: 100px;
`
const NavMenu = styled.div`
    display: flex;
    align-items: center;
    grid-column-gap: 60px;
    flex: 1;
    margin-left: 25px;

    a {
        diplay: flex;
        align-items: center;
        padding: 0; 15px;
        cursor: pointer;

        img {
            height: 30px;
            vertical-align: middle;
            position: relative; 22px;
        }

        span {
            font-size: 18px;
            font-weight: bold;
            letter-spacing: 1.42px;
            position: relative;
            vertical-align: middle;

            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }

        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
    padding: 0; 46px;
`
const UserImg = styled.img`
    width: 75px;
    height: 75px;
    margin: auto;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    diplay: flex;
    padding: 10;
    margin-up: 20px;
    align-items: center;
`
