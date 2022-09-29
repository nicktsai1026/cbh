const Facilities = require('./data/facilities.json');
const agents = require('./data/agents.json');
const shifts = require('./data/shifts.json');

const getShiftsByFacility = (data) => {
    if (!data.facility_id) return undefined;
    let facilityId = data.facility_id;
    return Facilities.find(facility => facility.id = facilityId);
}

const generateReport = () => {

}

module.exports = {
    getShiftsByFacility, 
    generateReport
}