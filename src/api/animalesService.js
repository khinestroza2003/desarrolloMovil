
const BASE_URL = "https://animals-api-45hf.onrender.com/api";

export async function login (username, password){
    try{
      const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    
    const data = await response.json();
    const token =  data.token;
    localStorage.setItem("token",token)

    return data;
    }catch(e){
        console.log("Error logeo:", e,token);
        alert("Error al Logearte",e)
    return null;

    }
}

export async function updateAnimals(id,animalData) {
    try{
         const token =localStorage.getItem("token")
        const response = await fetch(`${BASE_URL}/animals/${id}`,
            {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                 body: JSON.stringify(animalData)
            }
        )
    } catch (e) {
        console.log("Error Actualizar", e);
        alert("Error al actualizar",e)
    return null;
    }

}



export async function getAnimals() {
  try {
    const token =localStorage.getItem("token")
    const response = await fetch(`${BASE_URL}/animals`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });

    const json = await response.json();
    return json.data;
  } catch (e) {
    console.log("Error Al obtener animales", e);
    alert("Error al obtener animales", e)
    return [];
  }
}
export async function createAnimal(animalData) {
  try {
    const token = await getToken();

    const response = await fetch(`${BASE_URL}/animals`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(animalData),
    });

    return await response.json();
  } catch (e) {
    console.log("Error al crear animal:", e);
    alert("Error al crear",e)
    return null;
  }
}
export async function deleteAnimal(id) {
  try {
    const token = await getToken();

    const response = await fetch(`${BASE_URL}/animals/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });

    return await response.json();
  } catch (e) {
    console.log("Error Al borrar:", e);
    alert("Error al borrar",e)
    return null;
  }
}