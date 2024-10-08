import type { ISteps, ITours } from '../types';
import { createStep } from '../utils';

export default async function services(): Promise<ITours> {
	const tourName = "Services";
	const stepsArray: ISteps[] = [
		{
			title: "Services In Rocket Chat",
			directory: 'ee',
			description:
				'## Services In Rocket Chat \n\n### The Rocket.Chat server architecture is composed of both *INTERNAL* and *EXTERNAL* services. The internal services run within the meteor instance and are tightly coupled with the main process, while the external services can run independently in separate processes.',
		},
		{
			title: "External Services",
			directory: 'ee/apps',
			description:
				'## External Services\n- **Authorization**: This service manages user authorization and permissions, ensuring users have the necessary access rights. It can be horizontally scaled and is stateless.\n- **Account**: Responsible for managing user accounts, including the creation, updating, and deletion. It provides methods for user authentication like login and logout. This service is stateless and can be horizontally scaled.\nPresence: Handles user presence management, tracking and updating the online status of the user. It can be horizontally scaled and is stateless.\n- **StreamHub**: This service captures database changes and broadcasts real-time data to other services. Currently, it does not support horizontal scaling and operates as a single instance service.\n- **DDPStreamer**: Manages DDP(Distributed Data Protocol) connections, handling client-server connections, managing subscriptions, and transmitting data to clients. It can be horizontally scaled.\n- **AppsEngine**: Responsible for managing apps with Rocket.Chat, including installing, updating, executing, and removal of apps. While it can be horizontally scaled, this service is still under development.\n\n## In The Following Folders inside ee/apps/ we have all the services mentioned above\n\n',
		},
		{
			title: "Internal Services",
			directory: 'apps/meteor/server/services',
			description:
				'## Internal Services\n\n- **Banner**: Manages banners, including creation, updating, and deletion.\n- **LDAP**: Handles LDAP (Lightweight Directory Access Protocol) integration, establishing connections with LDAP servers and managing user synchronization.\n- **NPS**: Works in conjunction with the Banner service to manage Net Promoter Score (NPS) surveys, generating banners for selected users and handling responses.\n- **Room**: Manages chat rooms, including creation, updating, and deletion.\n- **OmniChannel**: Responsible for managing various omnichannel tasks.\nOmnichannel Voip: Handles VoIP (Voice over Internet Protocol) calls within the omnichannel system.\n- **Team**: Manages teams within Rocket.Chat, including creation, updating, and deletion.\n- **UiKitCoreApp**: Manages UI Kit actions and events. It relies on the AppsEngine service for app-related actions and events, as well as Meteor Legacy for core actions.\n- **Push**: Handles push notifications, sending them to mobile applications.\n- **Upload**: Manages file uploads, including uploading files to the file system and handling file management.\n- **Messaging**: Responsible for managing messages within Rocket.Chat.\n- **Translation**:  Previously responsible for providing translations to other services, but now deprecated. Translations are provided by the i18n package.\n- **Settings**: Manages system settings, including creation, updating, and deletion.\n\n## In the following services folder you can checkout that each service has a dedicated folder for it you can go inside and explore them and try to understand how things are working.',
		},
	]
	const steps = await Promise.all(stepsArray.map(step => createStep(step, tourName))) as ISteps[];
	return {
		$schema: 'https://aka.ms/codetour-schema',
		title: tourName,
		steps,
	};
}
