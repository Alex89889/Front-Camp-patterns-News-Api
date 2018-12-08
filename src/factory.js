import News from "./news.js";

export default class FactoryReguest {
	
	constructor(typeOfRequest, url) {
		//proxy
		let paramReguest = {};

		let proxy = new Proxy(paramReguest, {
			get(target, prop) {
			console.log(`Чтение ${prop}`);
			return target[prop];
		},
		set(target, prop, value) {
			console.log(`Запись ${prop} ${value}`);
			target[prop] = value;
			return true;
		}
		});
		proxy.typeOfRequest = typeOfRequest;
		proxy.url = url;
		
		//factory
		this.req;
        if (typeOfRequest === "request") {
            this.req = new Request(url);
			this.typeOfRequest = "request";
			this.newRequest();
        }
		else if (typeOfRequest === "get"){
			this.req = new XMLHttpRequest();
			this.typeOfRequest = "get";
			this.newGet();
		}
		else if (typeOfRequest === "post"){
			this.req = new XMLHttpRequest();
			this.typeOfRequest = "post";
			this.newPost();
		}
	}
	
	
			
	
	newRequest(){
		
		let  source = new News(this.typeOfRequest, this.req);
		source.printSource();

		let news = new News(this.typeOfRequest,this.req);
		news.printNews();
	}
	
	newGet(){}

	newPost(){}
};






	

