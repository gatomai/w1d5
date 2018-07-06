var cusList = [];

module.exports = {
  add2List: function(value) {
    cusList.push(value);
  },
  printList: function() {
    sortList();
    console.log(cusList.toString());
    // console.log(cusList);
  }
}

function sortList() {
  cusList.sort((a, b) => a - b);
}
