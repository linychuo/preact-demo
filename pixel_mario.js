/* Generated by the Nim Compiler v0.19.4 */
/*   (c) 2018 Andreas Rumpf */

var framePtr = null;
var excHandler = 0;
var lastJSError = null;
if (typeof Int8Array === 'undefined') Int8Array = Array;
if (typeof Int16Array === 'undefined') Int16Array = Array;
if (typeof Int32Array === 'undefined') Int32Array = Array;
if (typeof Uint8Array === 'undefined') Uint8Array = Array;
if (typeof Uint16Array === 'undefined') Uint16Array = Array;
if (typeof Uint32Array === 'undefined') Uint32Array = Array;
if (typeof Float32Array === 'undefined') Float32Array = Array;
if (typeof Float64Array === 'undefined') Float64Array = Array;
var NTI3850 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI3842 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI3846 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI104 = {size: 0,kind: 31,base: null,node: null,finalizer: null};
var NTI15346 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NTI3808 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI3918 = {size: 0,kind: 22,base: null,node: null,finalizer: null};
var NTI114 = {size: 0,kind: 40,base: null,node: null,finalizer: null};
var NTI140 = {size: 0,kind: 29,base: null,node: null,finalizer: null};
var NTI3912 = {size: 0,kind: 22,base: null,node: null,finalizer: null};
var NTI3826 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI3828 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI3858 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI138 = {size: 0,kind: 28,base: null,node: null,finalizer: null};
var NTI135015 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NTI135037 = {size: 0,kind: 16,base: null,node: null,finalizer: null};
var NTI135036 = {size: 0,kind: 16,base: null,node: null,finalizer: null};
var NNI135015 = {kind: 2, len: 2, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "Field0", len: 0, typ: NTI138, name: "Field0", sons: null}, 
{kind: 1, offset: "Field1", len: 0, typ: NTI138, name: "Field1", sons: null}]};
NTI135015.node = NNI135015;
NTI135037.base = NTI135015;
NTI135036.base = NTI135037;
var NNI3858 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI3858.node = NNI3858;
var NNI3828 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI3828.node = NNI3828;
NTI3912.base = NTI3826;
NTI3918.base = NTI3826;
var NNI3826 = {kind: 2, len: 6, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "parent", len: 0, typ: NTI3912, name: "parent", sons: null}, 
{kind: 1, offset: "name", len: 0, typ: NTI140, name: "name", sons: null}, 
{kind: 1, offset: "message", len: 0, typ: NTI138, name: "msg", sons: null}, 
{kind: 1, offset: "trace", len: 0, typ: NTI138, name: "trace", sons: null}, 
{kind: 1, offset: "raise_id", len: 0, typ: NTI114, name: "raise_id", sons: null}, 
{kind: 1, offset: "up", len: 0, typ: NTI3918, name: "up", sons: null}]};
NTI3826.node = NNI3826;
var NNI3808 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI3808.node = NNI3808;
NTI3826.base = NTI3808;
NTI3828.base = NTI3826;
NTI3858.base = NTI3828;
var NNI15346 = {kind: 2, len: 2, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "Field0", len: 0, typ: NTI140, name: "Field0", sons: null}, 
{kind: 1, offset: "Field1", len: 0, typ: NTI104, name: "Field1", sons: null}]};
NTI15346.node = NNI15346;
var NNI3846 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI3846.node = NNI3846;
var NNI3842 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI3842.node = NNI3842;
NTI3842.base = NTI3828;
NTI3846.base = NTI3842;
var NNI3850 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI3850.node = NNI3850;
NTI3850.base = NTI3828;

function makeNimstrLit(c_16225) {
		  var ln = c_16225.length;
  var result = new Array(ln);
  for (var i = 0; i < ln; ++i) {
    result[i] = c_16225.charCodeAt(i);
  }
  return result;
  

	
}

function setConstr() {
		    var result = {};
    for (var i = 0; i < arguments.length; ++i) {
      var x = arguments[i];
      if (typeof(x) == "object") {
        for (var j = x[0]; j <= x[1]; ++j) {
          result[j] = true;
        }
      } else {
        result[x] = true;
      }
    }
    return result;
  

	
}
var ConstSet1 = setConstr(17, 16, 4, 18, 27, 19, 23, 22, 21);

