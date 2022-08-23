import React from 'react';
import Image from "../Image/Image";
import classes from "./ImageField.module.css"
import {mergeClasses} from "../../../utils/classes";

const ImagesField = ({imagesArray, ...props}) => {
    console.log(imagesArray)
    return (
        <div className={classes.wrapper}>
            <Image className={mergeClasses([classes.image, classes.mainImage])} strictClass={false}
                imageProps={imagesArray[0]}
            />
            <div className={classes.imagesWrapper}>
                <Image className={mergeClasses([classes.smallImage, classes.image])}
                    imageProps={imagesArray[1]}
                />
                <Image className={mergeClasses([classes.smallImage, classes.image])}

                       imageProps={imagesArray[2]}
                />
                <Image className={mergeClasses([classes.smallImage, classes.image])}

                       imageProps={imagesArray[3]}
                />
                <Image className={mergeClasses([classes.smallImage, classes.image])}

                       imageProps={imagesArray[4]}
                />
            </div>
        </div>
    );
};

export default ImagesField;