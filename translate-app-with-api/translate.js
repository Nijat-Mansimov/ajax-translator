function Translate(word, language){
    this.apikey = "Your Yandex API key"
    this.word = word;
    this.language = language;

    this.xhr = new XMLHttpRequest();

}


Translate.prototype.translateWord = function(callback){
    const endpoint = `API link`
    this.xhr.open("GET", endpoint);

    this.xhr.onload = () => {
        if (this.xhr.status === 200){
            const json = JSON.parse(this.xhr.responseText);
            const text = json.text[0]
            callback(null, text);
        }
        else{
            callback("Error", null);
        }
    }

    this.xhr.send();
};

Translate.prototype.changeParameters = function(newWord, newLanguage){
    this.word = newWord;
    this.language = newLanguage;
}