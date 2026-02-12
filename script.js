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

ScSystem.prototype.toggleUpgrade = function(id) {
    if (this.members[id]) {
        this.members[id].isUpgrade = !this.members[id].isUpgrade;
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

function Member(name, telno, email, grp, sports) {
    this.name = name;
    this.telno = telno;
    this.email = email;
    this.grp = grp;
    this.sports = sports;
    this.isUpgrade = false;
    this.id = null;
};

const app = new ScSystem();

const gridDisplay = document.getElementById(`display`);

function showToast() {
    const toast = document.getElementById("toast");
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
};

function handleAddMember() {
    const name = document.getElementById(`name`);
    const telno = document.getElementById(`telno`);
    const email = document.getElementById(`email`);
    const grp = document.getElementById(`grp`);
    const sports = document.getElementById(`sports`);

    if (name ==="") {
    alert("name is required ^-^");
    return;
};

const toMember = new Member(
    name.value,
    telno.value,
    email.value, 
    grp.value,
    sports.value
);

app.addMember(toMember);


};



