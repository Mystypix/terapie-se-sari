import styled from 'styled-components';
import { TinaMarkdown } from 'tinacms/dist/rich-text'


const ResolutionText = ({active, text}) => (
    <Wrapper active={active}>
        <TinaMarkdown content={text} />
    </Wrapper>
)

export default ResolutionText;

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    opacity: ${props => props.active ? '1' : '0'};
    transform: ${props => props.active ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform .25s, opacity .25s;
    margin-top: -1px;
    margin-left: -1px;
    border: 1px solid #9cd3d7;
    padding: 10px;
    pointer-events: none;
`