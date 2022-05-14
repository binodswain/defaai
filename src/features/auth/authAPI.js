export async function signupUserAPI({ email, password, f_name }) {
    // const response = await fetch("/api/signup", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ email, password, f_name }),
    // }).then((res) => res.json());
    return "Account created successfully";
}

export async function loginUserAPI({ email, password, f_name }) {
    // const response = await fetch("/api/login", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ email, password }),
    // }).then((res) => res.json());

    // const {
    //     access_token = "111111111111111111111111111111111",
    //     refresh_token = "222222222222222222222222222222222",
    // } = response;

    return { access_token: "11111", refresh_token: "22222" };
}
