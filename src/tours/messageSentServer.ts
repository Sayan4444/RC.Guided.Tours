import type { ISteps, ITours } from '../types';
import { createStep } from '../utils';

export default async function messageSentServer(): Promise<ITours> {
	const tourName = 'How a Message is sent (The Backend)';
	const stepsArray: ISteps[] = [
		{
			title: 'The ChatAPI',
			file: 'apps/meteor/client/lib/chats/ChatAPI.ts',
			description:
				'## The ChatAPI\n\n- **ComposerAPI:** This interface defines methods and properties related to the message composer functionality, such as managing text input, handling selection, wrapping text, inserting text, clearing, focusing, and more. It also includes properties for managing quoted messages, editing mode, recording mode, and microphone permissions.\n\n- **DataAPI:** This interface defines methods for interacting with message and room data. It includes functions for composing and managing messages, finding and getting messages by ID, finding the last and previous own messages, managing drafts, accessing room and subscription information, marking rooms as read, and more.\n\n- **UploadsAPI:** This interface defines methods and properties for managing file uploads. It includes functions for retrieving the list of uploads, subscribing to changes, canceling and wiping failed uploads, and sending files.\n\n- **ChatAPI:** This interface represents the main API object for the Rocket Chat client. It includes properties for user-related information, such as the user ID. It also provides access to the composer, data, uploads, and message editing functionality. Additionally, it exposes methods for performing actions like starting/stopping typing, opening/closing user cards and emoji pickers, and handling various message-related flows (uploading files, sending messages, processing slash commands, editing messages, setting reactions, etc.).',
			searchString: 'export type ChatAPI = {',
		},
		{
			title: 'ChatAPI sendMessage',
			file: 'apps/meteor/client/lib/chats/ChatAPI.ts',
			description:
				'## ChatAPI sendMessage\n\n#### Among many properties and functions present in ChatAPI here we have sendMessage.\n\n#### Note that sendMessage is *readonly* implying that it cannot be modified after initialization. Hence Implementing ChatAPI in any class would make it modification possible.\n\n```\n    readonly sendMessage: ({ text, tshow }: { text: string; tshow?: boolean }) => Promise<boolean>;\n```',
			searchString:
				'readonly sendMessage: ({',
		},
		{
			title: ' Implementation of ChatAPI',
			file: 'apps/meteor/app/ui/client/lib/ChatMessages.ts',
			description:
				'## Implementation of ChatAPI\n\n#### Here *class ChatMessages implements ChatAPI* and above it we have a *type DeepWritable<T>* which removes readonly property from ChatAPI and This allows us to modify those properties\n',
			searchString: 'export class ChatMessages',
		},
		{
			title: 'SendMessage',
			file: 'apps/meteor/app/ui/client/lib/ChatMessages.ts',
			description:
				'## SendMessage -\n\n### Above we have a constructor and here in this.flows we are calling *sendMessage.bind(this,this)* The sendMessage is a function which further makes the meteor call for sending Message Data.',
			searchString: 'sendMessage: sendMessage.bind(this, this)',
		},
		{
			title: 'sendMessage function 1',
			file: 'apps/meteor/client/lib/chats/flows/sendMessage.ts',
			description:
				'## sendMessage function\n\n### The sendMessage recieves text: string and tshow: boolean properties and returns a Promise, And note that here we are utilizing ChatAPI again.\n\n- Within the sendMessage implementation, there are several checks and actions performed based on the provided parameters and the current state of the chat. These checks ensure that the message is valid and that the necessary actions are taken. The implementation of sendMessage may involve interacting with other methods or properties defined in the ChatAPI interface or its implementation.\n\n- By carefully examining the code and understanding its logic, you can gain a better understanding of how the sendMessage function is modified and what actions it performs in the context of the ChatMessages class.\n\n',
			searchString: 'export const sendMessage = async (',
		},
		{
			title: 'sendMessage function 2',
			file: 'apps/meteor/client/lib/chats/flows/sendMessage.ts',
			description:
				'## Processing Message Further\n\n### In Rocket.chat Messages are sent to ../api/v1/method.call/sendMessage and this is a meteor method. ',
			searchString: "await sdk.call('sendMessage', message, previewUrls);",
		},
		{
			title: 'sendMessage function 3',
			file: 'apps/meteor/client/lib/chats/flows/sendMessage.ts',
			description:
				"## Calling Meteor method\n\n### This method is taking 2 parameters, one is the route for meteor method(api/v1/method.call/:method) and another parameter is message which is passed on by sendMessage function below.\n\n```\nawait sdk.call('sendMessage', message);\n```",
			searchString: "await sdk.call('sendMessage', message, previewUrls);",
		},
		{
			title: 'Meteor.Call',
			file: 'apps/meteor/client/lib/chats/flows/sendMessage.ts',
			description:
				'## Meteor.Call\n\n### The sendMessage function in the code triggers a Meteor method by passing a method name and its corresponding parameters. This invocation is responsible for initiating the sendMessage functionality. If by any chance someone calls any other method it would simply throw error.\n\n- There are basically **2 Meteor methods** for sendMessage each of them performing different tasks\n    - **The first method is responsible for sending the message data to the database and performing various related tasks. However, there may be a slight delay in the message being rendered in the room or channel. To mitigate this delay, a second Meteor method is executed concurrently in an asynchronous manner.**\n\n    - **The second method is specifically designed to facilitate the instant display of the sent message. If this method were disabled or not implemented, there would be a noticeable delay in the message being rendered and visible to the users.**',
			searchString: "await sdk.call('sendMessage', message, previewUrls);"
		},
		{
			title: 'Meteor.methods',
			file: 'apps/meteor/app/lib/server/methods/sendMessage.ts',
			description:
				'## Meteor.methods\n\n### In this code, we have defined a ServerMethods interface, which includes a route for the sendMessage method. When the sendMessage action is triggered, an API call is made to the route *api/v1/method.call/sendMessage*. ->\n```\nreturn executeSendMessage(uid, message)\n```\n\n#### This triggers a function *executeSendMessage()* below in a try block which is further responsible for operations',
			searchString: 'async sendMessage(',
		},
		{
			title: 'executeSendMessage function',
			file: 'apps/meteor/app/lib/server/methods/sendMessage.ts',
			description:
				'## executeSendMessage\n\n### - Inside the *executeSendMessage* function, we receive the uid (user ID) and message as parameters. This function performs various operations related to the sendMessage action.\n\n### - One of the key operations is triggering the sendMessage() function, which takes the user, message, room, and a boolean value as parameters. This function is responsible for handling the process of sending the message. It may involve additional validations, processing the message content, interacting with the database, and performing any necessary actions related to sending messages.',
			searchString: 'return await sendMessage(',
		},
		{
			title: "Sending message to DB",
			file: 'apps/meteor/app/lib/server/functions/sendMessage.ts',
			description:
				"## Sending message to DB\n\n### In the sendMessage.ts file, The sendMessage function that is called from the [executeSendMessage()](./apps/meteor/app/lib/server/methods/sendMessage.ts) function. The purpose of the sendMessage function is to handle the actual sending of messages.\n\n#### Within the sendMessage function, there are several important steps:\n\n1. **Validations**: The function performs validations on the message, ensuring that it meets certain criteria or conditions before proceeding. This helps maintain message integrity and prevents any invalid or malicious content from being sent.\n\n2. **URL Parsing**: The function also includes a step to parse URLs within the message for safety purposes. This ensures that any URLs included in the message are properly handled and do not pose a security risk.\n\n3. **Asynchronous Callback**: The function utilizes an asynchronous callback mechanism, which allows it to run asynchronously and not block the execution flow. This is especially useful when dealing with tasks that may involve network requests or other asynchronous operations.\n\n4. **IMessage Object**: The callback returns an IMessage object, which represents the message being sent. This object may contain various properties and metadata associated with the message.\n\n6. **Storage in Database**: Once the message has passed all validations, it is stored in the database. This ensures that the message is persisted and can be retrieved or displayed at a later time.\n\n#### Finally, the function returns the message object, indicating the successful completion of the sending process.\n- You can see code below it's easy to understand and try to play around with them, Best way to understand working of any code is to make changes in them and undestand.",
			line: 1
		},
		{
			title: 'sendMessage Api call',
			file: 'apps/meteor/app/lib/client/methods/sendMessage.ts',
			description:
				'## The Async sendMessage Api call\n\n### - As mentioned earlier, there are two Meteor methods for handling the sendMessage functionality and making API Call. The first method handles processing and validation of the message, while the second method addresses the delay in rendering the message on the frontend.\n\n### - The second Meteor method is designed to ensure instant display of the sent message. When the first method completes successfully, it triggers the execution of the second method in an asynchronous manner. This allows for near-real-time rendering of the message on the user interface, reducing any noticeable delay.\n\n### And in the end there is a similar callback as it was in previous step which helps in message rendering, The callback return IMessage object which is displayed to user\n\n### - By separating these two methods, the application can provide a smooth and responsive user experience. The initial processing and validation are performed without blocking the UI, and once that is completed, the message is promptly displayed to the user.\n\n### You Have now successfully sent Message from composer, Note that there is one more API to sendMessage Which is an REST API, Which is currently not being used, if it would be used in future this tour would be updated. Still you can manually sendMessage by making call here [RestAPI Docs](https://developer.rocket.chat/reference/api/rest-api/endpoints/chat-endpoints/send-message) using -curl command, you can go thorugh the DOCS and try sending message on your own',
			searchString: 'async sendMessage(',
		},
	]
	const steps = await Promise.all(stepsArray.map(step => createStep(step, tourName))) as ISteps[];
	return {
		$schema: 'https://aka.ms/codetour-schema',
		title: tourName,
		steps,
	};
}