function nimCopy(dest_17230, src_17231, ti_17232) {
	var result_17655 = null;

		switch (ti_17232.kind) {
		case 21:
		case 22:
		case 23:
		case 5:
			if (!(is_fat_pointer_17201(ti_17232))) {
			result_17655 = src_17231;
			}
			else {
				result_17655 = [src_17231[0], src_17231[1]];
			}
			
			break;
		case 19:
			      if (dest_17230 === null || dest_17230 === undefined) {
        dest_17230 = {};
      }
      else {
        for (var key in dest_17230) { delete dest_17230[key]; }
      }
      for (var key in src_17231) { dest_17230[key] = src_17231[key]; }
      result_17655 = dest_17230;
    
			break;
		case 18:
		case 17:
			if (!((ti_17232.base == null))) {
			result_17655 = nimCopy(dest_17230, src_17231, ti_17232.base);
			}
			else {
			if ((ti_17232.kind == 17)) {
			result_17655 = (dest_17230 === null || dest_17230 === undefined) ? {m_type: ti_17232} : dest_17230;
			}
			else {
				result_17655 = (dest_17230 === null || dest_17230 === undefined) ? {} : dest_17230;
			}
			}
			nimCopyAux(result_17655, src_17231, ti_17232.node);
			break;
		case 24:
		case 4:
		case 27:
		case 16:
			      if (src_17231 === null) {
        result_17655 = null;
      }
      else {
        if (dest_17230 === null || dest_17230 === undefined) {
          dest_17230 = new Array(src_17231.length);
        }
        else {
          dest_17230.length = src_17231.length;
        }
        result_17655 = dest_17230;
        for (var i = 0; i < src_17231.length; ++i) {
          result_17655[i] = nimCopy(result_17655[i], src_17231[i], ti_17232.base);
        }
      }
    
			break;
		case 28:
			      if (src_17231 !== null) {
        result_17655 = src_17231.slice(0);
      }
    
			break;
		default: 
			result_17655 = src_17231;
			break;
		}

	return result_17655;

}
						var pixel_data_135035 = nimCopy(null, [[{Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}], [{Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("C"), Field1: makeNimstrLit("255, 0, 0")}, {Field0: makeNimstrLit("C"), Field1: makeNimstrLit("255, 0, 0")}, {Field0: makeNimstrLit("C"), Field1: makeNimstrLit("255, 0, 0")}, {Field0: makeNimstrLit("C"), Field1: makeNimstrLit("255, 0, 0")}, {Field0: makeNimstrLit("C"), Field1: makeNimstrLit("255, 0, 0")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}], [{Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("C"), Field1: makeNimstrLit("255, 0, 0")}, {Field0: makeNimstrLit("C"), Field1: makeNimstrLit("255, 0, 0")}, {Field0: makeNimstrLit("C"), Field1: makeNimstrLit("255, 0, 0")}, {Field0: makeNimstrLit("C"), Field1: makeNimstrLit("255, 0, 0")}, {Field0: makeNimstrLit("C"), Field1: makeNimstrLit("255, 0, 0")}, {Field0: makeNimstrLit("C"), Field1: makeNimstrLit("255, 0, 0")}, {Field0: makeNimstrLit("C"), Field1: makeNimstrLit("255, 0, 0")}, {Field0: makeNimstrLit("C"), Field1: makeNimstrLit("255, 0, 0")}, {Field0: makeNimstrLit("C"), Field1: makeNimstrLit("255, 0, 0")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}], [{Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("B"), Field1: makeNimstrLit("100, 50, 0")}, {Field0: makeNimstrLit("B"), Field1: makeNimstrLit("100, 50, 0")}, {Field0: makeNimstrLit("B"), Field1: makeNimstrLit("100, 50, 0")}, {Field0: makeNimstrLit("S"), Field1: makeNimstrLit("255, 200, 150")}, {Field0: makeNimstrLit("S"), Field1: makeNimstrLit("255, 200, 150")}, {Field0: makeNimstrLit("B"), Field1: makeNimstrLit("100, 50, 0")}, {Field0: makeNimstrLit("S"), Field1: makeNimstrLit("255, 200, 150")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}], [{Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("B"), Field1: makeNimstrLit("100, 50, 0")}, {Field0: makeNimstrLit("S"), Field1: makeNimstrLit("255, 200, 150")}, {Field0: makeNimstrLit("B"), Field1: makeNimstrLit("100, 50, 0")}, {Field0: makeNimstrLit("S"), Field1: makeNimstrLit("255, 200, 150")}, {Field0: makeNimstrLit("S"), Field1: makeNimstrLit("255, 200, 150")}, {Field0: makeNimstrLit("S"), Field1: makeNimstrLit("255, 200, 150")}, {Field0: makeNimstrLit("B"), Field1: makeNimstrLit("100, 50, 0")}, {Field0: makeNimstrLit("S"), Field1: makeNimstrLit("255, 200, 150")}, {Field0: makeNimstrLit("S"), Field1: makeNimstrLit("255, 200, 150")}, {Field0: makeNimstrLit("S"), Field1: makeNimstrLit("255, 200, 150")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}], [{Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("B"), Field1: makeNimstrLit("100, 50, 0")}, {Field0: makeNimstrLit("S"), Field1: makeNimstrLit("255, 200, 150")}, {Field0: makeNimstrLit("B"), Field1: makeNimstrLit("100, 50, 0")}, {Field0: makeNimstrLit("B"), Field1: makeNimstrLit("100, 50, 0")}, {Field0: makeNimstrLit("S"), Field1: makeNimstrLit("255, 200, 150")}, {Field0: makeNimstrLit("S"), Field1: makeNimstrLit("255, 200, 150")}, {Field0: makeNimstrLit("S"), Field1: makeNimstrLit("255, 200, 150")}, {Field0: makeNimstrLit("B"), Field1: makeNimstrLit("100, 50, 0")}, {Field0: makeNimstrLit("S"), Field1: makeNimstrLit("255, 200, 150")}, {Field0: makeNimstrLit("S"), Field1: makeNimstrLit("255, 200, 150")}, {Field0: makeNimstrLit("B"), Field1: makeNimstrLit("100, 50, 0")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}], [{Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("B"), Field1: makeNimstrLit("100, 50, 0")}, {Field0: makeNimstrLit("B"), Field1: makeNimstrLit("100, 50, 0")}, {Field0: makeNimstrLit("S"), Field1: makeNimstrLit("255, 200, 150")}, {Field0: makeNimstrLit("S"), Field1: makeNimstrLit("255, 200, 150")}, {Field0: makeNimstrLit("S"), Field1: makeNimstrLit("255, 200, 150")}, {Field0: makeNimstrLit("S"), Field1: makeNimstrLit("255, 200, 150")}, {Field0: makeNimstrLit("B"), Field1: makeNimstrLit("100, 50, 0")}, {Field0: makeNimstrLit("B"), Field1: makeNimstrLit("100, 50, 0")}, {Field0: makeNimstrLit("B"), Field1: makeNimstrLit("100, 50, 0")}, {Field0: makeNimstrLit("B"), Field1: makeNimstrLit("100, 50, 0")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}], [{Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("S"), Field1: makeNimstrLit("255, 200, 150")}, {Field0: makeNimstrLit("S"), Field1: makeNimstrLit("255, 200, 150")}, {Field0: makeNimstrLit("S"), Field1: makeNimstrLit("255, 200, 150")}, {Field0: makeNimstrLit("S"), Field1: makeNimstrLit("255, 200, 150")}, {Field0: makeNimstrLit("S"), Field1: makeNimstrLit("255, 200, 150")}, {Field0: makeNimstrLit("S"), Field1: makeNimstrLit("255, 200, 150")}, {Field0: makeNimstrLit("S"), Field1: makeNimstrLit("255, 200, 150")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}], [{Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("C"), Field1: makeNimstrLit("255, 0, 0")}, {Field0: makeNimstrLit("C"), Field1: makeNimstrLit("255, 0, 0")}, {Field0: makeNimstrLit("O"), Field1: makeNimstrLit("0, 0, 255")}, {Field0: makeNimstrLit("C"), Field1: makeNimstrLit("255, 0, 0")}, {Field0: makeNimstrLit("C"), Field1: makeNimstrLit("255, 0, 0")}, {Field0: makeNimstrLit("O"), Field1: makeNimstrLit("0, 0, 255")}, {Field0: makeNimstrLit("C"), Field1: makeNimstrLit("255, 0, 0")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}], [{Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("C"), Field1: makeNimstrLit("255, 0, 0")}, {Field0: makeNimstrLit("C"), Field1: makeNimstrLit("255, 0, 0")}, {Field0: makeNimstrLit("C"), Field1: makeNimstrLit("255, 0, 0")}, {Field0: makeNimstrLit("O"), Field1: makeNimstrLit("0, 0, 255")}, {Field0: makeNimstrLit("C"), Field1: makeNimstrLit("255, 0, 0")}, {Field0: makeNimstrLit("C"), Field1: makeNimstrLit("255, 0, 0")}, {Field0: makeNimstrLit("O"), Field1: makeNimstrLit("0, 0, 255")}, {Field0: makeNimstrLit("C"), Field1: makeNimstrLit("255, 0, 0")}, {Field0: makeNimstrLit("C"), Field1: makeNimstrLit("255, 0, 0")}, {Field0: makeNimstrLit("C"), Field1: makeNimstrLit("255, 0, 0")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}], [{Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("C"), Field1: makeNimstrLit("255, 0, 0")}, {Field0: makeNimstrLit("C"), Field1: makeNimstrLit("255, 0, 0")}, {Field0: makeNimstrLit("C"), Field1: makeNimstrLit("255, 0, 0")}, {Field0: makeNimstrLit("C"), Field1: makeNimstrLit("255, 0, 0")}, {Field0: makeNimstrLit("O"), Field1: makeNimstrLit("0, 0, 255")}, {Field0: makeNimstrLit("O"), Field1: makeNimstrLit("0, 0, 255")}, {Field0: makeNimstrLit("O"), Field1: makeNimstrLit("0, 0, 255")}, {Field0: makeNimstrLit("O"), Field1: makeNimstrLit("0, 0, 255")}, {Field0: makeNimstrLit("C"), Field1: makeNimstrLit("255, 0, 0")}, {Field0: makeNimstrLit("C"), Field1: makeNimstrLit("255, 0, 0")}, {Field0: makeNimstrLit("C"), Field1: makeNimstrLit("255, 0, 0")}, {Field0: makeNimstrLit("C"), Field1: makeNimstrLit("255, 0, 0")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}], [{Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("W"), Field1: makeNimstrLit("255, 255, 255")}, {Field0: makeNimstrLit("W"), Field1: makeNimstrLit("255, 255, 255")}, {Field0: makeNimstrLit("C"), Field1: makeNimstrLit("255, 0, 0")}, {Field0: makeNimstrLit("O"), Field1: makeNimstrLit("0, 0, 255")}, {Field0: makeNimstrLit("Y"), Field1: makeNimstrLit("255, 255, 0")}, {Field0: makeNimstrLit("O"), Field1: makeNimstrLit("0, 0, 255")}, {Field0: makeNimstrLit("O"), Field1: makeNimstrLit("0, 0, 255")}, {Field0: makeNimstrLit("Y"), Field1: makeNimstrLit("255, 255, 0")}, {Field0: makeNimstrLit("O"), Field1: makeNimstrLit("0, 0, 255")}, {Field0: makeNimstrLit("C"), Field1: makeNimstrLit("255, 0, 0")}, {Field0: makeNimstrLit("W"), Field1: makeNimstrLit("255, 255, 255")}, {Field0: makeNimstrLit("W"), Field1: makeNimstrLit("255, 255, 255")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}], [{Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("W"), Field1: makeNimstrLit("255, 255, 255")}, {Field0: makeNimstrLit("W"), Field1: makeNimstrLit("255, 255, 255")}, {Field0: makeNimstrLit("W"), Field1: makeNimstrLit("255, 255, 255")}, {Field0: makeNimstrLit("O"), Field1: makeNimstrLit("0, 0, 255")}, {Field0: makeNimstrLit("O"), Field1: makeNimstrLit("0, 0, 255")}, {Field0: makeNimstrLit("O"), Field1: makeNimstrLit("0, 0, 255")}, {Field0: makeNimstrLit("O"), Field1: makeNimstrLit("0, 0, 255")}, {Field0: makeNimstrLit("O"), Field1: makeNimstrLit("0, 0, 255")}, {Field0: makeNimstrLit("O"), Field1: makeNimstrLit("0, 0, 255")}, {Field0: makeNimstrLit("W"), Field1: makeNimstrLit("255, 255, 255")}, {Field0: makeNimstrLit("W"), Field1: makeNimstrLit("255, 255, 255")}, {Field0: makeNimstrLit("W"), Field1: makeNimstrLit("255, 255, 255")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}], [{Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("W"), Field1: makeNimstrLit("255, 255, 255")}, {Field0: makeNimstrLit("W"), Field1: makeNimstrLit("255, 255, 255")}, {Field0: makeNimstrLit("O"), Field1: makeNimstrLit("0, 0, 255")}, {Field0: makeNimstrLit("O"), Field1: makeNimstrLit("0, 0, 255")}, {Field0: makeNimstrLit("O"), Field1: makeNimstrLit("0, 0, 255")}, {Field0: makeNimstrLit("O"), Field1: makeNimstrLit("0, 0, 255")}, {Field0: makeNimstrLit("O"), Field1: makeNimstrLit("0, 0, 255")}, {Field0: makeNimstrLit("O"), Field1: makeNimstrLit("0, 0, 255")}, {Field0: makeNimstrLit("O"), Field1: makeNimstrLit("0, 0, 255")}, {Field0: makeNimstrLit("O"), Field1: makeNimstrLit("0, 0, 255")}, {Field0: makeNimstrLit("W"), Field1: makeNimstrLit("255, 255, 255")}, {Field0: makeNimstrLit("W"), Field1: makeNimstrLit("255, 255, 255")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}], [{Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("O"), Field1: makeNimstrLit("0, 0, 255")}, {Field0: makeNimstrLit("O"), Field1: makeNimstrLit("0, 0, 255")}, {Field0: makeNimstrLit("O"), Field1: makeNimstrLit("0, 0, 255")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("O"), Field1: makeNimstrLit("0, 0, 255")}, {Field0: makeNimstrLit("O"), Field1: makeNimstrLit("0, 0, 255")}, {Field0: makeNimstrLit("O"), Field1: makeNimstrLit("0, 0, 255")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}], [{Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("B"), Field1: makeNimstrLit("100, 50, 0")}, {Field0: makeNimstrLit("B"), Field1: makeNimstrLit("100, 50, 0")}, {Field0: makeNimstrLit("B"), Field1: makeNimstrLit("100, 50, 0")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("B"), Field1: makeNimstrLit("100, 50, 0")}, {Field0: makeNimstrLit("B"), Field1: makeNimstrLit("100, 50, 0")}, {Field0: makeNimstrLit("B"), Field1: makeNimstrLit("100, 50, 0")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}], [{Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("B"), Field1: makeNimstrLit("100, 50, 0")}, {Field0: makeNimstrLit("B"), Field1: makeNimstrLit("100, 50, 0")}, {Field0: makeNimstrLit("B"), Field1: makeNimstrLit("100, 50, 0")}, {Field0: makeNimstrLit("B"), Field1: makeNimstrLit("100, 50, 0")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}, {Field0: makeNimstrLit("B"), Field1: makeNimstrLit("100, 50, 0")}, {Field0: makeNimstrLit("B"), Field1: makeNimstrLit("100, 50, 0")}, {Field0: makeNimstrLit("B"), Field1: makeNimstrLit("100, 50, 0")}, {Field0: makeNimstrLit("B"), Field1: makeNimstrLit("100, 50, 0")}, {Field0: makeNimstrLit("_"), Field1: makeNimstrLit("229. 230, 232")}]], NTI135036);

