
//1.display all the documents
db.restaurants.find();
//2.display the fields restaurant_id, name, borough and cuisine 
db.restaurants.find({},{"restaurant_id" : 1, "name": 1, "borough":1,"cuisine":1})
//3.display the fields restaurant_id, name, borough and cuisine, but exclude the field  "_id "
db.restaurants.find({},{"restaurant_id" : 1, "name": 1, "borough":1,"cuisine":1, "_id" : 0})
//4.display the fields restaurant_id, name, borough and zip code(sub document), but exclude the field _id
db.restaurants.find({},{"restaurant_id" : 1, "name": 1, "borough":1,"address.zipcode":1, "_id" : 0})
//5.display all the restaurant which is in the borough Bronx.
db.restaurants.find({"borough": "Bronx"});
//6.display the first 5 restaurant which is in the borough Bronx.
db.restaurants.find({"borough": "Bronx"}).limit(5);
//7.display the next 5 restaurants after skipping first 5 which are in the borough Bronx.
db.restaurants.find({"borough": "Bronx"}).skip(5).limit(5);
//8.find the restaurants who achieved a score more than 90(The $elemMatch operator matches documents that 
//contain an array field with at least one element that matches all the specified query criteria.)
db.restaurants.find({"grades" : { $elemMatch:{"score":{$gt : 90}}}});
//9.Find the restaurants that achieved a score is more than 80 but less than 100
db.restaurants.find({"grades": {$elemMatch:{"score":{$gt:80 , $lt :100}}}});
//10.find the restaurants which locate in a latitude value less than -95.754168.
db.restaurants.find({"address.coord" : {$lt : -95.754168}});
//11.Find the restaurants that do not prepare any cuisine of American and their grade score more than 70 and lattitude less than a specified number
db.restaurants.find( {$and: //performs a logical AND operation on an array of one or more expression
                    [
                       {"cuisine" : {$ne :"American"}},
                       {"grades.score" : {$gt : 70}},
                       {"address.coord" : {$lt : -65.754168}}
                    ]
                })
// 12. Find the restaurants which do not prepare any cuisine of American and achieved a grade point A not belongs to the borough Brooklyn
//The document must be displayed according to the cuisine in descending order.
                    
db.restaurants.find( {$and: 
                     [
                       {"cuisine" : {$ne :"American"}},
                       {"grades.grade" : "A"},
                       {"borough" : {$ne :"Brooklyn" }}
                     ]
                    
                   }).sort({"cuisine":-1});            
                
                
