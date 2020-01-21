const name = "mason";
const age = 104;
console.log(`my name is ${name}, and I\'m ${age} years old`);
function test(a, b){
    return a + b;
}
(a,b) => {
    return a - b;
}
let array = [0,1,2,3];
array.forEach(e => {
    e = e*2;
})
console.log(array);

const calendar = {
    currentDay: 6,
    nextDay: function() {
        setTimeout(function(){
            this.currentDay += 1;
            console.log(this.currentDay);
        });
    }
};
calendar.nextDay();
const calendar2 = {
    currentDay: 6,
    nextDay: function() {
        var self = this;
        setTimeout(function(){
            self.currentDay += 1;
            console.log(self.currentDay);
        });
    }
};
calendar2.nextDay();