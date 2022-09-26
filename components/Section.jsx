import styled from 'styled-components'

const Section = ({
    background,
    children,
    id,
    padding,
}) => (
    <Wrapper background={background} id={id} padding={padding}>
        {children}
    </Wrapper>
)

export default Section

const Wrapper = styled.section`
    position: relative;
    padding: ${(props) => props.padding || '60px 0'};
    background: ${(props) => props.background || 'none'};
`