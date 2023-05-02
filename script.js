function generate(){
    var quotes = {
        "-Douglas Horton" : "'Smile, it's free therapy.'",
        "- Douglas Horton" : "'While seeking revenge, dig two graves - one for yourself.'",
        "- Aristotle" : "'The law is reason, free from passion.'",
        "- Aristotle" : "'There is no great genius without some touch of madness.'"
    }

    var authors = Object.keys(quotes);
    var author = authors[Math.floor(Math.random() * 
    authors.length)];

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = 
    quote;
    document.getElementById("author").innerHTML = 
    author;

}