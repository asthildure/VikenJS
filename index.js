const typePrice = {
    Apples: 28.34,
    Oranges: 34.56,
    Pears: 2.89,
}

function ShippingContainer(type, height, width, length, weight) {
    this.type = type
    this.height = height
    this.width = width
    this.length = length
    this.weight = weight
    this.price = typePrice[this.type]
    this.volume = getVolume(this.height, this.width, this.length)
    this.value = getValue(this.weight, this.price)
}

const appleContainer = new ShippingContainer('Apples', 2.49, 2, 12, 460)
// const pearContainer = new ShippingContainer("Pears", 2.49, 2, 12, 630)
// const orangeContainer = new ShippingContainer("Oranges", 2.49, 2, 12, 718)

function getVolume(height, width, length) {
    return Number((height * width * length).toFixed(2))
}

function getValue(weight, price) {
    return weight * price
}

function printDetails(container) {
    console.log(
        'Is a container with ' + container.type,
        '\nValue: ' + container.value + 'kr',
        '\nVolume: ' + container.volume + 'm3'
    )
}

console.log(appleContainer)
// console.log(orangeContainer)
// console.log(pearContainer)

printDetails(appleContainer)

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

// 1 kubikk m epler veier 460 kg
// 1 kubikk m pærer veier 630 kg
// 1 kubikk m druer veier 638 kg
// 1 kubikk m appelsiner veier 718 kg
// 1 kubikk m ricotta veier 1048 kg
