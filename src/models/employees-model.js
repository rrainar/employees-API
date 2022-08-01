const employees = [
  { id:0, name:"Kaarel", title:"Engineer", tribe_id:1, office_id:1 },
  { id:1, name:"Erik", title:"Intern", tribe_id:2, office_id:1 },
  { id:2, name:"Jaanus", title:"Engineer", tribe_id:0, office_id:1 },
  { id:3, name:"Elizabeth", title:"HR", tribe_id:3, office_id:2 },
  { id:4, name:"Tauri", title:"Intern", tribe_id:1, office_id:3 },
  { id:5, name:"Jane", title:"Marketing Specialist", tribe_id:2, office_id:0 },
  { id:6, name:"Mary", title:"Intern", tribe_id:1, office_id:0 }

];

const tribes = [
  { id:0, name:"Internsellar", department:"Engineer" },
  { id:1, name:"Ghost Busters", department:"Engineer" },
  { id:2, name:"THE BOYS", department:"Engineer" },
  { id:3, name:"GIRL POWER", department:"Engineer" }

];

const offices = [
  { id:0, name:"Pipedrive Tallinn", aadress:"Mustamae tee 3" },
  { id:1, name:"Pipedrive Tartu", address:"Tallinna tn 3" },
  { id:2, name:"Pipedrive Lisbon", address:"Porto 4c" },
  { id:3, name:"Pipedrive Berlin", address:"Klostrabe 5" }

];


module.exports = { employees, tribes, offices };