module.exports = () => {
    const data = {
        friends: [],
    }

    for (let index = 0; index < 500; index++) {
        data.friends.push({
            id: index +1,
            likes: (Math.random(index)*100).toFixed(0),
            name: `Amigo ${index + 1}`
        })
        
    }

    return data;
}