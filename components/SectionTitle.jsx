import styled from 'styled-components'

const SectionTitle = ({
    title,
}) => (
    <Wrapper>{title}</Wrapper>
)

export default SectionTitle

const Wrapper = styled.h2`
    padding-bottom: 40px;
    font-family: 'Oooh Baby'; 
    font-size: 34px;
    text-align: center;
`