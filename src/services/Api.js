
const BASE_URL = "https://672f8ed266e42ceaf15e12c4.mockapi.io/api/v1/";



export async function registerUser(userData) {
    const response = await fetch(`${BASE_URL}/users`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(userData),
    });
    return response;
}

export async function loginUser(userData) {
    const response = await fetch(`${BASE_URL}/users?username=${userData.username}&password=${userData.password}`);
    const user = await response.json();
    return user.length > 0 ? user[0] : null;
}