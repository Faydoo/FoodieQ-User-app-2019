class Booking {
    constructor(id, vendor, noOfPeople, date, startTime, endTime, name, telnum, mailaddress, comments) {
        this.id          = id;
        this.vendor      = vendor;
        this.noOfPeople  = noOfPeople;
        this.date        = date;
        this.startTime   = startTime;
        this.endTime     = endTime;
        this.name        = name;
        this.telnum      = telnum;
        this.mailaddress = mailaddress;
        this.comments    = comments;
    }
}

export default Availability;