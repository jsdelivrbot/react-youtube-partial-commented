// Importing React, and breaking React.Component off into its own
// object that we can then reference with 'Component'.
import React, { Component } from 'react';

// Remember, we need ReactDOM as well on the main wrapper component
// only so that we can inject all of our content into the DOM.
import ReactDOM from 'react-dom';

// These are the components we created --- note the './directory' path
// that is necessary only for the imports we created ourselves.
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';

// Importing the NPM package to hit the YouTube API.
import YouTubeSearch from 'youtube-api-search';

// Just the API key.
const apiKey = 'AIzaSyDDXeVwdx9PwNFmTF88a7XFSL7-xp-iXyw';

// Our component here is stateful (as in it has its own state, seen
// below in the 'this.state' object. When a component is stateful,
// it follows the 'class Whatever extends Component' format and includes
// a constructor. A functional or stateless component will likely
// use the 'const Whatever = () =>' format. See video_detail.js
// for an example of a functional/stateless component.
class App extends Component {
	// The constructor creates/initializes your class.
	constructor(props) {
		// The line below allows you to use 'this.props' inside your
		// constructor... always include this inside your constructor.
		super(props);
		
		// The object below is where you set the initial states for
		// your React component. Note that the initial state is set
		// inside your constructor, so therefore these states are set
		// when the component is first initialized. These can and will
		// be overwritten later.
		this.state = {
			videos: [],
			selectedVideo: null
		}

		// The syntax below is specific to using the 'youtube-api-search' 
		// NPM package. The key takeaway is that we're calling the package
		// and passing it our API key and a search term... then, we're 
		// naming whatever we get back from the search as 'videos'.
		// Again, note that we're running this initial search AFTER
		// we create our initial state values, but still within the 
		// constructor. This search runs right as the user loads our
		// app, and before the user interacts with the app by searching.
		YouTubeSearch({ key: apiKey, term: 'puppies' }, videos => {
		    console.log(videos);

		    // Here we're taking the search results of our initial
		    // search and updating the component's state in response.
		    // We're taking the videos object (an array of 5 videos
		    // we get back from the search) and passing them as the
		    // value of state 'videos'. Then, we're setting the value 
		    // of state 'selectedVideo' to be equal to the first video
		    // in that same array of videos we got back from our YouTube
		    // search.
		    this.setState({
		    	videos: videos,
		    	selectedVideo: videos[0]
		    });
		});	
	}

	// Since this is a 'stateful' component, we wrap our return in a
	// render method. We also make sure we call this render OUTSIDE
	// of the constructor, but inside of the main class/component.
	render() {
		return (
			// Remember that React demands that we wrap all of our
			// components and HTML inside of a wrapper element of some
			// sort. Hence the div below wrapping all of our components.
			
			// For components VideoDetail and VideoList below, note that 
			// we're passing values in as props to each component. The part on
			// the left of the equal sign is the name we'll use to reference
			// that particular value inside the child component. The part
			// on the right/between curly brackets is the value we want to
			// set that prop to.
			<div>
				<SearchBar />
				<VideoDetail selectedVideo={this.state.selectedVideo} />
				<VideoList videos={this.state.videos} />
			</div>

		);
	}
}

// In ReactDOM.render, note that the first parameter we pass is the
// component or HTML we want to render (in this case it's a component)
// and the second parameter is the place on our index.html where we 
// want to insert all of our React-generated content.
ReactDOM.render(<App />, document.getElementById("main-content"));