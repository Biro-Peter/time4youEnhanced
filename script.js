const topFilms = [
    {
        rank: 1,
        title: "A remény rabjai",
        year: 1994,
        rating: 9.3,
        img: "https://image.tmdb.org/t/p/w500/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
        description: "Andy Dufresne-t, a sikeres bankárt egy gyilkosságért életfogytiglanra ítélik, amit nem ő követett el. A börtönben barátságot köt Reddel, és húsz éven át titokban tervezi a szökést. A film a remény, a barátság és az igazságtalanság elleni kitartás története.",
        cast: [
            { actor: "Tim Robbins", role: "Andy Dufresne" },
            { actor: "Morgan Freeman", role: "Ellis Boyd 'Red' Redding" },
            { actor: "Bob Gunton", role: "Warden Norton" },
            { actor: "William Sadler", role: "Heywood" }
        ]
    },
    {
        rank: 2,
        title: "A keresztapa",
        year: 1972,
        rating: 9.2,
        img: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        description: "A Corleone család története, mely az olasz maffia egyik legbefolyásosabb dinasztiája New Yorkban. Don Vito Corleone visszavonulása után fia, Michael veszi át a család irányítását, és a hatalom megszerzésének véres útjára lép.",
        cast: [
            { actor: "Marlon Brando", role: "Don Vito Corleone" },
            { actor: "Al Pacino", role: "Michael Corleone" },
            { actor: "James Caan", role: "Sonny Corleone" },
            { actor: "Robert Duvall", role: "Tom Hagen" }
        ]
    },
    {
        rank: 3,
        title: "A sötét lovag",
        year: 2008,
        rating: 9.0,
        img: "https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg",
        description: "Batman szembeszáll a legnagyobb fenyegetéssel, amivel valaha találkozott: a Jokerrel, aki káoszt és félelmet akar elhozni Gotham Citybe. A hősnek szembe kell néznie saját határaival, miközben a város jövője forog kockán.",
        cast: [
            { actor: "Christian Bale", role: "Bruce Wayne / Batman" },
            { actor: "Heath Ledger", role: "Joker" },
            { actor: "Aaron Eckhart", role: "Harvey Dent" },
            { actor: "Michael Caine", role: "Alfred Pennyworth" }
        ]
    },
    {
        rank: 4,
        title: "A keresztapa II.",
        year: 1974,
        rating: 9.0,
        img: "https://image.tmdb.org/t/p/w500/bMadFzhjy9T7R8J48QGq1ngW1Qr.jpg",
        description: "Két idősíkon futó történet: Michael Corleone a családi birodalom megszilárdításáért küzd, míg a fiatal Vito Corleone felemelkedését követhetjük nyomon Szicíliától New Yorkig. A hatalom és a család tragikus kettőssége.",
        cast: [
            { actor: "Al Pacino", role: "Michael Corleone" },
            { actor: "Robert De Niro", role: "Fiatal Vito Corleone" },
            { actor: "Robert Duvall", role: "Tom Hagen" },
            { actor: "Diane Keaton", role: "Kay Corleone" }
        ]
    },
    {
        rank: 5,
        title: "12 dühös ember",
        year: 1957,
        rating: 9.0,
        img: "https://image.tmdb.org/t/p/w500/ow3wq89wM8qd5X7hWKxiRfsFf9C.jpg",
        description: "Egy fiatal fiút gyilkossággal vádolnak, és az esküdtszéknek egyhangú döntést kell hoznia. Egyetlen szavazó kétségbe vonja a bizonyítékokat, és lassan a többiek is elkezdenek gondolkodni. Feszült dráma az igazságról és előítéletekről.",
        cast: [
            { actor: "Henry Fonda", role: "8. esküdt" },
            { actor: "Lee J. Cobb", role: "3. esküdt" },
            { actor: "Ed Begley", role: "10. esküdt" },
            { actor: "E.G. Marshall", role: "4. esküdt" }
        ]
    },
    {
        rank: 6,
        title: "Schindler listája",
        year: 1993,
        rating: 9.0,
        img: "https://image.tmdb.org/t/p/w500/8kNruSfhk5IoE4eZOc4UnWAqvAY.jpg",
        description: "Oskar Schindler német üzletember a II. világháború idején zsidó munkásokat alkalmaz gyárában, és élete kockáztatásával több mint ezer embert ment meg a holokauszttól. Megrendítő történet az emberségről a legnagyobb sötétségben.",
        cast: [
            { actor: "Liam Neeson", role: "Oskar Schindler" },
            { actor: "Ben Kingsley", role: "Itzhak Stern" },
            { actor: "Ralph Fiennes", role: "Amon Göth" },
            { actor: "Caroline Goodall", role: "Emilie Schindler" }
        ]
    },
    {
        rank: 7,
        title: "A Gyűrűk Ura: A király visszatér",
        year: 2003,
        rating: 9.0,
        img: "https://image.tmdb.org/t/p/w500/6a6GjzR6yFk5X7hWKqiRfsFf9C.jpg",
        description: "A Gyűrűk Ura trilógia záró része, melyben Frodo és Sam végleg eljutnak Mordorba, hogy megsemmisítsék az Egy Gyűrűt. Közben Aragorn felveszi a harcot Sauron seregeivel, hogy megmentse Középföldét a pusztulástól.",
        cast: [
            { actor: "Elijah Wood", role: "Frodo Baggins" },
            { actor: "Viggo Mortensen", role: "Aragorn" },
            { actor: "Ian McKellen", role: "Gandalf" },
            { actor: "Sean Astin", role: "Samwise Gamgee" }
        ]
    },
    {
        rank: 8,
        title: "Ponyvaregény",
        year: 1994,
        rating: 8.9,
        img: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        description: "Quentin Tarantino ikonikus filmje összefonódó történetekből áll: két bérgyilkos, egy bokszoló, egy maffiafőnök felesége és egy pár rabló sorsa keresztezi egymást. Sötét humor, erőszak és felejthetetlen párbeszédek.",
        cast: [
            { actor: "John Travolta", role: "Vincent Vega" },
            { actor: "Samuel L. Jackson", role: "Jules Winnfield" },
            { actor: "Uma Thurman", role: "Mia Wallace" },
            { actor: "Bruce Willis", role: "Butch Coolidge" }
        ]
    },
    {
        rank: 9,
        title: "Jófiúk",
        year: 1990,
        rating: 8.7,
        img: "https://image.tmdb.org/t/p/w500/k3b5X7hWKqiRfsFf9C.jpg",
        description: "Henry Hill valódi története, aki gyerekként csatlakozott a maffiához, és húsz évig élt a szervezett bűnözés világában. A film bemutatja a hatalom, a pénz és a hűség illúzióját, majd a bukást és az árulást.",
        cast: [
            { actor: "Ray Liotta", role: "Henry Hill" },
            { actor: "Robert De Niro", role: "James 'Jimmy' Conway" },
            { actor: "Joe Pesci", role: "Tommy DeVito" },
            { actor: "Lorraine Bracco", role: "Karen Hill" }
        ]
    },
    {
        rank: 10,
        title: "Harcosok klubja",
        year: 1999,
        rating: 8.8,
        img: "https://image.tmdb.org/t/p/w500/8kNruSfhk5IoE4eZOc4UnWAqvAY.jpg",
        description: "Egy névtelen elbeszélő és Tyler Durden létrehozzák a Harcosok klubját, ami hamarosan anarchista mozgalommá növi ki magát. A film az identitásról, fogyasztói társadalomról és a modern ember elidegenedéséről szól.",
        cast: [
            { actor: "Edward Norton", role: "Elbeszélő" },
            { actor: "Brad Pitt", role: "Tyler Durden" },
            { actor: "Helena Bonham Carter", role: "Marla Singer" },
            { actor: "Meat Loaf", role: "Robert Paulson" }
        ]
    }
];

