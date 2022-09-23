import styled from 'styled-components'

const Section = ({
    children,
    id,
    padding,
}) => (
    <Wrapper id={id} padding={padding}>
        {children}
    </Wrapper>
)

export default Section

const Wrapper = styled.section`
    position: relative;
    padding: ${(props) => props.padding || '60px 0'};
`