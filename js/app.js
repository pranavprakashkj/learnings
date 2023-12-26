var initialCat = [
  {
    name: "Loki",
    imgSrc: "img/22252709_010df3379e_z.jpg",
    imgAttribute: "",
    clickCount: 0,
    nickName: ["hello", "how", "are", "you"],
  },
  {
    name: "Thor",
    imgSrc: "img/22252709_010df3379e_z.jpg",
    imgAttribute: "",
    clickCount: 0,
    nickName: ["hello", "how", "are", "you"],
  },
  {
    name: "Asgard",
    imgSrc: "img/22252709_010df3379e_z.jpg",
    imgAttribute: "",
    clickCount: 0,
    nickName: ["hello", "how", "are", "you"],
  },
];

var Cat = function (data) {
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.imgAttribute = ko.observable(data.imgAttribute);
  this.level = ko.computed(function () {
    return this.clickCount() <= 2 ? "newborn" : "infant";
  }, this);

  this.nickName = ko.observableArray(data.nickName);
};

var ViewModel = function () {
  var self = this; // Save reference to the ViewModel

  this.catList = ko.observableArray([]);

  initialCat.forEach((element) => {
    self.catList.push(new Cat(element));
  });

  //   console.log(this.catList());

  this.currentCat = ko.observable(this.catList()[0]);

  this.setCurrectCat = function (cat) {
    // console.log(self.catList()[index]);
    // this.currentCat = ko.observable(this.catList()[index]);
    self.currentCat(cat);
  };

  // Initialize Cats as an observable

  this.incCounter = function () {
    // Use self to refer to the ViewModel
    console.log(self.currentCat().clickCount());
    self.currentCat().clickCount(self.currentCat().clickCount() + 1); //OR
    // this.clickCount(this.clickCount() + 1);
  };
};

ko.applyBindings(new ViewModel());
