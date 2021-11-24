/*
  This data tracker class was not used to pull data for web-app components.
  However, it is built in order to demonstrate how weather data can be held
  and specific information can be pulled or manipulated.

  For this instance, each search of current weather data in same city
  can be inserted and can pull minimum, maximum, mean, mode of those
  temperatures.

  If we suppose to insert values in this form of data:
    {
      city: city name as String,
      temp: some integer number
    }
*/

class Tracker {
  constructor() {
    this.data = [];
  }

  insert(value) {
    this.data.push(value);
  }

  showMin() {
    let minimumTemp = Infinity;
    for (let d of this.data) {
      minimumTemp = Math.min(minimumTemp, d.temp);
    }
    return minimumTemp;
  }

  showMax() {
    let maximumTemp = -Infinity;
    for (let d of this.data) {
      maximumTemp = Math.max(maximumTemp, d.temp);
    }
    return maximumTemp;
  }

  showMean() {
    let runningSum = 0;
    for (let d of this.data) {
      runningSum += d.temp;
    }
    return runningSum / this.data.length;
  }

  showMode() {
    //we will create the hash table and record the number of occurances
    //of each temperature within the data
    const hash = {};
    for (let d of this.data) {
      let currentKey = `${d.temp}`;
      if (hash.hasOwnProperty(currentKey)) {
        hash[currentKey]++;
      } else {
        hash[currentKey] = 1;
      }
    }
    //Then we will look for the most frequent temp or temps in an array
    //as it can be multiple
    let result = [];
    let frequencyTracker = 0;
    for (let t of Object.keys(hash)) {
      if (hash[t] > frequencyTracker) {
        //if frequency record gets higher, we will replace 
        //previous array to new array with new temperature
        result = [t];
        frequencyTracker = hash[t];
      } else if (hash[t] === frequencyTracker) {
        //if frequency record is the same, we will push
        //the current value to the existing array
        result.push(t);
      }
    }
    //return one or more mode of temperature set
    return result;
  }
}

//SAMPLE DATA AND SIMPLE TEST RUN
const testData1 = {
  city: "Toronto",
  temp: 10,
}
const testData2 = {
  city: "Toronto",
  temp: 10,
}
const testData3 = {
  city: "Toronto",
  temp: 11,
}
const testData4 = {
  city: "Toronto",
  temp: 12,
}
const testData5 = {
  city: "Toronto",
  temp: 14,
}
const testData6 = {
  city: "Toronto",
  temp: 14,
}

const Toronto = new Tracker();

Toronto.insert(testData1);
Toronto.insert(testData2);
Toronto.insert(testData3);
Toronto.insert(testData4);
Toronto.insert(testData5);
Toronto.insert(testData6);

console.log(Toronto.data);
console.log(Toronto.showMin()); //returned 10 => PASS
console.log(Toronto.showMax()); //returned 14 => PASS
console.log(Toronto.showMean()); //returned 11.83333333... => PASS
console.log(Toronto.showMode()); //returned [10, 14] => PASS