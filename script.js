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

ScSystem.prototype.