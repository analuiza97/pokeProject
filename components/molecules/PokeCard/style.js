import styled from 'styled-components';

export const PokeCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 25%
`;

export const ImageHolder = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 25px;
    img {
        max-width: 75%;
    }
`;

export const CardTitle = styled.div`
`;

export const TypesHolder = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
        flex: 1;
        :last-child {
            margin-left: 10px;
        } 
    }
`;