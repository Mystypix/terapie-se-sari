import styled from 'styled-components';

const ResolutionTitle = ({active, onClick, title}) => (
    <Wrapper active={active} onClick={onClick}>
        {title}
    </Wrapper>
)

export default ResolutionTitle;

const Wrapper = styled.div`
    margin-top: -1px;
    border: 1px solid #bbb;
    padding: 5px;
    background: ${props => props.active ? 'pink' : 'gray'};
    cursor: ${props => props.active ? 'default' : 'pointer'};
`