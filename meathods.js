//use of meathods to changing the properties of object
let resturant = {
    name: 'Govinda',
    totalCapicity : 60,
    guestCount: 0,
    checkAvailability: function (newGuest){
        let seatsLeft = this.totalCapicity - this.guestCount
        return newGuest <= seatsLeft
    },
    addGuestCount: function(newGuest){
        if(resturant.checkAvailability(newGuest) == true){
            this.guestCount = this.guestCount + newGuest
            console.log(`new ${newGuest} added. total ${this.guestCount} guests`)
        }
        else{
            console.log('Sorry, No place Available')
        }

    },
    removeCount: function(goodByeGuest){
        this.guestCount = this.guestCount - goodByeGuest
        console.log(`${goodByeGuest} went. total ${this.guestCount} guests in restaurent`)

    }

}


resturant.addGuestCount(15)
resturant.addGuestCount(10)
resturant.removeCount(7)

