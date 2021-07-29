'use strict'

//module.exports = genPartition
module.exports = {
  //genPartition: genPartition,
  partitionContainsPointProper: partitionContainsPointProper,
  partitionContainsPoint: partitionContainsPoint,
  partitionEndLessThanEqual: partitionEndLessThanEqual,
  partitionStartLessThan: partitionStartLessThan,
  partitionStartEqual: partitionStartEqual,
  partitionInteriorContainsInterval: partitionInteriorContainsInterval,
  partitionTest: partitionTest
}

// var code = 'for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m'

// function genPartition(predicate, args) {
//   var fargs ='abcdef'.split('').concat(args)
//   var reads = []
//   if(predicate.indexOf('lo') >= 0) {
//     reads.push('lo=e[k+n]')
//   }
//   if(predicate.indexOf('hi') >= 0) {
//     reads.push('hi=e[k+o]')
//   }
//   fargs.push(
//     code.replace('_', reads.join())
//         .replace('$', predicate))
//   console.log(fargs)
//   return Function.apply(void 0, fargs)
// }

//genPartition('lo<p0&&p0<=hi',['p0'])
function partitionContainsPointProper(a,b,c,d,e,f,p0){
  for (var j = 2 * a, k = j * c, l = k, m = c, n = b, o = a + b, p = c; d > p; ++p, k += j) {
    var lo = e[k + n],
        hi = e[k + o];
    if (lo < p0 && p0 <= hi)
        if (m === p) m += 1, l += j;
        else {
            for (var s = 0; j > s; ++s) {
                var t = e[k + s];
                e[k + s] = e[l], e[l++] = t
            }
            var u = f[p];
            f[p] = f[m], f[m++] = u
        }
  }
  return m
}

//genPartition('lo<=p0&&p0<=hi', ['p0'])
function partitionContainsPoint(a,b,c,d,e,f,p0){
  for (var j = 2 * a, k = j * c, l = k, m = c, n = b, o = a + b, p = c; d > p; ++p, k += j) {
    var lo = e[k + n],
        hi = e[k + o];
    if (lo <= p0 && p0 <= hi)
        if (m === p) m += 1, l += j;
        else {
            for (var s = 0; j > s; ++s) {
                var t = e[k + s];
                e[k + s] = e[l], e[l++] = t
            }
            var u = f[p];
            f[p] = f[m], f[m++] = u
        }
  }
  return m
}

//genPartition('hi<=p0', ['p0'])
function partitionEndLessThanEqual(a,b,c,d,e,f,p0){
  for (var j = 2 * a, k = j * c, l = k, m = c, n = b, o = a + b, p = c; d > p; ++p, k += j) {
    var hi = e[k + o];
    if (hi <= p0)
        if (m === p) m += 1, l += j;
        else {
            for (var s = 0; j > s; ++s) {
                var t = e[k + s];
                e[k + s] = e[l], e[l++] = t
            }
            var u = f[p];
            f[p] = f[m], f[m++] = u
        }
  }
  return m
}

//genPartition('lo<p0', ['p0'])
function partitionStartLessThan(a,b,c,d,e,f,p0){
  for (var j = 2 * a, k = j * c, l = k, m = c, n = b, o = a + b, p = c; d > p; ++p, k += j) {
    var lo = e[k + n];
    if (lo < p0)
        if (m === p) m += 1, l += j;
        else {
            for (var s = 0; j > s; ++s) {
                var t = e[k + s];
                e[k + s] = e[l], e[l++] = t
            }
            var u = f[p];
            f[p] = f[m], f[m++] = u
        }
  }
  return m
}

//genPartition('lo===p0', ['p0'])
function partitionStartEqual(a,b,c,d,e,f,p0){
  for (var j = 2 * a, k = j * c, l = k, m = c, n = b, o = a + b, p = c; d > p; ++p, k += j) {
    var lo = e[k + n];
    if (lo === p0)
        if (m === p) m += 1, l += j;
        else {
            for (var s = 0; j > s; ++s) {
                var t = e[k + s];
                e[k + s] = e[l], e[l++] = t
            }
            var u = f[p];
            f[p] = f[m], f[m++] = u
        }
  }
  return m
}

//genPartition('!(lo>=p0)&&!(p1>=hi)', ['p0', 'p1'])
function partitionInteriorContainsInterval(a,b,c,d,e,f,p0,p1){
  for (var j = 2 * a, k = j * c, l = k, m = c, n = b, o = a + b, p = c; d > p; ++p, k += j) {
    var lo = e[k + n],
        hi = e[k + o];
    if (!(lo >= p0) && !(p1 >= hi))
        if (m === p) m += 1, l += j;
        else {
            for (var s = 0; j > s; ++s) {
                var t = e[k + s];
                e[k + s] = e[l], e[l++] = t
            }
            var u = f[p];
            f[p] = f[m], f[m++] = u
        }
  }
  return m
}

//genPartition('pred(lo,hi,a0,a1)', ['pred', 'a0', 'a1'])
function partitionTest(a,b,c,d,e,f,pred,a0,a1){
  for (var j = 2 * a, k = j * c, l = k, m = c, n = b, o = a + b, p = c; d > p; ++p, k += j) {
    var lo = e[k + n],
        hi = e[k + o];
    if (pred(lo, hi, a0, a1))
        if (m === p) m += 1, l += j;
        else {
            for (var s = 0; j > s; ++s) {
                var t = e[k + s];
                e[k + s] = e[l], e[l++] = t
            }
            var u = f[p];
            f[p] = f[m], f[m++] = u
        }
  }
  return m
}
