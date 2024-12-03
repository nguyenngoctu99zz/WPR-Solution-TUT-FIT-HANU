(function(){
    window.addEventListener('load', init)
    let LINKS = [
        'images/3H.png',
        'images/AS.png',
        'images/2H.png',
        'images/4H.png',
        'images/AS.png'
    ]


    function init(){
        for (let i = 0; i < LINKS.length; i++){
            let img = document.createElement("img");
            img.src = LINKS[i]


            let cardBoard = document.getElementById('card_container')
            cardBoard.appendChild(img)


            img.addEventListener('click', function(){
                let charged = img.classList.contains('enlarged') /// Bé

                let images =  document.querySelectorAll('img')

                images.forEach(function(image){     /// To --> Xoá to cho bé lại
                    image.classList.remove('enlarged')
                })
                if (!charged){
                    img.classList.add('enlarged')  /// To thằng được click
                }
        
            })
        }
    }

})()