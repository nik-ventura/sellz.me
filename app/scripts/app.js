var app = angular.module('sell-me', [
    'ngAnimate',
    'ui.router',
	'ngSanitize',
    'pascalprecht.translate',
    'localytics.directives'
]);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$translateProvider', function($stateProvider, $urlRouterProvider, $locationProvider, $translateProvider) {
	$stateProvider
		.state('home', {
			url:'/home',
			templateUrl: 'views/home.html',
            controller: 'HomeCtrl'

		});
	$urlRouterProvider.otherwise('home');
    $translateProvider
        .translations('en', {
            BRANDING_SLOGAN:'<em>Super easy<\/em><br> smartsumers network',
            LOCATION: "Location",
            POST: "Post",
            COUNT_LEFT: "chars left",
            NEW_POST_PLACEHOLDER: "Have something to sell or give away?",
            POST_CONTROLS_SHOW_ALL: "Show all",
            POST_CONTROLS_FAVORITES: "Favorites",
            POST_CONTROLS_MY_POSTS: "My Posts",
            POST_CONTROLS_FOLLOW_LIST: "Follow list",
            SEARCH_POSTS_PLACEHOLDER: "Type keywords to begin search",
            POST_ACTION_SHARE: "Share",
            POST_ACTION_REPORT: "Report",
            POST_ACTION_SPAM: "SPAM",
            POST_ACTION_REMOVE: "Remove from my list",
            WRITE_COMMENT_PLACEHOLDER: "Write your comment ...",
            READ_ALL_COMMENTS: "Read all comments",
            GROUPS_YOURS: "Groups of your interest",
            GROUPS_YOURS_PLACEHOLDER: "Click tags below to add groups of your interest",
            GROUPS_TRENDING: "Trending groups",
            GROUPS_DISCOUNTS: "Trending discounts",
            SAVE_FAVORITES: "save to favorites",
            REMOVE_ALL: "remove all",
            FOLLOW_POST: "Follow",
            SHOW_ALL_GROUPS: "Show all groups",
            SHOW_ALL_DISCOUNTS: "Show all discounts",

            TAG_GIVE_AWAY: "give-away",
            TAG_EURO_CLUB: "euro-club",
            TAG_MOMS_KIDS: "moms-kids",
            TAG_ELECTRONICS: "electronics",
            TAG_FLEW_MARKET: "flew-market",
            TAG_HANDSMADE: "handsmade",
            TAG_TICKETS: "tickets-coupons-giftcards",
            TAG_JOB_OFFERS: "job-offers",
            TAG_FURNITURE: "furniture",

            DISCOUNT_COSMETICS: "cosmetics",
            DISCOUNT_GROCERY: "grocery",
            DISCOUNT_AUTO_CLUB: "auto-club",
            DISCOUNT_BEAUTY_SPA: "beauty-spa",
            DISCOUNT_BRAND_HM: "h&m",
            DISCOUNT_BRAND_ZARA: "zara",
            DISCOUNT_BRAND_PRISMA: "prisma"
        })
        .translations('ru', {
            BRANDING_SLOGAN:'<em>Супер простая<\/em><br> сеть для умных потребителей',
            LOCATION: "Местоположение",
            POST: "Добавить",
            COUNT_LEFT: "символов осталось",
            NEW_POST_PLACEHOLDER: "Есть вещи на продажу или готовы что то отдать за спасибо?",
            POST_CONTROLS_SHOW_ALL: "Все",
            POST_CONTROLS_FAVORITES: "Избранное",
            POST_CONTROLS_MY_POSTS: "Мои объявления",
            POST_CONTROLS_FOLLOW_LIST: "Закладки",
            SEARCH_POSTS_PLACEHOLDER: "Для поиска начните вводить ключевые слова ",
            POST_ACTION_SHARE: "Поделиться",
            POST_ACTION_REPORT: "Пожаловаться",
            POST_ACTION_SPAM: "Спам",
            POST_ACTION_REMOVE: "Удалить из результатов поиска",
            WRITE_COMMENT_PLACEHOLDER: "Написать комментарий ...",
            READ_ALL_COMMENTS: "Посмотреть все коментарии",
            GROUPS_YOURS: "Группы интересные вам",
            GROUPS_YOURS_PLACEHOLDER: "Нажмите на таг внизу чтобы добавить интересную вам группу",
            GROUPS_TRENDING: "Популярные группы",
            GROUPS_DISCOUNTS: "Популярные скидки",
            SAVE_FAVORITES: "сохранить в избранное",
            REMOVE_ALL: "удалить все",
            FOLLOW_POST: "В закладки" ,
            SHOW_ALL_GROUPS: "Показать все группы",
            SHOW_ALL_DISCOUNTS: "Показать все скидки",

            TAG_GIVE_AWAY: "отдам-бесплатно",
            TAG_EURO_CLUB: "евро-клуб",
            TAG_MOMS_KIDS: "мамы-и-детки",
            TAG_ELECTRONICS: "электроника",
            TAG_FLEW_MARKET: "блошиный-рынок",
            TAG_HANDSMADE: "своими-руками",
            TAG_TICKETS: "билеты-купоны-подарочные-карты",
            TAG_JOB_OFFERS: "предлагаю-работу",
            TAG_FURNITURE: "мебель",

            DISCOUNT_COSMETICS: "косметика",
            DISCOUNT_GROCERY: "продукты",
            DISCOUNT_AUTO_CLUB: "авто-клуб",
            DISCOUNT_BEAUTY_SPA: "красота-спа",
            DISCOUNT_BRAND_HM: "h&m",
            DISCOUNT_BRAND_ZARA: "zara",
            DISCOUNT_BRAND_PRISMA: "prisma"
        });
    $translateProvider.preferredLanguage('en');
}]);




