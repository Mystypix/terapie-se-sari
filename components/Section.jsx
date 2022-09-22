import styled from 'styled-components'

const Section = ({
    children,
    id,
}) => (
    <Wrapper id={id}>
        {children}
    </Wrapper>
)

export default Section

const Wrapper = styled.section`
    position: relative;
    padding: 60px 0;
`