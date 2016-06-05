/// <reference path="../../chutzpahsample/scripts/app/courtgroups.js" />

describe("Court Groups tests", function () {
    var cg = new CourtGroups("fred", "flintstone");
    it("returns full name", function () {
        var fullName = cg.FullName();
        expect(fullName).toEqual("fred flintstone");
    });
});