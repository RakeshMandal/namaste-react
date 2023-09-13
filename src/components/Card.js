import {CDN_URL} from '../utils/constant'

const Card = (props) =>{
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime} = resData;
    return(
        <div className="res-card">
            <img alt="card-logo" className="card-logo" src={CDN_URL+ cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} star</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}

export default Card