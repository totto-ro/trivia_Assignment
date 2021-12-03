console.log("hello");


function getQuery( event ){

    new Promise((resolve, reject) => {
        $.get({
            url: `https://opentdb.com/api.php?amount=10&category=11`,
            success: resolve,
            error: reject,
        });
        })
        .then(displayData)
        .catch(error => {
            
            console.log(`Something went wrong...`);
        });

    function displayData( data ) {
        console.log( data.results );
        let questions = document.querySelector('.triviaInfo')
        for(let value in data.results){
            console.log( data.results[value].question);
            questions.innerHTML += `
            <div class="question">
                <h2>
                    ${data.results[value].question}
                </h2>
                
                <li> <strong> Correct answer: </strong> ${data.results[value].correct_answer}</li>
            `;
            
        }
        let answers = document.querySelectorAll('.answer')
        for(let value in data.results){
            answers.innerHTML += `
                <li>${data.results[value].correct_answer}</li>
            `;

        }
        
    }
}

let querybutton = document.querySelector('.button')
querybutton.addEventListener('click', getQuery);

