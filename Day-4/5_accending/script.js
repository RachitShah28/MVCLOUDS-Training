
function ans(){


function groupConsecutiveAscendingNumbers(input) {
  const numbers = input.split('').map(Number);
  const result = [];
  let currentGroup = [numbers[0]];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] === numbers[i - 1] + 1) {
      currentGroup.push(numbers[i]);
    } else {
      result.push(currentGroup);
      currentGroup = [numbers[i]];
    }
  }

  result.push(currentGroup);
  return result;
}

const inputString = String(document.getElementById("str1").value);
console.log(inputString);
let ans = document.getElementById("ans1");
ans.innerHTML = ""
var groups = groupConsecutiveAscendingNumbers(inputString);
groups.sort();
for (let i = 0; i < groups.length; i++) {
  
  ans.innerHTML += groups[i].join("") + "&nbsp;";
  console.log(groups[i].join(""));
  
}
// console.log(groups);
}
