```javascript
const query = {
  field: { $regex: /pattern/i }
};

//Incorrect query
db.collection('myCollection').find(query).toArray((err, result)=>{...
});
```