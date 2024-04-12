export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const taskBlock = true; // New block-scoped variable
    const task2Block = false; // New block-scoped variable
    return [taskBlock, task2Block];
  }

  return [task, task2];
}

