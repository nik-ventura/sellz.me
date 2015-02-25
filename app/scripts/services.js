

//Factory for getting posts
app.factory('PostsFactory', ['$http', function($http){
    return {
        getPosts: function(data) {
            $http.get('JSON/posts_mixed.json')
                .success(data)
                .error(function(){
                    console.log('Something is wrong with JSON')
                })
        }
    }
}]);


// Factory for getting your own posts
app.factory('MyPostsFactory', ['$http', function($http){
    return {
        getPosts: function(data) {
            $http.get('JSON/posts_own.json')
                .success(data)
                .error(function(){
                    console.log('Something is wrong with JSON')
                })
        }
    }
}]);

// Factory for getting slides for Flexslider
app.factory('SliderFactory', function(){
    var Slides =  {
        slides:[
            'images/promo-img-1.jpg',
            'images/promo-img-2.jpg',
            'images/promo-img-3.jpg',
            'images/promo-img-4.jpg'
        ]
    };
    return Slides;
});

