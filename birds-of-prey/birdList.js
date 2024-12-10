const birdList = [
    {
        manufacturer: "Lockheed Martin",
        type: "fighter jet",
        model: "F-22 Raptor",
        dimensions: {
            length: "62’ (18.9 m)",
            wingspan: "44’ (13.4 m)"
        },
        image: {
            src: "assets/jets/F-22.png",
            width: "200px"
        },
        behavior: "Stealthy and rarely spotted except by those specifically watching. Specializes in attacking aerial prey but will strike ground targets if necessary.",
        sound: {
            audioId: "f-22-audio",
            src: "assets/sounds/F-22-sound.mp3"
        },
        origin: {
            country: "United States",
            flagSrc: "assets/SVG/map/usa.svg"
        }
    },

    {
        manufacturer: "Lockheed Martin",
        type: "fighter jet",
        model: "F-16 FIGHTER FALCON",
        dimensions: {
            length: "47’ 8” (14.5 m)",
            wingspan: "31’ (9.5 m)"
        },
        image: {
            src: "assets/jets/F-16.png",
            width: "200px"
        },
        behavior: "One of the most frequently observed birds of prey on the Gaza strip, the F-16 is often found carrying and dropping both bombs and missiles for precision strikes.",
        sound: {
            audioId: "f-16-audio",
            src: "assets/sounds/F-16-sound.mp3"
        },
        origin: {
            country: "United States",
            flagSrc: "assets/SVG/map/usa.svg"
        }
    },

    {
        manufacturer: "Lockheed Martin",
        type: "fighter jet",
        model: "F-35I ADIR",
        dimensions: {
            length: "51’4” (15.7 m)",
            wingspan: "35’ (10.7 m)"
        },
        image: {
            src: "assets/jets/F- 35I.png",
            width: "200px"
        },
        behavior: "Flies stealthily to avoid enemy detection. Can be seen gathering intelligence on surveillance missions, and often used to intercept and strike down aerial prey.",
        sound: {
            audioId: "f-35-audio",
            src: "assets/sounds/F-35-sound.mp3"
        },
        origin: {
            country: "United States",
            flagSrc: "assets/SVG/map/usa.svg"
        }
    },

    {
        manufacturer: "Boeing",
        type: "fighter jet",
        model: "F-15I RA’AM",
        dimensions: {
            length: "68’ 8” (19.5 m)",
            wingspan: "44’ (13.4 m)"
        },
        image: {
            src: "assets/jets/F-15.png",
            width: "200px"
        },
        behavior: "Highly migratory and often spotted far from home base. Active during both day and night and in any weather condition, most commonly seen destroying ground targets.",
        sound: {
            audioId: "f-15-audio",
            src: "assets/sounds/F-15-sound.mp3"
        },
        origin: {
            country: "United States",
            flagSrc: "assets/SVG/map/usa.svg"
        }
    },

    {
        manufacturer: "Lockheed Martin",
        type: "Transport & Cargo",
        model: "C-130J Super Hercules",
        dimensions: {
            length: "97’ 9” (29.8 m)",
            wingspan: "132’ 7” (40.4 m)"
        },
        image: {
            src: "assets/jets/C-130J.png",
            width: "200px"
        },
        behavior: "High adaptability to harsh environments with long haul capabilities; can be seen transporting troops, vehicles, or humanitarian aid up to 44,000 lbs (20,000 kg).",
        sound: {
            audioId: "c-130-audio",
            src: "assets/sounds/C-130-sound.mp3"
        },
        origin: {
            country: "United States",
            flagSrc: "assets/SVG/map/usa.svg"
        }
    },

    {
        manufacturer: "Boeing",
        type: "Attack Helicopter",
        model: "AH-64 Apache",
        dimensions: {
            length: "48’ 2” (14.7 m)",
            wingspan: "48’ (14.6 m)"
        },
        image: {
            src: "assets/jets/ah-64.png",
            width: "200px"
        },
        behavior: "Highly aggressive and predatory, armed with cannon, missiles, and rockets. Can be seen hovering in place, performing quick piviots or rapid acceleration to engage targets.",
        sound: {
            audioId: "ah-64-audio",
            src: "assets/sounds/AH-64-sound.mp3"
        },
        origin: {
            country: "United States",
            flagSrc: "assets/SVG/map/usa.svg"
        }
    },

    {
        manufacturer: "Sikorsky",
        type: "Multirole Helicopter",
        model: "UH-60 BLACK HAWK",
        dimensions: {
            length: "51’ (15.3 m)",
            wingspan: "53’ 8” (16.9 m)"
        },
        image: {
            src: "assets/jets/UH-60.png",
            width: "200px"
        },
        behavior: "Primarily used as a troop carrier and logistical support, Black Hawk is agile with a low detectability.",
        sound: {
            audioId: "uh-60-audio",
            src: "assets/sounds/UH-60-sound.mp3"
        },
        origin: {
            country: "United States",
            flagSrc: "assets/SVG/map/usa.svg"
        }
    },

    {
        manufacturer: "Boeing",
        type: "Transport & Cargo",
        model: "C-17 GLOBE MASTER III",
        dimensions: {
            length: "174’ (53 m)",
            wingspan: "165’ (50.3 m)"
        },
        image: {
            src: "assets/jets/C-17.png",
            width: "200px"
        },
        behavior: "Most comfortable at lower altitudes, exhibits diverse range of delivery behavior from troops to military pallets and helicopters. Can carry up to 170,900 lbs (77,500 kg).",
        sound: {
            audioId: "c-17-audio",
            src: "assets/sounds/C-17-sound.mp3"
        },
        origin: {
            country: "United States",
            flagSrc: "assets/SVG/map/usa.svg"
        }
    },

    {
        manufacturer: "Boeing",
        type: "Multirole",
        model: "707",
        dimensions: {
            length: "152’ 9” (46.6 m)",
            wingspan: "142’ 3” (43.4 m)"
        },
        image: {
            src: "assets/jets/707.png",
            width: "200px"
        },
        behavior: "Formerly civilian, the 707 has been adapted for military use. It specializes in aerial refueling, and can often be seen extending its aerial boom in air to link up with others.",
        sound: {
            audioId: "707-audio",
            src: "assets/sounds/707-sound.mp3"
        },
        origin: {
            country: "United States",
            flagSrc: "assets/SVG/map/usa.svg"
        }
    },

    {
        manufacturer: "Elbit Systems",
        type: "Drone",
        model: "HERMES 450",
        dimensions: {
            length: "20’ (6.1 m)",
            wingspan: "34’5” (10.5 m)"
        },
        image: {
            src: "assets/drones/hermes-450.png",
            width: "200px"
        },
        behavior: "Most comfortable at low- to medium- altitudes, it can be seen patrolling vast areas far from base. One of the first of its kind to evolve to bear arms and conduct strikes.",
        sound: {
            audioId: "hermes-450-audio",
            src: "assets/sounds/hermes-450-sound.mp3"
        },
        origin: {
            country: "Israel",
            flagSrc: "assets/SVG/map/Israel.svg"
        }
    },

    {
        manufacturer: "Elbit Systems",
        type: "Drone",
        model: "HERMES 900",
        dimensions: {
            length: "27’ (8.2 m)",
            wingspan: "49’ (14.9 m)"
        },
        image: {
            src: "assets/drones/hermes-900.png",
            width: "200px"
        },
        behavior: "Larger and more capable than the Hermes 450, Hermes 900 can be seen circling target areas in wide, controlled orbits for continuous observation and conducting strikes.",
        sound: {
            audioId: "hermes-900-audio",
            src: "assets/sounds/hermes-900-sound.mp3"
        },
        origin: {
            country: "Israel",
            flagSrc: "assets/SVG/map/Israel.svg"
        }
    },

    {
        manufacturer: "Israel Aerospace Industries",
        type: "Drone",
        model: "HERON TP",
        dimensions: {
            length: "45’9” (14 m)",
            wingspan: "85’3” (26 m)"
        },
        image: {
            src: "assets/drones/heron-tp.png",
            width: "200px"
        },
        behavior: "Faster and larger than Heron 1, Heron TP cruises at high altitudes conducting surveillance, damage assessmnet, aerial refuelling, intelligence gathering, and missile defence.",
        sound: {
            audioId: "herontp-audio",
            src: "assets/sounds/herontp-sound.mp3"
        },
        origin: {
            country: "Israel",
            flagSrc: "assets/SVG/map/Israel.svg"
        }
    },

    {
        manufacturer: "Israel Aerospace Industries",
        type: "Drone",
        model: "HERON 1",
        dimensions: {
            length: "27’11” (8.5 m)",
            wingspan: "54’6” (16.6 m)"
        },
        image: {
            src: "assets/drones/heron-1.png",
            width: "200px"
        },
        behavior: "Active day and night and in all weather conditions, the Heron 1 is hard to spot in the air. Its presence signifies ongoing surveillance but can also conduct targeted strikes.",
        sound: {
            audioId: "heron1-audio",
            src: "assets/sounds/heron1-sound.mp3"
        },
        origin: {
            country: "Israel",
            flagSrc: "assets/SVG/map/Israel.svg"
        }
    },

    {
        manufacturer: "General Atomics",
        type: "Drone",
        model: "MQ-9 REAPER",
        dimensions: {
            length: "36’ (11 m)",
            wingspan: "66’ (20 m)"
        },
        image: {
            src: "assets/drones/mq-9.png",
            width: "200px"
        },
        behavior: "A large predator known for steady, loitering flight patterns, specializing in both surveillance and strike operations. Commonly seen with Hellfire missiles.",
        sound: {
            audioId: "mq-9-audio",
            src: "assets/sounds/mq-9-sound.mp3"
        },
        origin: {
            country: "United States",
            flagSrc: "assets/SVG/map/usa.svg"
        }
    },

    {
        manufacturer: "XTEND",
        type: "Drone",
        model: "XTENDER",
        dimensions: {
            length: "11.8” (30 cm)",
            wingspan: "11.8” (30 cm)"
        },
        image: {
            src: "assets/drones/xtender.png",
            width: "200px"
        },
        behavior: "Frequently appears in close quarters combat, used to probe unfamilar locations. Can hover in place, ascend or descend rapidly and navgate narrow passages.",
        sound: {
            audioId: "xtender-audio",
            src: "assets/sounds/xtender-sound.mp3"
        },
        origin: {
            country: "Israel",
            flagSrc: "assets/SVG/map/israel.svg"
        }
    },


    {
        manufacturer: "DJI",
        type: "Drone",
        model: "MATRICE 600",
        dimensions: {
            length: "65.7” (167 cm)",
            wingspan: "59.8” (152 cm)"
        },
        image: {
            src: "assets/drones/matrice-600.png",
            width: "200px"
        },
        behavior: "Of civilian origin, the Matrice 600 has been spotted carrying a variety of millitary payloads such as tear gas grenades. It is suspected to have firing capabilities.",
        sound: {
            audioId: "matrice-600-audio",
            src: "assets/sounds/matrice-600-sound.mp3"
        },
        origin: {
            country: "China",
            flagSrc: "assets/SVG/map/China.svg"
        }
    },

    {
        manufacturer: "Rafael",
        type: "Drone",
        model: "SPIKE FIREFLY",
        dimensions: {
            length: "3.1” (8 cm)",
            wingspan: "3.1” (8 cm)"
        },
        image: {
            src: "assets/drones/spike-firefly.png",
            width: "200px"
        },
        behavior: "Most frequently spotted in close-proximity missions, Spike Firefly not only gathers intelligence, but can hurl itself towards a target and explode on impact.",
        sound: {
            audioId: "f-22-audio",
            src: "assets/sounds/F-22-sound.mp3"
        },
        origin: {
            country: "Israel",
            flagSrc: "assets/SVG/map/Israel.svg"
        }
    },




];



