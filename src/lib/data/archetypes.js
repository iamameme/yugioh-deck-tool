const ARCHETYPES = [
    "Assault Mode",
    "Abyss Actor",
    "Abyss Costume",
    "Abyss Script",
    "Abyss-",
    "Advanced Crystal Beast",
    "Aesir",
    "Aether",
    "Alchemy Beast",
    "Alien",
    "Alligator",
    "Allure Queen",
    "Ally of Justice",
    "Altergeist",
    "Amazoness",
    "Amorphage",
    "Ancient",
    "Ancient Gear",
    "Ancient Gear",
    "Angel",
    "Anti",
    "Apoqliphort",
    "Aquaactress",
    "Aquarium",
    "Arcana Force",
    "Archfiend",
    "Armed Dragon",
    "Armor Canine",
    "Aroma",
    "Artifact",
    "Artorigus",
    "Assassin",
    "Assault Blackwing",
    "Astral",
    "Atlandis",
    "Atlantean",
    "Attack B",
    "B.E.S.",
    "Baby",
    "Bamboo Sword",
    "Barian",
    "Barian's",
    "Batteryman",
    "Battleguard",
    "Battlewasp",
    "Battlin' Boxer",
    "Beast's Battle",
    "Beastborg",
    "Black Luster Soldier",
    "Blackwing",
    "Blackwing Tamer",
    "Blaze Accelerator",
    "Blue-Eyes",
    "Bonding",
    "Borrel",
    "Bounzer",
    "Brandish",
    "Brandish Maiden",
    "Bujin",
    "Burning Abyss",
    "Buster Blader",
    "Butterfly",
    "ButterspyC",
    "C",
    "Carrier",
    "Cat",
    "C cont.",
    "Cat Girl",
    "Celestial",
    "Celtic Guard",
    "Cenozoic",
    "Cenozoic Fossil Knight",
    "Champion",
    "Change",
    "Chaos",
    "Charmer",
    "Chemicritter",
    "Chronomaly",
    "Chrysalis",
    "Cicada",
    "Cipher",
    "Clear",
    "Clear Wing",
    "Clock Knight",
    "Cloudian",
    "Code Talker",
    "Comics Hero",
    "Constellar",
    "Cookpal",
    "Crystal",
    "Crystal Beast",
    "Crystron",
    "Cubic",
    "Cubic Seed",
    "CXyz",
    "Cyber",
    "Cyber Angel",
    "Cyber Dragon",
    "Cyberdark",
    "Cyberdark",
    "CyberneticD",
    "D/D",
    "D/D/D",
    "Dante",
    "Dark Contract",
    "Dark Magician",
    "Dark Magician Girl",
    "Dark Mummy",
    "Dark Scorpion",
    "Dark Tuner",
    "Dark World",
    "Darklord",
    "Darkness",
    "Dart",
    "Deskbot",
    "Destiny HERO",
    "Destruction Sword",
    "Dice",
    "Dinomist",
    "Dizzy",
    "Djinn",
    "Dododo",
    "Dog",
    "Doll",
    "Doll Monster",
    "Doll Part",
    "Doodle",
    "Doodle Beast",
    "Dracoslayer",
    "Dracoverlord",
    "Dragunity",
    "Druid",
    "Duel Dragon",
    "Duston",
    "D cont.",
    "DysonE",
    "Earth",
    "Earthbound",
    "Earthbound Immortal",
    "Earthbound Servant",
    "Eco Spell",
    "Edge Imp",
    "Elder Entity",
    "Elemental HERO",
    "Elemental Lord",
    "Elementsaber",
    "Elf",
    "Emissary of Darkness",
    "Empowered Warrior",
    "Evolsaur",
    "Evoltile",
    "Evolzar",
    "Exodia",
    "Eyes RestrictF",
    "F.A.",
    "Fabled",
    "Fairy",
    "Familiar-Possessed",
    "Fire Fist",
    "Fire Formation",
    "Fire King",
    "Fire King Avatar",
    "Fishborg",
    "Flamvell",
    "Flower Cardian",
    "Fluffal",
    "Forbidden Beast",
    "Forbidden One",
    "Fortune Fairy",
    "Fortune Lady",
    "Fossil",
    "Frightfur",
    "Frog",
    "Fusion",
    "Fusion DragonG",
    "Gadget",
    "Gagaga",
    "Gaia The Fierce Knight",
    "Galaxy",
    "Galaxy-Eyes",
    "Galaxy-Eyes Tachyon Dragon",
    "Gandora",
    "Geargia",
    "Geargiano",
    "Gem-",
    "Gem-Knight",
    "Gem-Knight Lady",
    "Genex",
    "Ghostrick",
    "Gimmick Puppet",
    "Gishki",
    "Gladiator Beast",
    "Goblin",
    "Gogogo",
    "Gorgonic",
    "Gottoms",
    "Gouki",
    "Goyo",
    "Granel",
    "Gravekeeper's",
    "Graydle",
    "Guard",
    "Guardian",
    "Gusto",
    "Guts MasterH",
    "Hand",
    "Harpie",
    "Hazy",
    "Hazy Flame",
    "Heart Monster",
    "Heavy Industry",
    "Helixx",
    "Hell",
    "Heraldic",
    "Heraldic Beast",
    "Heraldry",
    "HERO",
    "Heroic",
    "Heroic Challenger",
    "Heroic Champion",
    "Hi-Speedroid",
    "Hieratic",
    "Hole",
    "Horus the Black Flame Dragon",
    "HunderI",
    "Ice Barrier",
    "Igknight",
    "Infernity",
    "Infernoid",
    "Infestation",
    "Inmato",
    "Inu",
    "Invoked",
    "Inzektor",
    "Iron Chain",
    "IvyJ",
    "Jester",
    "Jester Puppet",
    "Jinzo",
    "Junk",
    "Junk Robot",
    "Jurrac",
    "JutteK",
    "Kabuki Stage",
    "Kaiju",
    "Karakuri",
    "King",
    "Knight",
    "Koa'ki Meiru",
    "Koala",
    "Kozmo",
    "Krawler",
    "Kuriboh L",
    "Lamp",
    "Landstar",
    "Laundsallyn",
    "Laval",
    "Legendary Dragon",
    "Legendary Knight",
    "Lightsworn",
    "Line Monster",
    "Lswarm",
    "Lunalight",
    "LV",
    "LyriluscM",
    "Machina",
    "Madolche",
    "Magic Elf",
    "M cont.",
    "Magical Musket",
    "Magician",
    "Magician (manga)",
    "Magician Girl",
    "Magna Warrior",
    "Magnet",
    "Magnet Warrior",
    "Majespecter",
    "Majestic",
    "Malefic",
    "Malicevorous",
    "Mantis",
    "Masked HERO",
    "Mecha Phantom Beast",
    "Mekk-Knight",
    "Meklord",
    "Meklord Army",
    "Meklord Emperor",
    "Melodious",
    "Melodious Maestra",
    "Melodious Songstress",
    "Mermail",
    "Mesozoic",
    "Mesozoic Fossil Knight",
    "Metalfoes",
    "Metaphys",
    "Mirror Imagine",
    "Mist Valley",
    "Monarch",
    "Monarch",
    "Morphtronic",
    "Mosquito",
    "Motor",
    "Mythical BeastN",
    "Naturia",
    "Necrovalley",
    "Neko",
    "Nekroz",
    "Neo-Spacian",
    "Neos",
    "Nimble",
    "Ninja",
    "Ninjitsu Art",
    "Nitro",
    "Noble Arms",
    "Noble Knight",
    "Nordic",
    "Nordic Alfar",
    "Nordic Ascendant",
    "Nordic Beast",
    "Nordic Relic",
    "Number",
    "Number 10X",
    "Number 39: Utopia",
    "Number C",
    "Number C10X",
    "Number C39",
    "Number C39: Utopia Ray",
    "Number S",
    "Numeron",
    "NumeroniusO",
    "Odd-Eyes",
    "Ojama",
    "Old Entity",
    "Outer EntityP",
    "Paleozoic",
    "Paleozoic",
    "P cont.",
    "Paleozoic Fossil Knight",
    "Papillon",
    "Parasite",
    "Parshath",
    "Pendulum",
    "Pendulum Dragon",
    "Pendulumgraph",
    "Pendulumstatue",
    "Penguin",
    "Performage",
    "Performapal",
    "Phantasm Spiral",
    "Phantom Beast",
    "Phantom Butterfly",
    "Phantom Knights",
    "Photon",
    "Photon",
    "Pixie",
    "Polymerization",
    "Power Tool",
    "Predap",
    "Predaplant",
    "Prediction Princess",
    "Priestess",
    "Prophecy",
    "PSY-Frame",
    "PuppetQ",
    "Qli",
    "Quiz",
    "Quiz PanelR",
    "R-Genex",
    "Raccoon",
    "Raidraptor",
    "Rank-Up-Magic",
    "Reactor",
    "Red",
    "Red Dragon Archfiend",
    "Red-Eyes",
    "Reptilianne",
    "Resonator",
    "Ritual Beast",
    "Ritual Beast Tamer",
    "Ritual Beast Ulti-",
    "Roid",
    "Rokket",
    "Rose",
    "Royal CookpalS",
    "Saber",
    "Scrap",
    "Seal",
    "Secret Six Samurai",
    "Shaddoll",
    "Shaman",
    "Shark",
    "Shien",
    "Shining",
    "Shiranui",
    "Silent Magician",
    "Silent Swordsman",
    "Six Samurai",
    "Skiel",
    "Skiel Attack",
    "Sky",
    "Skyblaster",
    "Skyfang Brigade",
    "Skyscraper",
    "Slime",
    "Snake",
    "Speed Spell",
    "Speedroid",
    "Spell Spice",
    "Spellbook",
    "Sphere",
    "Sphinx",
    "Spice",
    "Spirit",
    "Spirit Gem",
    "Spirit Message",
    "Spiritual Beast",
    "Sprout",
    "SPYRAL",
    "SPYRAL GEAR",
    "SPYRAL MISSION",
    "Star Seraph",
    "Stardust",
    "Starship",
    "Starving Venom",
    "Statue",
    "Steelswarm",
    "Stellarknight",
    "Stone",
    "Strain",
    "Stray Cat",
    "Subterror",
    "Subterror Behemoth",
    "Sunavalon",
    "Sunvine",
    "Super Defense Robot",
    "Super Quant",
    "Super Quantal Mech Beast",
    "Super Quantum",
    "Superheavy",
    "Superheavy Samurai",
    "Superheavy Samurai Soul",
    "Supreme King",
    "S cont.",
    "Supreme King Dragon",
    "Supreme King Gate",
    "Sylvan",
    "Symphonic Warrior",
    "Synchro Dragon",
    "SynchronT",
    "T.G.",
    "Tachyon",
    "Tachyon Dragon",
    "Tellarknight",
    "Tentacluster",
    "The Agent",
    "The Phantom Knights",
    "The Weather",
    "Thorn Prisoner",
    "Timelord",
    "Tindangle",
    "Toon",
    "Top",
    "Toy",
    "Trap Hole",
    "Trap Monster",
    "Traptrix",
    "Triamid",
    "Trickstar",
    "Troymare",
    "True DracoU",
    "U.A.",
    "Ultimate Crystal",
    "Umbral Horror",
    "Utopia",
    "UtopicV",
    "Valkyrie",
    "Vampire",
    "Vehicroid",
    "Vendread",
    "V cont.",
    "Venom",
    "Vigilante",
    "Vision HERO",
    "Void",
    "Volcanic",
    "VylonW",
    "Warrior",
    "Watt",
    "White",
    "White Knight",
    "Wicked Rune",
    "Wind-Up",
    "Windwitch",
    "Winged Kuriboh",
    "Wisel",
    "Wisel Attack",
    "Wisel Guard",
    "Wisel Top",
    "World Chalice",
    "World Legacy",
    "WormX",
    "X-Saber",
    "Xyz",
    "Xyz DragonY",
    "Yang Zing",
    "Yomi",
    "Yosenju",
    "Yubel Z",
    "Z-ONE",
    "Zefra",
    "Zombie counterpart",
    "Zoodiac",
    "Zubaba",
    "ZW -"
];

export { ARCHETYPES };
