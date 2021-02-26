let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let domains = ['big', 'er', 'net', 'he', 'coon'];

let totalDomains = 0;
for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
            for (let l = 0; l < domains.length; l++) {

                let domainLength = domains[l].length;
                //*********** with comments first solution */
                //noun[k]
                //let lastCharFromNoun = noun[k].slice(0, -domainLength);

                let fullWord = pronoun[i] + adj[j] + noun[k];

                if(fullWord.includes(domains[l])){
                    //let newNounLength = noun.length - domainLength;
                    //let newNoun = noun[k].slice(0, -domainLength); 
                    
                    console.log(fullWord.replace(domains[l], '') + '.' + domains[l]);
                    //console.log(pronoun[i] + adj[j] + newNoun + '.' + domains[l]);

                }else{
                    console.log(pronoun[i] + adj[j] + noun[k] + '.' + domains[l]);
                }       
                totalDomains++;
            }
        }
    }
}
console.log('Total domain combinations: ' + totalDomains)