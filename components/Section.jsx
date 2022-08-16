import styled from 'styled-components'

const Section = ({
    children,
}) => (
    <Wrapper>
        {children}
    </Wrapper>
)

export default Section

const Wrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`