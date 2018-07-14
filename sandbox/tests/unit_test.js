let expect = require('mocha').expect;
let server = require('./server');
let script = require('../public/script');

// Simple Test
describe('Server is running', function(){
    it('should display this message when running : Server Ready', function(){
        let msg = 'Server Ready';
        let launch = server();

        expect(launch).to.be.equal(launch);
    })
})

// Test for loading screen
describe('loading', function(){
    it('should load the menu after loading screen', function(){
        // Test implementations
    });
    // more parameters to test using "it" for this test.
    it('should display tips randomly', function(){
        // Test implementations
    })
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
});