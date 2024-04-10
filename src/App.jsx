import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { ContactPage } from './pages/ContactPage'
import { LandingPage } from './pages/LandingPage'
import { DatenschutzPage } from './pages/DatenschutzPage'
import { ImpressumPage } from './pages/ImpressumPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { Application, ApplicationPage } from './pages/ApplicationPage'
import { Footer } from './sections/Footer';


import { Navbar } from './sections/Navbar'


import './App.scss'


const App = () => {	
	
	return (
		<Router>			
			<div className="App">
				<div id='top-space' />
				<Navbar items={[
					{
						items: [
							{
								title: 'Menu',
								type: 'dropdown',
								id:'nav-menu',
								items: [
									{ title: 'item 1', url: 'item1' },
									{ title: 'item 2', url: 'item2' },
									{ title: 'item 3', url: 'item3' },
									{ title: 'item 4', url: 'item4' },
								]
							},
							{
								title: 'About Us',
								type: 'pointer',
								url: '/',
								section: 'about'
							},
							{
								title: 'Contact',
								type: 'pointer',
								url: '/contact',
								section: 'contact'
							},
							{
								title: 'FAQ',
								type: 'pointer',
								url: '/',
								section: 'faq'
							},
						]
					},
					{
						items: [
							{
								title: 'Apply',
								type: 'action-link',
								url: '/application',	
								buttonType: 'primary'							
							},
							{
								title: 'DE',
								type: 'dropdown',
								id:'language-selector',
								items: [
									{ title: 'DE' },
									{ title: 'EN' },
									{ title: 'IT' },
									{ title: 'FR' },
								]
							}
						]


					}

				]} />
				
					<Routes>
						<Route exact path="/" element={<HomePage />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/contact" element={<ContactPage />} />
						<Route path="/landing" element={<LandingPage />} />
						<Route path="/impressum" element={<ImpressumPage />} />
						<Route path="/datenschutz" element={<DatenschutzPage />} />							
						<Route path="/application" element={<ApplicationPage />} />											
						{/* Add more routes as needed */}
						{/* 404 route */}
						<Route path='*' element={<NotFoundPage />} />
					</Routes>
				<div id='footer-container'>
					<Footer />
				</div>


				{ /*
			<Navbar />
			<Header />
			<About />
			<Contact />
			<Footer />
		*/ }
			</div>
		</Router>

	)
}

export default App
