import React from "react";
import styles from './Card.module.css';

export default function Card({name, book, image, id}) {


    return(
        <div className = {styles.card}>

            <div className= {styles["card-header"]}>
                <img src={image.url} alt={image.alt} className= {styles["card-img"]}></img>
            </div>

            <div>
                <h3>{name}</h3>
                <p>{book}</p>
            </div>
        </div>
    )
}