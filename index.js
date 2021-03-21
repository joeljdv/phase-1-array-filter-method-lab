// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(arr,name){
    let list=[];
    for(let i=0;i <arr.length;i++){
        if(arr[i].toLowerCase()===name.toLowerCase()){
            list.push(arr[i])
        }
    }
    return list;
}

function fuzzyMatch(arra,name){
    let fuzzy=[];
    for(let i=0;i<arra.length;i++){
        if(arra[i].charAt(0)===name.charAt(0)){
            fuzzy.push(arra[i])
        }
    }
    return fuzzy;
}


const driver = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

  function matchName(arr,name){
    let match=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i].name===name){
            match.push(arr[i])
        }
    }
    return match;
  }