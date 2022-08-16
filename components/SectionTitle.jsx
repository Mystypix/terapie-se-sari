import styled from 'styled-components'

const SectionTitle = ({
    children,
    title,
}) => (
    <Wrapper>
        <h2>{title}</h2>
        {children && children}
    </Wrapper>
)

export default SectionTitle

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50vw;
    height: 100vh;
`