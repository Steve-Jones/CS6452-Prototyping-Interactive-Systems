(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib._300_key = function() {
	this.initialize(img._300_key);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,233,90);


(lib.bofa_mlblogo = function() {
	this.initialize(img.bofa_mlblogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,41);


(lib.footer_bg = function() {
	this.initialize(img.footer_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,495,90);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.txt3a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmA6IAAhzIAdAAQAHAAAEABQAGABAFADIAJAFIAGAHIAFAJIAEAKQACAKAAALQAAAPgCAHQgFAOgFAFIgHAHIgIAGIgLADIgLABgAgXAvIALAAIAKgBQAGgCAFgEIAGgGQADgDABgFIAEgLIABgOIgBgOIgDgLQgDgHgHgIQgHgGgOgBIgMAAg");
	this.shape.setTransform(259.7,8.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgfA6IAAhzIA9AAIAAALIguAAIAAAmIAoAAIAAAKIgoAAIAAAtIAwAAIAAALg");
	this.shape_1.setTransform(247,8.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHA6IAAhoIgdAAIAAgLIBJAAIAAALIgdAAIgBBog");
	this.shape_2.setTransform(234.6,8.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgDA7IgJgDIgIgFIgGgHQgDgFgEgOQgCgKAAgOQAAgKACgJQABgHAGgNIAGgIIAIgHIAKgEQAFgCAGAAQAIAAAHACQAGADAFADIgFAKQgFgEgFgBIgKgBQgIAAgEADQgGAEgEAHQgEAGgBAJQgCAJAAAKIABASQABAJADAGQAEAHAFADQAGAEAIAAIALgCQAGgCAGgCIAEAKQgFAEgIACQgIACgIAAIgKgBg");
	this.shape_3.setTransform(222.7,8.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfA6IAAhzIA9AAIAAALIguAAIAAAmIAoAAIAAAKIgoAAIAAAtIAwAAIAAALg");
	this.shape_4.setTransform(210.7,8.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAZA6IgnhGIgJgRIgBAAIAABXIgOAAIAAhzIAPAAIAiA9IANAZIABAAIAAhWIAOAAIAABzg");
	this.shape_5.setTransform(197.2,8.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAZA6IgnhGIgIgRIgCAAIAABXIgOAAIAAhzIAPAAIAiA9IANAZIABAAIAAhWIAOAAIAABzg");
	this.shape_6.setTransform(182.9,8.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgLA7IgKgDIgIgGIgFgHQgEgFgEgNQgCgLAAgNQAAgLACgKIADgKIAFgJIAGgJIAIgGIAJgDQAGgCAGAAQAGAAAGACIAKADIAHAHIAHAIIADAJIAEAKQABAKAAAKQAAANgCAKQgEANgDAGIgHAIIgIAFQgEACgFACQgGABgFAAQgGAAgGgBgAgHgvIgHAEQgFAEgEAIQgCAGgBAKQgCAHAAAKQAAALACAJQACAIACAGQAEAHAFACQAHAEAHAAQAHAAAGgFQAGgDADgHQAEgGABgIIABgTIgBgQQgBgKgDgGQgDgIgFgEIgGgEIgJgBIgIABg");
	this.shape_7.setTransform(168.5,8.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgDA7IgJgDIgIgFIgGgHQgDgFgEgOQgCgKAAgOQAAgKACgJQABgHAGgNIAGgIIAIgHIAKgEQAFgCAGAAQAIAAAHACQAGADAFADIgFAKQgFgEgFgBIgKgBQgIAAgEADQgGAEgEAHQgEAGgBAJQgCAJAAAKIABASQABAJADAGQAEAHAFADQAGAEAIAAIALgCQAGgCAGgCIAEAKQgFAEgIACQgIACgIAAIgKgBg");
	this.shape_8.setTransform(155.4,8.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AATA6IgXgzIgQAAIAAAzIgPAAIAAhzIAgAAQAJAAAHACQAGADAFAEQAFAEACAGQACAGAAAHQAAAFgCAFQgBAFgDAEQgDAFgEABQgEAEgGABIAaA1gAgUgDIAPAAIAIgBQAFgCADgCQADgDABgEQACgEAAgGQAAgFgCgEQgBgEgEgDIgHgEIgIgBIgPAAg");
	this.shape_9.setTransform(135.5,8.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgfA6IAAhzIA9AAIAAALIguAAIAAAmIAoAAIAAAKIgoAAIAAAtIAwAAIAAALg");
	this.shape_10.setTransform(123,8.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgHA6IAAhoIgdAAIAAgLIBJAAIAAALIgdAAIgBBog");
	this.shape_11.setTransform(110.6,8.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgHA6IAAhoIgdAAIAAgLIBJAAIAAALIgdAAIgBBog");
	this.shape_12.setTransform(98.6,8.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgfA6IAAhzIA9AAIAAALIguAAIAAAmIAoAAIAAAKIgoAAIAAAtIAwAAIAAALg");
	this.shape_13.setTransform(86.9,8.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgjA6IAAhzIAiAAQAHAAAHACQAGACAEADQAFAEACAFQACAGAAAHQAAAGgDAGIgFAHQgEAEgFABIAAACQAGABAEADQAEADADAEIADAJIABAIQAAAGgDAGQgCAHgEAEQgFAEgGACQgHADgIAAgAgTAvIAQAAQAFAAAFgCQAFgCADgCIAEgHIABgJQAAgEgCgEQgBgFgDgDQgCgDgFgCQgEgCgFAAIgRAAgAgTgIIAOAAIAIAAIAHgEQADgCACgEQACgEAAgEQAAgFgCgEQgBgEgDgCIgHgEIgJgBIgOAAg");
	this.shape_14.setTransform(74.3,9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgYBAIAmh/IALAAIgmB/g");
	this.shape_15.setTransform(55.3,9.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgfA6IAAhzIA9AAIAAALIguAAIAAAmIAoAAIAAAKIgoAAIAAAtIAwAAIAAALg");
	this.shape_16.setTransform(37.4,8.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgeA6IAAhzIA+AAIAAALIgvAAIAAAnIAmAAIAAALIgmAAIAAA2g");
	this.shape_17.setTransform(25.6,8.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgHA6IAAhzIAPAAIAABzg");
	this.shape_18.setTransform(15.3,8.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgcA6IAAhzIAPAAIAABnIAqAAIAAAMg");
	this.shape_19.setTransform(6.1,8.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt3a, new cjs.Rectangle(0,0,270.7,21), null);


(lib.txt2a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhJBuIAAjbIA3AAQANABAKACQAKACAJAEQAJAEAHAHQAHAFAGAIQAFAIAEAIIAHATQAFASAAAXQgCAcgEANQgJAZgIALQgFAHgIAHQgIAFgIAFQgKAEgKACQgKACgNABgAgsBYIAVAAQAKAAAJgDQAMgCAJgIQAGgFAEgFQAGgIADgIQAEgJACgLQACgNAAgOQAAgOgCgNQgCgMgDgKQgFgMgOgPQgOgMgagBIgWAAg");
	this.shape.setTransform(349.6,50.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag8BuIAAjbIB0AAIAAAWIhXAAIAABHIBMAAIAAAUIhMAAIAABUIBcAAIAAAWg");
	this.shape_1.setTransform(326.2,50.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOBuIAAjEIg3AAIAAgXICLAAIAAAXIg4AAIAADEg");
	this.shape_2.setTransform(303.6,50.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHBuQgKgCgHgDQgIgEgGgFQgHgGgEgHQgHgKgHgZQgEgUAAgaQAAgTADgSQADgNALgYQAFgJAGgHQAHgHAIgFQAJgGAKgCQAKgDAMAAQAOAAANADQANAEAIAGIgJATQgJgGgKgCQgJgCgJAAQgPAAgKAHQgKAFgHANQgHALgEASQgDAQAAAVQAAATACAPQADARAFALQAHAMAKAGQALAHARAAQAJAAAKgCQAMgDALgFIAIATQgJAHgQAEQgOAEgRAAQgLgBgIgCg");
	this.shape_3.setTransform(281.8,50);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag7BuIAAjbIBzAAIAAAWIhWAAIAABHIBLAAIAAAUIhLAAIAABUIBaAAIAAAWg");
	this.shape_4.setTransform(259.9,50.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAuBuIhJiFIgRghIgBAAIAACmIgcAAIAAjbIAdAAIBBB1IAXAvIACAAIAAikIAcAAIAADbg");
	this.shape_5.setTransform(235.2,50.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAuBuIhJiFIgRghIgBAAIAACmIgcAAIAAjbIAdAAIBBB1IAXAvIACAAIAAikIAcAAIAADbg");
	this.shape_6.setTransform(209,50.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVBuQgKgCgIgDQgJgFgGgFQgHgGgFgIQgGgJgIgaQgEgSAAgaQAAgWAEgSIAGgUIAIgRQAFgJAHgGQAHgHAIgEQAIgFAKgDQALgCALAAQAMAAALACQAKADAJAFQAIAEAGAIQAGAGAFAIIAIASIAFATQAEASAAAVQAAAXgFATQgHAagHAKQgFAIgGAFQgHAHgIAFQgIAEgKACQgKADgLAAQgLgBgLgCgAgOhYQgHACgGAEQgKAIgHAOQgFAMgCASQgCAPAAARQAAAXACAQQADAQAHAMQAGAKALAGQAKAGAPAAQAPAAALgHQAKgHAHgMQAFgMADgRQADgPAAgTQAAgSgCgNQgCgTgFgMQgGgOgKgHQgGgFgHgCQgHgCgJAAQgHAAgIACg");
	this.shape_7.setTransform(182.7,50);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgHBuQgKgCgHgDQgIgEgGgFQgHgGgEgHQgHgKgHgZQgEgUAAgaQAAgTADgSQADgNALgYQAFgJAGgHQAHgHAIgFQAJgGAKgCQAKgDAMAAQAOAAANADQANAEAIAGIgJATQgJgGgKgCQgJgCgJAAQgPAAgKAHQgKAFgHANQgHALgEASQgDAQAAAVQAAATACAPQADARAFALQAHAMAKAGQALAHARAAQAJAAAKgCQAMgDALgFIAIATQgJAHgQAEQgOAEgRAAQgLgBgIgCg");
	this.shape_8.setTransform(158.7,50);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAjBuIgrhhIgeAAIAABhIgcAAIAAjbIA8AAQARAAANAFQANAFAJAHQAIAJAEAKQAEALAAANQAAALgDAJQgDAKgFAHQgGAJgHAEQgJAFgKAEIAwBkgAgmgHIAcAAQAKAAAGgDQAIgBAGgFQAGgFADgIQADgIAAgLQAAgKgDgIQgDgHgGgFQgGgEgIgDQgHgCgJAAIgcAAg");
	this.shape_9.setTransform(122.6,50.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag8BuIAAjbIB0AAIAAAWIhXAAIAABHIBMAAIAAAUIhMAAIAABUIBcAAIAAAWg");
	this.shape_10.setTransform(99.8,50.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgOBuIAAjEIg3AAIAAgXICKAAIAAAXIg3AAIAADEg");
	this.shape_11.setTransform(77.2,50.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgOBuIAAjEIg3AAIAAgXICLAAIAAAXIg4AAIAADEg");
	this.shape_12.setTransform(55.2,50.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag7BuIAAjbIBzAAIAAAWIhXAAIAABHIBMAAIAAAUIhMAAIAABUIBbAAIAAAWg");
	this.shape_13.setTransform(33.9,50.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhCBtIAAjZIA+AAQAPAAAMADQAMAEAJAHQAIAHAEAKQAFAKAAAMQAAANgGALQgEAHgGAGQgHAGgKAEIAAADQALADAIAGQAIAGAEAIQAFAHACAIIABAPQAAAOgEALQgFALgIAIQgJAJgMAEQgMAEgPAAgAgmBYIAfAAQALAAAJgDQAJgDAFgFQAFgFADgIQACgHAAgKQAAgIgCgIQgDgIgFgFQgFgGgIgEQgJgDgJAAIgiAAgAgmgPIAcAAQAIAAAHgCQAIgCAFgEQAHgFADgGQAEgIAAgJQAAgJgDgHQgDgHgGgEQgFgFgIgCQgIgDgKAAIgbAAg");
	this.shape_14.setTransform(10.7,50.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AguB4IBJjvIAUAAIhJDvg");
	this.shape_15.setTransform(309.3,15.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgkBtQgSgEgNgIIAHgWQASAJANADQALACAMAAQALAAAJgCQAIgCAGgFQAFgFADgHQADgHABgKQAAgKgFgHQgEgHgIgFQgGgFgKgEIgSgIIgTgHQgKgFgHgGQgIgHgEgJQgEgKgBgMQABgOAEgLQAEgLAJgIQAJgIAMgEQAMgFAOAAQAjACATAKIgHAVQgMgFgLgCQgLgCgKAAQgJAAgGACQgIACgFAEQgFAFgDAGQgCAHgBAJQABAJAEAGQAEAGAHAFQAHAFAcALIATAJQALAEAGAHQAIAHAEAKQAEAKABANQAAAPgGAMQgEALgKAJQgKAIgOAEQgNAFgQAAQgQAAgQgEg");
	this.shape_16.setTransform(276,15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAuBuIhJiGIgRggIgBAAIAACmIgcAAIAAjaIAdAAIBBB0IAXAvIACAAIAAijIAcAAIAADag");
	this.shape_17.setTransform(251.7,15.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AA0BuIgQg4IhIAAIgQA4IgcAAIBAjaIAiAAQA5DAAGAagAAfAgIgVhJIgKgnIAAAAIgMAwIgSBAIA9AAg");
	this.shape_18.setTransform(226.6,15.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag6BuIAAjaIB1AAIAAAVIhYAAIAABJIBJAAIAAAVIhJAAIAABng");
	this.shape_19.setTransform(204.8,15.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag2BuIAAjaIAdAAIAADDIBQAAIAAAXg");
	this.shape_20.setTransform(170.3,15.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag2BuIAAjaIAdAAIAADDIBQAAIAAAXg");
	this.shape_21.setTransform(149.6,15.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AA0BuIgQg4IhIAAIgQA4IgcAAIBAjaIAiAAQA5DAAGAagAAfAgIgVhJIgKgnIAAAAIgMAwIgSBAIA9AAg");
	this.shape_22.setTransform(126.4,15.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhCBtIAAjZIA+AAQAPAAAMADQAMAEAJAHQAIAHAEAKQAFAKAAAMQAAANgGALQgEAHgGAGQgHAGgKAEIAAADQALADAIAGQAIAGAEAIQAFAHACAIIABAPQAAAOgEALQgFALgIAIQgJAJgMAEQgMAEgPAAgAgmBYIAfAAQALAAAJgDQAJgDAFgFQAFgFADgIQACgHAAgKQAAgIgCgIQgDgIgFgFQgFgGgIgEQgJgDgJAAIgiAAgAgmgPIAcAAQAIAAAHgCQAIgCAFgEQAHgFADgGQAEgIAAgJQAAgJgDgHQgDgHgGgEQgFgFgIgCQgIgDgKAAIgbAAg");
	this.shape_23.setTransform(102.9,15.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag8BuIAAjaIB0AAIAAAVIhWAAIAABHIBLAAIAAAUIhLAAIAABUIBbAAIAAAWg");
	this.shape_24.setTransform(80.3,15.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgkBtQgSgEgOgIIAIgWQARAJAOADQALACANAAQAKAAAIgCQAJgCAGgFQAGgFADgHQACgHAAgKQAAgKgEgHQgEgHgIgFQgGgFgLgEIgSgIIgTgHQgKgFgGgGQgIgHgEgJQgFgKABgMQgBgOAFgLQAEgLAJgIQAJgIAMgEQAMgFAOAAQAjACAUAKIgIAVQgMgFgLgCQgLgCgLAAQgIAAgHACQgHACgFAEQgFAFgDAGQgDAHABAJQgBAJAFAGQAEAGAIAFQAGAFAdALIATAJQAJAEAHAHQAIAHAEAKQAFAKgBANQAAAPgEAMQgGALgJAJQgJAIgOAEQgOAFgQAAQgRAAgPgEg");
	this.shape_25.setTransform(57.4,15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AA0BuIgQg4IhIAAIgQA4IgcAAIBAjaIAiAAQA5DAAGAagAAfAgIgVhJIgKgnIAAAAIgMAwIgSBAIA9AAg");
	this.shape_26.setTransform(34.2,15.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhCBtIAAjZIA+AAQAPAAAMADQAMAEAJAHQAIAHAEAKQAFAKAAAMQAAANgGALQgEAHgGAGQgHAGgKAEIAAADQALADAIAGQAIAGAEAIQAFAHACAIIABAPQAAAOgEALQgFALgIAIQgJAJgMAEQgMAEgPAAgAgmBYIAfAAQALAAAJgDQAJgDAFgFQAFgFADgIQACgHAAgKQAAgIgCgIQgDgIgFgFQgFgGgIgEQgJgDgJAAIgiAAgAgmgPIAcAAQAIAAAHgCQAIgCAFgEQAHgFADgGQAEgIAAgJQAAgJgDgHQgDgHgGgEQgFgFgIgCQgIgDgKAAIgbAAg");
	this.shape_27.setTransform(10.7,15.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt2a, new cjs.Rectangle(0,0,367.5,71), null);


(lib.txt1a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkBtQgSgEgOgIIAIgWQARAJAOADQALACAMAAQALAAAIgCQAJgCAGgFQAGgFADgHQACgHAAgKQABgKgFgHQgEgHgIgFQgGgFgKgEIgTgIIgTgHQgJgFgHgGQgIgHgEgJQgFgKABgMQgBgOAFgLQAEgLAJgIQAJgIAMgEQAMgFAOAAQAjACATAKIgHAVQgMgFgLgCQgLgCgLAAQgHAAgIACQgHACgFAEQgFAFgDAGQgDAHABAJQAAAJAEAGQAEAGAIAFQAGAFAdALIATAJQAKAEAGAHQAIAHAEAKQAFAKgBANQAAAPgEAMQgGALgJAJQgJAIgOAEQgOAFgQAAQgQAAgQgEg");
	this.shape.setTransform(422.4,46);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag7BtIAAjaIBzAAIAAAVIhWAAIAABIIBLAAIAAAVIhLAAIAABTIBaAAIAAAVg");
	this.shape_1.setTransform(400.9,46.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNBtIAAjaIAbAAIAADag");
	this.shape_2.setTransform(382.1,46.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAjBtIgrhfIgeAAIAABfIgcAAIAAjaIA8AAQARABANAEQANAEAJAJQAIAHAEAMQAEALAAANQAAAKgDAKQgDAJgFAIQgGAHgHAFQgJAFgKADIAwBkgAgmgIIAcAAQAKAAAGgBQAIgDAGgEQAGgFADgIQADgIAAgLQAAgKgDgIQgDgHgGgFQgGgEgIgDQgHgCgJAAIgcAAg");
	this.shape_3.setTransform(363.8,46.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVBvQgKgCgIgFQgJgDgGgHQgHgFgFgHQgGgKgIgZQgEgUAAgZQAAgVAEgUIAGgTIAIgSQAFgIAHgGQAHgHAIgFQAIgEAKgDQALgCALgBQAMABALACQAKADAJAEQAIAGAGAHQAGAGAFAIIAIARIAFAUQAEASAAAVQAAAXgFATQgHAagHAKQgFAHgGAHQgHAGgIAEQgIAFgKACQgKADgLgBQgLAAgLgBgAgOhYQgHACgGAEQgKAHgHAPQgFAMgCASQgCAOAAATQAAAWACAQQADAQAHALQAGALALAGQAKAGAPAAQAPAAALgHQAKgGAHgNQAFgMADgQQADgPAAgUQAAgSgCgOQgCgRgFgMQgGgPgKgIQgGgEgHgCQgHgCgJAAQgHAAgIACg");
	this.shape_4.setTransform(338.2,46);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABGBtIAAiYIgCAAIg5CYIgWAAIg5iWIgBAAIAACWIgcAAIAAjZIAgAAIBBCwIABAAIBBiwIAgAAIAADZg");
	this.shape_5.setTransform(309.5,46.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag7BtIAAjaIBzAAIAAAVIhXAAIAABIIBMAAIAAAVIhMAAIAABTIBbAAIAAAVg");
	this.shape_6.setTransform(283.6,46.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABGBtIAAiYIgCAAIg5CYIgWAAIg5iWIgBAAIAACWIgcAAIAAjZIAgAAIBBCwIABAAIBBiwIAgAAIAADZg");
	this.shape_7.setTransform(256.5,46.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag6BtIAAjaIB1AAIAAAWIhYAAIAABKIBJAAIAAAUIhJAAIAABmg");
	this.shape_8.setTransform(217.6,46.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgVBvQgKgCgIgFQgJgDgGgHQgHgFgFgHQgGgKgIgZQgEgUAAgZQAAgVAEgUIAGgTIAIgSQAFgIAHgGQAHgHAIgFQAIgEAKgDQALgCALgBQAMABALACQAKADAJAEQAIAGAGAHQAGAGAFAIIAIARIAFAUQAEASAAAVQAAAXgFATQgHAagHAKQgFAHgGAHQgHAGgIAEQgIAFgKACQgKADgLgBQgLAAgLgBgAgOhYQgHACgGAEQgKAHgHAPQgFAMgCASQgCAOAAATQAAAWACAQQADAQAHALQAGALALAGQAKAGAPAAQAPAAALgHQAKgGAHgNQAFgMADgQQADgPAAgUQAAgSgCgOQgCgRgFgMQgGgPgKgIQgGgEgHgCQgHgCgJAAQgHAAgIACg");
	this.shape_9.setTransform(192.9,46);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag7BtIAAjaIBzAAIAAAVIhXAAIAABIIBMAAIAAAVIhMAAIAABTIBbAAIAAAVg");
	this.shape_10.setTransform(155.8,46.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ABGBtIAAiYIgCAAIg5CYIgWAAIg5iWIgBAAIAACWIgcAAIAAjZIAgAAIBBCwIABAAIBBiwIAgAAIAADZg");
	this.shape_11.setTransform(128.7,46.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgNBtIAAjaIAcAAIAADag");
	this.shape_12.setTransform(106,46.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgNBtIAAjEIg3AAIAAgWICJAAIAAAWIg3AAIAADEg");
	this.shape_13.setTransform(87.9,46.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag7BtIAAjaIBzAAIAAAVIhWAAIAABIIBLAAIAAAVIhLAAIAABTIBaAAIAAAVg");
	this.shape_14.setTransform(66.5,46.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag6BtIAAjaIB1AAIAAAWIhYAAIAABKIBJAAIAAAUIhJAAIAABmg");
	this.shape_15.setTransform(45,46.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgOBtIAAjaIAcAAIAADag");
	this.shape_16.setTransform(26.3,46.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag2BtIAAjaIAdAAIAADEIBQAAIAAAWg");
	this.shape_17.setTransform(9.7,46.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AA0BtIgQg3IhIAAIgQA3IgcAAIBAjaIAiAAQA5DBAGAZgAAfAhIgVhKIgKgoIAAAAIgMAxIgSBBIA9AAg");
	this.shape_18.setTransform(406,11.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgVBuQgKgBgIgFQgJgDgGgHQgHgFgFgHQgGgKgIgZQgEgUAAgZQAAgVAEgUIAGgTIAIgSQAFgIAHgGQAHgHAIgFQAIgFAKgCQALgCALgBQAMABALACQAKACAJAFQAIAGAGAHQAGAGAFAIIAIARIAFAUQAEASAAAVQAAAXgFATQgHAZgHALQgFAIgGAGQgHAGgIAEQgIAFgKACQgKADgLgBQgLAAgLgCgAgOhYQgHACgGAEQgKAIgHAOQgFAMgCASQgCAPAAASQAAAWACAQQADARAHAKQAGALALAGQAKAGAPAAQAPAAALgHQAKgHAHgMQAFgLADgRQADgPAAgUQAAgSgCgOQgCgRgFgNQgGgOgKgHQgGgFgHgCQgHgCgJAAQgHAAgIACg");
	this.shape_19.setTransform(367.3,11);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgNBtIAAjDIg3AAIAAgXICKAAIAAAXIg3AAIgBDDg");
	this.shape_20.setTransform(343.2,11.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgjBpQgOgFgIgLQgIgKgEgPQgDgNAAgSIAAiPIAcAAIAACRQAAAMACAKQADAKAEAHQAGAHAIAEQAJADAMAAQAMAAAJgDQAIgDAFgHQAGgGACgLQADgKAAgPIAAiPIAcAAIAACKQAAAUgEAPQgEAQgJAKQgJALgOAFQgOAGgTAAQgagCgJgEg");
	this.shape_21.setTransform(305.6,11.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgVBuQgKgBgIgFQgJgDgGgHQgHgFgFgHQgGgKgIgZQgEgUAAgZQAAgVAEgUIAGgTIAIgSQAFgIAHgGQAHgHAIgFQAIgFAKgCQALgCALgBQAMABALACQAKACAJAFQAIAGAGAHQAGAGAFAIIAIARIAFAUQAEASAAAVQAAAXgFATQgHAZgHALQgFAIgGAGQgHAGgIAEQgIAFgKACQgKADgLgBQgLAAgLgCgAgOhYQgHACgGAEQgKAIgHAOQgFAMgCASQgCAPAAASQAAAWACAQQADARAHAKQAGALALAGQAKAGAPAAQAPAAALgHQAKgHAHgMQAFgLADgRQADgPAAgUQAAgSgCgOQgCgRgFgNQgGgOgKgHQgGgFgHgCQgHgCgJAAQgHAAgIACg");
	this.shape_22.setTransform(279.4,11);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgPBtIAAhUIg6iGIAfAAIAbBCQALAcADAPIABAAQAEgRALgaIAdhCIAeAAIg8CFIAABVg");
	this.shape_23.setTransform(255.1,11.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgJBuQgKgCgJgDQgIgEgHgGQgGgFgFgHQgHgKgHgZQgEgTAAgaQAAgTADgSIAGgTQADgLAFgHQAFgKAHgGQAHgIAJgFQAJgFALgDQALgEAOAAQAPABAOADQAPAEAJAHIgKATQgJgGgNgDIgSgBQgRAAgLAGQgMAGgIANQgHALgEASQgEAQAAAVQAAAUACAOQADARAGAKQAGAMALAHQAGADAHACQAGACAJAAIAQgCQAJgCAHgDIAAhIIgfAAIAAgTIA6AAIAABnQgNAJgRAFQgPADgQAAQgMAAgJgCg");
	this.shape_24.setTransform(218.4,11);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAuBtIhJiEIgRghIgBABIAACkIgcAAIAAjaIAdAAIBBB1IAXAvIACAAIAAikIAcAAIAADag");
	this.shape_25.setTransform(193.3,11.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgNBtIAAjaIAcAAIAADag");
	this.shape_26.setTransform(173.1,11.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgOBtIAAjDIg2AAIAAgXICJAAIAAAXIg3AAIAADDg");
	this.shape_27.setTransform(154.9,11.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgHBuQgKgCgHgDQgIgEgGgGQgHgFgEgHQgHgKgHgZQgEgUAAgaQAAgTADgSQADgNALgYQAFgJAGgHQAHgHAIgGQAJgFAKgCQAKgEAMAAQAOAAANAFQANADAIAHIgJASQgJgFgKgDQgJgCgJAAQgPAAgKAGQgKAHgHAMQgHAMgEARQgDAQAAAVQAAAUACAOQADAQAFAMQAHAMAKAHQALAGARAAQAJAAAKgDQAMgCALgGIAIAUQgJAHgQAEQgOAEgRgBQgLAAgIgCg");
	this.shape_28.setTransform(133.1,11);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Ag8BtIAAjaIB0AAIAAAVIhWAAIAABIIBLAAIAAAVIhLAAIAABTIBbAAIAAAVg");
	this.shape_29.setTransform(111.2,11.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAuBtIhJiEIgRghIgBABIAACkIgcAAIAAjaIAdAAIBBB1IAXAvIACAAIAAikIAcAAIAADag");
	this.shape_30.setTransform(86.5,11.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAuBtIhJiEIgRghIgBABIAACkIgcAAIAAjaIAdAAIBBB1IAXAvIACAAIAAikIAcAAIAADag");
	this.shape_31.setTransform(60.3,11.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgVBuQgKgBgIgFQgJgDgGgHQgHgFgFgHQgGgKgIgZQgEgUAAgZQAAgVAEgUIAGgTIAIgSQAFgIAHgGQAHgHAIgFQAIgFAKgCQALgCALgBQAMABALACQAKACAJAFQAIAGAGAHQAGAGAFAIIAIARIAFAUQAEASAAAVQAAAXgFATQgHAZgHALQgFAIgGAGQgHAGgIAEQgIAFgKACQgKADgLgBQgLAAgLgCgAgOhYQgHACgGAEQgKAIgHAOQgFAMgCASQgCAPAAASQAAAWACAQQADARAHAKQAGALALAGQAKAGAPAAQAPAAALgHQAKgHAHgMQAFgLADgRQADgPAAgUQAAgSgCgOQgCgRgFgNQgGgOgKgHQgGgFgHgCQgHgCgJAAQgHAAgIACg");
	this.shape_32.setTransform(34,11);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgHBuQgKgCgHgDQgIgEgGgGQgHgFgEgHQgHgKgHgZQgEgUAAgaQAAgTADgSQADgNALgYQAFgJAGgHQAHgHAIgGQAJgFAKgCQAKgEAMAAQAOAAANAFQANADAIAHIgJASQgJgFgKgDQgJgCgJAAQgPAAgKAGQgKAHgHAMQgHAMgEARQgDAQAAAVQAAAUACAOQADAQAFAMQAHAMAKAHQALAGARAAQAJAAAKgDQAMgCALgGIAIAUQgJAHgQAEQgOAEgRgBQgLAAgIgCg");
	this.shape_33.setTransform(10,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt1a, new cjs.Rectangle(0,-4,463.8,71), null);


(lib.mov_BG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// BG
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(364,45,2.427,0.36);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mov_BG, new cjs.Rectangle(0,0,728,90), null);


(lib.keyart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._300_key();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.keyart, new cjs.Rectangle(0,0,233,90), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqiBjIAAjFIVFAAIAADFg");
	mask.setTransform(67.5,9.9);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAKBAIgNgqIAAAAIgHAIIAAAiIgdAAIAAh+IAdAAIAABAIAWgbIAbAAIgXAZIAYBAg");
	this.shape.setTransform(129.8,10.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAIAuIAAg/QAAgHgHgBQgDABgDAEIgCABIAABBIgdAAIAAhZIAdAAIAAANIAAAAQAJgPAQAAQAIAAAGAGQAFAFAAAJIAABHg");
	this.shape_1.setTransform(120.9,12.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfAoQgHgHAAgNQAAgRAQgHQAMgGARgBIAAgGQAAgLgHAAQgIAAgBAMIgZgFQACgMALgHQAJgGANAAQAPAAAJAHQALAGAAAOIAAAyQAAAMADACIgeAAIgBgIQgIAKgNAAQgLAAgHgHgAgFAGQgEADAAAJQAAAKAIAAQAEAAAEgGIAAgUQgIABgEADg");
	this.shape_2.setTransform(112.2,12.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRAyIgGANIgPAAIAAh+IAdAAIAAArIABAAQAGgIAKAAQAPAAAIAOQAIALAAAUQAAASgIANQgIAQgRAAQgPAAgIgOgAgHgIIgCACIAAAoQgBAMAKAAQAFAAACgGQACgFAAgOIAAgHQAAgOgBgFQgCgHgGAAQgCAAgFAEg");
	this.shape_3.setTransform(103.8,10.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglA5IAAgUIAIABQARAAgBgLIgBgIIgXhMIAeAAIAKA0IAAAAIAMg0IAXAAIgfBbQgHAYgcAAg");
	this.shape_4.setTransform(95.5,13.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgbAuIAAhZIAbAAIAAAOIAAAAQAFgQAXAAIAAAdQgGgCgGAAQgLAAgEAHIAAA5g");
	this.shape_5.setTransform(88.2,12.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdAiQgLgNABgVQgBgUALgMQAKgOATAAQATAAAMAOQAKAMAAAUQAAAVgKANQgLANgUAAQgTAAgKgNgAgIgVQgCAGAAAPQAAAdAKAAQALAAAAgdQgBgPgCgGQgCgGgGgBQgFABgDAGg");
	this.shape_6.setTransform(80.5,12.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAeAuIAAg/QABgHgIgBQgEABgDAEIgCABIAABBIgcAAIAAg/QABgHgIgBQgEABgDAEIgCABIAABBIgdAAIAAhZIAdAAIAAANIABAAQAJgPAQAAQAGAAAGAEQAFAEAAAHIABAAQAJgPAQAAQAVAAgBATIAABIg");
	this.shape_7.setTransform(69.6,12.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgcAhQgKgNAAgUQAAgUAKgMQALgOASAAQATAAAKAPQAJANAAASIAAAGIgwAAQAAAWAMAAQAMAAADgNIATAIQgBAGgHAHQgLALgRAAQgSAAgLgOgAgJgKIAVAAQAAgRgLgBQgKABAAARg");
	this.shape_8.setTransform(58.8,12.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAeAuIAAg/QABgHgIgBQgEABgDAEIgCABIAABBIgcAAIAAg/QABgHgIgBQgEABgDAEIgCABIAABBIgdAAIAAhZIAdAAIAAANIABAAQAJgPAQAAQAGAAAGAEQAFAEAAAHIABAAQAJgPAQAAQAVAAgBATIAABIg");
	this.shape_9.setTransform(47.9,12.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AguA/IAAh+IA1AAQARAAAKAJQAKAIAAAOQAAALgHAJQgGAHgLADQAbAGAAAZQAAAPgMAKQgLAKgTgBgAgNAoIALAAQAPAAAAgQQAAgQgPAAIgLAAgAgNgMIAKAAQAPAAAAgOQAAgOgOAAIgLAAg");
	this.shape_10.setTransform(36.2,10.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AglBAIAAh+IAhAAIAABnIAqAAIAAAXg");
	this.shape_11.setTransform(26.8,10.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAcBAIAAheIgBAAIgWBeIgSAAIgUhhIgBAAIAABhIgZAAIAAh+IAuAAIANBGIAAAAIAQhGIAsAAIAAB+g");
	this.shape_12.setTransform(15.8,10.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAABAIAFgkIgPAAIgFAkIgSAAIAFgkIgPAAIAAgSIASAAIACgTIgPAAIAAgSIASAAIAFgjIAQAAIgDAjIAPAAIAFgjIASAAIgFAjIANAAIAAASIgQAAIgCATIAMAAIAAASIgPAAIgFAkgAgIAKIAQAAIADgTIgQAAg");
	this.shape_13.setTransform(4.4,10.7);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,4.3,133.8,15.4), null);


(lib.flagIcon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjqBEQC5h6DTg3QAnAQAhARQjPA/i1B7QgugagigQg");
	this.shape.setTransform(38.5,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjeBFQCuh7DOhHQAkAUAdARQjBBRinCEQgqgegrgag");
	this.shape_1.setTransform(48.3,23.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhvgYIA3gNQBVAYBTAiIg5ARQhUgmhSgYg");
	this.shape_2.setTransform(39,3.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhwgWQAigMAagHQBRAYBUAnIg3AUQhTgohXgYg");
	this.shape_3.setTransform(30.2,6.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ah7AeQBdgyBlggQAfAJAWAJQhkAjhYA0Ig7gXg");
	this.shape_4.setTransform(12.4,11.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah8AeQBYgzBjgmQAbAKAjAQQhhAnhaA2QgpgVgVgJg");
	this.shape_5.setTransform(21,14.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AADAIIgDgIIgDAAIAAAIIgCAAIAAgPIAGAAIADABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAADgFAAIAFAIgAgDAAIADAAQAEAAAAgDQAAAAAAgBQgBAAAAgBQgBAAAAAAQgBAAgBAAIgDAAg");
	this.shape_6.setTransform(40.8,34.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEgAgHgHQgEADAAAEQAAAFAEADQADADAEAAQAFAAADgDQADgDAAgFQAAgEgDgDQgDgDgFAAQgEAAgDADg");
	this.shape_7.setTransform(40.7,34.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.flagIcon, new cjs.Rectangle(0,0,70.7,35.8), null);


(lib.BofA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA5BVIAAhxQAAgOgMAAQgLAAgIAKIAAB1IgzAAIAAhxQAAgOgNAAQgLAAgHAKIAAB1Ig1AAIAAilIA1AAIAAARIAAAAQAXgVAZAAQAXAAAJAWIAAAAQAVgWAbAAQARAAAKAKQALALAAAQIAACEg");
	this.shape.setTransform(132.2,26.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgzBVIAAilIAzAAIAAAXIABAAQAIgOAOgGQANgHAQAAIAAA3QgMgFgJgBQgSAAgMAOIAABqg");
	this.shape_1.setTransform(167.3,26.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAiB2IgJgwIg2AAIgKAwIg0AAIA3jrIBNAAIAzDrgAgVAdIAlAAIgQhfIgBAAg");
	this.shape_2.setTransform(110.3,23.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgzA9QgTgYAAghQAAgkATgZQAVgdAjAAQAlAAARAbQAMASAAAVIguAAQAAgNgDgIQgEgLgLAAQgLAAgFAPQgDAMAAAbQAAAcAFALQAEAKAKABQAUAAAAghIAqAHQgDAegRAQQgRAPgdAAQghAAgVgag");
	this.shape_3.setTransform(189,27.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaAYIAAgvIA1AAIAAAvg");
	this.shape_4.setTransform(177,14.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgaBTIAAilIA1AAIAAClg");
	this.shape_5.setTransform(177,27.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag1A9QgSgYAAglQAAgkATgYQAUgaAiAAQAkAAASAbQAQAYAAAkIAAALIhZAAQgBAPAFAKQAGAOAOABQAKgBAHgGQAHgHACgKIAkAOQgEAOgMAMQgUATgeAAQgkAAgUgagAgNgpQgFAJABAOIAnAAQABgigVAAQgKAAgFALg");
	this.shape_6.setTransform(152.7,27.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag6BJQgNgNAAgWQACgxBTgKIAAgOQAAgRgOAAQgQABgBAVIgugJQAEgXAUgMQARgMAYAAQAbAAASAMQAUAOAAAZIAABbQAAAXAFAEIg3AAIgCgOQgHAHgKAFQgLAGgLAAQgVAAgNgOgAgSAiQAAASAQAAQAIAAAIgLIAAglQggACAAAcg");
	this.shape_7.setTransform(204.6,27.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhTB2IAAjrIBcAAQAfAAATARQATAQAAAZQAAAVgNAPQgKALgPAGIAAACQAUAGALAPQANAQAAAWQAAAdgWARQgVARgiAAgAgZBKIAWAAQAdAAAAgeQAAgNgIgIQgIgIgNAAIgWAAgAgZgXIATAAQAPAAAIgIQAHgGAAgMQAAgagcAAIgVAAg");
	this.shape_8.setTransform(8.4,23.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AASB2IgZhJIgBAAIgLANIAAA8Ig2AAIAAjrIA2AAIAAB3IABAAIAmgxIA1AAIgsAyIAtBzg");
	this.shape_9.setTransform(59.5,23.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAPBVIAAhxQAAgPgMAAQgJAAgIALIAAB1Ig2AAIAAilIA1AAIAAARIABAAQAUgVAZAAQASAAAKALQAJAKAAASIAACCg");
	this.shape_10.setTransform(42,26.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag6BJQgNgNAAgWQACgxBTgKIAAgOQAAgRgOAAQgOABgDAVIgugJQAEgXAUgMQARgMAYAAQAbAAASAMQAUAOAAAZIAABbQAAAXAFAEIg3AAIgCgOQgQASgXAAQgVAAgNgOgAgSAiQAAASAQAAQAIAAAIgLIAAglQggACAAAcg");
	this.shape_11.setTransform(25.2,27.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgdB4IAAh/IgWAAIAAgmIAWAAIAAgTQAAgdAOgNQAOgNAaAAIAbACIAAApIgKgBQgTAAAAAPIAAARIAdAAIAAAmIgdAAIAAB/g");
	this.shape_12.setTransform(92.1,23.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag4A+QgSgXAAgnQAAgmATgYQAUgYAjAAQAkAAAUAYQATAYAAAmQAAAngTAXQgTAZglAAQgkAAgUgZgAgOgoQgEALAAAdQAAAeAEANQAFALAJgBQAKABAFgLQAEgNAAgeQAAgdgEgLQgEgMgLAAQgKAAgEAMg");
	this.shape_13.setTransform(78.2,27.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BofA, new cjs.Rectangle(0,11.4,211.8,24.4), null);


(lib.mov_buttontextLearnmore = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0073CF").s().p("AgNAjQgHgCgFgDIAEgHQAJAEAMAAQAGAAAEgCIADgEQACgCAAgDQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBgBIgDgDIgKgFIgIgDIgHgCQgEgDgBgDQgCgDAAgEQAAgFACgEQACgDADgCQADgDAFgBQAEgBAEgBIALABQAGACAEADIgEAIIgJgEIgIAAQgFAAgDACIgDADQgCACAAADQAAAEAGACIAIAEIAJADIAHADQAEADACADQACAEAAAFQAAAFgCAEQgCAEgEACQgEACgFACIgJAAIgNAAg");
	this.shape.setTransform(106.3,9.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0073CF").s().p("AgFAjIgHgCQgGgDgDgFQgEgEgCgHQgBgGAAgIIABgJQABgHAEgFIADgFIAGgEIAGgEIAIgBQAcABAAAgIAAAEIgtAAIABAKIADAHQACAEAEACQAEACAFAAIALgBIAKgEIADAHQgGAEgGABQgHABgHAAgAASgDIgBgKQAAgEgCgCQgCgEgEgCQgDgBgFAAQgEAAgDACQgDACgCADIgDAHIgCAJIAiAAIAAAAg");
	this.shape_1.setTransform(99.7,9.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0073CF").s().p("AgFAvIAAhDIAKAAIAABDgAgEghQgCgCAAgDQAAgDACgDQABgCADAAQADAAACACQADADgBADQABADgDACQgCACgDAAQgDAAgBgCg");
	this.shape_2.setTransform(94.4,7.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0073CF").s().p("AgRAjIAAhDIAKAAIABAMIAAAAQACgEAEgCIAEgFQAGgCAJgBIAAALQgHAAgGACIgGAEIgGAGIAAAug");
	this.shape_3.setTransform(90.7,9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0073CF").s().p("AgHAjIgHgCQgFgDgEgFQgDgEgCgHQgBgGAAgIQAAgFACgGQABgIAEgEQAEgGAFgDIAHgCIAHgBIAIABIAGACQAGADADAGQADAFACAGIABAMQAAAIgBAFQgCAHgDAFQgEAFgGADIgGACIgIAAgAgIgXQgDACgCAEIgDAJIgBAIQABAOACAFQACAEAEACQAEACAFAAQAFAAAEgCQADgDACgEQADgEABgOIgBgIQgBgFgCgEQgCgEgDgCQgEgCgFgBQgFABgEACg");
	this.shape_4.setTransform(84.2,9.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0073CF").s().p("AAlAjIAAgsQAAgJgCgDIgEgCIgGgBIgKABQgHACgDACIABAJIAAAtIgKAAIAAgvQgBgGgDgEQgCgCgGAAQgFAAgFACIgKAEIAAA1IgLAAIAAhDIAKAAIABAFIAAABQAGgDAGgCQAGgDAGAAQAFAAAEACQAEACACAFQAFgEAHgCQAHgDAFAAQAIAAAEADQAEABACAEIADAHIABAIIAAAug");
	this.shape_5.setTransform(74.9,9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0073CF").s().p("AgFAjIgIgCQgFgDgDgFQgEgEgCgHQgBgGAAgIIABgJQACgHADgFIADgFIAGgEIAHgEIAHgBQAbABABAgIAAAEIgtAAIABAKQABAEACADQACAEAEACQAEACAFAAIAKgBIALgEIADAHQgGAEgHABQgFABgHAAgAASgDIgBgKQgBgEgCgCQgBgEgDgCQgEgBgEAAQgFAAgDACQgDACgDADIgCAHIgCAJIAiAAIAAAAg");
	this.shape_6.setTransform(65.7,9.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0073CF").s().p("AAlAjIAAgsQAAgJgCgDIgEgCIgGgBIgKABQgGACgEACIABAJIAAAtIgKAAIAAgvQAAgGgEgEQgCgCgGAAQgFAAgFACIgKAEIAAA1IgLAAIAAhDIAKAAIABAFIAAABQAGgDAGgCQAGgDAGAAQAFAAAEACQAEACACAFQAFgEAHgCQAHgDAFAAQAIAAAEADQAEABACAEIADAHIABAIIAAAug");
	this.shape_7.setTransform(56.5,9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0073CF").s().p("AgFAjIgHgCQgGgDgDgFQgEgEgCgHQgBgGAAgIIABgJQACgHADgFIADgFIAGgEIAHgEIAHgBQAbABABAgIAAAEIgtAAIABAKIADAHQACAEAEACQAEACAFAAIALgBIAKgEIADAHQgGAEgGABQgGABgHAAgAASgDIgBgKQAAgEgCgCQgCgEgEgCQgDgBgEAAQgFAAgDACQgDACgDADIgCAHIgCAJIAiAAIAAAAg");
	this.shape_8.setTransform(43.6,9.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0073CF").s().p("AARAyIAAgtQAAgIgCgDQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBgBIgGgBQgFAAgFACIgKAFIAAA1IgMAAIAAhjIAMAAIAAAWIgBAPIABAAIANgFQAGgCAEAAQAHAAAEACQAEACACADQACADAAAEIABAHIAAAwg");
	this.shape_9.setTransform(36.4,7.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0073CF").s().p("AgBAqQgEgBgCgCQgCgCgBgDQgCgDAAgEIAAgsIgKAAIAAgGIALgDIAEgPIAHgBIAAARIATAAIAAAIIgTAAIAAAoQAAAGABACQACADAFAAQAFAAAIgCIABAIIgIACIgJABIgGgBg");
	this.shape_10.setTransform(30.5,8.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0073CF").s().p("AgFAjIgHgCQgGgDgDgFQgEgEgCgHQgBgGAAgIIABgJQACgHADgFIADgFIAGgEIAHgEIAHgBQAbABABAgIAAAEIgtAAIABAKIADAHQACAEAEACQAEACAFAAIALgBIAKgEIADAHQgGAEgHABQgFABgHAAgAASgDIgBgKQAAgEgDgCQgBgEgEgCQgDgBgEAAQgFAAgDACQgDACgCADIgDAHIgCAJIAiAAIAAAAg");
	this.shape_11.setTransform(20.6,9.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0073CF").s().p("AgGAjIgGgCQgGgDgDgFQgEgEgBgHQgCgGAAgIIACgJQAAgHADgFIAFgFIAEgEIAHgEIAIgBQAcABAAAgIAAAEIgtAAIABAKIADAHQACAEAEACQAEACAEAAIAMgBIAKgEIADAHQgGAEgGABQgGABgIAAgAASgDIgBgKQgBgEgBgCQgCgEgEgCQgDgBgFAAQgDAAgEACQgDACgCADIgEAHIgBAJIAiAAIAAAAg");
	this.shape_12.setTransform(13.6,9.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0073CF").s().p("AgRAwQgIgCgHgEIAEgJQAIAEAHACIAMABIAJgBIAHgDQADgCABgEQACgDAAgFQAAgEgCgDIgDgFIgHgDIgJgDIgKgDIgKgEQgFgDgDgEQgCgFAAgGQAAgGACgGQADgEAEgEQAEgEAGgBQAGgCAFAAQAIAAAGABQAHACAGADIgEAIQgGgDgHgBIgKgBIgHABIgFAEQgEACgBADQgBADAAAFQAAADACADIAFAFQAEACAJADIALADIAKADQAFAEADAEQACAFAAAIQAAAHgCAFQgDAFgEAEQgGADgGACQgGABgHAAQgIAAgIgBg");
	this.shape_13.setTransform(6,7.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mov_buttontextLearnmore, new cjs.Rectangle(0,0,111.6,18), null);


(lib.mov_buttonshimmer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// vertical
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0173CF").s().p("AhjFeIAAq7IDHAAIAAK7g");
	this.shape.setTransform(10,35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mov_buttonshimmer, new cjs.Rectangle(0,0,20,70), null);


(lib.mov_buttonbox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().dr(-49,-12.5,98,25);
	this.shape.setTransform(49,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mov_buttonbox, new cjs.Rectangle(0,0,98,25), null);


(lib.txt3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.txt3a();
	this.instance.parent = this;
	this.instance.setTransform(0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.txt3a();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt3, new cjs.Rectangle(0.5,0.5,271.2,21.5), null);


(lib.txt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.txt2a();
	this.instance.parent = this;
	this.instance.setTransform(0.5,0.5,0.54,0.54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.txt2a();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.54,0.54);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt2, new cjs.Rectangle(0,0,199,38.9), null);


(lib.txt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.txt1a();
	this.instance.parent = this;
	this.instance.setTransform(0.5,0.5,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.txt1a();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt1, new cjs.Rectangle(0,-2.2,255.6,39.6), null);


(lib.hashMLB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(103.7,11,1.22,1.22,0,0,0,85,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hashMLB, new cjs.Rectangle(0,-1,164.7,24.1), null);


(lib.mov_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{myPlay:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(1));

	// basePlate as mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApIh8ISRAAIAAD5IyRAAg");
	mask.setTransform(58.5,12.5);

	// glare
	this.instance = new lib.mov_buttonshimmer();
	this.instance.parent = this;
	this.instance.setTransform(-11.4,-19.7,1,1.15,0,29.7,0);
	this.instance.alpha = 0.301;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:154.6},29).wait(1));

	// text_CTA - Learn more
	this.instance_1 = new lib.mov_buttontextLearnmore();
	this.instance_1.parent = this;
	this.instance_1.setTransform(3,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

	// basePlate
	this.instance_2 = new lib.mov_buttonbox();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,1.194,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,117,25);


(lib.mov_BottomBar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.bofa_mlblogo();
	this.instance.parent = this;
	this.instance.setTransform(560,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// button
	this.myButton_mc = new lib.mov_button();
	this.myButton_mc.parent = this;
	this.myButton_mc.setTransform(579,57);

	this.timeline.addTween(cjs.Tween.get(this.myButton_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.mov_BottomBar, new cjs.Rectangle(0,0,728,107.3), null);


(lib.logotrans = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Flag
	this.instance = new lib.flagIcon();
	this.instance.parent = this;
	this.instance.setTransform(73.2,-4.3,0.59,0.59,0,0,0,40.9,14.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(33));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AyHh8MAkPAAAIAAD5MgkPAAAg");
	mask.setTransform(-12,-0.5);

	// BofA Logo
	this.instance_1 = new lib.BofA();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-2.6,-4.3,0.71,0.71,0,0,0,144.2,17.9);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:-27.3},25,cjs.Ease.get(1)).wait(7));

	// mlb
	this.instance_2 = new lib.hashMLB();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-12,22.5,1,1,0,0,0,104,12.5);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({y:0.5},28,cjs.Ease.get(1)).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105,-13.1,195.7,21.6);


(lib.mov_MAIN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_458 = function() {
		this.stop();
		exportRoot.CONTENT_brandBar_mc.myButton_mc.gotoAndPlay("myPlay");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(458).call(this.frame_458).wait(1));

	// txt3
	this.instance = new lib.txt3();
	this.instance.parent = this;
	this.instance.setTransform(252,26);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(382).to({_off:false},0).to({alpha:1},60).wait(17));

	// txt2
	this.instance_1 = new lib.txt2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(266,11);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(210).to({_off:false},0).to({alpha:1},30).wait(115).to({alpha:0},26).to({_off:true},1).wait(77));

	// txt1
	this.instance_2 = new lib.txt1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(266,11);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({_off:false},0).to({alpha:1},55).wait(95).to({alpha:0},30).to({_off:true},1).wait(249));

	// logo-trans
	this.instance_3 = new lib.logotrans("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(399.8,69.6,1.256,1.253,0,0,0,-0.1,-1.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29).to({_off:false},0).to({alpha:1},55).wait(298).to({mode:"synched",loop:false},0).wait(77));

	// keyart
	this.instance_4 = new lib.keyart();
	this.instance_4.parent = this;
	this.instance_4.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:1},29).wait(430));

	// bg
	this.instance_5 = new lib.footer_bg();
	this.instance_5.parent = this;
	this.instance_5.setTransform(233,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(459));

	// BG
	this.instance_6 = new lib.mov_BG();
	this.instance_6.parent = this;
	this.instance_6.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(459));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


// stage content:
(lib.EPS714_Phase2_OLA_728x90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		window.root = this;
		
		document.mouseOver = function () {
			exportRoot.CONTENT_brandBar_mc.myButton_mc.gotoAndPlay("myPlay");
		}
		
		this.mouseOut = function () {
			//
		}
		
		//this.content_mc.myButton_mc.cursor = "pointer";
		this.cursor = "pointer";
		stage.enableMouseOver();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// borders
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Eg4ygG8MBxlAAAIAAN5MhxlAAAg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// BottomBar
	this.CONTENT_brandBar_mc = new lib.mov_BottomBar();
	this.CONTENT_brandBar_mc.parent = this;
	this.CONTENT_brandBar_mc.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.CONTENT_brandBar_mc).wait(1));

	// MAIN
	this.instance = new lib.mov_MAIN();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(363.5,44.5,729,107.8);
// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 60,
	color: "#000000",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/_300_key.jpg", id:"_300_key"},
		{src:"images/bofa_mlblogo.png", id:"bofa_mlblogo"},
		{src:"images/footer_bg.png", id:"footer_bg"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;