const topSeries = [
    {
        rank: 1,
        title: "Breaking Bad",
        year: "2008-2013",
        rating: 9.5,
        img: "https://image.tmdb.org/t/p/w500/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg",
        description: "Walter White középiskolai kémiatanárból lesz metamfetamin-gyártó, miután tüdőrákot diagnosztizálnak nála. Célja, hogy családjának anyagi biztonságot teremtsen, de lassan a bűnözés világának könyörtelen királyává válik.",
        cast: [
            { actor: "Bryan Cranston", role: "Walter White" },
            { actor: "Aaron Paul", role: "Jesse Pinkman" },
            { actor: "Anna Gunn", role: "Skyler White" },
            { actor: "Giancarlo Esposito", role: "Gus Fring" }
        ]
    },
    {
        rank: 2,
        title: "Trónok harca",
        year: "2011-2019",
        rating: 9.2,
        img: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
        description: "Westeros hét királyságában nemesi házak harcolnak a Vastrónért, miközben északon egy ősi, természetfeletti fenyegetés ébred. Intrikák, hatalmi harcok és sárkányok világa George R. R. Martin regényei alapján.",
        cast: [
            { actor: "Emilia Clarke", role: "Daenerys Targaryen" },
            { actor: "Kit Harington", role: "Jon Snow" },
            { actor: "Peter Dinklage", role: "Tyrion Lannister" },
            { actor: "Lena Headey", role: "Cersei Lannister" }
        ]
    },
    {
        rank: 3,
        title: "A fiúk",
        year: "2019-",
        rating: 8.7,
        img: "https://image.tmdb.org/t/p/w500/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
        description: "A szuperhősök a valóságban korruptak és veszélyesek, ezért egy csapat hétköznapi ember összefog, hogy leszámoljon velük. Sötét, szatirikus sorozat a hatalomról és a hősök mítoszáról.",
        cast: [
            { actor: "Karl Urban", role: "Billy Butcher" },
            { actor: "Jack Quaid", role: "Hughie Campbell" },
            { actor: "Antony Starr", role: "Homelander" },
            { actor: "Erin Moriarty", role: "Starlight" }
        ]
    },
    {
        rank: 4,
        title: "Stranger Things",
        year: "2016-",
        rating: 8.7,
        img: "https://image.tmdb.org/t/p/w500/6a6GjzR6yFk5X7hWKqiRfsFf9C.jpg",
        description: "Az 1980-as évekbeli Hawkins városában egy fiú eltűnik, barátai pedig egy különleges képességű lányra bukkannak. A nyomozás során titkos kormányzati kísérletekre és egy párhuzamos dimenzióra derül fény.",
        cast: [
            { actor: "Millie Bobby Brown", role: "Eleven" },
            { actor: "Finn Wolfhard", role: "Mike Wheeler" },
            { actor: "Winona Ryder", role: "Joyce Byers" },
            { actor: "David Harbour", role: "Jim Hopper" }
        ]
    },
    {
        rank: 5,
        title: "A Korona",
        year: "2016-2023",
        rating: 8.6,
        img: "https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg",
        description: "II. Erzsébet királynő uralkodásának története a kezdetektől napjainkig. A sorozat bemutatja a brit királyi család politikai és magánéleti konfliktusait, a hatalom és a személyes érzelmek ütközését.",
        cast: [
            { actor: "Claire Foy", role: "II. Erzsébet (fiatal)" },
            { actor: "Olivia Colman", role: "II. Erzsébet (középkorú)" },
            { actor: "Matt Smith", role: "Fülöp herceg" },
            { actor: "Helena Bonham Carter", role: "Margit hercegnő" }
        ]
    },
    {
        rank: 6,
        title: "Chernobyl",
        year: "2019",
        rating: 9.4,
        img: "https://image.tmdb.org/t/p/w500/bMadFzhjy9T7R8J48QGq1ngW1Qr.jpg",
        description: "Az 1986-os csernobili atomkatasztrófa és az azt követő mentési és nyomozási munkálatok drámai bemutatása. A sorozat feltárja a hazugságok rendszerét és az emberi bátorságot a történelem egyik legnagyobb ipari balesetében.",
        cast: [
            { actor: "Jared Harris", role: "Valerij Legaszov" },
            { actor: "Stellan Skarsgård", role: "Borisz Scserbina" },
            { actor: "Emily Watson", role: "Ulana Khomyuk" },
            { actor: "Paul Ritter", role: "Anatolij Diatlov" }
        ]
    },
    {
        rank: 7,
        title: "A pénz hegye",
        year: "2017-2021",
        rating: 8.2,
        img: "https://image.tmdb.org/t/p/w500/ow3wq89wM8qd5X7hWKxiRfsFf9C.jpg",
        description: "Egy tolvajcsapatot vezető professzor és társai arra készülnek, hogy betörjenek a spanyol pénzverde épületébe, és saját maguk nyomtassanak milliárdokat. A tervet emberi tényezők és a rendőrség nyomozása bonyolítja.",
        cast: [
            { actor: "Álvaro Morte", role: "A Professzor" },
            { actor: "Úrsula Corberó", role: "Tokió" },
            { actor: "Itziar Ituño", role: "Raquel Murillo" },
            { actor: "Pedro Alonso", role: "Berlin" }
        ]
    },
    {
        rank: 8,
        title: "Sherlock",
        year: "2010-2017",
        rating: 9.1,
        img: "https://image.tmdb.org/t/p/w500/8kNruSfhk5IoE4eZOc4UnWAqvAY.jpg",
        description: "A modern korba helyezett Sherlock Holmes történet: a zseniális nyomozó és barátja, Dr. Watson London utcáin old meg rejtélyes bűnügyeket, miközben legfőbb ellenfelük, Moriarty is felbukkan.",
        cast: [
            { actor: "Benedict Cumberbatch", role: "Sherlock Holmes" },
            { actor: "Martin Freeman", role: "Dr. John Watson" },
            { actor: "Andrew Scott", role: "Jim Moriarty" },
            { actor: "Mark Gatiss", role: "Mycroft Holmes" }
        ]
    },
    {
        rank: 9,
        title: "A Segítség",
        year: "2021",
        rating: 8.0,
        img: "https://image.tmdb.org/t/p/w500/k3b5X7hWKqiRfsFf9C.jpg",
        description: "Egy disztópikus jövőben, ahol a klímaösszeomlás és a járványok miatt a társadalom széthullott, egy fiatal nő csatlakozik egy titkos szervezethez, hogy megmentse a világot. Feszült thrillersorozat a túlélésről.",
        cast: [
            { actor: "Jodie Comer", role: "Villanelle" },
            { actor: "Sandra Oh", role: "Eve Polastri" },
            { actor: "Fiona Shaw", role: "Carolyn Martens" },
            { actor: "Kim Bodnia", role: "Konstantin" }
        ]
    },
    {
        rank: 10,
        title: "A Mandalóri",
        year: "2019-",
        rating: 8.7,
        img: "https://image.tmdb.org/t/p/w500/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
        description: "A Csillagok háborúja univerzumában egy magányos fejvadász, a Mandalóri feladata egy különleges gyermek, Grogu megvédelmezése. A küldetés során szövetségesekre tesz szert, és szembeszáll a Galaktikus Birodalom maradványaival.",
        cast: [
            { actor: "Pedro Pascal", role: "Din Djarin / A Mandalóri" },
            { actor: "Grogu", role: "A Gyermek" },
            { actor: "Giancarlo Esposito", role: "Moff Gideon" },
            { actor: "Carl Weathers", role: "Greef Karga" }
        ]
    }
];

