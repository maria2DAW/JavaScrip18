/*
 * 4 Conceptos básicos en POO:
 *  -Clases (Modelo a seguir) - Prototipos
 *  -Objetos (Instancias de las clases)
 *  
 *  -Los obejtos tiene dos facultades:
 *      -Métodos (Acciones)
 *      -Atributos (Características)
 *      
 * 4 Formas de crear objetos en JS
 *  1-Objetos literales
 *  2-Prototipo Object()
 *  3-Función constructora
 *  4-Clases (a partir de ES6 o ES2015 (ES -> ECMAScript)     
 */

(function(){
    'use strict'; //'Fuerza' a aplicar buenas prácticas, como el uso de punto y coma, etc.
    
    //Forma 1 (Objetos literales)
    var movie1 = {
        title: 'Batman v Superman: Dawn of Justice',
        year: 2016,
        genres: 'Action, Adventure, Fantasy',
        poster: 'https://ia.media-imdb.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
        getInfo: function(){
            return '<article><h2>' + this.title + '</h2><img src="'+ this.poster + '" /><p>'+ this.genres + '</p><p>'+ this.year +'</p></article>';
        }
    };
    
    console.log(
            movie1, 
            movie1.title,
            movie1.getInfo()
    );
    
    //Forma 2 (Prototipo Object())
    var movie2 = new Object();
    movie2.title = 'La princesa Mononoke';
    movie2.year = 1997;
    movie2.genres = ' Animation, Adventure, Fantasy';
    movie2.poster = 'https://ia.media-imdb.com/images/M/MV5BMTVlNWM4NTAtNDQxYi00YWU5LWIwM2MtZmVjYWFmODZiODE5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY268_CR4,0,182,268_AL_.jpg';
    
    movie2.getInfo = function() {
        return '<article><h2>' + this.title + '</h2><img src="'+ this.poster + '" /><p>'+ this.genres + '</p><p>'+ this.year +'</p></article>';
    };
    
    console.log(
            movie2, 
            movie2.title,
            movie2.getInfo()
    );
    
    //Forma 3 (Función constructora)
    function Movie(title, year, genres, poster)
    {
        var o = this;
        o.title = title;
        o.year = year;
        o.genres = genres;
        o.poster = poster;
        
        o.getInfo = function()
        {
            return '<article><h2>' + o.title + '</h2><img src="'+ o.poster + '" /><p>'+ o.genres + '</p><p>'+ o.year +'</p></article>';
        };
    }
    
    var movie3 = new Movie('La habitación', 2015, 'Drama', 'https://ia.media-imdb.com/images/M/MV5BMjE4NzgzNzEwMl5BMl5BanBnXkFtZTgwMTMzMDE0NjE@._V1_UX182_CR0,0,182,268_AL_.jpg');
    
    console.log(
            movie3, 
            movie3.title,
            movie3.getInfo()
    );
    
    //Forma 4 (Clases (a partir de ES6 o ES2015 (ES -> ECMAScript))
    class MovieClass
    {
        constructor(title, year, genres, poster)
        {
            this.title = title;
            this.year = year;
            this.genres = genres;
            this.poster = poster;
        }
        
        getInfo()
        {
            return '<article><h2>' + this.title + '</h2><img src="'+ this.poster 
                    + '" /><p>'+ this.genres + '</p><p>'+ this.year +'</p></article>';
        }
    }
    
    console.log(
            movie4, 
            movie4.title,
            movie4.getInfo()
    );
    
    var movie4 = new MovieClass('El castillo ambulante', 
    2004, 'Animation, Adventure, Family', 
    'https://ia.media-imdb.com/images/M/MV5BZTRhY2QwM2UtNWRlNy00ZWQwLTg3MjktZThmNjQ3NTdjN2IxXkEyXkFqcGdeQXVyMzg2MzE2OTE@._V1_UY268_CR5,0,182,268_AL_.jpg');
    
    document.querySelector('.movies').innerHTML = movie1.getInfo() + movie2.getInfo() + movie3.getInfo() + movie4.getInfo();
})();