function arrayConstr(len_17716, value_17717, typ_17718) {
		    var result = new Array(len_17716);
    for (var i = 0; i < len_17716; ++i) result[i] = nimCopy(null, value_17717, typ_17718);
    return result;
  

	
}

function cstrToNimstr(c_16242) {
		  var ln = c_16242.length;
  var result = new Array(ln);
  var r = 0;
  for (var i = 0; i < ln; ++i) {
    var ch = c_16242.charCodeAt(i);

    if (ch < 128) {
      result[r] = ch;
    }
    else {
      if (ch < 2048) {
        result[r] = (ch >> 6) | 192;
      }
      else {
        if (ch < 55296 || ch >= 57344) {
          result[r] = (ch >> 12) | 224;
        }
        else {
            ++i;
            ch = 65536 + (((ch & 1023) << 10) | (c_16242.charCodeAt(i) & 1023));
            result[r] = (ch >> 18) | 240;
            ++r;
            result[r] = ((ch >> 12) & 63) | 128;
        }
        ++r;
        result[r] = ((ch >> 6) & 63) | 128;
      }
      ++r;
      result[r] = (ch & 63) | 128;
    }
    ++r;
  }
  return result;
  

	
}

function toJSStr(s_16259) {
		  if (s_16259 === null) return "";
  var len = s_16259.length;
  var asciiPart = new Array(len);
  var fcc = String.fromCharCode;
  var nonAsciiPart = null;
  var nonAsciiOffset = 0;
  for (var i = 0; i < len; ++i) {
    if (nonAsciiPart !== null) {
      var offset = (i - nonAsciiOffset) * 2;
      var code = s_16259[i].toString(16);
      if (code.length == 1) {
        code = "0"+code;
      }
      nonAsciiPart[offset] = "%";
      nonAsciiPart[offset + 1] = code;
    }
    else if (s_16259[i] < 128)
      asciiPart[i] = fcc(s_16259[i]);
    else {
      asciiPart.length = i;
      nonAsciiOffset = i;
      nonAsciiPart = new Array((len - i) * 2);
      --i;
    }
  }
  asciiPart = asciiPart.join("");
  return (nonAsciiPart === null) ?
      asciiPart : asciiPart + decodeURIComponent(nonAsciiPart.join(""));
  

	
}

