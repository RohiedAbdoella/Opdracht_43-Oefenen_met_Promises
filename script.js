// excersise 1:
const testNum = (number) => {
    const biggerOrLessThanTen = new Promise ((resolve, reject) => {
        if (testNum != 10) {
            resolve('Promise is resolved succesfully');
            } else {
            reject('Promise is rejected');
            }
        });
    }

const isNumberEqualToTen = () => {
    biggerOrLessThanTen.then((message) => {
            console.log('Number is bigger or smaller than 10');
        }).catch((message) => {
            console.log("Number is equal to 10");
        });
    }

isNumberEqualToTen();

// excersize 2:
