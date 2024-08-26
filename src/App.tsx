import { Navigate, Route, Routes } from 'react-router-dom'
import { Adidas } from './components/pages/Adidas'
import { Puma } from './components/pages/Puma'
import { Abibas } from './components/pages/PageThree'
import { Error404 } from './components/pages/Error404'
import { NavLink } from 'react-router-dom'
import { S } from './components/pages/_styles'
import { Model } from './components/pages/Model'
import { Prices } from './components/pages/Prices'

export const PATH = {
	Adidas: 'adidas',
	Puma: 'puma',
	Abibas: 'abibas',
	Prices: 'prices',
	ERROR404: 'error404',
}
////dsdsdsd

function App() {
	return (
		<S.container>
			<S.header>
				<h1>HEADER</h1>
			</S.header>
			<S.containerForNavAndContent>
				<S.nav>
					<S.NavWrapper>
						<NavLink to={PATH.Adidas}>Adidas</NavLink>
					</S.NavWrapper>
					<S.NavWrapper>
						<NavLink to={PATH.Puma}>Puma</NavLink>
					</S.NavWrapper>
					<S.NavWrapper>
						<NavLink to={PATH.Abibas}>Abibas</NavLink>
					</S.NavWrapper>
					<S.NavWrapper>
						<NavLink to={PATH.Prices}>Prices</NavLink>
					</S.NavWrapper>
					<S.NavWrapper>
						<a href={PATH.ERROR404}>page3 HTML</a>
					</S.NavWrapper>
				</S.nav>
				<S.content>
					<Routes>
						<Route path={'/'} element={<Navigate to={'/adidas'} />} />

						<Route path={PATH.Adidas} element={<Adidas />} />
						<Route path={PATH.Puma} element={<Puma />} />
						<Route path={PATH.Abibas} element={<Abibas />} />
						<Route path={PATH.Prices} element={<Prices />} />
						<Route path={'/:model/:id'} element={<Model />} />

						<Route path={'/*'} element={<Error404 />} />
					</Routes>
				</S.content>
			</S.containerForNavAndContent>
			<S.footer>abibas 2024</S.footer>
		</S.container>
	)
}

export default App
