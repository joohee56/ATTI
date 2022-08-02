import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface ChannelType {
    channel_id : Array<string>;
}

const dummyChannel = {
    channel_id : ['싸피', '대전1반', '대전3반'],
}

function ChannelList(dummyChannel: ChannelType){
    const rendering = () => {
        const result = [];
        for (let i = 0; i < dummyChannel.channel_id.length; i++) {
          result.push(<div key={i}>{dummyChannel.channel_id[i] + " / "}</div>);
        }
        return result;
      };
    
    return <div>{rendering()}</div>;
}

function Channel(){
    return(
        <CategoryContainer>
            {ChannelList(dummyChannel)}
        </CategoryContainer>
    );
}

const CategoryContainer = styled.div`
width: 150px;
height: 400px;
border: solid;
border-radius: 5px;
`;
export default Channel