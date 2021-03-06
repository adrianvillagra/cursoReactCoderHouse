import { Furniture } from '../interfaces/Furniture';
class ItemService {
	setError: (value: string) => void;

	furniture = [
		{
			id: 1,
			category: 1,
			title: 'Sofa & Couche 1',
			description: 'Excellent bone white sofa',
			content: 'Sofa designed with the highest standards in the market, with an elegant finish.',
			price: 1000,
			stock: 20,
			pictureUrl: 'public/images/furniture/sofa_couches/sofa_couches1.png',
		},
		{
			id: 2,
			category: 1,
			title: 'Sofa & Couche 2',
			description: 'Excellent bone white sofa',
			content: 'Sofa designed with the highest standards in the market, with an elegant finish.',
			price: 2000,
			stock: 20,
			pictureUrl: 'public/images/furniture/sofa_couches/sofa_couches2.png',
		},
		{
			id: 3,
			category: 1,
			title: 'Sofa & Couche 3',
			description: 'Excellent bone white sofa',
			content: 'Sofa designed with the highest standards in the market, with an elegant finish.',
			price: 3000,
			stock: 20,
			pictureUrl: 'public/images/furniture/sofa_couches/sofa_couches3.png',
		},
		{
			id: 4,
			category: 1,
			title: 'Sofa & Couche 4',
			description: 'Excellent bone white sofa',
			content: 'Sofa designed with the highest standards in the market, with an elegant finish.',
			price: 4000,
			stock: 20,
			pictureUrl: 'public/images/furniture/sofa_couches/sofa_couches4.png',
		},
		{
			id: 5,
			category: 1,
			title: 'Sofa & Couche 5',
			description: 'Excellent bone white sofa',
			content: 'Sofa designed with the highest standards in the market, with an elegant finish.',
			price: 1000,
			stock: 20,
			pictureUrl: 'public/images/furniture/sofa_couches/sofa_couches5.png',
		},
		{
			id: 6,
			category: 2,
			title: 'Dressers 1',
			description: 'Excellent dresser',
			content: 'Dresser designed with the highest standards in the market, with an elegant finish.',
			price: 2000,
			stock: 20,
			pictureUrl: 'public/images/furniture/dressers/dressers1.png',
		},
		{
			id: 7,
			category: 2,
			title: 'Dressers 2',
			description: 'Excellent bone white sofa',
			content: 'Dresser designed with the highest standards in the market, with an elegant finish.',
			price: 2000,
			stock: 20,
			pictureUrl: 'public/images/furniture/dressers/dressers2.png',
		},
		{
			id: 8,
			category: 2,
			title: 'Dressers 3',
			description: 'Excellent dresser',
			content: 'Dresser designed with the highest standards in the market, with an elegant finish.',
			price: 3000,
			stock: 20,
			pictureUrl: 'public/images/furniture/dressers/dressers3.png',
		},
		{
			id: 9,
			category: 2,
			title: 'Dressers 4',
			description: 'Excellent dresser',
			content: 'Dresser designed with the highest standards in the market, with an elegant finish.',
			price: 4000,
			stock: 20,
			pictureUrl: 'public/images/furniture/dressers/dressers4.png',
		},
		{
			id: 10,
			category: 2,
			title: 'Dressers 5',
			description: 'Excellent dresser',
			content: 'Dresser designed with the highest standards in the market, with an elegant finish.',
			price: 5000,
			stock: 20,
			pictureUrl: 'public/images/furniture/dressers/dressers5.png',
		},
		{
			id: 11,
			category: 3,
			title: 'Accent Chairs 1',
			description: 'Excellent accent chair',
			content: 'Chair designed with the highest standards in the market, with an elegant finish.',
			price: 1000,
			stock: 20,
			pictureUrl: 'public/images/furniture/accent_chairs/accent_chairs1.png',
		},
		{
			id: 12,
			category: 3,
			title: 'Accent Chairs 2',
			description: 'Excellent accent chair',
			content: 'Chair designed with the highest standards in the market, with an elegant finish.',
			price: 2000,
			stock: 20,
			pictureUrl: 'public/images/furniture/accent_chairs/accent_chairs2.png',
		},
		{
			id: 13,
			category: 3,
			title: 'Accent Chairs 3',
			description: 'Excellent accent chair',
			content: 'Chair designed with the highest standards in the market, with an elegant finish.',
			price: 3000,
			stock: 20,
			pictureUrl: 'public/images/furniture/accent_chairs/accent_chairs3.png',
		},
		{
			id: 14,
			category: 3,
			title: 'Accent Chairs 4',
			description: 'Excellent accent chair',
			content: 'Chair designed with the highest standards in the market, with an elegant finish.',
			price: 4000,
			stock: 20,
			pictureUrl: 'public/images/furniture/accent_chairs/accent_chairs4.png',
		},
		{
			id: 15,
			category: 3,
			title: 'Accent Chairs 5',
			description: 'Excellent accent chair',
			content: 'Chair designed with the highest standards in the market, with an elegant finish.',
			price: 5000,
			stock: 20,
			pictureUrl: 'public/images/furniture/accent_chairs/accent_chairs5.png',
		},
		{
			id: 16,
			category: 4,
			title: 'Desk 1',
			description: 'Excellent desk',
			content: 'Desk designed with the highest standards in the market, with an elegant finish.',
			price: 1000,
			stock: 20,
			pictureUrl: 'public/images/furniture/desk/desk1.png',
		},
		{
			id: 17,
			category: 4,
			title: 'Desk 2',
			description: 'Excellent desk',
			content: 'Desk designed with the highest standards in the market, with an elegant finish.',
			price: 2000,
			stock: 20,
			pictureUrl: 'public/images/furniture/desk/desk2.png',
		},
		{
			id: 18,
			category: 4,
			title: 'Desk 3',
			description: 'Excellent desk',
			content: 'Desk designed with the highest standards in the market, with an elegant finish.',
			price: 3000,
			stock: 20,
			pictureUrl: 'public/images/furniture/desk/desk3.png',
		},
		{
			id: 19,
			category: 4,
			title: 'Desk 4',
			description: 'Excellent desk',
			content: 'Desk designed with the highest standards in the market, with an elegant finish.',
			price: 4000,
			stock: 20,
			pictureUrl: 'public/images/furniture/desk/desk4.png',
		},
		{
			id: 20,
			category: 4,
			title: 'Desk 5',
			description: 'Excellent desk',
			content: 'Desk designed with the highest standards in the market, with an elegant finish.',
			price: 5000,
			stock: 20,
			pictureUrl: 'public/images/furniture/desk/desk5.png',
		},
		{
			id: 21,
			category: 5,
			title: 'Desk 1',
			description: 'Living Room',
			content: 'Designed with the highest standards in the market, with an elegant finish.',
			price: 5000,
			stock: 20,
			pictureUrl: 'public/images/furniture/living_room/living_room1.png',
		},
		{
			id: 22,
			category: 5,
			title: 'Desk 2',
			description: 'Living Room',
			content: 'Designed with the highest standards in the market, with an elegant finish.',
			price: 6000,
			stock: 20,
			pictureUrl: 'public/images/furniture/living_room/living_room2.png',
		},
		{
			id: 23,
			category: 5,
			title: 'Desk 3',
			description: 'Living Room',
			content: 'Designed with the highest standards in the market, with an elegant finish.',
			price: 5000,
			stock: 20,
			pictureUrl: 'public/images/furniture/living_room/living_room3.png',
		},
		{
			id: 24,
			category: 5,
			title: 'Desk 4',
			description: 'Living Room',
			content: 'Designed with the highest standards in the market, with an elegant finish.',
			price: 7000,
			stock: 20,
			pictureUrl: 'public/images/furniture/living_room/living_room4.png',
		},
		{
			id: 25,
			category: 5,
			title: 'Desk 5',
			description: 'Living Room',
			content: 'Designed with the highest standards in the market, with an elegant finish.',
			price: 8000,
			stock: 20,
			pictureUrl: 'public/images/furniture/living_room/living_room5.png',
		},
		{
			id: 26,
			category: 6,
			title: 'Table & Chairs Set 1',
			description: 'Table & Chairs',
			content: 'Designed with the highest standards in the market, with an elegant finish.',
			price: 5000,
			stock: 20,
			pictureUrl: 'public/images/furniture/table_chair/table_chair1.png',
		},
		{
			id: 27,
			category: 6,
			title: 'Table & Chairs Set 2',
			description: 'Table & Chairs',
			content: 'Designed with the highest standards in the market, with an elegant finish.',
			price: 8000,
			stock: 20,
			pictureUrl: 'public/images/furniture/table_chair/table_chair2.png',
		},
		{
			id: 28,
			category: 6,
			title: 'Table & Chairs Set 3',
			description: 'Table & Chairs',
			content: 'Designed with the highest standards in the market, with an elegant finish.',
			price: 5000,
			stock: 20,
			pictureUrl: 'public/images/furniture/table_chair/table_chair3.png',
		},
		{
			id: 29,
			category: 6,
			title: 'Table & Chairs Set 4',
			description: 'Table & Chairs',
			content: 'Designed with the highest standards in the market, with an elegant finish.',
			price: 5000,
			stock: 20,
			pictureUrl: 'public/images/furniture/table_chair/table_chair4.png',
		},
		{
			id: 30,
			category: 6,
			title: 'Table & Chairs Set 5',
			description: 'Table & Chairs',
			content: 'Designed with the highest standards in the market, with an elegant finish.',
			price: 9000,
			stock: 20,
			pictureUrl: 'public/images/furniture/table_chair/table_chair5.png',
		},
		{
			id: 31,
			category: 7,
			title: 'Beds 1',
			description: 'Beds',
			content: 'Designed with the highest standards in the market, with an elegant finish.',
			price: 8000,
			stock: 20,
			pictureUrl: 'public/images/furniture/beds/beds1.png',
		},
		{
			id: 32,
			category: 7,
			title: 'Beds 2',
			description: 'Beds',
			content: 'Designed with the highest standards in the market, with an elegant finish.',
			price: 5000,
			stock: 20,
			pictureUrl: 'public/images/furniture/beds/beds2.png',
		},
		{
			id: 33,
			category: 7,
			title: 'Beds 3',
			description: 'Beds',
			content: 'Designed with the highest standards in the market, with an elegant finish.',
			price: 9000,
			stock: 20,
			pictureUrl: 'public/images/furniture/beds/beds3.png',
		},
		{
			id: 34,
			category: 7,
			title: 'Beds 4',
			description: 'Beds',
			content: 'Designed with the highest standards in the market, with an elegant finish.',
			price: 4000,
			stock: 20,
			pictureUrl: 'public/images/furniture/beds/beds4.png',
		},
		{
			id: 35,
			category: 7,
			title: 'Beds 5',
			description: 'Beds',
			content: 'Designed with the highest standards in the market, with an elegant finish.',
			price: 7000,
			stock: 20,
			pictureUrl: 'public/images/furniture/beds/beds5.png',
		},
		{
			id: 36,
			category: 8,
			title: 'Rugs 1',
			description: 'Rugs',
			content: 'Designed with the highest standards in the market, with an elegant finish.',
			price: 7000,
			stock: 20,
			pictureUrl: 'public/images/furniture/rugs/rug1.png',
		},
		{
			id: 37,
			category: 8,
			title: 'Rugs 2',
			description: 'Rugs',
			content: 'Designed with the highest standards in the market, with an elegant finish.',
			price: 4000,
			stock: 20,
			pictureUrl: 'public/images/furniture/rugs/rug2.png',
		},
		{
			id: 38,
			category: 8,
			title: 'Rugs 3',
			description: 'Rugs',
			content: 'Designed with the highest standards in the market, with an elegant finish.',
			price: 8000,
			stock: 20,
			pictureUrl: 'public/images/furniture/rugs/rug3.png',
		},
		{
			id: 39,
			category: 9,
			title: 'Dining Chairs 1',
			description: 'Dining Chairs',
			content: 'Designed with the highest standards in the market, with an elegant finish.',
			price: 10000,
			stock: 20,
			pictureUrl: 'public/images/furniture/dining_chairs/dining_chairs1.png',
		},
		{
			id: 40,
			category: 9,
			title: 'Dining Chairs 2',
			description: 'Dining Chairs',
			content: 'Designed with the highest standards in the market, with an elegant finish.',
			price: 15000,
			stock: 20,
			pictureUrl: 'public/images/furniture/dining_chairs/dining_chairs2.png',
		},
		{
			id: 41,
			category: 9,
			title: 'Dining Chairs 3',
			description: 'Dining Chairs',
			content: 'Designed with the highest standards in the market, with an elegant finish.',
			price: 11000,
			stock: 20,
			pictureUrl: 'public/images/furniture/dining_chairs/dining_chairs3.png',
		},
		{
			id: 42,
			category: 10,
			title: 'TV & Media 1',
			description: 'TV & Media',
			content: 'Designed with the highest standards in the market, with an elegant finish.',
			price: 11000,
			stock: 20,
			pictureUrl: 'public/images/furniture/tv_media/tv_media1.png',
		},
		{
			id: 43,
			category: 10,
			title: 'TV & Media 2',
			description: 'TV & Media',
			content: 'Designed with the highest standards in the market, with an elegant finish.',
			price: 16000,
			stock: 20,
			pictureUrl: 'public/images/furniture/tv_media/tv_media2.png',
		},
		{
			id: 44,
			category: 10,
			title: 'TV & Media 3',
			description: 'TV & Media',
			content: 'Designed with the highest standards in the market, with an elegant finish.',
			price: 18000,
			stock: 20,
			pictureUrl: 'public/images/furniture/tv_media/tv_media3.png',
		},
	];

	constructor(setError: (value: string) => void) {
		this.setError = setError;
	}

	async getAll() {
		return this.furniture;
	}

	async get(furnitureId: number) {
		return this.furniture[furnitureId - 1];
	}

	async getElementByCategoryId(id: number) {
		return this.furniture.filter(element => element.category === id);
	}

	handleResponseError(response: { status: string }): void {
		this.setError(response.status);
	}

	handleError(error: { message: string }): void {
		this.setError(error.message);
	}
}

export default ItemService;