function raiseException(e_15818, ename_15819) {
		e_15818.name = ename_15819;
		if ((excHandler == 0)) {
		unhandledException(e_15818);
		}
		
		e_15818.trace = nimCopy(null, raw_write_stack_trace_15655(), NTI138);
		throw e_15818;

	
}

function chckIndx(i_17735, a_17736, b_17737) {
			var Tmp1;

	var result_17738 = 0;

	BeforeRet: do {
			if (!(a_17736 <= i_17735)) Tmp1 = false; else {				Tmp1 = (i_17735 <= b_17737);			}		if (Tmp1) {
		result_17738 = i_17735;
		break BeforeRet;
		}
		else {
		raiseIndexError();
		}
		
	} while (false);

	return result_17738;

}

function addInt(a_16603, b_16604) {
		    var result = a_16603 + b_16604;
    if (result > 2147483647 || result < -2147483648) raiseOverflow();
    return result;
  

	
}
var nimvm_7173 = false;
var nim_program_result = 0;
var global_raise_hook_13418 = [null];
var local_raise_hook_13423 = [null];
var out_of_mem_hook_13426 = [null];
  if (!Math.trunc) {
    Math.trunc = function(v) {
      v = +v;
      if (!isFinite(v)) return v;

      return (v - v % 1)   ||   (v < 0 ? -0 : v === 0 ? v : 0);
    };
  }

