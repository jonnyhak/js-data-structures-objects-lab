// Write your solution in this file!

const driver = {}

function updateDriverWithKeyAndValue(driver, k, v){
    
    return Object.assign({}, driver, {[k]: v})

}

function destructivelyUpdateDriverWithKeyAndValue(driver, k, v){
    driver[k] = v
    return driver 
} 

function deleteFromDriverByKey(driver, k){
    const newObj = Object.assign({}, driver) 

    delete newObj[k]

    return newObj
}

function destructivelyDeleteFromDriverByKey(driver, k){
    delete driver[k]

    return driver
}





