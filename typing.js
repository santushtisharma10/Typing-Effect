function TypingEffect(query, wordList, wait) {
   
    wait = parseInt(wait)
    let text = "";
    let index = 0;
    let delVal = false;
    let speed = 500;
    
    type();
    function type() {
        
        let curIndex = index%wordList.length;
        let word = wordList[curIndex];
        console.log(curIndex , word);
        if(delVal) {

            text = word.substring(0, text.length-1);
        }
        else {

            text = word.substring(0, text.length+1);
        }
        //console.log(word);
        query.innerHTML = text;
        speed = 500
        if(delVal) {

            speed /= 2;
        }

        if(!delVal && text === word) {

            delVal = true;
            speed = wait;
        }
        else if(delVal && text === "") {

            delVal = false;
            index++;
        }

        setTimeout(()=>type(), speed);
    }
   
}

init()
function init() {

    var txt = document.querySelector('.text-effect');
    const wordList = JSON.parse(txt.getAttribute('data-words'));
    const wait = txt.getAttribute('data-wait');
    console.log(wait);
    console.log(txt, wordList)
    TypingEffect(txt, wordList, wait)
}

