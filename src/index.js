const init = () => {
    const inputForm = document.querySelector('form')

    inputForm.addEventListener('submit', (e) => {
        e.preventDefault()
        //2 ways to grab the form input
        /*   
          console.log(e.target.children[1].value) */
        const input = document.querySelector("input#searchByID")


        // passes value of the form input into the fetch
        fetch(`http://localhost:3000/movies/${input.value}`)
            .then(resp => resp.json())
            .then(data => {
                const title = document.querySelector('section#movieDetails h4')
                const summary = document.querySelector('section#movieDetails p')
                title.textContent = data.title
                summary.textContent = data.summary
            })
    })
}


document.addEventListener('DOMContentLoaded', init);