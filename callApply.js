const personInfo = {
    firstname: 'Kalam',
    lastname: 'Salam',
    wages: 30000,
    fullname: function(){
        //console.log(this.firstname, this.lastname);
        return this.lastname + ' ' + this.firstname;
    },
    email: 'abc@email.com',
    getBonuses: function(abc){
        this.wages = this.wages + this.wages * abc;
        return this.wages;
    }
}
//console.log(personInfo.firstname);
console.log(personInfo.fullname());
console.log(personInfo.getBonuses(0.15));