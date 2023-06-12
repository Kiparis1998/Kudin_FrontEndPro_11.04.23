const postBlock = document.querySelector('.block-wrapper');
const title = document.querySelector('.title');
const text = document.querySelector('.text');
const commentButton = document.querySelector('.button-comments');
const input = document.querySelector('#input');
const searchButton = document.querySelector('.button-search');
const commentBlock = document.querySelector('.comments');
const warningMessage = document.querySelector('.warning');

const POST_OPTION = 'posts';
const COMMENT_OPTION = 'comments';
const getData = (option, id = '') => {
    return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/${option}/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response has had failure or it has been the incorrect input!');
                }
                return response.json();
            })
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

searchButton.addEventListener('click',  async () => {
    const inputData = input.value.split(' ').join('');
    try {
        const dataResult = await getData(POST_OPTION, inputData);
        if (postBlock.style.display !== 'block') postBlock.style.display = 'block';
        title.innerHTML = dataResult.title;
        text.innerHTML = dataResult.body;
        if (commentBlock.value) commentBlock.value = '';
    } catch (error) {
        warningMessage.innerText = error.message;
        input.style.color = 'red';
        input.style.borderColor = 'red';
        setTimeout(() => {
            warningMessage.innerText = '';
            input.style.color = 'black';
            input.style.borderColor = 'grey';
        }, 2000);
    }
});

commentButton.addEventListener('click', async () => {
    const inputData = +input.value.split(' ').join('');
    const dataResult = await getData(COMMENT_OPTION);
    if (commentBlock.style.display !== 'block') commentBlock.style.display = 'block';
    const filteredData = dataResult.filter(({ postId }) => postId === inputData);
    filteredData.forEach(({ body }) => {
        commentBlock.value += body;
    });
});
