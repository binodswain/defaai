export async function getAccountDetailsAPI(params) {
    try {
        // make api call
        return {
            profile: {
                f_name: "Binod",
                l_name: "Swain",
                email: "me@binodswain.dev",
                profile_pic:
                    "https://avatars.githubusercontent.com/u/21197235?v=4",
            },
            plan: "team",
        };
    } catch (error) {}
}

export async function saveAccountDetails(data) {
    try {
        // make post call
        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function updatePlanDetails(data) {
    try {
        // make post call
        return data;
    } catch (error) {
        console.error(error);
    }
}
export async function getBillingDetailsAPI(params) {
    try {
        // make api call
        return [
            {
                id: (Math.random() * 10000000000000000).toFixed(0),
                date: "2020-01-01",
                amount: "100",
                invoice: "invoice-1",
            },
            {
                id: (Math.random() * 10000000000000000).toFixed(0),
                date: "2020-01-02",
                amount: "100",
                invoice: "invoice-1",
            },
            {
                id: (Math.random() * 10000000000000000).toFixed(0),
                date: "2020-01-03",
                amount: "100",
                invoice: "invoice-1",
            },
            {
                id: (Math.random() * 10000000000000000).toFixed(0),
                date: "2020-01-04",
                amount: "100",
                invoice: "invoice-1",
            },
            {
                id: (Math.random() * 10000000000000000).toFixed(0),
                date: "2020-01-05",
                amount: "100",
                invoice: "invoice-1",
            },
            {
                id: (Math.random() * 10000000000000000).toFixed(0),
                date: "2020-01-06",
                amount: "100",
                invoice: "invoice-1",
            },
        ];
    } catch (error) {}
}
