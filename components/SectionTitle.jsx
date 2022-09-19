import styled from 'styled-components'

const SectionTitle = ({
    children,
    title,
}) => (
    <Wrapper>
        <h2 style={{fontFamily: 'Oooh Baby', fontSize: '34px'}}>{title}</h2>
        {children && children}
    </Wrapper>
)

export default SectionTitle

const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 0;
`