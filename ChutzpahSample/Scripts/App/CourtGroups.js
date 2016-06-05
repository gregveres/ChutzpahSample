var CourtGroups = (function () {
    function CourtGroups(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    CourtGroups.prototype.FullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return CourtGroups;
}());
