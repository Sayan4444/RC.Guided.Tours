import type { ISteps, ITours } from '../types';
import { createStep } from '../utils';

export default async function repositoryOverview(): Promise<ITours> {
	const tourName = 'Repository Overview';
	const stepsArray: ISteps[] = [
		{
			title: 'Welcome',
			file: 'package.json',
			description:
				"### 1. Welcome to the Rocket.Chat Code Tour! This tour aims to provide an overview of the *Rocket.Chat* codebase, its architecture, key features and how things are working. \n\n### 2. The code tour is designed for the Everyone, whether you're a developer looking to contribute, a student learning web development, or simply curious about Rocket.Chat's inner workings.\n\n### 3. We'll explore specific modules, functionalities, or important sections of the codebase in a structured manner, allowing you to understand how Rocket.Chat works.",
			searchString: '"name": "rocket.chat"',
		},
		{
			title: 'Packages',
			directory: 'packages',
			description:
				"## Packages \nThe \"package\" folder in the Rocket Chat project contains sharable code that can be used by different projects within the Rocket Chat ecosystem. It houses reusable modules, libraries, or components that follow a modular approach to code organization. The shared code is managed as a package with its own versioning system, allowing projects to depend on specific versions. The folder may include documentation, examples, tests, and quality assurance processes to ensure reliability and ease of use. By organizing sharable code in this folder, Rocket Chat promotes code reuse, modularity, and collaboration across projects.\n\nYou can also Visit [Here](https://developer.rocket.chat/docs/repository-structure#directory-structure) for structure"
		},
		{
			title: 'ee (Enterprice Edition)',
			directory: 'ee',
			description:
				"### ee (Enterprice Edition) \nThe \"ee\" folder in the Rocket Chat project contains code, features, and functionalities exclusive to the Enterprise Edition of Rocket Chat. It provides additional features tailored for larger organizations, such as advanced security options, compliance features, enhanced administration tools, and integrations with enterprise systems.\n\n**Additional features**: The \"ee\" folder includes code files that implement extra features and functionalities exclusive to the enterprise edition. These features are designed to meet the requirements of enterprise customers, such as advanced security options, compliance features, enhanced administration tools, integrations with enterprise systems, and more."
		},
		{
			title: 'apps/meteor',
			directory: 'apps/meteor',
			description:
				"# apps/meteor \n## The \"apps/meteor\" folder is a significant part of the codebase and contains important code and imports related to the Meteor framework in the Rocket Chat project.\n\n### Back in 2015 RocketChat was built completely on Full stack Meteor Framework, But later on due to limitations and few problems with meteor framework, Hence RocketChat decided to move things and build their own optimised implementations of codes, and slowly started to remove some dependencies of Meteor Framework.\n\n- **Folder structure**: The \"apps/meteor\" folder may have a structured organization, with subfolders representing different aspects of the application. For example:\n    - **Client**: This subfolder may contain code specific to the client-side implementation, such as UI components, templates, stylesheets, and client-side libraries.\n    - **Server**: This subfolder may contain code that runs on the server-side, handling server operations like database interactions, API endpoints, and server-side functions.\n    - **Lib**: This subfolder may contain reusable code and utilities that can be shared between the client and server.\n    - **Methods**: This subfolder may contain code for server-side methods, which provide an interface for client-side code to interact with the server and perform operations securely.\n    - **Public**: This subfolder may contain publicly accessible files, such as static assets (images, fonts, etc.) that can be served directly to clients.\n    - **Private**: This subfolder may contain private files and assets that are only accessible to the server-side code.",
		},
		{
			title: 'apps/meteor/client',
			directory: 'apps/meteor/client',
			description:
				"## apps/meteor/client \n\n\n### In Rocket Chat, the \"apps/meteor/client\" directory refers to the client-side code that is specific to the Meteor framework within the Rocket Chat application. It contains frontend-related code and resources that are responsible for rendering and handling the user interface on the client side.\n\n#### Since it mostly contains Client-Side code it has an UI-Kit/hooks which is used for styling RocketChat's amazing User interface.\n\n#### We also have an library folder which contains very useful functions, sharable codes and modules such as chats, errors, database connections, rooms and settings.\n\n#### Similarly we have multiple components which combine and produce amazing UI and functionalities, which we would be discussing further"
		},
		{
			title: 'Client/components',
			directory: 'apps/meteor/client/components',
			description:
				"## client/components \n\n### This folder contains reusable UI components. These components are modular and can be used in different parts of the application to provide consistent and reusable user interface elements.\n\n### Components makes lifes easier as we don't have to create component again and again and it maintains consistency across different pages.\n\n- **Reusable UI components**: The folder houses code files that define reusable UI components, such as buttons, input fields, modals, cards, avatars, tooltips, or any other user interface element that can be utilized in multiple parts of the Rocket Chat application.\n\n\n- **Component structure**: Each component typically consists of a JavaScript or TypeScript file that contains the component's logic and functionality. It may also include associated stylesheets, templates, or configuration files specific to that component.\n\n\n- **Composition and customization**: Components can often be composed together to build more complex UI elements. Developers can leverage the components in the folder to assemble larger, composite components that cater to specific features or requirements of the Rocket Chat application. Components may also provide options for customization through props or configuration parameters.\n\n- **Consistency and UI guidelines**: The components in the \"client/components\" folder adhere to established UI guidelines and design patterns within the Rocket Chat project. They help maintain consistency in the user interface across different parts of the application and ensure a cohesive and intuitive user experience.",
		},
		{
			title: 'apps/meteor/client/lib/',
			directory: 'apps/meteor/client/lib',
			description:
				"## apps/meteor/client/lib/ \n\n- ***This contains Code which can be used by both Server and Client part of application.***\n\n### A collection of objects that are reused on all of the client sides.\n\n### Here we also perform server-side behaviour on the Client-side with the help of minimongo.\n\n### This is to:\n- **Limit code duplication**\n- **Encourage contributors to use the code that is already existing in the codebase**\n- **Avoid re-implementing logic or re-create functions**"
		},
		{
			title: 'Best place for beginners',
			directory: 'apps/meteor/client/views',
			description:
				"# The Best place to Start (The FrontEnd)\n\nIf you are a beginner looking to contribute to Rocket Chat, the \"client/views\" folder is an ideal starting point. It offers a clearer understanding of the application's inner workings by tracing module imports and observing component usage. By exploring this folder, you can learn how different components are structured, styled, and interact with each other. It provides valuable insights into the UI construction, facilitating improvements and feature additions. Starting your contribution journey in the \"client/views\" folder will enhance your understanding of the codebase and enable effective contributions to the project.\n\nThe views is the directory where a combination of multiple components comes together in action to build a single Rocket.Chat page is seen by client-side(Frontend) users.\n\nThe root(Place from where execution/render starts) here can be seen in apps/meteor/client/views/root/AppRoot.tsx [here](./apps/meteor/client/views/root/AppRoot.tsx) where execution in the frontend begins\n",
		},
		{
			title: 'The Starting Point',
			file: 'apps/meteor/client/views/root/AppRoot.tsx',
			description:
				"## The Starting Point\n\n### - AppRoot is an ReactElement, Which is an Layout, Responsible for rendering Child components, It initializes the application and establishes the layout. It plays a crucial role in setting up the initial structure and behavior of the frontend.\n\n- If You want to deeply understand how things are working you can trace elements and methods used in here",
			searchString: 'const AppRoot = (): ReactElement => (',
		},
		{
			title: 'Private Directory',
			directory: 'apps/meteor/private',
			description:
				"# Private Directory\n\n## This File is more Rocket.Chat specific, it contains informations about RocketCat bot, such as avatars, Transalations and some icons\n\n- All files inside a top-level directory called **private/** are only accessible from server code and can be loaded via the Assets API. This can be used for private data files and any files that are in your project directory that you don’t want to be accessible from the outside."
		},
		{
			title: 'Server Directory',
			directory: 'apps/meteor/server',
			description:
				"### Server Directory\n\n- Server/ Directory is never loaded on the client side, People usually like to call it as backend and in Rocket.chat we use **NodeJs** as backend.\n- Most of the API Endpoints are created here and stored here through Database and in Rocket.chat we use **MongoDB** as Database\n- Any sensitive code that you don’t want served to the client, such as code containing passwords or authentication mechanisms, should be kept in the server/ directory.\n- *There are more Folders/Directories named as Server, Just remember all of them are servers*"
		},
	]
	const steps = await Promise.all(stepsArray.map(step => createStep(step, tourName))) as ISteps[];
	return {
		$schema: 'https://aka.ms/codetour-schema',
		title: tourName,
		steps,
	};
}
