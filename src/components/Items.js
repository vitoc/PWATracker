export default function Items() {

	const [items, setItems] = React.useState([]);

    React.useEffect(() => {
		fetch(`/data/PWA%20Tracker.json`)
			.then(res => res.json())
            .then(data => {
                let linkItems = [];
                data.Resources.forEach(item => {
                    let linkItem = (
                        <div key={item.url}>
                            <a href={item.url} target="_blank">I: {item.title}</a>
                        </div>
                    )
                    linkItems.push(linkItem);
                });
                setItems(linkItems);
            })
	}, []);
    
    return (<div>
        {items}
    </div>)
}