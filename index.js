// Write your solution in this file!
const driver = {
    name: 'Sam',
    address: '11 Broadway'
}

const updateDriverWithKeyAndValue = (object, key, value) => 
    Object.assign({}, object, { [key]: value })

const destructivelyUpdateDriverWithKeyAndValue = (object, key, value) =>
    Object.assign(object, { [key]: value })    

const deleteFromDriverByKey = (object, key, value) => {
    let newObj = Object.assign({}, object, { [key]: value })
    delete newObj[key];
    return newObj
}

const destructivelyDeleteFromDriverByKey = (object, key, value) => {
    let obj = Object.assign(object, { [key]: value })
    delete obj[key]
    return obj
}

