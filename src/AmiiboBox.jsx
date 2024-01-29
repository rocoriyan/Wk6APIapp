const AmiiboBox = (props) => {
    let amiiboAlt = `An amiibo of ${props.name} from ${props.game}`
    return (
        <div className="amiiboBox">
            <img src={props.url} alt={amiiboAlt}/>
            <div className="amiiboName">
                <p>{props.name}</p>
            </div>
        </div>
    );
};

export default AmiiboBox;