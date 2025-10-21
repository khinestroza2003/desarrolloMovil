const API_BASE_URL = 'https://thesimpsonsapi.com/api';
const IMAGE_BASE_URL = 'https://cdn.thesimpsonsapi.com/500';

const handleResponse = async (response) => {
    if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        const message = errorData?.message || 'Error al obtener datos de la API';
        throw new Error(message);
    }
    return response.json();
}

export const fetchCharacters = async (page = 1) => {
   const url = `${API_BASE_URL}/characters?page=${page}`;
    const response = await fetch(url);
    return handleResponse(response);
}

export const getCharacterImageUrl = (portraitPath) => {
    if (!portraitPath) return null;
    
    return `${IMAGE_BASE_URL}${portraitPath}`;
}