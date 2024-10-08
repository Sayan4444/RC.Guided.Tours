import { ISteps, ITours } from '../types';
import { createStep } from '../utils';

export default async function addNewService(): Promise<ITours> {
	const tourName = 'How to add a new service';
	const stepsArray: ISteps[] = [
		{
			title: "Adding a new service",
			directory: 'apps/meteor/server/services/room',
			description:
				'## Adding a new service\n\n### Let us see how we can add a new service, Let us take an example of room service, It Manages chat rooms, including creation, updating, and deletion.\n\n### As we saw in previous tour that every service has a dedicated folder for it. similarly for creating room service we have a room folder',
		},
		{
			title: "Important Imports",
			file: 'apps/meteor/server/services/room/service.ts',
			description:
				'## Important Imports\n\n### For creating Service we need to use some imports and types which are created by rocket chat.\n\n### Here we have imported -\n\n- ***IRoom***  and ***IUser***  which is Interface and defining Structure \n- ***Users***  from model which is a db model storing users information\n- ***ServiceClassInternal*** , ***Authorization***  from core-services which is used for Creating Service and authorizations.\n- ***ICreateRoomParams*** , ***IRoomService***  type for type definitions \n- ***Below here we have createDirectMessage import and createRoom import***',
			searchString: 'export class RoomService extends ServiceClassInternal implements IRoomService {',
			offset: -1,
		},
		{
			title: 'Create Service',
			file: 'apps/meteor/server/services/room/service.ts',
			description:
				'## Create service - eg- RoomService\n\n### Here we have a class RoomService which has multiple functionalities in it.\n\n### We have a *create* method which returns Promise gets data from params and then performs multiple checks, Such as If user has Permission to create room or not, whether the user who is requesting to create room exists or not, and then at the end *createRoom()* function is returned which was imported above \n\n```\nasync create(uid: string, params: ICreateRoomParams): Promise<IRoom> {\n    const { type, name, members = [], readOnly, extraData, options } = params;\n    <!-- Operations -->\n    return createRoom(type, name, user.username, members, false, readOnly, extraData, options) as unknown as IRoom;\n}\n```',
			searchString: 'async create(',
		},
		{
			title: 'Direct message',
			file: 'apps/meteor/server/services/room/service.ts',
			description:
				'### 2 - Direct message\n\n### Here we have a method createDirectMessage method which helps in one to one communication in a dedicated room where 2 people can communicate, This method takes 2 arguments which are to and from which returns a Promise as rid. \n\n### Then a basic check is performed to check whether both users exist or not then at the end we return a imported function createDirectMessage\n\n```\nasync createDirectMessage({ to, from }: { to: string; from: string }): Promise<{ rid: string }> {\n    <!-- Other operations such as searching for users -->\n    return this.createDirectMessageWithMultipleUsers([toUser.username], fromUser._id); // This calls another function createDirectMessageWithMultipleUsers\n}\n```',
			searchString: 'async createDirectMessage(',
		},
		{
			title: "Create Direct Message with Multiple Users",
			file: 'apps/meteor/server/services/room/service.ts',
			description:
				'## Creating DirectMessage\n\n### In previous step createDirectMessageWithMultipleUsers function was called and few data were passed on such as to users and from user, in createDirectMessageWithMultipleUsers we expect String Array of Members.\n\n```\n\tasync createDirectMessageWithMultipleUsers(members: string[], creatorId: string): Promise<{ rid: string }> { // Gets a list of memebers and creators id\n\t\treturn createDirectMessage(members, creatorId); // return createDirectMessage function\n    }\n```\n\n### There are few more services and methods below, you can check them out',
			searchString: 'async createDirectMessageWithMultipleUsers(',
		}
	]
	const steps = await Promise.all(stepsArray.map(step => createStep(step, tourName))) as ISteps[];
	return {
		$schema: 'https://aka.ms/codetour-schema',
		title: tourName,
		steps,
	};
}