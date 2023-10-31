/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPhotoshoot = /* GraphQL */ `
	query GetPhotoshoot($id: ID!) {
		getPhotoshoot(id: $id) {
			id
			name
			description
			image
			status
			createdAt
			updatedAt
			__typename
		}
	}
`
export const listPhotoshoots = /* GraphQL */ `
	query ListPhotoshoots(
		$filter: ModelPhotoshootFilterInput
		$limit: Int
		$nextToken: String
	) {
		listPhotoshoots(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				name
				description
				image
				status
				createdAt
				updatedAt
				__typename
			}
			nextToken
			__typename
		}
	}
`