const newReleases = [
    {
        title: "Dűne: Második rész",
        year: 2024,
        rating: 8.8,
        img: "https://image.tmdb.org/t/p/w500/8kNruSfhk5IoE4eZOc4UnWAqvAY.jpg",
        description: "Paul Atreides egyesül a fremenekkel, hogy bosszút álljon az őt és családját elpusztító összeesküvőkön. Miközben választania kell szerelme és a világegyetem sorsa között, próbálja megakadályozni a jövőben látott szörnyű eseményeket.",
        cast: [
            { actor: "Timothée Chalamet", role: "Paul Atreides" },
            { actor: "Zendaya", role: "Chani" },
            { actor: "Rebecca Ferguson", role: "Lady Jessica" },
            { actor: "Austin Butler", role: "Feyd-Rautha" }
        ]
    },
    {
        title: "Deadpool & Rozsomák",
        year: 2024,
        rating: 8.0,
        img: "https://image.tmdb.org/t/p/w500/6a6GjzR6yFk5X7hWKqiRfsFf9C.jpg",
        description: "Wade Wilson, azaz Deadpool a TVA ügynökség segítségével összehozza a visszavonult Rozsomákot, hogy megmentse a sokdimenziós univerzumot. Akció, humor és káromkodás a Marvel módra.",
        cast: [
            { actor: "Ryan Reynolds", role: "Wade Wilson / Deadpool" },
            { actor: "Hugh Jackman", role: "Logan / Rozsomák" },
            { actor: "Emma Corrin", role: "Cassandra Nova" },
            { actor: "Matthew Macfadyen", role: "Mr. Paradox" }
        ]
    },
    {
        title: "Oppenheimer",
        year: 2023,
        rating: 8.6,
        img: "https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg",
        description: "J. Robert Oppenheimer fizikus életének és az atombomba megalkotásának története. A film bemutatja a Manhattan-terv munkálatait, a tudósok erkölcsi dilemmáit és a hidegháború hajnalát.",
        cast: [
            { actor: "Cillian Murphy", role: "J. Robert Oppenheimer" },
            { actor: "Emily Blunt", role: "Kitty Oppenheimer" },
            { actor: "Robert Downey Jr.", role: "Lewis Strauss" },
            { actor: "Matt Damon", role: "Leslie Groves tábornok" }
        ]
    },
    {
        title: "Barbie",
        year: 2023,
        rating: 7.0,
        img: "https://image.tmdb.org/t/p/w500/bMadFzhjy9T7R8J48QGq1ngW1Qr.jpg",
        description: "Barbie és Ken elhagyják a tökéletes Barbie-világot, és a valódi emberek világába kerülnek. Itt szembesülnek az élet nehézségeivel, a nemi szerepekkel és önmaguk identitásával.",
        cast: [
            { actor: "Margot Robbie", role: "Barbie" },
            { actor: "Ryan Gosling", role: "Ken" },
            { actor: "America Ferrera", role: "Gloria" },
            { actor: "Kate McKinnon", role: "Furcsa Barbie" }
        ]
    },
    {
        title: "A szegények háborúja",
        year: 2024,
        rating: 7.5,
        img: "https://image.tmdb.org/t/p/w500/ow3wq89wM8qd5X7hWKxiRfsFf9C.jpg",
        description: "Egy kis falu lakói fellázadnak az őket kizsákmányoló hatalmas földesúr ellen. A film a bátorságról, az összetartásról és a szabadságért vívott harcról szól.",
        cast: [
            { actor: "Huang Bo", role: "Lao Wang" },
            { actor: "Zhou Dongyu", role: "Xiao Mei" },
            { actor: "Wang Yibo", role: "Fiatal harcos" },
            { actor: "Zhang Yi", role: "A földesúr" }
        ]
    },
    {
        title: "Kung Fu Panda 4",
        year: 2024,
        rating: 7.2,
        img: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        description: "Po, a Sárkányharcos új kihívással néz szembe: meg kell találnia utódját, miközben egy új, alakváltó ellenfél fenyegeti a Béke Völgyét. Vígjáték és akció a szeretett panda visszatérésével.",
        cast: [
            { actor: "Jack Black", role: "Po (hang)" },
            { actor: "Awkwafina", role: "Zhen (hang)" },
            { actor: "Viola Davis", role: "Kaméleon (hang)" },
            { actor: "Dustin Hoffman", role: "Shifu (hang)" }
        ]
    },
    {
        title: "Godzilla x Kong",
        year: 2024,
        rating: 7.0,
        img: "https://image.tmdb.org/t/p/w500/k3b5X7hWKqiRfsFf9C.jpg",
        description: "Godzilla és Kong kénytelen szövetséget kötni, hogy megvédjék a Földet egy új, titokzatos fenyegetéstől, amely az üreges Föld mélyéről érkezik. Óriási szörnyek, óriási csata.",
        cast: [
            { actor: "Rebecca Hall", role: "Dr. Ilene Andrews" },
            { actor: "Brian Tyree Henry", role: "Bernie Hayes" },
            { actor: "Dan Stevens", role: "Trapper" },
            { actor: "Kaylee Hottle", role: "Jia" }
        ]
    },
    {
        title: "Furiosa",
        year: 2024,
        rating: 7.8,
        img: "https://image.tmdb.org/t/p/w500/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
        description: "A Mad Max: Fury Road előzménytörténete: Furiosa fiatal lányként elrabolják otthonából, és hosszú úton kell visszajutnia a Zöld Helyre. A pusztaságban kemény harcos válik belőle.",
        cast: [
            { actor: "Anya Taylor-Joy", role: "Furiosa" },
            { actor: "Chris Hemsworth", role: "Dementus" },
            { actor: "Tom Burke", role: "Praetorian Jack" },
            { actor: "Alyla Browne", role: "Fiatal Furiosa" }
        ]
    }
];

