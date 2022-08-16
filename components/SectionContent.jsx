import styled from 'styled-components'

const SectionContent = ({
    children,
}) => (
    <Wrapper>
        {children}
    </Wrapper>
)

export default SectionContent

const Wrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50vw;
    min-height: 100vh;
`