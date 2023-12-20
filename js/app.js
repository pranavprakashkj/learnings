//Model

var model = {
  currentCat: null,
  adminView: false,
  cats: [
    {
      clickCount: 0,
      name: "Tabby",
      imgSrc: "img/434164568_fea0ad4013_z.jpg",
      imgAttribution: "https://www.flickr.com/photos/bigtallguy/434164568",
    },
    {
      clickCount: 0,
      name: "Tiger",
      imgSrc: "img/4154543904_6e2428c421_z.jpg",
      imgAttribution: "https://www.flickr.com/photos/xshamx/4154543904",
    },
    {
      clickCount: 0,
      name: "Scaredy",
      imgSrc: "img/22252709_010df3379e_z.jpg",
      imgAttribution: "https://www.flickr.com/photos/kpjas/22252709",
    },
    {
      clickCount: 0,
      name: "Shadow",
      imgSrc: "img/1413379559_412a540d29_z.jpg",
      imgAttribution: "https://www.flickr.com/photos/malfet/1413379559",
    },
    {
      clickCount: 0,
      name: "Sleepy",
      imgSrc: "img/9648464288_2516b35537_z.jpg",
      imgAttribution: "https://www.flickr.com/photos/onesharp/9648464288",
    },
  ],
};

var octopus = {
  init: function () {
    model.currentCat = model.cats[0];
    model.adminView = false;
    catListView.init();
    catView.init();
    adminView.init();
  },

  getCurrentCat: function () {
    return model.currentCat;
  },

  getCats: function () {
    return model.cats;
  },

  setCurrentcat: function (cat) {
    model.currentCat = cat;
  },

  incCatCount: function () {
    model.currentCat.clickCount++;
    catView.render();
  },

  showAdmin: function () {
    model.adminView = true;
  },
  closeAdmin: function () {
    model.adminView = false;
  },
  addCat: function (cat) {
    model.cats.push(cat);
  },
};

var adminView = {
  init: function () {
    this.adminButton = document.getElementById("admin-button");
    this.adminArea = document.getElementById("admin-area");
    this.submit = document.getElementById("submit");
    this.cancel = document.getElementById("cancel");
    console.log("model.adminView", model.adminView);

    this.adminArea.style.display = "none";
    this.adminButton.addEventListener("click", function () {
      octopus.showAdmin();
      adminView.render();
    });
    this.cancel.addEventListener("click", function () {
      octopus.closeAdmin();
      adminView.render();
    });

    this.submit.addEventListener("click", function () {
      var cat = {
        name: document.getElementById("name").value,
        imgSrc: document.getElementById("url").value,
        imgAttribution: document.getElementById("url").value,
        clickCount: document.getElementById("clicks").value,
      };
      console.log(cat);
      octopus.addCat(cat);
      octopus.closeAdmin();
      adminView.render();
      catListView.render();
    });

    this.render();
  },
  render: function () {
    this.adminArea.style.display = model.adminView ? "block" : "none";
    console.log("model.adminView", model.adminView);
  },
};

var catView = {
  init: function () {
    // store pointers to our DOM elements for easy access later
    this.catElem = document.getElementById("cat");
    this.catNameElem = document.getElementById("cat-name");
    this.catImageElem = document.getElementById("cat-img");
    this.countElem = document.getElementById("cat-count");

    // on click, increment the current cat's counter
    this.catImageElem.addEventListener("click", function () {
      octopus.incCatCount();
    });

    // render this view (update the DOM elements with the right values)
    this.render();
  },

  render: function () {
    var currentCat = octopus.getCurrentCat();
    this.countElem.textContent = currentCat.clickCount;
    this.catNameElem.textContent = currentCat.name;
    this.catImageElem.src = currentCat.imgSrc;
    // console.log(currentCat);
  },
};

var catListView = {
  init: function () {
    this.catListElem = document.getElementById("cat-list");
    this.render();
  },

  render: function () {
    var cat, i, elem;
    var cats = octopus.getCats();
    this.catListElem.innerHTML = "";

    for (i = 0; i < cats.length; i++) {
      // this is the cat we're currently looping over
      cat = cats[i];

      // make a new cat list item and set its text
      elem = document.createElement("li");
      elem.textContent = cat.name;

      // on click, setCurrentCat and render the catView
      // (this uses our closure-in-a-loop trick to connect the value
      //  of the cat variable to the click event function)
      elem.addEventListener(
        "click",
        (function (catCopy) {
          return function () {
            octopus.setCurrentcat(catCopy);
            catView.render();
          };
        })(cat)
      );
      // console.log(elem);
      this.catListElem.appendChild(elem);
    }
  },
};

octopus.init();
