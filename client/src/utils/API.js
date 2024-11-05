// route to get logged in user's info (needs the token)
export const getMe = (token) => {
    return fetch('/api/users/me', {
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
        },
    });
};

export const createUser = async (userData) => {
    try {
        const response = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        const data = await response.json();
        if (!response.ok){
            throw new Error("Signup failed, please try again.");
        }
        return data
    } catch(err){
        console.log(err);
        
    }
};

export const loginUser = (userData) => {
    return fetch('/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
};

export const postItem = (itemData) => {
    return fetch('/api/items/post-items', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(itemData)
    })

}

export const getAllUserItems = async () => { // Change to getAllUserItems
    const user = JSON.parse(localStorage.getItem('user'));

    const data = await fetch(`/api/items/${user._id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    return data;
}

export const getAllItems = async () => {
    const data = await fetch('/api/items', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return data;
}

export const removeItem = async () => {
    const item = window.location.pathname.split('/');
    console.log(item[2]);

    const data = await fetch(`/api/items/${item._id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    })
}