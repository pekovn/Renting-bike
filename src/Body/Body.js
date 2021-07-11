import './Body.css'
import StoredData from './RentBike/StoredData';
import periodsData from './RentBike/periodsData';
import RentBikeTotalPrice, { data } from './RentBikeTotalPrice/RentBikeTotalPrice'
function Body() {
    return (
        <div className="rent">
            <h2>Bike-renting</h2>
            <div className="rentingTable">
                <table className="table rentingTable-table">
                    <tbody>
                        <tr>
                            <th>Date From</th>
                            <th>Date To</th>
                            <th>Added</th>
                            <th>Prize per day</th>
                        </tr>
                        <StoredData dateData={periodsData.map((props, i) => {
                            return props
                        })} />
                    </tbody>
                </table>
            </div>
            <RentBikeTotalPrice />

        </div>
    )
}
export default Body;
localStorage.setItem('data', JSON.stringify(periodsData));