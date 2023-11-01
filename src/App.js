import React, { useState, useEffect } from "react"
import "./App.css"
import "@aws-amplify/ui-react/styles.css"
import { API, Storage } from "aws-amplify"
import {
	Button,
	Flex,
	Heading,
	Text,
	TextField,
	View,
	Image,
	withAuthenticator,
} from "@aws-amplify/ui-react"
import { listPhotoshoots } from "./graphql/queries"
import {
	createPhotoshoot as createPhotoshootMutation,
	deletePhotoshoot as deletePhotoshootMutation,
} from "./graphql/mutations"

const App = ({ signOut, user }) => {
	const [notes, setPhotoshoots] = useState([])
	const [errors, setErrors] = useState([])

	useEffect(() => {
		fetchPhotoshoots()
	}, [])

	async function fetchPhotoshoots() {
		try {
			const apiData = await API.graphql({ query: listPhotoshoots })
			const photoshootsFromAPI = apiData.data.listPhotoshoots.items
			await Promise.all(
				photoshootsFromAPI.map(async (photo) => {
					if (photo.image) {
						const url = await Storage.get(photo.name)
						photo.image = url
					}
					return photo
				})
			)
			setPhotoshoots(photoshootsFromAPI)
		} catch (e) {
			if (Array.isArray(e.errors)) {
				setErrors(e.errors)
			}
		}
	}

	async function createPhotoshoot(event) {
		event.preventDefault()
		const form = new FormData(event.target)
		const image = form.get("image")
		const data = {
			name: form.get("name"),
			description: form.get("description"),
			status: form.get("status"),
			image: image.name,
		}
		if (!!data.image) await Storage.put(data.name, image)
		//
		const upload = Storage.put(data.name, image, {
			resumable: true,
			completeCallback: (event) => {
				console.log(`Successfully uploaded ${event.key}`)
			},
			progressCallback: (progress) => {
				console.log(`Uploaded: ${progress.loaded}/${progress.total}`)
			},
			errorCallback: (err) => {
				console.error("Unexpected error while uploading", err)
			},
		})
		//
		try {
			await API.graphql({
				query: createPhotoshootMutation,
				variables: { input: data },
			})
			fetchPhotoshoots()
			event.target.reset()
		} catch (e) {
			if (Array.isArray(e.errors)) {
				setErrors(e.errors)
			}
		}
	}

	async function deletePhotoshoot({ id, name }) {
		const newPhotoshoots = notes.filter((note) => note.id !== id)
		setPhotoshoots(newPhotoshoots)
		await Storage.remove(name)
		await API.graphql({
			query: deletePhotoshootMutation,
			variables: { input: { id } },
		})
	}

	return (
		<View className="App">
			<Heading level={1}>My Photoshoots App</Heading>
			<View as="form" margin="3rem 0" onSubmit={createPhotoshoot}>
				<Flex direction="row" justifyContent="center">
					<TextField
						name="name"
						placeholder="Photoshoot Name"
						label="Photoshoot Name"
						labelHidden
						variation="quiet"
						required
					/>
					<TextField
						name="description"
						placeholder="Photoshoot Description"
						label="Photoshoot Description"
						labelHidden
						variation="quiet"
						required
					/>
					<View
						name="image"
						as="input"
						type="file"
						style={{ alignSelf: "end" }}
					/>
					<select name="status">
						<option value="1">Active</option>
						<option value="2">Inactive</option>
					</select>
					<Button type="submit" variation="primary">
						Create Photoshoot
					</Button>
				</Flex>
			</View>
			<View margin="3rem 0">
				{errors.map((error, i) => (
					<li key={i}>{error.message}</li>
				))}
			</View>

			<Heading level={2}>Current Photoshoots</Heading>
			<View margin="3rem 0">
				{notes.map((note) => (
					<Flex
						key={note.id || note.name}
						direction="row"
						justifyContent="center"
						alignItems="center"
					>
						<Text as="strong" fontWeight={700}>
							{note.name}
						</Text>
						{note.image && (
							<Image
								src={note.image}
								alt={`visual aid for ${notes.name}`}
								style={{ width: 400 }}
							/>
						)}
						<Text as="strong" fontWeight={700}>
							{note.status}
						</Text>
						<Button
							variation="link"
							onClick={() => deletePhotoshoot(note)}
						>
							Delete note
						</Button>
					</Flex>
				))}
			</View>
			<Button onClick={signOut}>Sign Out</Button>
		</View>
	)
}

export default withAuthenticator(App)
