import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPetsData } from "../api/pets.api";
import PetCard from "../components/PetCard";

const PetListing = () => {
    const { petType } = useParams();
    const [pets, setPets] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const petsData = await fetchPetsData();
                console.log("FETCHED: ", petsData)
                setPets(petsData);  // Store the data in the state
            } catch (err) {
                console.log(err);  // Store any error in the state
            } 
        };

        fetchData();
    }, [petType]);  // Re-run the effect whenever the petType changes

    return (
        <div className="pets-page-container">
            {pets.map((pet) => (
                <PetCard pet={pet} />
            ))}
        </div>
    );
};

export default PetListing;
