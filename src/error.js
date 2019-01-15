export const Logging = new class {

    constructor() {
        
    }

    onerror(errorMessage, url, line) {
        try {
            if (typeof(url) === "undefined") {
                url = "";
            }
            if (typeof(line) === "undefined") {
                line = "";
            }

            // truncate error message if necessary
            if (errorMessage.length > 300) {
                errorMessage = errorMessage.slice(0,300) + "...";
            }

            // URI encoding
            errorMessage = errorMessage.replace(/&/g, "%26").replace(/ /g, "+");
            this.message(errorMessage,url,line);

            
        }
        catch (e) {}
    }
	
	message(errorMessage,url,line) {
		
		// do we have an existing instance?
		if (typeof message.instance === 'object') {
			return message.instance;
		}
		var message = [
            'Message: ' + errorMessage,
            'URL: ' + url,
            'Line: ' + line
        ].join(' - ');

        alert(message);
				// cache
		message.instance = this;
		return this;
	}

}

export default Logging;