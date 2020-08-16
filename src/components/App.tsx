import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './feature/Home';
import Error404 from './feature/Error404';
import Projects from './feature/Projects';

import { HsjBasePage } from 'hsj-rjs';

function App() {
	return (
		<HsjBasePage
			title='Ocean Analyzer'
			pageList={[
				{
					name: 'Projects',
					link: '/projects',
				},
				{
					name: 'Features',
					link: '/features',
				},
				{
					name: 'Login',
					link: '/login',
				},
			]}
		>
			<Switch>
				<Route path='/' exact>
					<Home>
						<div>Test Content</div>
					</Home>
				</Route>
				<Route path='/projects'>
					<Projects></Projects>
				</Route>
				<Route>
					<Error404></Error404>
				</Route>
			</Switch>
		</HsjBasePage>
	);
}

export default App;