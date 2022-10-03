import './Container.css';

function Container(props) { 

    return (
        <div className="armazem">{props.children}</div>
    )
}

export default Container;