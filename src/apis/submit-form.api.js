

const API_ENDPOINT = "https://sheet.best/api/sheets/214571f8-81e9-45b3-b232-1433f9c1f48f"

export const submitFormAPI = (details) => {
    return fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "3VLgEvG6Ky@kx!wN__EpeevvSrX5QqQt2SSx!joGLH8sBrFiGBnspeeVNaaKdFib"
        },
        body: JSON.stringify({ ...details, createdAt: new Date().toLocaleString() })
    })
}