import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'
import { navigationItemsConfig } from '../content/const'

export const Layout = ({
  activeLanguage,
  children,
  onLanguageChange,
}) => {
  return (
    <div>
      <Head>
        <title>Terapie se Šári</title>
        <meta name="description" content="RUŠ Terapie se Šári" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@300;400&family=Oooh+Baby&family=WindSong&display=swap" rel="stylesheet"></link>
      </Head>
      <Header>
        <LogoWrapper>
          <LogoText>Terapie se Šári</LogoText>
        </LogoWrapper>
        <Links>
          {navigationItemsConfig.map((item) => (
            <NavLink key={item.id} href={item.id}>{item[activeLanguage]}</NavLink>
          ))}
          <Separator />
          {activeLanguage !== 'czech' && <LanguageButton onClick={() => onLanguageChange('czech')}>CZ</LanguageButton>}
          {activeLanguage !== 'english' && <LanguageButton onClick={() => onLanguageChange('english')}>ENG</LanguageButton>}
        </Links>
      </Header>
      <main>{children}</main>
    </div>
  )
}

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`

const LogoText = styled.div`
  margin-left: 10px;
  font-family: 'WindSong', cursive;
  font-size: 26px;
`

const NavLink = ({ href, children }) => {
  return (
    <Link href={href} passHref>
      <StyledLink>{children}</StyledLink>
    </Link>
  )
}

const StyledLink = styled.a`
  margin: 0 10px;
  padding: 0 5px;
  text-decoration: none;
  color: #1E1E1E;
`

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  width: 100%;
  height: 60px;
  background: #fff;
  box-shadow: 0 1px 10px rgba(0,0,0,.3);
`

const Links = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 10px;
`

const Separator = styled.div`
  margin: 0 15px 0 5px;
  height: 30px;
  width: 1px;
  background: #333;
`

const LanguageButton = styled.button`
  border: 0;
  background: none;
  cursor: pointer;
`