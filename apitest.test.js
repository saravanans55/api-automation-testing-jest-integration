let supertest = require('supertest');
const request = supertest('https://reqres.in/');

//Get API Test Case
it('User List API Test',async () => {
    try{
        const response = await request.get('api/users?page=2');
        console.log("Result--------");
        console.log(response.body);
        expect(response.status).toBe(200);
    }catch(err){
        console.log(err);
    }
});

//Post API Test Case
it('User Registration API Test',async () => {
    try{
        let inputObj = {
            "name" : "Saravanan S",
            "job" : "Senior Software Engineer"
        };
        const response = await request.post('api/users').send(inputObj);
        console.log("Result--------");
        console.log(response.body);
        expect(response.status).toBe(201);
    }catch(err){
        console.log(err);
    }
});