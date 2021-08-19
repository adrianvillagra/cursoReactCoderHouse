import { Furniture } from '../interfaces/Furniture';

interface Response {
	data: Furniture[];
	totalCount: number;
}

class ItemService {
	imagePath = '../assets/images/sofa.png';
	path: string;
	setError: (value: string) => void;

	analysts = [
		{
			id: 1,
			title: 'Sofa & Couche 1',
			description: 'Excellent bone white sofa',
			content: 'Sofa designed with the highest standards in the market, with an elegant finish.',
			price: 1000,
			pictureUrl: this.imagePath,
		},
		{
			id: 2,
			title: 'Sofa & Couche 2',
			description: 'Excellent bone white sofa',
			content: 'Sofa designed with the highest standards in the market, with an elegant finish.',
			price: 2000,
			pictureUrl: this.imagePath,
		},
		{
			id: 3,
			title: 'Sofa & Couche 3',
			description: 'Excellent bone white sofa',
			content: 'Sofa designed with the highest standards in the market, with an elegant finish.',
			price: 3000,
			pictureUrl: this.imagePath,
		},
		{
			id: 4,
			title: 'Sofa & Couche 4',
			description: 'Excellent bone white sofa',
			content: 'Sofa designed with the highest standards in the market, with an elegant finish.',
			price: 4000,
			pictureUrl: this.imagePath,
		},
		{
			id: 5,
			title: 'Sofa & Couche 5',
			description: 'Excellent bone white sofa',
			content: 'Sofa designed with the highest standards in the market, with an elegant finish.',
			price: 5000,
			pictureUrl: this.imagePath,
		},
		{
			id: 6,
			title: 'Sofa & Couche 6',
			description: 'Excellent bone white sofa',
			content: 'Sofa designed with the highest standards in the market, with an elegant finish.',
			price: 6000,
			pictureUrl: this.imagePath,
		},
		{
			id: 7,
			title: 'Sofa & Couche 7',
			description: 'Excellent bone white sofa',
			content: 'Sofa designed with the highest standards in the market, with an elegant finish.',
			price: 7000,
			pictureUrl: this.imagePath,
		},
		{
			id: 8,
			title: 'Sofa & Couche 8',
			description: 'Excellent bone white sofa',
			content: 'Sofa designed with the highest standards in the market, with an elegant finish.',
			price: 8000,
			pictureUrl: this.imagePath,
		},
		{
			id: 9,
			title: 'Sofa & Couche 9',
			description: 'Excellent bone white sofa',
			content: 'Sofa designed with the highest standards in the market, with an elegant finish.',
			price: 9000,
			pictureUrl: this.imagePath,
		},
		{
			id: 10,
			title: 'Sofa & Couche 10',
			description: 'Excellent bone white sofa',
			content: 'Sofa designed with the highest standards in the market, with an elegant finish.',
			price: 1000,
			pictureUrl: this.imagePath,
		},
	];

	constructor(setError: (value: string) => void) {
		this.path = `/sofa&Couche'}`;
		this.setError = setError;
	}

	async getAll() {
		return this.analysts;
	}

	async get(furnitureId: number): Promise<Furniture[] | void> {
		return [];
	}

	handleResponseError(response: { status: string }): void {
		this.setError(response.status);
	}

	handleError(error: { message: string }): void {
		this.setError(error.message);
	}
}

export default ItemService;
