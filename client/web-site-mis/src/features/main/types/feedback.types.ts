export interface Feedback {
	id: string;
	user: {
		photoUrl: string;
		name: string;
	};
	stars: number;
	date: string;
	description: string;
}
