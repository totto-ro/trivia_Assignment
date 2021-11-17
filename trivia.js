console.log("hello");


function getQuery( event ){
    $.get( "https://opentdb.com/api.php?amount=10&category=11", displayData )
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
                <div class="answer">
                    <li>${data.results[value].correct_answer}</li>
                </div>
            `;
        }
        
    }
}

let querybutton = document.querySelector('.button')
querybutton.addEventListener('click', getQuery);





