export const signIn = async ({ password, email }) => {
    const response = await fetch("http://localhost:4000/users/signin", {
        method: "POST",
        body: JSON.stringify({ password, email }, null, 2),
        headers: {
            "Content-Type": "application/json",
            Accept: "*/*",
        },
        mode: "cors",
    });
    const json = await response.json();
    if (!json.success) {
        throw json.message;
    }
    return json;
};