function is_fat_pointer_17201(ti_17203) {
	var result_17204 = false;

	BeforeRet: do {
		result_17204 = !((ConstSet1[ti_17203.base.kind] != undefined));
		break BeforeRet;
	} while (false);

	return result_17204;

}

function nimCopyAux(dest_17235, src_17236, n_17238) {
		switch (n_17238.kind) {
		case 0:
			break;
		case 1:
			      dest_17235[n_17238.offset] = nimCopy(dest_17235[n_17238.offset], src_17236[n_17238.offset], n_17238.typ);
    
			break;
		case 2:
			L1: do {
				var i_17628 = 0;
				var colontmp__17630 = 0;
				colontmp__17630 = (n_17238.len - 1);
				var res_17633 = 0;
				L2: do {
						L3: while (true) {
						if (!(res_17633 <= colontmp__17630)) break L3;
							i_17628 = res_17633;
							nimCopyAux(dest_17235, src_17236, n_17238.sons[i_17628]);
							res_17633 += 1;
						}
				} while(false);
			} while(false);
			break;
		case 3:
			      dest_17235[n_17238.offset] = nimCopy(dest_17235[n_17238.offset], src_17236[n_17238.offset], n_17238.typ);
      for (var i = 0; i < n_17238.sons.length; ++i) {
        nimCopyAux(dest_17235, src_17236, n_17238.sons[i][1]);
      }
    
			break;
		}

	
}