const modalOverlay = document.getElementById("modal-overlay");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalYear = document.getElementById("modal-year");
const modalRating = document.getElementById("modal-rating");
const modalDescription = document.getElementById("modal-description");
const modalCast = document.getElementById("modal-cast");
const modalClose = document.getElementById("modal-close");

function createRankedCard(item) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <div class="rank-badge">${item.rank}</div>
        <img src="${item.img}" alt="${item.title}" class="card-img">
        <div class="card-content">
            <h3 class="card-title">${item.title}</h3>
            <div class="card-info">
                <span>${item.year}</span>
                <span class="rating">★ ${item.rating}</span>
            </div>
        </div>
    `;
    card.addEventListener("click", () => openModal(item));
    return card;
}

function createNewCard(item) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <div class="new-badge">Új</div>
        <img src="${item.img}" alt="${item.title}" class="card-img">
        <div class="card-content">
            <h3 class="card-title">${item.title}</h3>
            <div class="card-info">
                <span>${item.year}</span>
                <span class="rating">★ ${item.rating}</span>
            </div>
        </div>
    `;
    card.addEventListener("click", () => openModal(item));
    return card;
}

function openModal(item) {
    modalImg.src = item.img;
    modalImg.alt = item.title;
    modalTitle.textContent = item.title;
    modalYear.textContent = item.year;
    modalRating.textContent = `★ ${item.rating}`;
    modalDescription.textContent = item.description;

    modalCast.innerHTML = "";
    if (item.cast && item.cast.length > 0) {
        item.cast.forEach(person => {
            const li = document.createElement("li");
            li.innerHTML = `
                <span class="actor">${person.actor}</span>
                <span class="role">mint ${person.role}</span>
            `;
            modalCast.appendChild(li);
        });
    }

    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
        closeModal();
    }
});

function renderTopFilms() {
    const grid = document.getElementById("top-films-grid");
    topFilms.forEach(film => grid.appendChild(createRankedCard(film)));
}

function renderTopSeries() {
    const grid = document.getElementById("top-series-grid");
    topSeries.forEach(series => grid.appendChild(createRankedCard(series)));
}

function renderNewReleases() {
    const grid = document.getElementById("new-releases-grid");
    newReleases.forEach(film => grid.appendChild(createNewCard(film)));
}

function setupSmoothScroll() {
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderTopFilms();
    renderTopSeries();
    renderNewReleases();
    setupSmoothScroll();
});