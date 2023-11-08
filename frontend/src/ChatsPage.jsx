import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from "react-chat-engine-advanced";
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('5af0330f-df8f-4a9f-b563-951a504931f3', 
        props.user.username, 
        props.user.secret
    );
    return (
        <div style = {{height: '100vh'}}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style = {{height: '100vh'}}/>
        </div>
    )
}

export default ChatsPage;