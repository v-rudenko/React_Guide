const activeGoalElement = document.querySelector('#active-goal h2');
const goalListElement = document.querySelector('#all-goals ul');

const goals = [
  {
    id: 'g1',
    text: 'Learn all about JavaScript!'
  },
  {
    id: 'g2',
    text: 'Understand JavaScript function execution.'
  }
];

function setAsActiveHandler(goalId, event) {
  console.log(event);
  const selectedGoal = goals.find(g => g.id === goalId);
  activeGoalElement.textContent = selectedGoal.text;
}

function init() {
  for (const goal of goals) {
    const goalElement = document.createElement('li');
    goalElement.innerHTML = `
      <span>${goal.text}</span>
      <button>Set as Active Goal</button>
    `;
    // console.log(init);
    // goalElement.querySelector('button').addEventListener('click', function() {setAsActiveHandler(goal.id)});
    // goalElement.querySelector('button').addEventListener('click', () => {setAsActiveHandler(goal.id)});

    goalElement.querySelector('button').addEventListener('click', setAsActiveHandler.bind(null, goal.id));
    // goalElement.querySelector('button').onclick = setAsActiveHandler.bind(init, goal.id);
    goalListElement.append(goalElement);
  }
}

init();
