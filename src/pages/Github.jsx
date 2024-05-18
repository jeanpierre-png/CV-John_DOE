import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Github() {

    const url = "https://api.github.com/users/github-john-doe";

    const [infosProfile, setInfosProfile] = useState(null);

    useEffect(() => {

        const fetchInfosProfile = async () => {
            try {
                const response = await axios.get(url);
                setInfosProfile(response.data); // Utilisation de response.data pour accèder aux données du profil
            } catch (error) {
                console.error('Error fetching profile data:', error);
            }
        };

        fetchInfosProfile();

    }, [url]); // Ajout de url comme dépendance

    // Vérification que infosProfile n'est pas null avant d'accéder à ses propriétés
    if (!infosProfile) return <div className="d-flex justify-content-center align-items-center fs-3">Loading...</div>;

    return (

        <section className="d-flex justify-content-center align-items-center flex-column">

            <h1 className="text-dark">Github User</h1>
            <h2 className="text-dark">{infosProfile.name}</h2>
            <img className="mb-5" src={infosProfile.avatar_url} alt={infosProfile.login} />
            <p>{infosProfile.bio}</p>
            <p>Abonnés: {infosProfile.followers}</p>
            <p>Abonnement: {infosProfile.following}</p>
            <p>Créé le : {infosProfile.created_at}</p>
            <p>Modifié le : {infosProfile.updated_at}</p>
            <p>URL Repositories : <a href={infosProfile.repos_url}>{infosProfile.repos_url}</a></p>

        </section>
    );
};