function add_13438(x_13441, x_13441_Idx, y_13442) {
		      if (x_13441[x_13441_Idx] === null) { x_13441[x_13441_Idx] = []; }
      var off = x_13441[x_13441_Idx].length;
      x_13441[x_13441_Idx].length += y_13442.length;
      for (var i = 0; i < y_13442.length; ++i) {
        x_13441[x_13441_Idx][off+i] = y_13442.charCodeAt(i);
      }
    

	
}

function aux_write_stack_trace_15341(f_15343) {
					var Tmp3;

	var result_15344 = [null];

		var it_15352 = f_15343;
		var i_15354 = 0;
		var total_15356 = 0;
		var temp_frames_15363 = arrayConstr(64, {Field0: null, Field1: 0}, NTI15346);
		L1: do {
				L2: while (true) {
					if (!!((it_15352 == null))) Tmp3 = false; else {						Tmp3 = (i_15354 <= 63);					}				if (!Tmp3) break L2;
					temp_frames_15363[i_15354].Field0 = it_15352.procname;
					temp_frames_15363[i_15354].Field1 = it_15352.line;
					i_15354 += 1;
					total_15356 += 1;
					it_15352 = it_15352.prev;
				}
		} while(false);
		L4: do {
				L5: while (true) {
				if (!!((it_15352 == null))) break L5;
					total_15356 += 1;
					it_15352 = it_15352.prev;
				}
		} while(false);
		result_15344[0] = nimCopy(null, [], NTI138);
		if (!((total_15356 == i_15354))) {
		if (result_15344[0] != null) { result_15344[0] = (result_15344[0]).concat(makeNimstrLit("(")); } else { result_15344[0] = makeNimstrLit("("); };
		if (result_15344[0] != null) { result_15344[0] = (result_15344[0]).concat(cstrToNimstr(((total_15356 - i_15354))+"")); } else { result_15344[0] = cstrToNimstr(((total_15356 - i_15354))+"").slice(); };
		if (result_15344[0] != null) { result_15344[0] = (result_15344[0]).concat(makeNimstrLit(" calls omitted) ...\x0A")); } else { result_15344[0] = makeNimstrLit(" calls omitted) ...\x0A"); };
		}
		
		L6: do {
			var j_15628 = 0;
			var colontmp__15635 = 0;
			colontmp__15635 = (i_15354 - 1);
			var res_15638 = colontmp__15635;
			L7: do {
					L8: while (true) {
					if (!(0 <= res_15638)) break L8;
						j_15628 = res_15638;
						add_13438(result_15344, 0, temp_frames_15363[j_15628].Field0);
						if ((0 < temp_frames_15363[j_15628].Field1)) {
						if (result_15344[0] != null) { result_15344[0] = (result_15344[0]).concat(makeNimstrLit(", line: ")); } else { result_15344[0] = makeNimstrLit(", line: "); };
						if (result_15344[0] != null) { result_15344[0] = (result_15344[0]).concat(cstrToNimstr((temp_frames_15363[j_15628].Field1)+"")); } else { result_15344[0] = cstrToNimstr((temp_frames_15363[j_15628].Field1)+"").slice(); };
						}
						
						if (result_15344[0] != null) { result_15344[0] = (result_15344[0]).concat(makeNimstrLit("\x0A")); } else { result_15344[0] = makeNimstrLit("\x0A"); };
						res_15638 -= 1;
					}
			} while(false);
		} while(false);

	return result_15344[0];

}

function raw_write_stack_trace_15655() {
	var result_15657 = null;

		if (!((framePtr == null))) {
		result_15657 = nimCopy(null, (makeNimstrLit("Traceback (most recent call last)\x0A")).concat(aux_write_stack_trace_15341(framePtr)), NTI138);
		}
		else {
			result_15657 = nimCopy(null, makeNimstrLit("No stack traceback available\x0A"), NTI138);
		}
		

	return result_15657;

}

function unhandledException(e_15719) {
		var buf_15720 = [[]];
		if (!(((e_15719.message != null ? e_15719.message.length : 0) == 0))) {
		if (buf_15720[0] != null) { buf_15720[0] = (buf_15720[0]).concat(makeNimstrLit("Error: unhandled exception: ")); } else { buf_15720[0] = makeNimstrLit("Error: unhandled exception: "); };
		if (buf_15720[0] != null) { buf_15720[0] = (buf_15720[0]).concat(e_15719.message); } else { buf_15720[0] = e_15719.message.slice(); };
		}
		else {
		if (buf_15720[0] != null) { buf_15720[0] = (buf_15720[0]).concat(makeNimstrLit("Error: unhandled exception")); } else { buf_15720[0] = makeNimstrLit("Error: unhandled exception"); };
		}
		
		if (buf_15720[0] != null) { buf_15720[0] = (buf_15720[0]).concat(makeNimstrLit(" [")); } else { buf_15720[0] = makeNimstrLit(" ["); };
		add_13438(buf_15720, 0, e_15719.name);
		if (buf_15720[0] != null) { buf_15720[0] = (buf_15720[0]).concat(makeNimstrLit("]\x0A")); } else { buf_15720[0] = makeNimstrLit("]\x0A"); };
		if (buf_15720[0] != null) { buf_15720[0] = (buf_15720[0]).concat(raw_write_stack_trace_15655()); } else { buf_15720[0] = raw_write_stack_trace_15655().slice(); };
		var cbuf_15801 = toJSStr(buf_15720[0]);
		framePtr = null;
		  if (typeof(Error) !== "undefined") {
    throw new Error(cbuf_15801);
  }
  else {
    throw cbuf_15801;
  }
  

	
}

