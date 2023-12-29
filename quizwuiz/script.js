//let player = document.getElementById('player').value;

const nextPage = () => {
    let player = document.getElementById('player').value;
    
    localStorage.setItem('name',player);
    if(localStorage.getItem('leaderboard')==null)
    {
        const arr1 = []
        arr2 = JSON.stringify(arr1)
        localStorage.setItem('leaderboard',arr2)
    }
    window.location.href = './quiz.html';
}




