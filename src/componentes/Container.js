import './Container.css';

function Container(props) { 
    const classe = props.className;

    return (
        <div className={classe}>{props.children}</div>
    )
}

export default Container;