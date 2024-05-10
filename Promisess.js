// No 1
// Write an asynchronous function that accepts a message string and a delay time in milliseconds.
//  The function should log the message to the console after the specified delay time.

async function outputmessage(message,delay){
    await new Promise(resolve=>setTimeout(resolve,delay));
    console.log(message);
}
outputmessage("I am staying in the race",1000);

//You have an asynchronous function performTask() that returns a Promise. The Promise resolves if the task is successful and rejects if there's an error. Write a function that calls

//performTask() and logs a custom success message if the task is successful, and a custom error message if there's an error.

async function performTask(){

   try{

       console.log ('Beautifull Execution')

   }

   catch{

     console.log ('Missed something crucial')

   }

}

async function getPerformTask(){

   try{

       await performTask();

       console.log('You did it');

   }

   catch(error){

       console.log(error)

       console.log('Lets keep trying');

   }

};

getPerformTask()


// Q3 You have an asynchronous function performTask() that returns a Promise. The Promise resolves if the task is successful and rejects if there's an error.
//  Write a function that calls performTask() and logs a custom success message if the task is successful, and a custom error message if there's an error.


function performTask() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const random = Math.random();
        if (random < 0.5) {
          resolve();
        } else {
          reject(new Error("Try again!"));
        }
      }, 1500);
    });
  }
  async function handleTask() {
    try {
      await performTask();
      console.log("sucessfull!");
    } catch (error) {
      console.error("Error when performing task:", error);
    }
  }

  handleTask();



// // Q4 Write a function unstableTask that:
// Accepts a taskName and failureProbability (a number between 0 and 1).
// Returns a Promise that:
// Resolves immediately with a success message if a randomly generated number is greater than failureProbability. Rejects immediately with a failure message if a randomly generated number is less than or equal to failureProbability.
function unstableTask(taskName, failureProbability) {
    return new Promise((resolve, reject) => {
    const randomValue = Math.random();
    if (randomValue > failureProbability) {
    resolve(`Task "${taskName}" succeeded`);
    } else {
    reject(new Error(`Task "${taskName}" failed`));
    }
    });
    }
    async function executeWithRetry(taskName, retries, failureProbability) {
    for (let attempt =3; attempt => retries; attempt++) {
    try {
    await unstableTask(taskName, failureProbability);
    console.log(`Attempt ${attempt}: Task "${taskName}" successfull`);
    return;
    } catch (error) {
    console.error(`Attempt ${attempt}: ${error.message}`);
    }
    }
    console.log(`All ${retries} attempts for task "${taskName}" are unsuccessfull`);
    }
    executeWithRetry('executionTime', 3, 0);