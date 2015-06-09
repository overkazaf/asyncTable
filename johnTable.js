/*
	Author : John Nong
	Email : overkazaf@gmail.com
	Date 2015/06/09
	Description : This plugin is used for normal table manipulations
 */
;(function (doc){
	function overTable(){
		return new _overTable().init(arguments);
	}

	function _overTable (){
		var cache = {},
			flyWeightObjects = [];
		return {
			init : function (opts){
				this.options = extend(defaults, opts);
				this.id = 'overTable_' + rndId();
				this.tableObject = create('table', 'overTable');
				this.tableBodyObject = create('tbody', 'overTable_tbody');
				this.buildStylesheets();
				this.render();
			},
			buildStylesheets : function (){
				this.link = create('link');
				this.link.href = this.options.styles;
			},
			render : function (){
				var opts = this.options;
				var table = this.tableObject;
				var tableBody = this.tableBodyObject;
				append(table);
				append(tableBody, table);
				for (var i=0;i<opts.records; i++) {
					var tr = create('tr', 'overTable_tr');
					flyWeightObjects.push(tr);
					append(tr, tableBody);
				}

				this.stripped();
			},
			bindEvents : function (){

			},
			destroy : function (){

			},
			stripped : function (){
				var tab = this.tableObject;
				var aTr = byTag('tr', tab);
				forEach(aTr, function (i, tr){
					var td = create('td', 'overTable_td');
					td.innerText = i;
					append(td, tr);
					tr.style.height = '20px';
					if(i & 1){
						tr.style.backgroundColor = '#ccc';
					}
				});
			},
			reinit : function (){

			},
			refresh : function (){

			},
			pull : function (){

			},
			query : function (){

			}
		};
	}


	// basic config parameters for table initialization
	var defaults = {
		styles : 'overTable.css',
		async : false,
		paging : false,
		records : 10
	};

	var forEach = function (arr, callback){
		if (arr.length) {
			for (var i=0,l=arr.length; i<l; i++) {
				callback.call(this, i, arr[i]);
			}
		}
	};
	//basic utililities
	var byId = function(id){
		return typeof id === 'object' ? id : doc.getElementById(id);	
	};

	var byTag = function (tag, oParent){
		oParent = oParent || doc;
		return oParent.getElementsByTagName(tag || '*');
	}

	var create = function(tag, sClass){
		var el = document.createElement(tag);
		if(sClass){
			el.className = sClass;
		}
		return el;
	};

	var append = function(obj, oParent) {
		if(oParent){
			return oParent.appendChild(obj);
		}
		return doc.body.appendChild(obj);
	};

	var extend = function (dest, src){
		for (var attr in src){
			if (!dest[attr]){
				dest[attr] = src[attr];
			}
		}
		return dest;
	};

	var log = function (k, v){
		return console && console.log && (v ? console.log(k, v) : console.log(k));
	};

	var rndId = function (base){
		return Math.random() * (base || 100);
	};



	window.overTable = overTable;
})(document);