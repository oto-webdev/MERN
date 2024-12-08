import axios from "axios"

const loginUser = async (email, password) => {
    if (!email || !password) {
        throw new Error("All fields are required");
    }

    try {
        const res = await axios.post("http://localhost:4000/api/users/login", { email, password });
        const data = res.data;

        localStorage.setItem("token", data.token);
        localStorage.setItem("email", data.email);

        return data;
    } catch (err) {
        throw new Error(err.response?.data?.message || "Login failed");
    }
};

export {
    loginUser
}