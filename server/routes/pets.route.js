const express = require("express");
const router = express.Router();
const query = require('../api/pets.queries')

// Listings of all from the same type
router.get("/:petType", async(req, res) => {
    const petType = req.params.petType;

    try{
        const allPets = await query.getAllPetsOf(petType)
    } catch (error){
        res.status(500).json({error: "Internal Server Error"})
    }
})

module.exports = router;