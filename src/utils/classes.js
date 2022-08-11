"useStrict"
import PropTypes from "prop-types";

export const mergeClasses = (classArray) => {
    let totalClasses = classArray.reduce((accumulator, currentValue) =>
        accumulator + ` ${currentValue}`
    )

    return totalClasses
}

mergeClasses.propTypes={
    classArray: PropTypes.array
}