$(document).ready(init);

function init() 
{
    console.log('ALRIGHT');
    
    text = 'Quizás las personas hacen cosas malas simplemente por tristeza.' + 
        'Me gustaría poder creerlo. ¡Que mundo tan maravilloso sería!'
    miliseconds_between_letters = 50
    
    setTimeout(writeLetter, miliseconds_between_letters)
}

function writeLetter() {
    if (text.length > 0) {
        $('#dialog_box').append(text[0])
        text = text.substring(1);
        
        setTimeout(writeLetter, miliseconds_between_letters)
    }
}
