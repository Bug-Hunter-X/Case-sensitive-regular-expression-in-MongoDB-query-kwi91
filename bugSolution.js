```javascript
const query = {
  field: { $regex: /pattern/i }
};

//Correct query
db.collection('myCollection').find(query, { caseInsensitive: true }).toArray((err, result)=>{...
});
```