import { Category } from '../interfaces/Category';

interface Response {
	data: Category[];
	totalCount: number;
}

class CategoryService {
	imagePath = '../assets/images/sofa.png';
	path: string;
	setError: (value: string) => void;

	categories = [
		{
			id: 1,
			title: 'Sofa & Couche',
		},
		{
			id: 2,
			title: 'Dressers',
		},
		{
			id: 3,
			title: 'Accent Chairs',
		},
		{
			id: 4,
			title: 'Desk',
		},
		{
			id: 5,
			title: 'Living Room',
		},
		{
			id: 6,
			title: 'Table & Chairs Set',
		},
		{
			id: 7,
			title: 'Beds',
		},
		{
			id: 8,
			title: 'Rugs',
		},
		{
			id: 9,
			title: 'Dinning Chairs',
		},
		{
			id: 10,
			title: 'TV & Media',
		},
	];

	constructor(setError: (value: string) => void) {
		this.path = `/'}`;
		this.setError = setError;
	}

	async getAll() {
		return this.categories;
	}

	async get(categoryId: number) {
		return this.categories[categoryId - 1];
	}

	handleResponseError(response: { status: string }): void {
		this.setError(response.status);
	}

	handleError(error: { message: string }): void {
		this.setError(error.message);
	}
}

export default CategoryService;
