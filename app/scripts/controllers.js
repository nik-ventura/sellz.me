
// Home Ctrl
app.controller('HomeCtrl',['$scope', 'PostsFactory', 'MyPostsFactory', function($scope, PostsFactory, MyPostsFactory){
    PostsFactory.getPosts(function(data) {
        $scope.posts = data
    });
    $scope.getMyPosts = function() {
        MyPostsFactory. getPosts(function(data){
            $scope.posts = data;
        })
    };
    $scope.getAllPosts = function() {
        PostsFactory.getPosts(function(data) {
            $scope.posts = data
        });
    };
    $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {

        $('.post-gallery').click(function(){
            $(this).parents('.post').toggleClass('show-this');
        });
        $('.post-desc').click(function(){
            $(this).parents('.post').toggleClass('show-this');
        });
        $('.set-gallery-view').click(function(){
            $('.content').addClass('gallery-view');
        });
        $('.set-list-view').click(function(){
            $('.content').removeClass('gallery-view');
        });
        $('.post-controls-content li a').click(function(){
            $('.post-controls-content li').removeClass('active');
            $(this).parents('li').addClass('active');
        });
        $('.post-controls-layout li a').click(function(){
            $('.post-controls-layout li').removeClass('active');
            $(this).parents('li').addClass('active');
        });
        $('.post-watch').click(function(){
            $(this).toggleClass('active');
            $(this).find('i').toggleClass('icon-add-circle-outline icon-check')
        });
        $('.post-actions-report span').click(function(){
            $(this).next('ul').toggleClass('active');
        });
        $('.post-actions-report ul').blur(function(){
            $(this).removeClass('active');
        });
        $('.post-owner').click(function(){
            $('.messanger').addClass('active')
        });

        function isEmpty( el ){
            return !$.trim(el.html())
        }

        $('.post').each(function(){
            if($(".post-gallery").html().trim()) {
                console.log('Ok');
            }
            else {
                console.log('NoOk')
            }
        });

        $('.header ul li a').click(function(){
            $('.header ul li').removeClass('active');
            $(this).parents('li').addClass('active');
        });
        $('#search-menu').click(function(){
            $('.inbox-menu').removeClass('active ');
            $('.activity-menu').removeClass('active ');
            $('.search-menu').addClass('active ');
        });
        $('#inbox-menu').click(function(){
            $('.search-menu').removeClass('active ');
            $('.activity-menu').removeClass('active ');
            $('.inbox-menu').addClass('active ');
        });
        $('#activity-menu').click(function(){
            $('.inbox-menu').removeClass('active ');
            $('.search-menu').removeClass('active ');
            $('.activity-menu').addClass('active ');
        });
        $('.messanger .close-btn').click(function(){
            $(this).parents('.messanger').removeClass('active')
        });
        $('.inbox-menu .comment').click(function(){
            $('.messanger').addClass('active')
        });
        $('.comment .remove').click(function(){
            $(this).parents('.comment').hide();
        });
        $('.language li a').click(function(){
            $('.language li').removeClass('active ');
            $(this).parents('li').addClass('active ');
        });
        $('textarea').elastic();

        $('.tag-cloud ul li a').click(function(){
            var getTag = $(this).clone().wrap('<div>').parent().html();
            console.log(getTag);
            $('.search-box .search-textarea').append( getTag + ' ');
            $('.search-box .search-textarea .result-controls').addClass('active');
            $('.search-box .search-textarea span').removeClass('active');
            $('.search-textarea .tag').click(function(){
                $(this).hide();
            })

        });
        $('.search-box .remove-all').click(function(){
            $('.search-box .search-textarea .tag').hide();
            $(this).parents('.result-controls').removeClass('active');
            $('.search-box .search-textarea span').addClass('active');
        });
        $('.post-actions-report ul li a').click(function(){
            $(this).parents('.post').hide();
        });
        $('.post-tools .remove-post').click(function(){
            $(this).parents('.post').hide();
        });
        $('.show-favorites').click(function(){
            var seedTags = '<a href="" class="tag groups ng-binding">@euro-club</a> <a href="" class="tag groups ng-binding">@flew-market</a>'
            $('.search-textarea .tag').hide();
            $('.search-textarea span').removeClass('active');
            $('.search-textarea .result-controls').addClass('active');
            $('.search-textarea').append(seedTags);
            $('.search-textarea .tag').click(function(){
                $(this).hide();
            })
        });
        $('.dropdown').click(function(){
            $(this).find('.dropdown-ui').addClass('active')
        });
        $('.chosen-container .chosen-results li').click(function(){
            alert('Hey');
             $('.dropdown-ui').removeClass('active')
        })
    });
}]);

app.controller('TranslateController', ["$translate", "$scope", function($translate, $scope) {
    $scope.changeLanguage = function (langKey) {
        $translate.use(langKey);
    };
}]);

// Controller for populating available designs
app.controller('DesignCtrl', ['$scope', 'DesignFactory', 'SliderFactory', function($scope, DesignFactory,SliderFactory) {
    $scope.designs = DesignFactory.designs;
    $scope.slidesPool = SliderFactory.slides;
}]);

// Controller for contact form
app.controller('ContactCtrl', ['$scope', function($scope){
    $scope.submitted = false;
    $scope.submitForm = function() {
        if ($scope.emailForm.$valid) {
            // Submit as normal
        } else {
            $scope.emailForm.submitted = true;
        }
    }
}]);
