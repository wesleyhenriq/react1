export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository.name ?? 'Default'}</strong> 
            {/* repository? se tem nome ?? senao devolve default  */}
            <p>{props.repository.description}</p>
            <a href="">
                Acessar repositorio
            </a>
        </li>
    );
}