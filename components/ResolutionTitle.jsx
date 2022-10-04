import styled from 'styled-components';

const ResolutionTitle = ({active, onClick, title}) => (
    <Wrapper active={active} onClick={onClick}>
        {title}
    </Wrapper>
)

export default ResolutionTitle;

const Wrapper = styled.div`
    margin-top: -1px;
    border: 1px solid #9cd3d7;
    padding: 10px;
    background: ${props => props.active ? '#9cd3d7' : '#fff'};
    cursor: ${props => props.active ? 'default' : 'pointer'};
    transition: border .25s, background .25s;

    &:hover {
        border: ${props => props.active ? '1px solid #9cd3d7' : '1px solid #b4e7eb'};
        background: ${props => props.active ? '#9cd3d7' : '#b4e7eb'};
    }
`