
export class Url {
    url: any;
   
    constructor(url: any) {
        this.url = url;
    }

    parse() {
        let params:any={};
  
        let loc = String(this.url);
        // console.log(loc);
        if (loc.indexOf("?") > 0)
            loc = loc.substr(loc.indexOf('?') + 1);
        else
            loc = "";
        let pieces = loc.split('&');
         
        for (let i = 0; i < pieces.length; i += 1) {
            
            let keyVal = pieces[i].split('=');

             params[keyVal[0]] = decodeURIComponent(keyVal[1]);
            
        }
        return params;
    }
}