// ****** the folllowing is w help from chatGPT! ******
// function to render aircraft info when it's clicked
function showBirdInfo(modelName) {
    const container = document.getElementById('bird-info-container');
    const template = document.getElementById('bird-template').content;

    // check if an entry is open
    if (container.getAttribute('bird-active') === modelName) {
        container.innerHTML = '';
        container.removeAttribute('bird-active');
        return;
    }
    container.innerHTML = '';
    container.setAttribute('bird-active', modelName);

    // Find the aircraft data by model name
    const bird = birdList.find(bird => bird.model === modelName);

    if (bird) {
        const birdClone = document.importNode(template, true);

        // Populate template with aircraft data
        birdClone.querySelector("h2:first-of-type").textContent = bird.manufacturer;
        birdClone.querySelector("h2:last-of-type").textContent = bird.type;
        birdClone.querySelector("h1").textContent = bird.model;
        birdClone.querySelector(".info-dimensions div:nth-child(1) p").textContent = bird.dimensions.length;
        birdClone.querySelector(".info-dimensions div:nth-child(2) p").textContent = bird.dimensions.wingspan;
        birdClone.querySelector("figure img").src = bird.image.src;
        birdClone.querySelector("figure img").width = bird.image.width;
        birdClone.querySelector(".behavior-description p").textContent = bird.behavior;
        birdClone.querySelector(".sound-description button").setAttribute('onclick', `playAudio('${bird.sound.audioId}')`);
        birdClone.querySelector(".sound-description audio").id = bird.sound.audioId;
        birdClone.querySelector(".sound-description audio source").src = bird.sound.src;
        birdClone.querySelector(".point-of-origin p").textContent = bird.origin.country;
        birdClone.querySelector(".point-of-origin img").src = bird.origin.flagSrc;

        // Append the populated template to the container
        container.appendChild(birdClone);
    }
}


// function to play the audio
function playAudio(audioId) {
    const audioFile = document.getElementById(audioId);
    if (audioFile) {
        audioFile.play();
    }
}

