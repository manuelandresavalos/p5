class TerrainGenerator {
	constructor(biome = {}, canvasW = 600, canvasH = 600, cellSize = 10) {
		this.canvasW = canvasW;
		this.canvasH = canvasH;
		this.cellSize = cellSize;
		this.xoff = 0;
		this.yoff = 0;
		this.cells = [];
		this.biome = biome;
	}

	generate(){
		this.xoff = 0;
		for (var x = 0; x < this.canvasW/this.cellSize; x++) {
			this.cells[x] = [];
			this.yoff = 0;
			for (var y = 0; y < this.canvasH/this.cellSize; y++) {
				var noiseValue = noise(this.xoff, this.yoff);
				var lowest = this.biome.lowest;
				var highest = this.biome.highest;
				var randomNoise = map(noiseValue, 0, 1, lowest, highest);
				var typeLevel = Math.ceil(randomNoise / 10);

				this.cells[x][y] = new Cell({
					x:x, 
					y:y,
					size:this.cellSize,
					typeLevel:typeLevel
				});
				
				this.yoff += this.biome.inc;
			}
			this.xoff += this.biome.inc;
		}

		return this.cells;
	}

	show(){
		for (var x = 0; x < this.canvasW/this.cellSize; x++) {
			for (var y = 0; y < this.canvasH/this.cellSize; y++) {
				this.cells[x][y].show();
			}
		}
	}
}