var baleno={
    name:"baleno",
    prize:"10lakh",
    varients:["petrol","diesel"],
    manufactur:"nexa",
    getManu(){
        return this.manufactur
    },
    getVarient(){
        return this.varients

    }

}

var glanza={
    name:"glanza",
    prize:"12lack",
    manufactur:"toyota", 
}
glanza.__proto__=baleno
console.log(glanza.getManu());
console.log(glanza.getVarient());
