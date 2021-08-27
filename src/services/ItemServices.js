import { Furniture } from '../interfaces/Furniture';

class ItemService {
	imagePath = '../assets/images/sofa.png';

	furniture = [
		{
			id: 1,
			category: 1,
			title: 'Sofa & Couche 1',
			description: 'Excellent bone white sofa',
			content: 'Sofa designed with the highest standards in the market, with an elegant finish.',
			price: 1000,
			pictureUrl: this.imagePath,
		},
		{
			id: 2,
			category: 1,
			title: 'Sofa & Couche 2',
			description: 'Excellent bone white sofa',
			content: 'Sofa designed with the highest standards in the market, with an elegant finish.',
			price: 2000,
			pictureUrl: this.imagePath,
		},
		{
			id: 3,
			category: 1,
			title: 'Sofa & Couche 3',
			description: 'Excellent bone white sofa',
			content: 'Sofa designed with the highest standards in the market, with an elegant finish.',
			price: 3000,
			pictureUrl: this.imagePath,
		},
		{
			id: 4,
			category: 1,
			title: 'Sofa & Couche 4',
			description: 'Excellent bone white sofa',
			content: 'Sofa designed with the highest standards in the market, with an elegant finish.',
			price: 4000,
			pictureUrl: this.imagePath,
		},
		{
			id: 5,
			category: 1,
			title: 'Sofa & Couche 5',
			description: 'Excellent bone white sofa',
			content: 'Sofa designed with the highest standards in the market, with an elegant finish.',
			price: 1000,
			pictureUrl: this.imagePath,
		},
		{
			id: 6,
			category: 2,
			title: 'Dressers 1',
			description: 'Excellent dresser',
			content: 'Dresser designed with the highest standards in the market, with an elegant finish.',
			price: 2000,
			pictureUrl: this.imagePath,
		},
		{
			id: 7,
			category: 2,
			title: 'Dressers 2',
			description: 'Excellent bone white sofa',
			content: 'Dresser designed with the highest standards in the market, with an elegant finish.',
			price: 2000,
			pictureUrl: this.imagePath,
		},
		{
			id: 8,
			category: 2,
			title: 'Dressers 3',
			description: 'Excellent dresser',
			content: 'Dresser designed with the highest standards in the market, with an elegant finish.',
			price: 3000,
			pictureUrl: this.imagePath,
		},
		{
			id: 9,
			category: 2,
			title: 'Dressers 4',
			description: 'Excellent dresser',
			content: 'Dresser designed with the highest standards in the market, with an elegant finish.',
			price: 4000,
			pictureUrl: this.imagePath,
		},
		{
			id: 10,
			category: 2,
			title: 'Dressers 5',
			description: 'Excellent dresser',
			content: 'Dresser designed with the highest standards in the market, with an elegant finish.',
			price: 5000,
			pictureUrl: this.imagePath,
		},
		{
			id: 11,
			category: 3,
			title: 'Accent Chairs 1',
			description: 'Excellent accent chair',
			content: 'Chair designed with the highest standards in the market, with an elegant finish.',
			price: 1000,
			pictureUrl: this.imagePath,
		},
		{
			id: 12,
			category: 3,
			title: 'Accent Chairs 2',
			description: 'Excellent accent chair',
			content: 'Chair designed with the highest standards in the market, with an elegant finish.',
			price: 2000,
			pictureUrl: this.imagePath,
		},
		{
			id: 13,
			category: 3,
			title: 'Accent Chairs 3',
			description: 'Excellent accent chair',
			content: 'Chair designed with the highest standards in the market, with an elegant finish.',
			price: 3000,
			pictureUrl: this.imagePath,
		},
		{
			id: 14,
			category: 3,
			title: 'Accent Chairs 4',
			description: 'Excellent accent chair',
			content: 'Chair designed with the highest standards in the market, with an elegant finish.',
			price: 4000,
			pictureUrl: this.imagePath,
		},
		{
			id: 15,
			category: 3,
			title: 'Accent Chairs 5',
			description: 'Excellent accent chair',
			content: 'Chair designed with the highest standards in the market, with an elegant finish.',
			price: 5000,
			pictureUrl: this.imagePath,
		},
		{
			id: 16,
			category: 4,
			title: 'Desk 1',
			description: 'Excellent desk',
			content: 'Desk designed with the highest standards in the market, with an elegant finish.',
			price: 1000,
			pictureUrl: this.imagePath,
		},
		{
			id: 17,
			category: 4,
			title: 'Desk 2',
			description: 'Excellent desk',
			content: 'Desk designed with the highest standards in the market, with an elegant finish.',
			price: 2000,
			pictureUrl: this.imagePath,
		},
		{
			id: 18,
			category: 4,
			title: 'Desk 3',
			description: 'Excellent desk',
			content: 'Desk designed with the highest standards in the market, with an elegant finish.',
			price: 3000,
			pictureUrl: this.imagePath,
		},
		{
			id: 19,
			category: 4,
			title: 'Desk 4',
			description: 'Excellent desk',
			content: 'Desk designed with the highest standards in the market, with an elegant finish.',
			price: 4000,
			pictureUrl: this.imagePath,
		},
		{
			id: 20,
			category: 4,
			title: 'Desk 5',
			description: 'Excellent desk',
			content: 'Desk designed with the highest standards in the market, with an elegant finish.',
			price: 5000,
			pictureUrl: this.imagePath,
		},
		{
			id: 21,
			category: 5,
			title: 'Desk 1',
			description: 'Living Room',
			content: 'Designed with the highest standards in the market, with an elegant finish.',
			price: 5000,
			pictureUrl: this.imagePath,
		},
		{
			id: 22,
			category: 5,
			title: 'Desk 2',
			description: 'Living Room',
			content: 'Designed with the highest standards in the market, with an elegant finish.',
			price: 6000,
			pictureUrl: this.imagePath,
		},
		{
			id: 23,
			category: 5,
			title: 'Desk 3',
			description: 'Living Room',
			content: 'Designed with the highest standards in the market, with an elegant finish.',
			price: 5000,
			pictureUrl: this.imagePath,
		},
		{
			id: 24,
			category: 5,
			title: 'Desk 4',
			description: 'Living Room',
			content: 'Designed with the highest standards in the market, with an elegant finish.',
			price: 7000,
			pictureUrl: this.imagePath,
		},
		{
			id: 25,
			category: 5,
			title: 'Desk 5',
			description: 'Living Room',
			content: 'Designed with the highest standards in the market, with an elegant finish.',
			price: 8000,
			pictureUrl: this.imagePath,
		},
		{
			id: 26,
			category: 6,
			title: 'Table & Chairs Set 1',
			description: 'Table & Chairs',
			content: 'Designed with the highest standards in the market, with an elegant finish.',
			price: 5000,
			pictureUrl: this.imagePath,
		},
		{
			id: 27,
			category: 6,
			title: 'Table & Chairs Set 2',
			description: 'Table & Chairs',
			content: 'Designed with the highest standards in the market, with an elegant finish.',
			price: 8000,
			pictureUrl: this.imagePath,
		},
		{
			id: 28,
			category: 6,
			title: 'Table & Chairs Set 3',
			description: 'Table & Chairs',
			content: 'Designed with the highest standards in the market, with an elegant finish.',
			price: 5000,
			pictureUrl: this.imagePath,
		},
		{
			id: 29,
			category: 6,
			title: 'Table & Chairs Set 4',
			description: 'Table & Chairs',
			content: 'Designed with the highest standards in the market, with an elegant finish.',
			price: 5000,
			pictureUrl: this.imagePath,
		},
		{
			id: 30,
			category: 6,
			title: 'Table & Chairs Set 5',
			description: 'Table & Chairs',
			content: 'Designed with the highest standards in the market, with an elegant finish.',
			price: 9000,
			pictureUrl: this.imagePath,
		},
		{
			id: 31,
			category: 7,
			title: 'Beds 1',
			description: 'Beds',
			content: 'Designed with the highest standards in the market, with an elegant finish.',
			price: 8000,
			pictureUrl: this.imagePath,
		},
		{
			id: 32,
			category: 7,
			title: 'Beds 2',
			description: 'Beds',
			content: 'Designed with the highest standards in the market, with an elegant finish.',
			price: 5000,
			pictureUrl: this.imagePath,
		},
		{
			id: 33,
			category: 7,
			title: 'Beds 3',
			description: 'Beds',
			content: 'Designed with the highest standards in the market, with an elegant finish.',
			price: 9000,
			pictureUrl: this.imagePath,
		},
		{
			id: 34,
			category: 7,
			title: 'Beds 4',
			description: 'Beds',
			content: 'Designed with the highest standards in the market, with an elegant finish.',
			price: 4000,
			pictureUrl: this.imagePath,
		},
		{
			id: 35,
			category: 7,
			title: 'Beds 5',
			description: 'Beds',
			content: 'Designed with the highest standards in the market, with an elegant finish.',
			price: 7000,
			pictureUrl: this.imagePath,
		},
		{
			id: 36,
			category: 8,
			title: 'Rugs 1',
			description: 'Rugs',
			content: 'Designed with the highest standards in the market, with an elegant finish.',
			price: 7000,
			pictureUrl: this.imagePath,
		},
		{
			id: 37,
			category: 8,
			title: 'Rugs 2',
			description: 'Rugs',
			content: 'Designed with the highest standards in the market, with an elegant finish.',
			price: 4000,
			pictureUrl: this.imagePath,
		},
		{
			id: 38,
			category: 8,
			title: 'Rugs 3',
			description: 'Rugs',
			content: 'Designed with the highest standards in the market, with an elegant finish.',
			price: 8000,
			pictureUrl: this.imagePath,
		},
		{
			id: 39,
			category: 9,
			title: 'Dining Chairs 1',
			description: 'Dining Chairs',
			content: 'Designed with the highest standards in the market, with an elegant finish.',
			price: 10000,
			pictureUrl: this.imagePath,
		},
		{
			id: 40,
			category: 9,
			title: 'Dining Chairs 2',
			description: 'Dining Chairs',
			content: 'Designed with the highest standards in the market, with an elegant finish.',
			price: 15000,
			pictureUrl: this.imagePath,
		},
		{
			id: 41,
			category: 9,
			title: 'Dining Chairs 3',
			description: 'Dining Chairs',
			content: 'Designed with the highest standards in the market, with an elegant finish.',
			price: 11000,
			pictureUrl: this.imagePath,
		},
		{
			id: 42,
			category: 10,
			title: 'TV & Media 1',
			description: 'TV & Media',
			content: 'Designed with the highest standards in the market, with an elegant finish.',
			price: 11000,
			pictureUrl: this.imagePath,
		},
		{
			id: 43,
			category: 10,
			title: 'TV & Media 2',
			description: 'TV & Media',
			content: 'Designed with the highest standards in the market, with an elegant finish.',
			price: 16000,
			pictureUrl: this.imagePath,
		},
		{
			id: 44,
			category: 10,
			title: 'TV & Media 3',
			description: 'TV & Media',
			content: 'Designed with the highest standards in the market, with an elegant finish.',
			price: 18000,
			pictureUrl: this.imagePath,
		},
	];

	async getAll() {
		return this.furniture;
	}

	async get(furnitureId) {
		return this.furniture[furnitureId - 1];
	}

	async getElementByCategoryId(id) {
		console.log('id:', id);
		let result: {
			id: number,
			category: number,
			title: string,
			description: string,
			content: string,
			price: number,
			pictureUrl: string,
		}[] = [];
		// this.furniture.forEach(element => {
		// 	if (element.category === id) {
		// 		result.push(element);
		// 	}
		// });
		// console.log('return:', result);

		// result = this.furniture.filter(element => element.category === id);
		// console.log('return:', result);

		return this.furniture.filter(element => element.category === parseInt(id));
	}
}

export default ItemService;
