(function(){
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	app.controller('PanelController', function(){
		this.tab = 1;

		this.selectTab = function(setTab) {
			this.tab = setTab;
		};

		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});

	var gems = [
		{
			name: 'Dodecahedron',
			price: 2.95,
			description: 'This is an amazing product that is really shit!',
			canPurchase: true,
			images: [
				{
					full: 'img/logo.png',
					thumb: 'img/logo.png'
				}
			]
		},
		{
			name: 'Another Product',
			price: 100.99,
			description: 'Another aweful product...!',
			canPurchase: false,
			images: [
				{
					full: 'img/logo.png',
					thumb: 'img/logo.png'
				}
			]
		}
	];

})();
