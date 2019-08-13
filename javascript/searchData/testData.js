var testData = {};
	

// The object that the JSON string should represent, can use this as it is if you want.
testData.webSites = [
	{
		id: 1,
		text: 'Web Development',
		image: './images/Search/WebDev.png',
		extra: 'User',
		url:'./Services.php#WebDevelopment'
	},
	{
		id: 2,
		text: 'SEO & Analytics',
		image: './images/Search/SEO.jpg',
		url:'./Services.php#SEO'	
	},
	{
		id: 3,
		text: 'Cloud/SaaS/PaaS',
		image: './images/Search/Cloud.jpg',
		extra: 'Cloud Application Development',
		url:'./Services.php#Cloud'				
	},
	{
		id: 4,
		text: 'Mobile Development',
		image: './images/Search/MobileDev.jpg',
		url:'./Services.php#MobileDevelopment'		
	},
	{
		id: 5,
		text: 'Application Development',
		image: './images/Search/AppDev.jpg',
		url:'./Services.php#AppDevelopment'		
	},
	{
		id: 6,
		text: 'Advanced Development',
		image: './images/Search/AdvDev.jpg',
		url:'./Services.php#AdvDevelopment'				
	}
	
	];
	
// JSON string of the above object, just as an example
testData.webSitesJSON = JSON.stringify(testData.webSites);