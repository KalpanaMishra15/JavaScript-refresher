let numArr = [5, 3, 8, 1, 2];

function addNumber(numArr, num){
    numArr.push(num);
    return numArr
}

function removeNumber(numArr, num)
{
    let n = numArr.length
    for(i=0;i<n;i++)
    {
        if(numArr[i]==num)
        {
            for(let j = i; j<n-1;j++)
            {
                numArr[j]=numArr[j+1];
            }
            numArr.length -= 1;
            break;
        }
    }

    return numArr;
}

function sortNumbers(numArr)
{
    numArr.sort();
    return numArr;
}

function calculateSum(numArr)
{
    let sum = numArr.reduce((acc, curr) => {
        return acc+curr;
    })

    return sum;
}

function calculateAverage(numArr)
{
    let sum = numArr.reduce((acc, curr) => {
        return acc+curr;
    })

    return sum/(numArr.length);
}

console.log("Initial Array: " + numArr);

console.log("After adding 4: " + addNumber(numArr, 4));

console.log("After removing 3: " + removeNumber(numArr, 3));

console.log("Sorted array: " + sortNumbers(numArr));

console.log("Sum of numbers: " + calculateSum(numArr));

console.log("Average of numbers:" + calculateAverage(numArr));
