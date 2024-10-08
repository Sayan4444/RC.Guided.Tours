import type { ISteps, ITours } from '../types';
import { createStep } from '../utils';

export default async function useDBModel(): Promise<ITours> {
	const tourName = 'How to use a DB model';
	const stepsArray: ISteps[] = [
		{
			title: "How to use a DB model?",
			directory: 'apps/meteor/server/methods',
			description:
				'## How to use a DB model\n\n### We discussed about how to create a DB model in previous tour, Here we would be learning how to use a DB model\n\n### Let us Learn how to use DB model by taking an example of loading older messages in channels, This is an meteor method, which is called when we scroll up and try to load older messages (/api/v1/method.call/loadHistory)',
		},
		{
			title: 'loadHistory Endpoint',
			file: 'apps/meteor/server/methods/loadHistory.ts',
			description:
				'## loadHistory Endpoint\n\n### Here We hava an meteor endpoint which takes rid, end, limit, ls, showThreadMessage as argument, This method is responsible for rendering older messages \n\n- You can go through the methods used below they are quiet easy to understand',
			searchString: 'async loadHistory(',
		},
		{
			title: "LoadMessageHistory() 1",
			file: 'apps/meteor/server/methods/loadHistory.ts',
			description:
				'## The LoadMessageHistory \n\n### LoadMessageHistory function is called here and it takes userId, rid, end, limit, ls, showThreadMessages',
			searchString: 'return loadMessageHistory({ userId',
		},
		{
			title: "LoadMessageHistory() 2",
			file: 'apps/meteor/app/lib/server/functions/loadMessageHistory.ts',
			description:
				'## loadMessageHistory function\n\n### Here we import Messages and Rooms DB models from @rocket.chat/models and we will further use them in our function\n\n',
			searchString: "import { Messages, Rooms",
		},
		{
			title: "LoadMessageHistory() 3",
			file: 'apps/meteor/app/lib/server/functions/loadMessageHistory.ts',
			description:
				"## Explanation\n\n- The loadMessageHistory function is responsible for retrieving a history of messages from a specific room in Rocket.Chat. It accepts several parameters including the user ID, room ID, end timestamp, limit, last seen timestamp, whether to show thread messages, and offset.\n\n- First, it fetches the room using the provided room ID and checks if it exists. If the room doesn't exist, an error is thrown.\n\n- Next, it determines the types of hidden system messages for the room.\n\n- Then, it defines options for querying the messages, including sorting by timestamp in descending order, applying the limit and offset.",
			searchString: 'export async function loadMessageHistory({',
		},
		{
			title: "LoadMessageHistory() 4",
			file: 'apps/meteor/app/lib/server/functions/loadMessageHistory.ts',
			description:
				"## Explanation 2\n\n- Based on the provided end timestamp, it retrieves visible messages before that timestamp, excluding the hidden message types. If no end timestamp is provided, it retrieves all visible messages in the room, excluding hidden message types.\n\n- The retrieved records are then normalized and processed for the specific user, taking into account any restrictions or modifications based on the user's permissions or settings.\n\n- If a last seen timestamp is provided, it checks if there are unread messages after that timestamp. If there are unread messages, it retrieves the first unread message and calculates the total count of unread messages that are not loaded yet.\n\n- Finally, it returns an object containing the retrieved messages, the first unread message, and the count of unread messages that are not loaded.",
			searchString: 'const records = end',
		},
		{
			title: "LoadMessageHistory() 5",
			file: 'apps/meteor/app/lib/server/functions/loadMessageHistory.ts',
			description:
				'## Returns\n\n### In the end it returns messages, firstUnread, unreadNotLoaded you can go through the code above its easy to understand',
			searchString: 'return {',
		},
	]
	const steps = await Promise.all(stepsArray.map(step => createStep(step, tourName))) as ISteps[];
	return {
		$schema: 'https://aka.ms/codetour-schema',
		title: tourName,
		steps,
	};
}