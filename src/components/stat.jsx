import starEmpty from '../assets/kid_star_20dp_000000_FILL0_wght400_GRAD0_opsz20.png'
import starFilled from '../assets/kid_star_20dp_000000_FILL1_wght400_GRAD0_opsz20.png'

function Star(props) {

    let starIcon = props.isFilled ? starFilled : starEmpty
    let arialIcon = /*contact.isFavorite*/ props.isFilled
    let arialLabel = props.isFilled ? "Remove from favorites" : "Add to favorite"

    return (
        <button
            onClick={props.handleClick}
            aria-pressed={arialIcon}
            aria-label={arialLabel}
            className="favorite-button"
        >
            <img
                src={starIcon}
                alt="empty star icon"
                className="favorite"
            />
        </button>
    )
}
export default Star;