import React from "react";

const PetCard = ({pet}) =>{
    return(
        <div className="pet-card">
            <h1>Name: {pet.name}</h1>
            <h1>Type: {pet.type}</h1>
            <img src={pet.imgUrl} alt="pet-img"/>
            <h1>Age: {pet.age}</h1>
        </div>
    )
}

export default PetCard