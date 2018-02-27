(function(){
  const exampleData = [
    {
      "isActive": true,
      "age": 28,
      "firstName": "Christy",
      "surName": "Glenn",
      "name": "Christy Glenn",
      "company": "COMTOUR",
      "email": "c.glenn@comtour.name",
      "phone": "(909) 495-2392"
    },
    {
      "isActive": false,
      "age": 20,
      "firstName": "Gay",
      "surName": "Mooney",
      "name": "Gay Mooney",
      "company": "COMDOM",
      "email": "g.mooney@comdom.info",
      "phone": "(912) 420-2666"
    },
    {
      "isActive": false,
      "age": 47,
      "firstName": "Park",
      "surName": "Cummings",
      "name": "Park Cummings",
      "company": "CORMORAN",
      "email": "p.cummings@cormoran.com",
      "phone": "(926) 401-3906"
    },
    {
      "isActive": false,
      "age": 38,
      "firstName": "Susanna",
      "surName": "Lucas",
      "name": "Susanna Lucas",
      "company": "ISOSPHERE",
      "email": "s.lucas@isosphere.org",
      "phone": "(852) 429-3211"
    },
    {
      "isActive": false,
      "age": 23,
      "firstName": "Bridges",
      "surName": "Burns",
      "name": "Bridges Burns",
      "company": "BIOTICA",
      "email": "b.burns@biotica.biz",
      "phone": "(804) 404-3598"
    },
    {
      "isActive": true,
      "age": 20,
      "firstName": "Curtis",
      "surName": "Buchanan",
      "name": "Curtis Buchanan",
      "company": "EBIDCO",
      "email": "c.buchanan@ebidco.net",
      "phone": "(905) 591-3896"
    },
    {
      "isActive": false,
      "age": 41,
      "firstName": "Dodson",
      "surName": "Sharpe",
      "name": "Dodson Sharpe",
      "company": "XURBAN",
      "email": "d.sharpe@xurban.me",
      "phone": "(843) 552-3272"
    },
    {
      "isActive": false,
      "age": 19,
      "firstName": "Miles",
      "surName": "Hurst",
      "name": "Miles Hurst",
      "company": "OPTIQUE",
      "email": "m.hurst@optique.biz",
      "phone": "(952) 499-3557"
    },
    {
      "isActive": true,
      "age": 45,
      "firstName": "Kim",
      "surName": "Mercado",
      "name": "Kim Mercado",
      "company": "ELEMANTRA",
      "email": "k.mercado@elemantra.io",
      "phone": "(988) 531-3780"
    },
    {
      "isActive": false,
      "age": 21,
      "firstName": "Lynnette",
      "surName": "Bernard",
      "name": "Lynnette Bernard",
      "company": "EVENTAGE",
      "email": "l.bernard@eventage.us",
      "phone": "(998) 600-2557"
    },
    {
      "isActive": false,
      "age": 32,
      "firstName": "Therese",
      "surName": "Graham",
      "name": "Therese Graham",
      "company": "ORBIXTAR",
      "email": "t.graham@orbixtar.tv",
      "phone": "(824) 570-2112"
    },
    {
      "isActive": false,
      "age": 44,
      "firstName": "Hodge",
      "surName": "Clark",
      "name": "Hodge Clark",
      "company": "CABLAM",
      "email": "h.clark@cablam.co.uk",
      "phone": "(985) 587-3543"
    },
    {
      "isActive": true,
      "age": 27,
      "firstName": "Forbes",
      "surName": "Mendoza",
      "name": "Forbes Mendoza",
      "company": "WARETEL",
      "email": "f.mendoza@waretel.name",
      "phone": "(960) 573-3265"
    },
    {
      "isActive": true,
      "age": 40,
      "firstName": "Myers",
      "surName": "Lester",
      "name": "Myers Lester",
      "company": "LOVEPAD",
      "email": "m.lester@lovepad.info",
      "phone": "(975) 495-3237"
    },
    {
      "isActive": false,
      "age": 46,
      "firstName": "Pollard",
      "surName": "Barrera",
      "name": "Pollard Barrera",
      "company": "SEALOUD",
      "email": "p.barrera@sealoud.com",
      "phone": "(803) 415-3220"
    },
    {
      "isActive": true,
      "age": 50,
      "firstName": "Daphne",
      "surName": "Bryan",
      "name": "Daphne Bryan",
      "company": "ONTALITY",
      "email": "d.bryan@ontality.org",
      "phone": "(957) 422-3224"
    },
    {
      "isActive": false,
      "age": 31,
      "firstName": "Flores",
      "surName": "Watson",
      "name": "Flores Watson",
      "company": "EXOTECHNO",
      "email": "f.watson@exotechno.biz",
      "phone": "(998) 593-2098"
    },
    {
      "isActive": true,
      "age": 36,
      "firstName": "Mercer",
      "surName": "Johns",
      "name": "Mercer Johns",
      "company": "EZENTIA",
      "email": "m.johns@ezentia.net",
      "phone": "(962) 556-2754"
    },
    {
      "isActive": true,
      "age": 50,
      "firstName": "Horne",
      "surName": "Hood",
      "name": "Horne Hood",
      "company": "ZANILLA",
      "email": "h.hood@zanilla.me",
      "phone": "(965) 522-3071"
    },
    {
      "isActive": true,
      "age": 43,
      "firstName": "Massey",
      "surName": "Reid",
      "name": "Massey Reid",
      "company": "LYRIA",
      "email": "m.reid@lyria.biz",
      "phone": "(891) 577-3597"
    },
    {
      "isActive": false,
      "age": 43,
      "firstName": "Earlene",
      "surName": "Hickman",
      "name": "Earlene Hickman",
      "company": "ZYTRAC",
      "email": "e.hickman@zytrac.io",
      "phone": "(871) 569-3748"
    },
    {
      "isActive": true,
      "age": 27,
      "firstName": "Traci",
      "surName": "Cantrell",
      "name": "Traci Cantrell",
      "company": "NETPLODE",
      "email": "t.cantrell@netplode.us",
      "phone": "(988) 528-2690"
    },
    {
      "isActive": true,
      "age": 48,
      "firstName": "Harmon",
      "surName": "Shields",
      "name": "Harmon Shields",
      "company": "GEEKOL",
      "email": "h.shields@geekol.tv",
      "phone": "(949) 431-3695"
    },
    {
      "isActive": false,
      "age": 39,
      "firstName": "Stanley",
      "surName": "Hardin",
      "name": "Stanley Hardin",
      "company": "PROTODYNE",
      "email": "s.hardin@protodyne.co.uk",
      "phone": "(901) 596-3426"
    },
    {
      "isActive": false,
      "age": 46,
      "firstName": "Genevieve",
      "surName": "Workman",
      "name": "Genevieve Workman",
      "company": "RECRISYS",
      "email": "g.workman@recrisys.name",
      "phone": "(935) 504-2153"
    },
    {
      "isActive": false,
      "age": 21,
      "firstName": "Laverne",
      "surName": "Spence",
      "name": "Laverne Spence",
      "company": "RECOGNIA",
      "email": "l.spence@recognia.info",
      "phone": "(851) 419-2687"
    },
    {
      "isActive": true,
      "age": 27,
      "firstName": "Doris",
      "surName": "Cooley",
      "name": "Doris Cooley",
      "company": "VIDTO",
      "email": "d.cooley@vidto.com",
      "phone": "(814) 470-2230"
    },
    {
      "isActive": false,
      "age": 36,
      "firstName": "Wiggins",
      "surName": "Stephens",
      "name": "Wiggins Stephens",
      "company": "SQUISH",
      "email": "w.stephens@squish.org",
      "phone": "(882) 442-3953"
    },
    {
      "isActive": true,
      "age": 22,
      "firstName": "Wagner",
      "surName": "Cannon",
      "name": "Wagner Cannon",
      "company": "GEOLOGIX",
      "email": "w.cannon@geologix.biz",
      "phone": "(810) 510-2692"
    },
    {
      "isActive": false,
      "age": 48,
      "firstName": "Jami",
      "surName": "Jacobs",
      "name": "Jami Jacobs",
      "company": "BRISTO",
      "email": "j.jacobs@bristo.net",
      "phone": "(981) 443-3100"
    },
    {
      "isActive": false,
      "age": 33,
      "firstName": "Gretchen",
      "surName": "Schwartz",
      "name": "Gretchen Schwartz",
      "company": "UNDERTAP",
      "email": "g.schwartz@undertap.me",
      "phone": "(963) 547-2334"
    },
    {
      "isActive": true,
      "age": 21,
      "firstName": "Raymond",
      "surName": "Ramirez",
      "name": "Raymond Ramirez",
      "company": "OZEAN",
      "email": "r.ramirez@ozean.biz",
      "phone": "(867) 595-2946"
    },
    {
      "isActive": false,
      "age": 20,
      "firstName": "Bass",
      "surName": "Bennett",
      "name": "Bass Bennett",
      "company": "EVENTEX",
      "email": "b.bennett@eventex.io",
      "phone": "(926) 552-3745"
    },
    {
      "isActive": true,
      "age": 32,
      "firstName": "Etta",
      "surName": "Noel",
      "name": "Etta Noel",
      "company": "ROCKYARD",
      "email": "e.noel@rockyard.us",
      "phone": "(926) 444-3714"
    },
    {
      "isActive": true,
      "age": 49,
      "firstName": "Francesca",
      "surName": "Pace",
      "name": "Francesca Pace",
      "company": "VINCH",
      "email": "f.pace@vinch.tv",
      "phone": "(978) 515-2900"
    },
    {
      "isActive": true,
      "age": 26,
      "firstName": "Glenn",
      "surName": "Lee",
      "name": "Glenn Lee",
      "company": "ORBAXTER",
      "email": "g.lee@orbaxter.co.uk",
      "phone": "(940) 548-3304"
    },
    {
      "isActive": false,
      "age": 41,
      "firstName": "Victoria",
      "surName": "Miller",
      "name": "Victoria Miller",
      "company": "XOGGLE",
      "email": "v.miller@xoggle.name",
      "phone": "(952) 516-2266"
    },
    {
      "isActive": true,
      "age": 34,
      "firstName": "Garner",
      "surName": "Schmidt",
      "name": "Garner Schmidt",
      "company": "BEDLAM",
      "email": "g.schmidt@bedlam.info",
      "phone": "(988) 478-3480"
    },
    {
      "isActive": true,
      "age": 20,
      "firstName": "Bartlett",
      "surName": "Haley",
      "name": "Bartlett Haley",
      "company": "YOGASM",
      "email": "b.haley@yogasm.com",
      "phone": "(809) 467-3553"
    },
    {
      "isActive": true,
      "age": 43,
      "firstName": "Lucille",
      "surName": "Waller",
      "name": "Lucille Waller",
      "company": "TOYLETRY",
      "email": "l.waller@toyletry.org",
      "phone": "(813) 560-2878"
    },
    {
      "isActive": false,
      "age": 24,
      "firstName": "Dolly",
      "surName": "Mejia",
      "name": "Dolly Mejia",
      "company": "MELBACOR",
      "email": "d.mejia@melbacor.biz",
      "phone": "(881) 430-3322"
    },
    {
      "isActive": true,
      "age": 47,
      "firstName": "Brandi",
      "surName": "Mcdonald",
      "name": "Brandi Mcdonald",
      "company": "UNQ",
      "email": "b.mcdonald@unq.net",
      "phone": "(825) 471-2775"
    },
    {
      "isActive": false,
      "age": 35,
      "firstName": "Jodi",
      "surName": "Short",
      "name": "Jodi Short",
      "company": "ORONOKO",
      "email": "j.short@oronoko.me",
      "phone": "(944) 591-3260"
    },
    {
      "isActive": false,
      "age": 39,
      "firstName": "Alexis",
      "surName": "Welch",
      "name": "Alexis Welch",
      "company": "BALUBA",
      "email": "a.welch@baluba.biz",
      "phone": "(812) 584-2571"
    },
    {
      "isActive": false,
      "age": 29,
      "firstName": "Shannon",
      "surName": "Guthrie",
      "name": "Shannon Guthrie",
      "company": "EPLOSION",
      "email": "s.guthrie@eplosion.io",
      "phone": "(992) 434-3685"
    },
    {
      "isActive": false,
      "age": 26,
      "firstName": "Jeanie",
      "surName": "Nielsen",
      "name": "Jeanie Nielsen",
      "company": "OBLIQ",
      "email": "j.nielsen@obliq.us",
      "phone": "(819) 487-3460"
    },
    {
      "isActive": true,
      "age": 30,
      "firstName": "Anita",
      "surName": "Delaney",
      "name": "Anita Delaney",
      "company": "ZENSURE",
      "email": "a.delaney@zensure.tv",
      "phone": "(882) 536-3319"
    },
    {
      "isActive": true,
      "age": 49,
      "firstName": "Latisha",
      "surName": "Myers",
      "name": "Latisha Myers",
      "company": "MICRONAUT",
      "email": "l.myers@micronaut.co.uk",
      "phone": "(922) 542-2331"
    },
    {
      "isActive": false,
      "age": 38,
      "firstName": "Chandra",
      "surName": "Hall",
      "name": "Chandra Hall",
      "company": "EPLODE",
      "email": "c.hall@eplode.name",
      "phone": "(960) 427-2010"
    },
    {
      "isActive": true,
      "age": 31,
      "firstName": "Fran",
      "surName": "Kent",
      "name": "Fran Kent",
      "company": "DAISU",
      "email": "f.kent@daisu.info",
      "phone": "(883) 564-3961"
    },
    {
      "isActive": false,
      "age": 36,
      "firstName": "Ida",
      "surName": "Everett",
      "name": "Ida Everett",
      "company": "IDEGO",
      "email": "i.everett@idego.com",
      "phone": "(800) 515-3182"
    },
    {
      "isActive": false,
      "age": 44,
      "firstName": "Aisha",
      "surName": "Elliott",
      "name": "Aisha Elliott",
      "company": "UNIWORLD",
      "email": "a.elliott@uniworld.org",
      "phone": "(910) 459-2379"
    },
    {
      "isActive": false,
      "age": 20,
      "firstName": "Darcy",
      "surName": "Goff",
      "name": "Darcy Goff",
      "company": "TINGLES",
      "email": "d.goff@tingles.biz",
      "phone": "(975) 407-3451"
    },
    {
      "isActive": false,
      "age": 28,
      "firstName": "Phillips",
      "surName": "Osborne",
      "name": "Phillips Osborne",
      "company": "ZANYMAX",
      "email": "p.osborne@zanymax.net",
      "phone": "(940) 570-3022"
    },
    {
      "isActive": true,
      "age": 38,
      "firstName": "Maura",
      "surName": "Curry",
      "name": "Maura Curry",
      "company": "PLAYCE",
      "email": "m.curry@playce.me",
      "phone": "(889) 546-2653"
    },
    {
      "isActive": true,
      "age": 48,
      "firstName": "Ella",
      "surName": "Perez",
      "name": "Ella Perez",
      "company": "GALLAXIA",
      "email": "e.perez@gallaxia.biz",
      "phone": "(986) 456-3694"
    },
    {
      "isActive": false,
      "age": 48,
      "firstName": "Lelia",
      "surName": "Holden",
      "name": "Lelia Holden",
      "company": "CEPRENE",
      "email": "l.holden@ceprene.io",
      "phone": "(992) 585-2800"
    },
    {
      "isActive": false,
      "age": 48,
      "firstName": "Kaitlin",
      "surName": "Mcgowan",
      "name": "Kaitlin Mcgowan",
      "company": "ISOTERNIA",
      "email": "k.mcgowan@isoternia.us",
      "phone": "(988) 421-2957"
    },
    {
      "isActive": true,
      "age": 24,
      "firstName": "Dillard",
      "surName": "Monroe",
      "name": "Dillard Monroe",
      "company": "DIGIFAD",
      "email": "d.monroe@digifad.tv",
      "phone": "(879) 583-3097"
    },
    {
      "isActive": false,
      "age": 50,
      "firstName": "Tracey",
      "surName": "Drake",
      "name": "Tracey Drake",
      "company": "PYRAMI",
      "email": "t.drake@pyrami.co.uk",
      "phone": "(896) 478-2129"
    },
    {
      "isActive": true,
      "age": 47,
      "firstName": "Carlene",
      "surName": "Jefferson",
      "name": "Carlene Jefferson",
      "company": "INTERGEEK",
      "email": "c.jefferson@intergeek.name",
      "phone": "(948) 458-2220"
    },
    {
      "isActive": false,
      "age": 44,
      "firstName": "Guerrero",
      "surName": "Ortiz",
      "name": "Guerrero Ortiz",
      "company": "MANGELICA",
      "email": "g.ortiz@mangelica.info",
      "phone": "(802) 476-2421"
    },
    {
      "isActive": false,
      "age": 27,
      "firstName": "Nolan",
      "surName": "Reed",
      "name": "Nolan Reed",
      "company": "MUSANPOLY",
      "email": "n.reed@musanpoly.com",
      "phone": "(990) 524-3335"
    },
    {
      "isActive": true,
      "age": 21,
      "firstName": "Susana",
      "surName": "Armstrong",
      "name": "Susana Armstrong",
      "company": "SONGBIRD",
      "email": "s.armstrong@songbird.org",
      "phone": "(962) 482-3927"
    },
    {
      "isActive": true,
      "age": 20,
      "firstName": "Lauri",
      "surName": "Ortega",
      "name": "Lauri Ortega",
      "company": "TALKOLA",
      "email": "l.ortega@talkola.biz",
      "phone": "(812) 514-3394"
    },
    {
      "isActive": false,
      "age": 26,
      "firstName": "Nguyen",
      "surName": "Hayes",
      "name": "Nguyen Hayes",
      "company": "MAGMINA",
      "email": "n.hayes@magmina.net",
      "phone": "(892) 443-2196"
    },
    {
      "isActive": false,
      "age": 45,
      "firstName": "Mallory",
      "surName": "Perry",
      "name": "Mallory Perry",
      "company": "ZENTRY",
      "email": "m.perry@zentry.me",
      "phone": "(876) 536-2484"
    },
    {
      "isActive": true,
      "age": 36,
      "firstName": "Kayla",
      "surName": "Browning",
      "name": "Kayla Browning",
      "company": "EXOTERIC",
      "email": "k.browning@exoteric.biz",
      "phone": "(935) 447-2307"
    },
    {
      "isActive": true,
      "age": 21,
      "firstName": "Lester",
      "surName": "Steele",
      "name": "Lester Steele",
      "company": "EARBANG",
      "email": "l.steele@earbang.io",
      "phone": "(913) 589-3369"
    },
    {
      "isActive": true,
      "age": 46,
      "firstName": "Edwina",
      "surName": "Fletcher",
      "name": "Edwina Fletcher",
      "company": "OVIUM",
      "email": "e.fletcher@ovium.us",
      "phone": "(935) 509-3982"
    },
    {
      "isActive": true,
      "age": 22,
      "firstName": "Deena",
      "surName": "English",
      "name": "Deena English",
      "company": "INCUBUS",
      "email": "d.english@incubus.tv",
      "phone": "(838) 445-2451"
    },
    {
      "isActive": false,
      "age": 40,
      "firstName": "Horn",
      "surName": "Arnold",
      "name": "Horn Arnold",
      "company": "UTARIAN",
      "email": "h.arnold@utarian.co.uk",
      "phone": "(861) 586-3211"
    },
    {
      "isActive": true,
      "age": 50,
      "firstName": "Erika",
      "surName": "Fulton",
      "name": "Erika Fulton",
      "company": "LIQUIDOC",
      "email": "e.fulton@liquidoc.name",
      "phone": "(984) 529-3204"
    },
    {
      "isActive": true,
      "age": 42,
      "firstName": "Williams",
      "surName": "Glass",
      "name": "Williams Glass",
      "company": "MANTRO",
      "email": "w.glass@mantro.info",
      "phone": "(919) 427-3955"
    },
    {
      "isActive": false,
      "age": 30,
      "firstName": "Ilene",
      "surName": "Bryant",
      "name": "Ilene Bryant",
      "company": "SINGAVERA",
      "email": "i.bryant@singavera.com",
      "phone": "(940) 520-2392"
    },
    {
      "isActive": true,
      "age": 44,
      "firstName": "Gilmore",
      "surName": "Hooper",
      "name": "Gilmore Hooper",
      "company": "SPRINGBEE",
      "email": "g.hooper@springbee.org",
      "phone": "(855) 429-2126"
    },
    {
      "isActive": true,
      "age": 24,
      "firstName": "Liz",
      "surName": "Neal",
      "name": "Liz Neal",
      "company": "RODEOLOGY",
      "email": "l.neal@rodeology.biz",
      "phone": "(936) 562-3303"
    },
    {
      "isActive": true,
      "age": 40,
      "firstName": "Pauline",
      "surName": "Wade",
      "name": "Pauline Wade",
      "company": "TEMORAK",
      "email": "p.wade@temorak.net",
      "phone": "(908) 552-2138"
    },
    {
      "isActive": false,
      "age": 47,
      "firstName": "Desiree",
      "surName": "Whitaker",
      "name": "Desiree Whitaker",
      "company": "FARMAGE",
      "email": "d.whitaker@farmage.me",
      "phone": "(982) 416-3308"
    },
    {
      "isActive": true,
      "age": 48,
      "firstName": "Castaneda",
      "surName": "Willis",
      "name": "Castaneda Willis",
      "company": "CEDWARD",
      "email": "c.willis@cedward.biz",
      "phone": "(857) 515-2909"
    },
    {
      "isActive": true,
      "age": 29,
      "firstName": "Becky",
      "surName": "Fowler",
      "name": "Becky Fowler",
      "company": "ACRODANCE",
      "email": "b.fowler@acrodance.io",
      "phone": "(899) 499-2289"
    },
    {
      "isActive": false,
      "age": 24,
      "firstName": "Elaine",
      "surName": "Franks",
      "name": "Elaine Franks",
      "company": "NORALI",
      "email": "e.franks@norali.us",
      "phone": "(910) 546-2811"
    },
    {
      "isActive": false,
      "age": 42,
      "firstName": "Georgina",
      "surName": "Curtis",
      "name": "Georgina Curtis",
      "company": "MAXEMIA",
      "email": "g.curtis@maxemia.tv",
      "phone": "(837) 500-3544"
    },
    {
      "isActive": true,
      "age": 18,
      "firstName": "Logan",
      "surName": "Humphrey",
      "name": "Logan Humphrey",
      "company": "SLOFAST",
      "email": "l.humphrey@slofast.co.uk",
      "phone": "(818) 519-3696"
    },
    {
      "isActive": false,
      "age": 22,
      "firstName": "Jaclyn",
      "surName": "Moody",
      "name": "Jaclyn Moody",
      "company": "ZEAM",
      "email": "j.moody@zeam.name",
      "phone": "(805) 405-3727"
    },
    {
      "isActive": false,
      "age": 42,
      "firstName": "Morgan",
      "surName": "Haney",
      "name": "Morgan Haney",
      "company": "COMVEYOR",
      "email": "m.haney@comveyor.info",
      "phone": "(829) 451-2521"
    },
    {
      "isActive": false,
      "age": 39,
      "firstName": "Lolita",
      "surName": "Bartlett",
      "name": "Lolita Bartlett",
      "company": "ASSISTIA",
      "email": "l.bartlett@assistia.com",
      "phone": "(887) 579-2056"
    },
    {
      "isActive": true,
      "age": 44,
      "firstName": "England",
      "surName": "Barnes",
      "name": "England Barnes",
      "company": "SYNKGEN",
      "email": "e.barnes@synkgen.org",
      "phone": "(871) 459-2665"
    },
    {
      "isActive": true,
      "age": 35,
      "firstName": "Karina",
      "surName": "Copeland",
      "name": "Karina Copeland",
      "company": "NETPLAX",
      "email": "k.copeland@netplax.biz",
      "phone": "(952) 522-2740"
    },
    {
      "isActive": true,
      "age": 39,
      "firstName": "Trisha",
      "surName": "Clay",
      "name": "Trisha Clay",
      "company": "QIMONK",
      "email": "t.clay@qimonk.net",
      "phone": "(984) 564-2397"
    },
    {
      "isActive": true,
      "age": 20,
      "firstName": "Vera",
      "surName": "Luna",
      "name": "Vera Luna",
      "company": "ZIZZLE",
      "email": "v.luna@zizzle.me",
      "phone": "(988) 515-3177"
    },
    {
      "isActive": false,
      "age": 35,
      "firstName": "Perkins",
      "surName": "Kidd",
      "name": "Perkins Kidd",
      "company": "COMBOGENE",
      "email": "p.kidd@combogene.biz",
      "phone": "(848) 567-2606"
    },
    {
      "isActive": true,
      "age": 28,
      "firstName": "June",
      "surName": "Norris",
      "name": "June Norris",
      "company": "TELEPARK",
      "email": "j.norris@telepark.io",
      "phone": "(931) 455-2177"
    },
    {
      "isActive": true,
      "age": 44,
      "firstName": "Rhodes",
      "surName": "Mckay",
      "name": "Rhodes Mckay",
      "company": "TASMANIA",
      "email": "r.mckay@tasmania.us",
      "phone": "(889) 462-3861"
    },
    {
      "isActive": true,
      "age": 23,
      "firstName": "Angeline",
      "surName": "Waters",
      "name": "Angeline Waters",
      "company": "BEADZZA",
      "email": "a.waters@beadzza.tv",
      "phone": "(969) 581-3533"
    },
    {
      "isActive": false,
      "age": 36,
      "firstName": "Johns",
      "surName": "Mcintyre",
      "name": "Johns Mcintyre",
      "company": "DOGNOSIS",
      "email": "j.mcintyre@dognosis.co.uk",
      "phone": "(967) 584-3439"
    }
  ];

  window.addEventListener('WebComponentsReady', function () {
    // console.info('WebComponent Ready'); 
    const autoCompleteElement = document.querySelector('autocomplete-element');
    autoCompleteElement.data = exampleData;
    // autoCompleteElement.source = states;
  });

})();