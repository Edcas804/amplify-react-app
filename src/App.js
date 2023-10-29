import "@aws-amplify/ui-react/styles.css"
import { withAuthenticator } from "@aws-amplify/ui-react"

function App({ signOut, user }) {
	return (
		<>
			<div>
				<h1>Basic app</h1>
				<h3>
					{user.username}-{user.attributes.email}
				</h3>
				<p>_______________</p>
				<button onClick={signOut}> Sing Out</button>
			</div>
		</>
	)
}
const MyTheme = {
	googleSignInButton: { backgroundColor: "red", borderColor: "red" },
	button: { backgroundColor: "green", borderColor: "red" },
	signInButtonIcon: { display: "none" },
}

export default withAuthenticator(App, false, [], null, MyTheme)
