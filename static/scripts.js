addDeleteButtonsEventListener();

const form = document.getElementById('url-form');
form.addEventListener('submit', submitHandler);

const randomChoiceButton = document.getElementById('random-choice-btn');
randomChoiceButton.addEventListener('click', randomChoiceHandler);

function submitHandler(e) {
    e.preventDefault();
    fetch(form.action, {method: 'POST', body: new FormData(form)})
    .then(response=>response.json())
    .then(data=>{
        if (data.message === 'success') {
            form.reset();
            
            var movieList = document.getElementById('movie-list');
            var moviesString = '';
            data.movie_list.forEach(function(movie) {
                moviesString += `<li class="list-group-item" id="${movie.pk}">
                                    <div class="row">
                                        <div class="col-2">
                                            <button type="button" class="btn btn-danger me-3">Delete</button>
                                        </div>
                                        <div class="col-10 d-flex align-items-center" name="movie-title">
                                            <h4 m-auto>${movie.fields.title}</h4>
                                        </div>
                                    </div>
                                </li> `
            });
            movieList.innerHTML = moviesString;
            addDeleteButtonsEventListener();
        }
    })
}

function addDeleteButtonsEventListener() {
    const buttons = document.querySelectorAll(".btn-danger");
    
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            fetch('/', {method: 'POST', headers: {'X-CSRFToken': getCookie('csrftoken'), 'Content-Type': 'application/json',
            'Accept': 'application/json', 'delete-movie': this.parentElement.parentElement.parentElement.getAttribute('id')} })
            .then(response=>response.json())
            .then(data=>{
                if (data.message === 'success') {
                    this.parentElement.parentElement.parentElement.remove();
                    }
                })
        });
    });
}

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function randomChoiceHandler() {
    var movies = document.getElementsByName('movie-title');
    if (movies.length !== 0) {
        var randomMovie = movies[Math.floor(Math.random()*movies.length)];
        randomMovie = randomMovie.textContent.trim();
        var randChoiceOutput = document.getElementById('random-choice-output');
        if (randChoiceOutput.children.length > 0) {
            randChoiceOutput.lastElementChild.remove();
        }
        randChoiceOutput.innerHTML = '<h4 class="m-auto">' + randomMovie + '</h4>';
    }
}