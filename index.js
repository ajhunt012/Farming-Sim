// Player object
var player = {
    name: "John Doe",
    level: 1,
    health: 100,
    gold: 500,
    inventory: {
        seeds: {
            spring: {
                wheat: 10,
                oats: 10,
                lettuce: 10
            },
            summer: {
                corn: 10,
                tomato: 10,
                watermelon: 10
            },
            fall: {
                pumpkin: 10,
                potatoes: 10,
                carrots: 10
            },
            winter: {
                broccoli: 10,
                cauliflower: 10,
                onion: 10
            }
        },
        fishing_rod: 1,
        pickaxe: 1,
        weapons: {
            sword: 1,
            bow: 1
        },
        fish: [],
        ores: []
    },
    farm: {
        land: 10,
        crops: {
            spring: {
                wheat: 0,
                oats: 0,
                lettuce: 0
            },
            summer: {
                corn: 0,
                tomato: 0,
                watermelon: 0
            },
            fall: {
                pumpkin: 0,
                potatoes: 0,
                carrots: 0
            },
            winter: {
                broccoli: 0,
                cauliflower: 0,
                onion: 0
            }
        },
        animals: {
            cow: 0,
            chicken: 0,
            pig: 0
        }
    },
    skills: {
        farming: 1,
        fishing: 1,
        mining: 1,
        combat: 1
    },
    // function to plant crops
    plant: function(season, crop) {
        if (this.inventory.seeds[season][crop] > 0) {
            this.farm.crops[season][crop]++;
            this.inventory.seeds[season][crop]--;
            console.log("Planted " + crop + " successfully!");
        } else {
            console.log("Not enough seeds for " + crop);
        }
    },
    // function to harvest crops
    harvest: function(season, crop) {
        if (this.farm.crops[season][crop] > 0) {
            this.gold += 10;
            this.farm.crops[season][crop]--;
            console.log("Harvested " + crop + " successfully!");
        } else {
            console.log("No " + crop + " to harvest!");
        }
    },
    //fishing functionality
    fish: function() {
        if (this.inventory.fishing_rod > 0) {
            var catch = Math.floor(Math.random() * 20) + 1;
            var random_catch = Math.floor(Math.random() * 20) + 1;
            var freshwater_fishes = ["Trout", "Salmon", "Catfish", "Bass", "Carp", "Walleye", "Perch", "Muskellunge", "Pike", "Sunfish", "Crappie", "Bluegill", "Sucker", "Shad", "Sturgeon", "Catostomus", "Lamprey", "Acipenser", "Arctic Char", "Sculpin", "Kraken"];
            var metal_ores = ["Copper", "Iron", "Silver", "Gold", "Platinum", "Titanium", "Uranium", "Adamantium", "Mithril", "Orichalcum"];
            if (catch > 10) {
                if(random_catch < 2){
                    var random_object = "treasure";
                    this.inventory.random_object.push(random_object);
                    console.log("Caught a treasure!");
                } else {
                    var fish = freshwater_fishes[Math.floor(Math.random()*freshwater_fishes.length)];
                    this.inventory.fish.push(fish);
                    console.log("Caught a " + fish + "!");
                }
            } else {
                console.log("Nothing caught.");
            }
        } else {
            console.log("No fishing rod!");
        }
    },
    // function to mine
    mine: function() {
        if (this.inventory.pickaxe > 0) {
            var ore = Math.floor(Math.random() * 10) + 1;
            if (ore > 5) {
                var mined_ore = metal_ores[Math.floor(Math.random()*metal_ores.length)];
                this.inventory.ores.push(mined_ore);
                console.log("Mined " + mined_ore + "!");
            } else {
                console.log("Nothing mined.");
            }
        } else {
            console.log("No pickaxe!");
        }
    },
};