var itemsService = function(){
	var items = {};
	items.query = function(){
		return [
			{
			Name: "Trasmissione",
			Value: 22,
			Categoria: "Auto"
		},
		{
			Name: "Telescopio",
			Value: 3.4,
			Categoria: "Ottica"
		},
		{
			Name: "Penna",
			Value: 8.4,
			Categoria: "Cancelleria"
		}
		];
	};
	items.findByName = function(name){
		var result = findWithAttr(items.query(), 'Name', name);
		return result;
	};
	var findWithAttr = function (array, attr, value) {
		for(var i = 0; i < array.length; i += 1) {
			if(array[i][attr] === value) {
				return array[i];
			}
		}
		return undefined;
	};
	return items;
};
