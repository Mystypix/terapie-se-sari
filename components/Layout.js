import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'

export const Layout = (props) => {
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
      </Head>
      <Header>
        {/* <Image /> */}
        <nav>
          <Link href="/">Metoda RUŠ</Link>
          <Link href="/">Průběh terapie</Link>
          <Link href="/">O mně</Link>
          <Link href="/">Recenze</Link>
          <Link href="/">FAQ</Link>
          <Link href="/">Recenze</Link>
          <Link href="/">Kontakt</Link>
        </nav>
      </Header>
      <main>{props.children}</main>
    </div>
  )
}

const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  background: rgba(255,255,255,.6);
`