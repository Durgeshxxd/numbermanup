document.addEventListener('DOMContentLoaded', () => {
    const maxValue = 150;
    const minValue = 0;
    
    let currentNumber = 0;
    let history = [];
    let redoStack = [];

    const progressBar = document.getElementById('progressBar');
    const currentValue = document.getElementById('currentValue');
    const addButton = document.getElementById('add');
    const subtractButton = document.getElementById('subtract');
    const undoButton = document.getElementById('undo');
    const redoButton = document.getElementById('redo');

    function updateUI() {
        progressBar.value = currentNumber;
        currentValue.textContent = currentNumber;
    }

    function add() {
        if (currentNumber < maxValue) {
            history.push(currentNumber);
            redoStack = [];
            currentNumber++;
            updateUI();
        }
    }

    function subtract() {
        if (currentNumber > minValue) {
            history.push(currentNumber);
            redoStack = [];
            currentNumber--;
            updateUI();
        }
    }

    function undo() {
        if (history.length > 0) {
            redoStack.push(currentNumber);
            currentNumber = history.pop();
            updateUI();
        }
    }

    function redo() {
        if (redoStack.length > 0) {
            history.push(currentNumber);
            currentNumber = redoStack.pop();
            updateUI();
        }
    }

    addButton.addEventListener('click', add);
    subtractButton.addEventListener('click', subtract);
    undoButton.addEventListener('click', undo);
    redoButton.addEventListener('click', redo);

    
    updateUI();
});