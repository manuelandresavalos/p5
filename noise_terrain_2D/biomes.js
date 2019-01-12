class Biomes {
	constructor(biome = -1){
		this.biomes = [];
		this.biomes.push({lowest:-20, highest:120, inc:0.05, name:'Plants'});
		this.biomes.push({lowest:-20, highest:40, inc:0.05, name:'Islands'});
		this.biomes.push({lowest: -10, highest:20, inc:0.05, name:'Ocean'});
		this.biomes.push({lowest: 45, highest:120, inc:0.05, name:'Terra'});
		this.biomes.push({lowest: 80, highest:110, inc:0.05, name:'Snow'});
		this.biomes.push({lowest: 20, highest:50, inc:0.05, name:'Sabana'});
		this.biomes.push({lowest:-20, highest:70, inc:0.05, name:'Continents'});
		this.biomes.push({lowest:-20, highest:60, inc:0.03, name:'Large Coasts'});
		this.biomes.push({lowest:-70, highest:70, inc:0.05, name:'Deeper Islands'});
		this.biomes.push({lowest: 90, highest:120, inc:0.05, name:'Glaciar'});
		this.biomes.push({lowest: 0, highest:130, inc:0.05, name:'Mountains'});

		return this.getBiome(this.selectBiome(biome));
	}
	
	selectBiome(biome = -1) {
		//Select a biome randomly
		var selectedBiome = Math.round(random(this.biomes.length - 1)); // returns 0,1,2 ... N
		return selectedBiome = biome > -1 ? biome : selectedBiome;
	}

	getBiome(biome) {
		if (biome <= this.biomes.length) {
			return this.biomes[biome];
		}
		return false;
	}
}