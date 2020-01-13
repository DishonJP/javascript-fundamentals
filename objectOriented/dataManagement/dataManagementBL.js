exports.dataManagement = (data) => {
    /**
     * .dataManagement
     */
    class dataManagement {
        /**
         * 
         * @param {string} name 
         * @param {number} weight 
         * @param {number} pricePerKg 
         */
        constructor(name, weight, pricePerKg) {
            this.name = name;
            this.weight = weight;
            this.pricePerKg = pricePerKg;
            this.totalAmount = weight * pricePerKg;
        }
    }
    let allStock = []; //creating empty array
    let i = 0;
    while (i < data.inventoryDetails.length) { //to loop the data present in a file
        let stock = new dataManagement(data.inventoryDetails[i].name, data.inventoryDetails[i].weight, data.inventoryDetails[i].pricePerKg); //creating new object
        allStock.push(stock); //pushing data into array
        i++;
    }
    return JSON.stringify(allStock); //converting to json format

    // let j = 0;
    // let grandTotal = 0; //to find grand total
    // while (j < allStock.length) {
    //     grandTotal += allStock[j].totalAmount; //to find grand total
    //     j++;
    // }
    // console.log(allStock);
    // console.log('Grand Total for stock is ' + grandTotal);
}