function raiseIndexError() {
		var e_16155 = null;
		e_16155 = {m_type: NTI3858, parent: null, name: null, message: null, trace: null, raise_id: 0, up: null};
		e_16155.message = nimCopy(null, makeNimstrLit("index out of bounds"), NTI138);
		e_16155.parent = null;
		raiseException(e_16155, "IndexError");

	
}

function join_135118(a_135123, sep_135125) {
	var result_135126 = null;

		result_135126 = nimCopy(null, [], NTI138);
		L1: do {
			var i_135171 = 0;
			var x_135172 = 0;
			var i_135178 = 0;
			L2: do {
					L3: while (true) {
					if (!(i_135178 < (a_135123 != null ? a_135123.length : 0))) break L3;
						i_135171 = i_135178;
						x_135172 = a_135123[i_135178];
						if ((0 < i_135171)) {
						if (result_135126 != null) { result_135126 = (result_135126).concat(sep_135125); } else { result_135126 = sep_135125.slice(); };
						}
						
						if (result_135126 != null) { result_135126 = (result_135126).concat(cstrToNimstr((x_135172)+"")); } else { result_135126 = cstrToNimstr((x_135172)+"").slice(); };
						i_135178 += 1;
					}
			} while(false);
		} while(false);

	return result_135126;

}

function get_random_value_135085() {
	var result_135087 = 0;

	var F={procname:"pixel_mario.getRandomValue",prev:framePtr,filename:"pixel_mario.nim",line:0};
	framePtr = F;
		F.line = 34;
		result_135087 = Math.floor((Math.random() * 2.5600000000000000e+02));
	framePtr = F.prev;

	return result_135087;

}

function raiseOverflow() {
		var e_16065 = null;
		e_16065 = {m_type: NTI3846, parent: null, name: null, message: null, trace: null, raise_id: 0, up: null};
		e_16065.message = nimCopy(null, makeNimstrLit("over- or underflow"), NTI138);
		e_16065.parent = null;
		raiseException(e_16065, "OverflowError");

	
}

function sys_fatal_20437(message_20443) {
	var F={procname:"sysFatal.sysFatal",prev:framePtr,filename:"../../../../.choosenim/toolchains/nim-0.19.4/lib/system.nim",line:0};
	framePtr = F;
		F.line = 2915;
		var e_20445 = null;
		F.line = 2916;
		e_20445 = {m_type: NTI3850, parent: null, name: null, message: null, trace: null, raise_id: 0, up: null};
		F.line = 2917;
		e_20445.message = nimCopy(null, message_20443, NTI138);
		F.line = 2918;
		raiseException(e_20445, "AssertionError");
	framePtr = F.prev;

	
}

function raise_assert_20432(msg_20434) {
	var F={procname:"system.raiseAssert",prev:framePtr,filename:"../../../../.choosenim/toolchains/nim-0.19.4/lib/system.nim",line:0};
	framePtr = F;
		F.line = 3872;
		sys_fatal_20437(msg_20434);
	framePtr = F.prev;

	
}

function failed_assert_impl_20481(msg_20483) {
	var F={procname:"system.failedAssertImpl",prev:framePtr,filename:"../../../../.choosenim/toolchains/nim-0.19.4/lib/system.nim",line:0};
	framePtr = F;
		F.line = 3879;
		raise_assert_20432(msg_20483);
	framePtr = F.prev;

	
}

function on_pixel_click_135110(value_135112, ev_135113) {
	var F={procname:"pixel_mario.onPixelClick",prev:framePtr,filename:"pixel_mario.nim",line:0};
	framePtr = F;
		F.line = 37;
		var new_color_135192 = join_135118([get_random_value_135085(), get_random_value_135085(), get_random_value_135085()], makeNimstrLit(" , "));
		F.line = 38;
		var element_list_135193 = document.querySelectorAll(toJSStr((makeNimstrLit("div[data-value=\'")).concat(value_135112,makeNimstrLit("\']"))));
		L1: do {
			F.line = 39;
			var item_135415 = null;
			F.line = 3911;
			var i_135419 = 0;
			F.line = 3912;
			var l_135421 = (element_list_135193 != null ? element_list_135193.length : 0);
			L2: do {
				F.line = 3913;
					L3: while (true) {
					if (!(i_135419 < l_135421)) break L3;
						F.line = 3914;
						item_135415 = element_list_135193[chckIndx(i_135419, 0, element_list_135193.length+0-1)-0];
						F.line = 40;
						item_135415.style.backgroundColor = toJSStr((makeNimstrLit("rgb(")).concat(new_color_135192,makeNimstrLit(")")));
						F.line = 3915;
						i_135419 = addInt(i_135419, 1);
						if (!(((element_list_135193 != null ? element_list_135193.length : 0) == l_135421))) {
						F.line = 3916;
						failed_assert_impl_20481(makeNimstrLit("/home/travis/.choosenim/toolchains/nim-0.19.4/lib/system.nim(3916, 11) `len(a) == L` seq modified while iterating over it"));
						}
						
					}
			} while(false);
		} while(false);
	framePtr = F.prev;

	
}

