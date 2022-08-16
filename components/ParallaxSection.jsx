import styled from 'styled-components'

const ParallaSection = ({
    children,
}) => (
    <Wrapper>
        {children}
    </Wrapper>
)

export default ParallaxSection

const Wrapper = styled.section`
    display: flex;
`