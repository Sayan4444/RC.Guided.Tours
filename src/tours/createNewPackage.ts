import type { ISteps, ITours } from '../types';
import { createStep } from '../utils';

export default async function createNewPackage(): Promise<ITours> {
	const tourName = 'How to create a Package';
	const stepsArray: ISteps[] = [
		{
			title: "How to create a Package?",
			directory: 'packages',
			description:
				'# How to Create a Package\n\n### Any Package created by any Developer/Contributor Should go inside this particular folder.\n\n### Houses sharable code that can be used by different projects. Hence Many Projects are using code written here\n\n### Further in this tour we will be looking at how to create a new package.',
		},
		{
			title: "Folder Structure of Package",
			directory: 'packages/account-utils',
			description:
				'# Folder Structure of Package\n\n### - Lets take an example of account-util package, This package checks for user login and tokens.\n#### - After Creating a Folder named account-utils First thing you need to do is initialize an empty NPM package with *npm init* command \n\n#### - After that  with the help of *npm install* add some Dependencies and some scripts. eg - ```npm install typescript --save-dev``` \n\n#### - Remember Code is Written in TypeScript not JavaScript hence create an tsconfig.json file and output must be in *dist* sub folder.\n\n#### - You also need to include a *.eslint.json* file for Config files and rules for code and unit tests.\n\n#### - All the Code written by the developer should go inside *src* sub folder.',
		},
		{
			title: "TS Config file",
			file: 'packages/account-utils/tsconfig.json',
			description:
				'## TS Config file\n\n### This is the basic structure of the tsconfig file\n\n#### - It should always extend *"../../tsconfig.base.client.json"* and as previously said the compiled output should go in *dist* sub folder and the code should be written inside *src* sub folder ',
			line: 2,
		},
		{
			title: "Function in package",
			file: 'packages/account-utils/src/index.ts',
			description:
				"# A function in package\n\n### You can create multiple functions inside and simply export them. here we have a hashLoginToken function which takes loginToken which could be users session Id or token id, then it creates a hash object using the *SHA256* hashing algorithm, then it updates the login token and in the end it calculates the hash value with *hash.digest('base64')* it returns a base64 encoded string which is used to represent the raw binary hash data in human readable format.\n\n### Let us see how can we use a package with an example.",
			searchString: "hashLoginToken"
		},
		{
			title: "Authentication",
			file: 'apps/meteor/app/api/server/middlewares/authentication.ts',
			description:
				'## For Authentication\n\n### As explained in the previous step that this package is for hashing.\n\n### Here we start by importing *hashLoginToken* from *@rocket.chat/account-utils* (Packages are not directly imported from the packages folder rather they are first published and then get installed when you setup the rocket chat on you system by running yarn install )\n\n### You can have a look below how we are getting authToken from req.headers, We already talked about it in the how to create an endpoint \n\n### After Getting the authToken we pass it as an argument to hashLoginToken function, This helps in authentication and checking if the user is logged in or not',
			line: 1,
		},
		{
			title: "Another Example of packages",
			directory: 'packages/core-typings',
			description:
				'# Another Example of packages.\n\n### Since Rocket chat uses TypeScript it is really very important to have type definitions for type safety, hence all of the types in Rocket chat is described here\n\n### Again being a package it has an similar structure as the previuos one',
		},
	]
	const steps = await Promise.all(stepsArray.map(step => createStep(step, tourName))) as ISteps[];
	return {
		$schema: 'https://aka.ms/codetour-schema',
		title: tourName,
		steps,
	};
}
