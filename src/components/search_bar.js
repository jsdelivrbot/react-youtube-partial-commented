// Remember that we always need to import React for all of our
// components. Even though React isn't being called explicitly 
// within a component like this, we know that 'React.createElement'
// is being called under the hood. If you need a refresher on this,
// paste the whole 'const SearchBar' chunk into 
// 'https://babeljs.io/repl/' for a reminder.
import React from 'react';

// Right now, we have a functional (stateless) component here, because we don't
// yet have any state(s) we're looking to track with React. HINT: we
// will eventually need to track a state or two within this component.
// We'll convert this to a stateful component next session, and will
// add states, as well.
const SearchBar = () => {
	return (
		<div className="search-bar col-md-12">
			<input type="text" placeholder="text here" />
		</div>
	);
}

// Gotta export it so that it can be rendered on the index.js!
export default SearchBar;
