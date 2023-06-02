class Guild {
  constructor(name, members, based) {
    this.name = name;
    this.members = members;
    this.based = based;
  }

  displayInfo() {
    return `${this.name} | ${this.members} | ${this.based}`;
  }
}
let guild1 = new Guild(`LOL`, 62, `Martlock`);

class Alliance extends Guild {
  constructor(name, members, based, terri) {
    super(name, members, based);
    this.terri = terri;
  }

  displayAllianceInfo() {
    let arr = [this.name, this.members, this.based, this.terri];
    for (let i = 0; i < arr.length; i++) {
      arr[i];
    }
  }
}

const alliance1 = new Alliance(`SNG`, 3, `Martlock`, 5);

console.log(alliance1.displayAllianceInfo());