function render_pixel_135435(col_data_135437) {

		function HEX3Aanonymous_135441(ev_135443) {
			var F={procname:"renderPixel.:anonymous",prev:framePtr,filename:"pixel_mario.nim",line:0};
			framePtr = F;
				F.line = 51;
				on_pixel_click_135110(value_135440, ev_135443);
			framePtr = F.prev;

			
		}

	var result_135438 = null;

	var F={procname:"pixel_mario.renderPixel",prev:framePtr,filename:"pixel_mario.nim",line:0};
	framePtr = F;
	BeforeRet: do {
		F.line = 43;
		var col_135439 = document.createElement("div");
		F.line = 44;
		var value_135440 = nimCopy(null, col_data_135437.Field0, NTI138);
		F.line = 45;
		col_135439.setAttribute("data-value", toJSStr(value_135440));
		F.line = 46;
		col_135439.style.backgroundColor = toJSStr((makeNimstrLit("rgb(")).concat(col_data_135437.Field1,makeNimstrLit(")")));
		F.line = 47;
		col_135439.style.width = "20px";
		F.line = 48;
		col_135439.style.height = "20px";
		F.line = 49;
		col_135439.style.display = "inline-block";
		F.line = 50;
		col_135439.addEventListener("click", HEX3Aanonymous_135441, false);
		F.line = 53;
		result_135438 = col_135439;
		break BeforeRet;
	} while (false);
	framePtr = F.prev;

	return result_135438;

}

function render_canvas_135471(root_135473) {
	var F={procname:"pixel_mario.renderCanvas",prev:framePtr,filename:"pixel_mario.nim",line:0};
	framePtr = F;
		L1: do {
			F.line = 56;
			var row_data_135534 = [{Field0: null, Field1: null}, {Field0: null, Field1: null}, {Field0: null, Field1: null}, {Field0: null, Field1: null}, {Field0: null, Field1: null}, {Field0: null, Field1: null}, {Field0: null, Field1: null}, {Field0: null, Field1: null}, {Field0: null, Field1: null}, {Field0: null, Field1: null}, {Field0: null, Field1: null}, {Field0: null, Field1: null}, {Field0: null, Field1: null}, {Field0: null, Field1: null}];
			F.line = 2261;
			var i_135604 = 0;
			if ((i_135604 <= 16)) {
			L2: do {
				F.line = 2263;
					L3: while (true) {
					if (!true) break L3;
						F.line = 2264;
						nimCopy(row_data_135534, pixel_data_135035[chckIndx(i_135604, 0, pixel_data_135035.length+0-1)-0], NTI135037);
						F.line = 57;
						var row_135535 = document.createElement("div");
						F.line = 58;
						row_135535.style.height = "20px";
						L4: do {
							F.line = 59;
							var col_data_135596 = {Field0: null, Field1: null};
							F.line = 2261;
							var i_135601 = 0;
							if ((i_135601 <= 13)) {
							L5: do {
								F.line = 2263;
									L6: while (true) {
									if (!true) break L6;
										F.line = 2264;
										nimCopy(col_data_135596, row_data_135534[chckIndx(i_135601, 0, row_data_135534.length+0-1)-0], NTI135015);
										F.line = 60;
										row_135535.appendChild(render_pixel_135435(col_data_135596));
										if ((13 <= i_135601)) {
										F.line = 2265;
										break L5;
										}
										
										F.line = 2266;
										i_135601 = addInt(i_135601, 1);
									}
							} while(false);
							}
							
						} while(false);
						F.line = 61;
						root_135473.appendChild(row_135535);
						if ((16 <= i_135604)) {
						F.line = 2265;
						break L2;
						}
						
						F.line = 2266;
						i_135604 = addInt(i_135604, 1);
					}
			} while(false);
			}
			
		} while(false);
	framePtr = F.prev;

	
}

function main_135618() {
	var F={procname:"pixel_mario.main",prev:framePtr,filename:"pixel_mario.nim",line:0};
	framePtr = F;
		F.line = 64;
		var root_135620 = document.createElement("div");
		F.line = 65;
		root_135620.style.background = "white";
		F.line = 66;
		root_135620.style.minHeight = "100vh";
		F.line = 67;
		render_canvas_135471(root_135620);
		F.line = 68;
		document.body.appendChild(root_135620);
	framePtr = F.prev;

	
}

function on_load_135634(event_135636) {
	var F={procname:"pixel_mario.onLoad",prev:framePtr,filename:"pixel_mario.nim",line:0};
	framePtr = F;
		F.line = 71;
		main_135618();
	framePtr = F.prev;

	
}
window.onload = on_load_135634;
