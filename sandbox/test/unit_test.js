let expect = require('chai').expect;
let request = require('request');
let server = require('../server');

// Simple Test
describe('Server status and content', function(){
    it('Server should run', function(done){
        request('http://localhost:8080', function (err, res, body){
            expect(res.statusCode).to.equal(200);
            done();
        });
    });
    it('Should display content', function(done){
        request('http://localhost:8080', function (err, res, body){
            expect(res.body).to.exist;
            done();
        });
    });
});
/* Phaser unit testing = BAD IDEA
// Test for loading screen
describe('loading', function(){
    it('should load the menu after loading screen', function(){
        // Test implementations
    });
    // more parameters to test using "it" for this test.
    it('should display tips randomly', function(){
        // Test implementations
    });
});

// Test for next scene
describe('next scene', function(){
    it('should go to the next scene either if, the timer is done or the player completed the tasks', function(){
        // Test implementations
    });
    // more parameters to test using "it" for this test.
});

// Test for garden level
describe('pickup the correct ingredient', function(){
    it('should expect the right ingredient for the recipe on screen', function(){
        // Test implementations
    });
    // more parameters to test using "it" for this test.
}); */