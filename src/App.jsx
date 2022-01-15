
import { Counter } from './components/Counter'
import { RepositoryList } from './components/RepositoryList'
import './styles/global.scss'

export function App() {

    return (
        <>
        {/* <>fragmento ele não produz algo no html */}
            <RepositoryList />
            <Counter />
        </>


    )
}