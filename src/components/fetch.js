// fetch('https://api.github.com/users/chriscoyier/repos')
// .then(response => response.json())
// .then(data => {
//     console.log(data);

// });

export const fetchData = () => {
    const data = {
        title: 'name',
        body: 'info',
        userId: 1
    }
   return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json());
    // .then((json) => console.log(json));
};
