const todos = [
  { title: "Study JavaScript", completed: true },
  { title: "Build a project", completed: false },
  { title: "Read documentation", completed: false },
  { title: "Practice coding", completed: true },
];

function todoAnalyzer(arr){
  const total = arr.length;
  let completed = 0;
  let pending = 0;
  let pendingTitles = [];

  for(let i=0; i< arr.length;i++){
    if(arr[i].completed){
      completed++;
    } else {
      pending++;
      pendingTitles.push(arr[i].title);
    }
  }
  return {
    total,
    completed,
    pending,
    pendingTitles
  }
}

console.log(todoAnalyzer(todos));