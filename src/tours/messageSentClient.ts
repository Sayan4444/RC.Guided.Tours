import type { ISteps, ITours } from '../types';
import { createStep } from '../utils';

export default async function messageSentClient(): Promise<ITours> {
	const tourName = 'How a Message is sent (Client side)';
	const baseDir = 'apps/meteor/client/views/room';

	const stepsArray: ISteps[] = [
		{
			title: "A complete flowchart",
			description: "### This is the complete flowchart of how a message is sent. We will understand this in detail over the next two tours iterating through multiple steps\n\nOpen in full-screen mode\n\n>> xdg-open ./RC.Guided.Tours/public/sending_message/sending_message_flowchart.png\n\n![image](./RC.Guided.Tours/public/sending_message/sending_message_flowchart.png)"
		},
		{
			title: 'How a Message is Sent',
			file: baseDir + '/body/RoomBody.tsx',
			description:
				"## How a Message is Sent\n\n### *In this guide, we will explore the protocols, technologies, and tools involved in message sending. By understanding the fundamentals, you will gain confidence in navigating through the repository, Hence you will get more precise understanding of how a message is sent and what are methods being used, how are API calls made and much more. Let's embark on this exciting journey together to uncover the wonders of message sending!*",
			line: 1,
		},
		{
			title: 'The Chat Room/Channel',
			file: baseDir + '/body/RoomBody.tsx',
			description:
				"## The Chat Room/Channel\n\n- **RoomBody.tsx** is a file that handles the rendering of the Chat Room/Channel on the client side. It brings together multiple components to enable user interaction and communication within the chat environment.\n\n- In this file, there are various methods implemented. Let's specifically examine the process of sending a message through the **MessageComposer** component.\n#### **Additionally, the code in \"RoomBody.tsx\" includes logic for performing various actions related to the chat functionality. These actions might include *sending messages*, *editing* or *deleting* messages, *managing user permissions*, and handling user interactions within the chat environment.**",
			searchString: 'const RoomBody',
		},
		{
			title: 'Chat/Room Layout',
			file: baseDir + '/body/RoomBody.tsx',
			description:
				"### Chat/Room Layout\n\n- The \"RoomBody.tsx\" file is straightforward to comprehend. You can easily navigate through the components and grasp their functionalities.\n\n- The majority of the code in this file revolves around message rendering and handling various chat-related actions.",

			searchString: "<div className='messages-container-wrapper'>",
		},
		{
			title: 'Composer Container',
			file: baseDir + '/body/RoomBody.tsx',
			description:
				"### Composer Container\n\n- At the bottom of the \"RoomBody.tsx\" file, there is a component responsible for rendering the Message Composer. It accepts several props, including the room ID and subscription details. These props help verify whether the user is allowed to send messages in the given context.\n\n- The Message Composer component also manages the size and layout of the composer, allowing users to comfortably compose and send messages. It provides functionality to retrieve the previous and next messages for reference or navigation purposes.\n\n```\n    <ComposerContainer />\n```\n\n- **Note**  ComposerContainer is also built from combination multiple components, we will explore components and see how data is sent.\n",
			searchString: '<ComposerContainer',
		},
		{
			title: 'Composer Container',
			file: baseDir + '/composer/ComposerContainer.tsx',
			description:
				"### The Composer Container\n\n- In the \"ComposerContainer\" component, different composers are rendered based on specific conditions:\n\n- For omnichannel rooms, the component renders the \"ComposerOmnichannel\" composer.\n   - If the chat room is a VoIP room, the component renders the \"ComposerVoIP\" composer.\n   - In the case of federated rooms, the component renders the \"ComposerFederation\" composer.\n   - For anonymous users, the component renders the \"ComposerAnonymous\" composer.\n   - If the chat room is read-only, the component renders the \"ComposerReadOnly\" composer.\n   - Lastly, if there are any block-related restrictions, such as blocked users or blocking others, the component renders the \"ComposerBlocked\" composer.\n\n    **1. Omnichannel**\n    ```\n        <ComposerOmnichannel {...props} />\n    ```\n    **2. VoIp**\n    ```\n        <ComposerVoIP />\n    ```\n    **3. Federation**\n    ```\n        <ComposerFederation room={room} {...props} />\n    ```\n    **4. Anonymous Users**\n    ```\n        <ComposerAnonymous />\n    ```\n    **5. Read Only**\n    ```\n        <ComposerReadOnly />\n    ```\n    **6. Composer Blocked**\n    ```\n        <ComposerBlocked />\n    ```",
			searchString: 'const ComposerContainer',
		},
		{
			title: 'ComposerMessage Component',
			file: baseDir + '/composer/ComposerContainer.tsx',
			description:
				"## ComposerMessage Component\n### And at the end we have ComposerMessage which is responsible for rendering MessageBox(The Text composer at the footer of Channel/Room)",
			searchString: '<ComposerMessage',
		},
		{
			title: 'MessageBox Component',
			file: baseDir + '/composer/ComposerMessage.tsx',
			description:
				"## MessageBox Component\n\n- At the bottom of the code, there is a \"MessageBox\" component, which represents the actual chat message box. Its presence is crucial for the proper functioning of the Composer. If you were to comment out or remove the \"MessageBox\" component and run the server, you would observe that the Composer functionality would no longer be available.\n\n- The \"MessageBox\" component plays a pivotal role in enabling users to compose and send messages within the chat interface. It provides the necessary user interface elements, such as input fields and buttons, to facilitate message composition and submission.",
			searchString:
				'<MessageBox ',
		},
		{
			title: 'Message Box',
			file: baseDir + '/composer/messageBox/MessageBox.tsx',
			description:
				"## The Message Box\n\n#### This file serves as the implementation of the Message Composer component, where you can explore and analyze how the code functions. By examining the code in this file, you can gain a better understanding of its inner workings.\n\n\n#### The Message Composer component receives several props, *\"tmid\"* (thread ID), and *\"onSend\"* (handler for sending messages), among others. These props provide necessary data and functionality for the composer to operate effectively.\n\n\n#### By inspecting and experimenting with the code, you can gain insights into how different aspects of the Message Composer are implemented and how they interact with other components and functions.\n\n- The MessageBox is using MessageBoxProps type for defining its type\n```\ntype MessageBoxProps = {tmid?: IMessage['_id']; ...};\nconst MessageBox = ({tmid,onSend,onJoin ...}: MessageBoxProps): ReactElement => \n```",
			searchString: 'const MessageBox = ({',
		},
		{
			title: 'Sending Message',
			file: baseDir + '/composer/messageBox/MessageBox.tsx',
			description:
				"## Sending Message\n\n### Rocket chat's Room/channel message composers have multiple options such as uploading files, Writing text messages and Quoted messages, And then we have a send button at the right corner of composer which sends what you have entered.\n\n### To understand how the send button works for sending a simple text message:\n\n- When the send button is clicked, an event is triggered.\n- The event handler associated with the send button retrieves the text message entered by the user.\n- The text message is then processed and prepared for sending.\n- The necessary information, such as the room/channel ID, sender details, and the text message content, is included.\n- The prepared message is sent to the server via an appropriate network request or function call.\n- The server receives the message and performs further processing, including broadcasting it to the relevant recipients in the room/channel.\nThe message is displayed in the chat interface for all participants to view.",
			searchString: "aria-label={t('Send')}",
			offset: -1,
		},
		{
			title: 'Message Input',
			file: baseDir + '/composer/messageBox/MessageBox.tsx',
			description:
				"## Message Input \n\n- The MessageComposerInput component plays a crucial role in handling user inputs within the message composer. It is responsible for capturing various types of inputs and encompasses multiple associated actions.\n\n#### The MessageComposerInput component enables users to interact with the message composer through different actions, such as:\n\n1. **Typing and Editing**: Users can enter and edit text within the composer input field.\n\n2. **Formatting**: It may support various formatting options like bold, italic, bullet points, etc., allowing users to apply formatting to their messages.\n\n3. **Mentions**: Users can mention specific individuals or groups within the message by using the appropriate syntax or by selecting them from a list.\n\n4. **Emojis**: It may provide an emoji picker or support emoji shorthand, allowing users to insert emojis into their messages.\n\n5. **Attachments**: Users can attach files or media to their messages, such as images, documents, or videos.",
			searchString: '<MessageComposerInput',
		},
		{
			title: 'Send Button',
			file: baseDir + '/composer/messageBox/MessageBox.tsx',
			description:
				"### The Send Button\n\n- To send any message you need to click send button or hit Enter/Return key, when you click send button **handleSendMessage** method/function is called.\n```\n    <MessageComposerAction\n        onClick={handleSendMessage}\n        ....\n    />\n```",
			searchString: "aria-label={t('Send')}",
			offset: -1,
		},
		{
			title: 'HandleSendMessage Function',
			file: baseDir + '/composer/messageBox/MessageBox.tsx',
			description:
				"## handleSendMessage Function\n\n- This is the function which sends messages further, it Gets text from chat.composer.text where chat is actully using useChat() which is coming from [ChatAPI](./apps/meteor/client/lib/chats/ChatAPI.ts) consisting of multiple functions.\n\n### The handleSendMessage function is responsible for processing and sending the message to the intended recipients. It performs the following actions:\n\n1. Retrieves the content of the message entered by the user.\n2. Collects additional information needed for sending the message, such as the room/channel ID, sender details, and any associated metadata.\n3. Packages the message data into a suitable format for transmission.\n4. Initiates the process of sending the message, it goes through a **[WebSocket](https://www.wallarm.com/what/a-simple-explanation-of-what-a-websocket-is)** connection.\n5. The message is then transmitted to the server for further processing.\n6. The server handles the message, ensuring it is delivered to the specified room/channel and received by the intended recipients.\n7. Once the message is successfully sent, it may trigger updates to the chat interface, including displaying the sent message in the conversation history.\n\n- Here we have \n ```\n const chat = useChat(); // useChat is a Context using ChatAPI.\n const text = chat.composer?.text ?? ''; //Text is getting information from useChat Context.\n\n onSend?.({ // onSend was recieved as prop and hence we are returning with some value and a boolean tshow\n\t\t\tvalue: text,\n\t\t\ttshow,\n\t\t});\n ```\n",
			searchString: 'const handleSendMessage =',
		},
		{
			title: 'The onSend Prop',
			file: baseDir + '/composer/ComposerMessage.tsx',
			description:
				"## The onSend Prop\n\n### In the MessageBox component, the composerProps are passed, and we receive several methods back, including the onSend method. The onSend method takes a value and additional parameters such as tshow, and it returns a promise.\n\n### Additionally, we utilize the useChat() hook to access various methods available in the ChatAPI. This allows us to perform actions related to chat functionality.\n\n#### By using the onSend method, we can trigger the sending of a message with the provided value. The tshow parameter might be used to display notifications or toasts related to the message sending process. The returned promise can be used to handle any asynchronous operations or to track the status of the message sending.\n\n### The useChat() hook provides access to methods like sendMessage() or other chat-related functions. These methods can be utilized to perform various actions within the chat interface, such as sending, retrieving, or deleting messages. \n\n```\nawait chat?.action.stop('typing');\n    const newMessageSent = await chat?.flows.sendMessage({ // Here the Text is sent to chat.flows.sendMessage \n\t    text,\n\t    tshow,\n    });\n\tif (newMessageSent) onSend?.();\n```",
			searchString: 'const ComposerMessage =',
		},
		{
			title: 'OnSend Function',
			file: baseDir + '/composer/ComposerMessage.tsx',
			description:
				"## onSend Function\n\n#### The onSend function sends a new message by calling the chat?.flows.sendMessage() method from useChat Context. It passes the value and tshow parameters as properties of an object and awaits the promise to resolve. The resolved value is stored in the newMessageSent variable.\n\n```\n    const newMessageSent = await chat?.flows.sendMessage({ // Here chat.flows.sendMessage() is actually a property coming from ChatAPI. From here we are simply sending value to sendMessage property in ChatAPI\n        text,\n        tshow,\n\t});\n```\n",
			searchString:
				'onSend: async ({',
		},
	]
	const steps = await Promise.all(stepsArray.map(step => createStep(step, tourName))) as ISteps[];
	return {
		$schema: 'https://aka.ms/codetour-schema',
		title: tourName,
		steps,
	};
}
