new2> db.coll.find({'age':{lte:14}})

new2> db.coll.find({'age':{gte:14}})

new2> db.coll.find({firstName:"Test2",lastName:"Test2"},{_id:false})
[
  { firstName: 'Test2', lastName: 'Test2', age: 12 },
  { firstName: 'Test2', lastName: 'Test2', age: 12 },
  { firstName: 'Test2', lastName: 'Test2', age: 12 }
]
new2> db.coll.find({'age': {lte:14} })

new2>

new2> db.coll.find({'age': {gt:14} })

new2> db.coll.find()
[
  {
    _id: ObjectId("65324d9eba9e0859e62400c5"),
    firstName: 'Test1',
    lastName: 'Test1',
    age: 11
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400c6"),
    firstName: 'Test2',
    lastName: 'Test2',
    age: 12
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400c7"),
    firstName: 'Test3',
    lastName: 'Test3',
    age: 13
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400c8"),
    firstName: 'Test4',
    lastName: 'Test4',
    age: 14
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400c9"),
    firstName: 'Test5',
    lastName: 'Test5',
    age: 15
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400ca"),
    firstName: 'Test6',
    lastName: 'Test6',
    age: 16
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400cb"),
    firstName: 'Test7',
    lastName: 'Test7',
    age: 17
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400cc"),
    firstName: 'Test8',
    lastName: 'Test8',
    age: 18
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400cd"),
    firstName: 'Test9',
    lastName: 'Test9',
    age: 19
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400ce"),
    firstName: 'Test',
    lastName: 'Test',
    age: 10
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400cf"),
    firstName: 'Test1',
    lastName: 'Test1',
    age: 11
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d0"),
    firstName: 'Test2',
    lastName: 'Test2',
    age: 12
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d1"),
    firstName: 'Test3',
    lastName: 'Test3',
    age: 13
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d2"),
    firstName: 'Test4',
    lastName: 'Test4',
    age: 14
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d3"),
    firstName: 'Test5',
    lastName: 'Test5',
    age: 15
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d4"),
    firstName: 'Test6',
    lastName: 'Test6',
    age: 16
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d5"),
    firstName: 'Test7',
    lastName: 'Test7',
    age: 17
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d6"),
    firstName: 'Test8',
    lastName: 'Test8',
    age: 18
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d7"),
    firstName: 'Test9',
    lastName: 'Test9',
    age: 19
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d8"),
    firstName: 'Test',
    lastName: 'Test',
    age: 10
  }
]
Type "it" for more
new2> db.coll.find({ 'age': { $gt: 14 } })
[
  {
    _id: ObjectId("65324d9eba9e0859e62400c9"),
    firstName: 'Test5',
    lastName: 'Test5',
    age: 15
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400ca"),
    firstName: 'Test6',
    lastName: 'Test6',
    age: 16
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400cb"),
    firstName: 'Test7',
    lastName: 'Test7',
    age: 17
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400cc"),
    firstName: 'Test8',
    lastName: 'Test8',
    age: 18
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400cd"),
    firstName: 'Test9',
    lastName: 'Test9',
    age: 19
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d3"),
    firstName: 'Test5',
    lastName: 'Test5',
    age: 15
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d4"),
    firstName: 'Test6',
    lastName: 'Test6',
    age: 16
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d5"),
    firstName: 'Test7',
    lastName: 'Test7',
    age: 17
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d6"),
    firstName: 'Test8',
    lastName: 'Test8',
    age: 18
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d7"),
    firstName: 'Test9',
    lastName: 'Test9',
    age: 19
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400dd"),
    firstName: 'Test5',
    lastName: 'Test5',
    age: 15
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400de"),
    firstName: 'Test6',
    lastName: 'Test6',
    age: 16
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400df"),
    firstName: 'Test7',
    lastName: 'Test7',
    age: 17
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400e0"),
    firstName: 'Test8',
    lastName: 'Test8',
    age: 18
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400e1"),
    firstName: 'Test9',
    lastName: 'Test9',
    age: 19
  }
]
new2> db.coll.find({ 'age': { $gt: 14 } })
[
  {
    _id: ObjectId("65324d9eba9e0859e62400c9"),
    firstName: 'Test5',
    lastName: 'Test5',
    age: 15
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400ca"),
    firstName: 'Test6',
    lastName: 'Test6',
    age: 16
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400cb"),
    firstName: 'Test7',
    lastName: 'Test7',
    age: 17
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400cc"),
    firstName: 'Test8',
    lastName: 'Test8',
    age: 18
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400cd"),
    firstName: 'Test9',
    lastName: 'Test9',
    age: 19
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d3"),
    firstName: 'Test5',
    lastName: 'Test5',
    age: 15
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d4"),
    firstName: 'Test6',
    lastName: 'Test6',
    age: 16
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d5"),
    firstName: 'Test7',
    lastName: 'Test7',
    age: 17
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d6"),
    firstName: 'Test8',
    lastName: 'Test8',
    age: 18
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d7"),
    firstName: 'Test9',
    lastName: 'Test9',
    age: 19
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400dd"),
    firstName: 'Test5',
    lastName: 'Test5',
    age: 15
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400de"),
    firstName: 'Test6',
    lastName: 'Test6',
    age: 16
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400df"),
    firstName: 'Test7',
    lastName: 'Test7',
    age: 17
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400e0"),
    firstName: 'Test8',
    lastName: 'Test8',
    age: 18
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400e1"),
    firstName: 'Test9',
    lastName: 'Test9',
    age: 19
  }
]
new2> db.coll.find({ 'firstName': { $regex: 9 } })
MongoServerError: $regex has to be a string
new2> db.coll.find({ 'firstName': { $regex: "9"} })
[
  {
    _id: ObjectId("65324d9eba9e0859e62400cd"),
    firstName: 'Test9',
    lastName: 'Test9',
    age: 19
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d7"),
    firstName: 'Test9',
    lastName: 'Test9',
    age: 19
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400e1"),
    firstName: 'Test9',
    lastName: 'Test9',
    age: 19
  }
]
new2> db.coll.find({ 'firstName': {//: "9"} })
...                                                                                                                                        
...                                                                                                                                        
... dd                                                                                                                                     
... ss                                                                                                                                     
Uncaught:
SyntaxError: Unexpected token, expected "," (5:0)

  3 |
  4 | dd
> 5 | ss
    | ^
  6 |

new2> db.coll.find({ 'firstName'//: "9" })
... ss                                                                                                                                     
Uncaught:
SyntaxError: Unexpected token (2:0)

  1 | db.coll.find({ 'firstName'//: "9" })
> 2 | ss
    | ^
  3 |

new2> db.coll.find({ 'firstName':// "9" })
... ss                                                                                                                                     
... ss                                                                                                                                     
Uncaught:
SyntaxError: Unexpected token, expected "," (3:0)

  1 | db.coll.find({ 'firstName':// "9" })
  2 | ss
> 3 | ss
    | ^
  4 |

new2> db.coll.find({ 'firstName':/test/i })
[
  {
    _id: ObjectId("65324d9eba9e0859e62400c5"),
    firstName: 'Test1',
    lastName: 'Test1',
    age: 11
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400c6"),
    firstName: 'Test2',
    lastName: 'Test2',
    age: 12
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400c7"),
    firstName: 'Test3',
    lastName: 'Test3',
    age: 13
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400c8"),
    firstName: 'Test4',
    lastName: 'Test4',
    age: 14
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400c9"),
    firstName: 'Test5',
    lastName: 'Test5',
    age: 15
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400ca"),
    firstName: 'Test6',
    lastName: 'Test6',
    age: 16
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400cb"),
    firstName: 'Test7',
    lastName: 'Test7',
    age: 17
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400cc"),
    firstName: 'Test8',
    lastName: 'Test8',
    age: 18
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400cd"),
    firstName: 'Test9',
    lastName: 'Test9',
    age: 19
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400ce"),
    firstName: 'Test',
    lastName: 'Test',
    age: 10
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400cf"),
    firstName: 'Test1',
    lastName: 'Test1',
    age: 11
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d0"),
    firstName: 'Test2',
    lastName: 'Test2',
    age: 12
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d1"),
    firstName: 'Test3',
    lastName: 'Test3',
    age: 13
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d2"),
    firstName: 'Test4',
    lastName: 'Test4',
    age: 14
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d3"),
    firstName: 'Test5',
    lastName: 'Test5',
    age: 15
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d4"),
    firstName: 'Test6',
    lastName: 'Test6',
    age: 16
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d5"),
    firstName: 'Test7',
    lastName: 'Test7',
    age: 17
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d6"),
    firstName: 'Test8',
    lastName: 'Test8',
    age: 18
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d7"),
    firstName: 'Test9',
    lastName: 'Test9',
    age: 19
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d8"),
    firstName: 'Test',
    lastName: 'Test',
    age: 10
  }
]
Type "it" for more
new2> db.coll.find({ 'firstName':t/i })
ReferenceError: t is not defined
new2> db.coll.find({ 'firstName':/t9$/ })
[
  {
    _id: ObjectId("65324d9eba9e0859e62400cd"),
    firstName: 'Test9',
    lastName: 'Test9',
    age: 19
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d7"),
    firstName: 'Test9',
    lastName: 'Test9',
    age: 19
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400e1"),
    firstName: 'Test9',
    lastName: 'Test9',
    age: 19
  }
]
new2> db.coll.find({ 'firstName':'Test9' },{'age':11})
[
  { _id: ObjectId("65324d9eba9e0859e62400cd"), age: 19 },
  { _id: ObjectId("65324d9eba9e0859e62400d7"), age: 19 },
  { _id: ObjectId("65324d9eba9e0859e62400e1"), age: 19 }
]
new2> db.coll.find({ 'firstName':'Test9','age':11 },{_id:false})

new2> db.coll.find({ 'firstName':'Test9','age':19 },{_id:false})
[
  { firstName: 'Test9', lastName: 'Test9', age: 19 },
  { firstName: 'Test9', lastName: 'Test9', age: 19 },
  { firstName: 'Test9', lastName: 'Test9', age: 19 }
]
new2> db.coll.find({$or[ 'firstName':'Test9','age':19] },{_id:false})
Uncaught:
SyntaxError: Unexpected token, expected "," (1:17)

> 1 | db.coll.find({$or[ 'firstName':'Test9','age':19] },{_id:false})
    |                  ^
  2 |

new2> db.coll.find({
 },
...   $or: [
...     { 'firstName': 'Test9'    { 'age': 19 }
Uncaught:
SyntaxError: Unexpected token, expected "," (3:30)

  1 | db.coll.find({
  2 |   $or: [
> 3 |     { 'firstName': 'Test9'    { 'age': 19 }
    |                               ^
  4 |

new2>   ]
Uncaught:
SyntaxError: Unexpected token (1:2)

> 1 |   ]
    |   ^
  2 |

new2> }, { _id: 0 })
Uncaught:
SyntaxError: Unexpected token (1:0)

> 1 | }, { _id: 0 })
    | ^
  2 |

new2> db.coll.find({
...   $or: [                                                                                                                               
...     { 'firstName': 'Test9' },
...     { 'age': 19 }                                                                                                                      
...   ]
... }, { _id: 0 })
[
  { firstName: 'Test9', lastName: 'Test9', age: 19 },
  { firstName: 'Test9', lastName: 'Test9', age: 19 },
  { firstName: 'Test9', lastName: 'Test9', age: 19 }
]
new2> db.coll.find({  $or: [  { 'firstName': 'Test9' },  { 'age': 19 }  ]}, { _id: 0 })
[
  { firstName: 'Test9', lastName: 'Test9', age: 19 },
  { firstName: 'Test9', lastName: 'Test9', age: 19 },
  { firstName: 'Test9', lastName: 'Test9', age: 19 }
]
new2> db.coll.find().limit(3)
[
  {
    _id: ObjectId("65324d9eba9e0859e62400c5"),
    firstName: 'Test1',
    lastName: 'Test1',
    age: 11
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400c6"),
    firstName: 'Test2',
    lastName: 'Test2',
    age: 12
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400c7"),
    firstName: 'Test3',
    lastName: 'Test3',
    age: 13
  }
]
new2> db.coll.find().skip(10).limit(3)
[
  {
    _id: ObjectId("65324d9eba9e0859e62400cf"),
    firstName: 'Test1',
    lastName: 'Test1',
    age: 11
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d0"),
    firstName: 'Test2',
    lastName: 'Test2',
    age: 12
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d1"),
    firstName: 'Test3',
    lastName: 'Test3',
    age: 13
  }
]
new2> db.coll.find().skip(28).limit(3)
[
  {
    _id: ObjectId("65324d9eba9e0859e62400e1"),
    firstName: 'Test9',
    lastName: 'Test9',
    age: 19
  }
]
new2> db.coll.find().sort()
[
  {
    _id: ObjectId("65324d9eba9e0859e62400c5"),
    firstName: 'Test1',
    lastName: 'Test1',
    age: 11
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400c6"),
    firstName: 'Test2',
    lastName: 'Test2',
    age: 12
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400c7"),
    firstName: 'Test3',
    lastName: 'Test3',
    age: 13
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400c8"),
    firstName: 'Test4',
    lastName: 'Test4',
    age: 14
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400c9"),
    firstName: 'Test5',
    lastName: 'Test5',
    age: 15
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400ca"),
    firstName: 'Test6',
    lastName: 'Test6',
    age: 16
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400cb"),
    firstName: 'Test7',
    lastName: 'Test7',
    age: 17
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400cc"),
    firstName: 'Test8',
    lastName: 'Test8',
    age: 18
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400cd"),
    firstName: 'Test9',
    lastName: 'Test9',
    age: 19
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400ce"),
    firstName: 'Test',
    lastName: 'Test',
    age: 10
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400cf"),
    firstName: 'Test1',
    lastName: 'Test1',
    age: 11
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d0"),
    firstName: 'Test2',
    lastName: 'Test2',
    age: 12
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d1"),
    firstName: 'Test3',
    lastName: 'Test3',
    age: 13
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d2"),
    firstName: 'Test4',
    lastName: 'Test4',
    age: 14
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d3"),
    firstName: 'Test5',
    lastName: 'Test5',
    age: 15
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d4"),
    firstName: 'Test6',
    lastName: 'Test6',
    age: 16
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d5"),
    firstName: 'Test7',
    lastName: 'Test7',
    age: 17
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d6"),
    firstName: 'Test8',
    lastName: 'Test8',
    age: 18
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d7"),
    firstName: 'Test9',
    lastName: 'Test9',
    age: 19
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d8"),
    firstName: 'Test',
    lastName: 'Test',
    age: 10
  }
]
Type "it" for more
new2> db.coll.find().sort({'firstName'})
Uncaught:
SyntaxError: Unexpected token (1:32)

> 1 | db.coll.find().sort({'firstName'})
    |                                 ^
  2 |

new2> db.coll.find().sort({ 'firstName': 1 })
[
  {
    _id: ObjectId("65324d9eba9e0859e62400ce"),
    firstName: 'Test',
    lastName: 'Test',
    age: 10
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d8"),
    firstName: 'Test',
    lastName: 'Test',
    age: 10
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400c5"),
    firstName: 'Test1',
    lastName: 'Test1',
    age: 11
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400cf"),
    firstName: 'Test1',
    lastName: 'Test1',
    age: 11
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d9"),
    firstName: 'Test1',
    lastName: 'Test1',
    age: 11
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400c6"),
    firstName: 'Test2',
    lastName: 'Test2',
    age: 12
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d0"),
    firstName: 'Test2',
    lastName: 'Test2',
    age: 12
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400da"),
    firstName: 'Test2',
    lastName: 'Test2',
    age: 12
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400c7"),
    firstName: 'Test3',
    lastName: 'Test3',
    age: 13
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d1"),
    firstName: 'Test3',
    lastName: 'Test3',
    age: 13
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400db"),
    firstName: 'Test3',
    lastName: 'Test3',
    age: 13
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400c8"),
    firstName: 'Test4',
    lastName: 'Test4',
    age: 14
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d2"),
    firstName: 'Test4',
    lastName: 'Test4',
    age: 14
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400dc"),
    firstName: 'Test4',
    lastName: 'Test4',
    age: 14
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400c9"),
    firstName: 'Test5',
    lastName: 'Test5',
    age: 15
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d3"),
    firstName: 'Test5',
    lastName: 'Test5',
    age: 15
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400dd"),
    firstName: 'Test5',
    lastName: 'Test5',
    age: 15
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400ca"),
    firstName: 'Test6',
    lastName: 'Test6',
    age: 16
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d4"),
    firstName: 'Test6',
    lastName: 'Test6',
    age: 16
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400de"),
    firstName: 'Test6',
    lastName: 'Test6',
    age: 16
  }
]
Type "it" for more
new2> db.coll.find().sort({ 'firstName': -1 })
[
  {
    _id: ObjectId("65324d9eba9e0859e62400cd"),
    firstName: 'Test9',
    lastName: 'Test9',
    age: 19
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d7"),
    firstName: 'Test9',
    lastName: 'Test9',
    age: 19
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400e1"),
    firstName: 'Test9',
    lastName: 'Test9',
    age: 19
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400cc"),
    firstName: 'Test8',
    lastName: 'Test8',
    age: 18
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d6"),
    firstName: 'Test8',
    lastName: 'Test8',
    age: 18
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400e0"),
    firstName: 'Test8',
    lastName: 'Test8',
    age: 18
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400cb"),
    firstName: 'Test7',
    lastName: 'Test7',
    age: 17
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d5"),
    firstName: 'Test7',
    lastName: 'Test7',
    age: 17
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400df"),
    firstName: 'Test7',
    lastName: 'Test7',
    age: 17
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400ca"),
    firstName: 'Test6',
    lastName: 'Test6',
    age: 16
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d4"),
    firstName: 'Test6',
    lastName: 'Test6',
    age: 16
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400de"),
    firstName: 'Test6',
    lastName: 'Test6',
    age: 16
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400c9"),
    firstName: 'Test5',
    lastName: 'Test5',
    age: 15
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d3"),
    firstName: 'Test5',
    lastName: 'Test5',
    age: 15
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400dd"),
    firstName: 'Test5',
    lastName: 'Test5',
    age: 15
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400c8"),
    firstName: 'Test4',
    lastName: 'Test4',
    age: 14
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d2"),
    firstName: 'Test4',
    lastName: 'Test4',
    age: 14
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400dc"),
    firstName: 'Test4',
    lastName: 'Test4',
    age: 14
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400c7"),
    firstName: 'Test3',
    lastName: 'Test3',
    age: 13
  },
  {
    _id: ObjectId("65324d9eba9e0859e62400d1"),
    firstName: 'Test3',
    lastName: 'Test3',
    age: 13
  }
]
Type "it" for more
new2> db.coll.find().count()
29
new2> db.coll.countDocuments()
29
new2> db.coll.estimateDocumentCount()
TypeError: db.coll.estimateDocumentCount is not a function
new2> db.coll.estimatedDocumentCount()
29
new2>