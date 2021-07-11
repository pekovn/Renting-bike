const StoredData = (props) => {
    return (<>{props.dateData.map((x, i) => {
        if (x.added == 'noInfo') {
            x.added = '';
        }
        return <tr key={i}>
            <td key={`${i}${x.from}`} id={`${i}${x.from}`}>{x.from}</td>
            <td key={`${i}${x.to}`} id={`${i}${x.to}`}>{x.to}</td>
            <td key={`${i}${x.added}`} id={`${i}${x.added}`}>{x.added}</td>
            <td key={`${i}${x.price_per_day}`} id={`${i}${x.price_per_day}`}>{x.price_per_day}</td>
        </tr>
    })}
    </>);
}

export default StoredData;