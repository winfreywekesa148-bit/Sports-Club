function ScSystem(){
    this.members = this.loadFromStorage();
};
ScSystem.prototype.saveToStorage = function() {
    localStorage.setItem(`memberFlowData`, JSON.stringify(this.members));
};
ScSystem.prototype.loadFromStorage = function() {
    const savedData = localStorage.getItem(`memberFlowData`);
    return savedData ? JSON.parse(savedData) : {};
};

function ScSystem() {
    this.members = {};
    this.currentId = 5000;
};

ScSystem.prototype.addMember = function(member) {
    member.id = this.generateId();
    this.members[member.id] = member;
    this.saveToStorage();
};

ScSystem.prototype.toggleUpdate = function(id) {
    if (this.members[id]) {
        this.members[id].isUpdated = !this.members[id].isUpdated;
        this.saveToStorage();
    }
};

ScSystem.prototype.cancelMember = function(id) {
    if (this.members[id]) {
        delete this.members[id];
        this.saveToStorage();
        return true;
    }
    return false;
};