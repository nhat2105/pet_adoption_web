import axios from "axios";

const base_url = "http://localhost:5000";

const fetchPetsData = async(petType) => {
    try{
        const response = await axios.get(`${base_url}`/`${petType}`)
        return response.data;
    } catch (error) {
        console.error("ERROR fetching pets data: ", error)
        throw error
    }
}

export { fetchPetsData };