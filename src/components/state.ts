import { v1 } from 'uuid'
import adidasModel1 from '../assets/AdiFOM_TRXN_Shoes_Black_IG7453_01_standard.webp'
import adidasModel2 from '../assets/PostMove_Mid_Cloudfoam_Super_Lifestyle_Basketball_Mid_Classic_Shoes_Black_GY7163_01_standard.webp'
import adidasModel3 from '../assets/Superstar_XLG_Shoes_Black_IG9777_01_standard.webp'
import puma1 from '../assets/Puma1.webp'
import puma2 from '../assets/Puma2.webp'
import puma3 from '../assets/Puma3.webp'

export type SnickersModel = {
	id: string
	model: string
	collection: string
	price: string
	picture: string
}

export type SnickersModels = {
	adidas: SnickersModel[]
	puma: SnickersModel[]
}

export const snickersModels: SnickersModels = {
	adidas: [
		{
			id: v1(),
			model: 'ADIDAS ADIFOM TRXN',
			collection: 'S-sport',
			price: '250$',
			picture: adidasModel1,
		},
		{
			id: v1(),
			model: 'ADIDAS ADIFOM SUPER',
			collection: 'Series Kelly S',
			price: '300$',
			picture: adidasModel2,
		},
		{
			id: v1(),
			model: 'ADIDAS SUPER SUPERSKI',
			collection: 'Series OneL',
			price: '130$',
			picture: adidasModel3,
		},
	],
	puma: [
		{
			id: v1(),
			model: 'Puma sneakers',
			collection: 'Cool morning',
			price: '200$',
			picture: puma1,
		},
		{
			id: v1(),
			model: 'Puma sneakers',
			collection: 'Feet street',
			price: '180$',
			picture: puma2,
		},
		{
			id: v1(),
			model: 'Puma sneakers',
			collection: 'SportStyle',
			price: '300$',
			picture: puma3,
		},
	],
}
