const showCat = document.getElementById("showCat");
const results = document.getElementById("results");
const count = document.getElementById("count");

// GLOBAL show list so deletion persists
let netflixShows = getShowList();

function getShows() {
  let cat = showCat.value;

  let rowString =
    "<tr><th>Key</th><th>Title</th><th>Casts</th><th>Year</th><th>Rating / Score</th></tr>";

  let showCount = 0;

  for (let key in netflixShows) {
    if (cat === "All" || netflixShows[key].category === cat) {
      rowString += "<tr>";
      rowString += "<td>" + key + "</td>";
      rowString += "<td>" + netflixShows[key].title + "</td>";
      rowString += "<td>" + netflixShows[key].cast.join(", ") + "</td>";
      rowString += "<td>" + netflixShows[key].year + "</td>";
      rowString += "<td>" + netflixShows[key].ratingScore() + "</td>";
      rowString += "</tr>";
      showCount++;
    }
  }

  results.innerHTML = rowString;
  count.innerHTML = "Total shows displayed: " + showCount;
}

function delShows() {
  const cat = showCat.value;

  if (cat === "All") {
    alert("You cannot delete ALL shows at once.");
    return;
  }

  const confirmDelete = confirm(
    "Are you sure you want to delete ALL shows under the category: " + cat + "?"
  );

  if (!confirmDelete) return;

  for (let key in netflixShows) {
    if (netflixShows[key].category === cat) {
      delete netflixShows[key];
    }
  }

  alert(cat + " shows have been deleted.");
  getShows(); // refresh table
}

function getShowList() {
  return {
    breakingBad: {
      title: "Breaking Bad",
      category: "Drama",
      year: 2008,
      seasons: 5,
      rating: "TV-MA",
      cast: ["Bryan Cranston", "Aaron Paul"],
      imdbScore: 9.5,
      ratingScore() {
        return this.rating + " / " + this.imdbScore;
      }
    },
    theCrown: {
      title: "The Crown",
      category: "Drama",
      year: 2016,
      seasons: 6,
      rating: "TV-MA",
      cast: ["Olivia Colman", "Claire Foy"],
      imdbScore: 8.6,
      ratingScore() {
        return this.rating + " / " + this.imdbScore;
      }
    },
    brooklynNineNine: {
      title: "Brooklyn Nine-Nine",
      category: "Comedy",
      year: 2013,
      seasons: 8,
      rating: "TV-14",
      cast: ["Andy Samberg", "Terry Crews"],
      imdbScore: 8.4,
      ratingScore() {
        return this.rating + " / " + this.imdbScore;
      }
    },
    sexEducation: {
      title: "Sex Education",
      category: "Comedy",
      year: 2019,
      seasons: 4,
      rating: "TV-MA",
      cast: ["Asa Butterfield", "Gillian Anderson"],
      imdbScore: 8.3,
      ratingScore() {
        return this.rating + " / " + this.imdbScore;
      }
    },
    strangerThings: {
      title: "Stranger Things",
      category: "Sci-Fi",
      year: 2016,
      seasons: 5,
      rating: "TV-14",
      cast: ["Millie Bobby Brown", "Finn Wolfhard"],
      imdbScore: 8.7,
      ratingScore() {
        return this.rating + " / " + this.imdbScore;
      }
    },
    blackMirror: {
      title: "Black Mirror",
      category: "Sci-Fi",
      year: 2011,
      seasons: 6,
      rating: "TV-MA",
      cast: ["Various"],
      imdbScore: 8.8,
      ratingScore() {
        return this.rating + " / " + this.imdbScore;
      }
    },
    onePiece: {
      title: "One Piece",
      category: "Anime",
      year: 1999,
      seasons: "Ongoing",
      rating: "TV-14",
      cast: ["Mayumi Tanaka", "Kazuya Nakai"],
      imdbScore: 8.9,
      ratingScore() {
        return this.rating + " / " + this.imdbScore;
      }
    },
    attackOnTitan: {
      title: "Attack on Titan",
      category: "Anime",
      year: 2013,
      seasons: 4,
      rating: "TV-MA",
      cast: ["Yuki Kaji", "Marina Inoue"],
      imdbScore: 9.0,
      ratingScore() {
        return this.rating + " / " + this.imdbScore;
      }
    }
  };
}
