export default function List() {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    fetch(`/data/PWA%20Tracker.json`).then(res => res.json()).then(data => {
      let linkItems = [];
      data.Resources.forEach(item => {
        let linkItem = /*#__PURE__*/React.createElement("div", {
          key: item.url
        }, /*#__PURE__*/React.createElement("a", {
          href: item.url,
          target: "_blank"
        }, "I: ", item.title));
        linkItems.push(linkItem);
      });
      setItems(linkItems);
    });
  }, []);
  return /*#__PURE__*/React.createElement("div", null, items);
}