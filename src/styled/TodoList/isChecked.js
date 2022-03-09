import styled from 'styled-components'

const IsChecked = styled.div`
    align-items: center;
    color: ${props => props.isChecked ? '#c2c2c2' : '#54575f' }
`;

export default IsChecked;