// test-charities.js

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();
const Charity = require('../models/Charity');
chai.use(chaiHttp);

const sampleCharity =     {
    "donation": "999",
    "charName": "La La Land",
    "description": "Crapy Charity"


    describe('Charities', ()  => {

        // TEST INDEX
        it('should index ALL Charities on / GET', (done) => {
            chai.request(server)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.html;
                done();
            });
        });

        // TEST NEW
        it('should display new form on /charities/new GET', (done) => {
            chai.request(server)
            .get(`/charities/new`)
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.html
                done();
            });
        });


        // TEST CREATE
        it('should create a SINGLE charity on /charities POST', (done) => {
            chai.request(server)
            .post('/charities')
            .send(sampleCharity)
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.html
                done();
            });
        });

        // TEST SHOW
        it('should show a SINGLE charity on /charities/<id> GET', (done) => {
            var charity = new Charity(sampleCharity);
            charity.save((err, data) => {
                chai.request(server)
                .get(`/charities/${data._id}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.html
                    done();
                });
            });
        });

        describe('Charities', ()  => {

            after(() => {
                Charity.deleteMany({charName: 'La La Land'}).exec((err, Charities) => {
                    console.log(charities)
                    charities.remove();
                })
            });
        });
        // TEST EDIT
        it('should edit a SINGLE charity on /charities/<id>/edit GET', (done) => {
            var charity = new Charity(sampleCharity);
            charity.save((err, data) => {
                chai.request(server)
                .get(`/charities/${data._id}/edit`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.html
                    done();
                });
            });
        });

        // TEST UPDATE
        it('should update a SINGLE charity on /charities/<id> PUT', (done) => {
            var charity = new Charity(sampleCharity);
            charity.save((err, data)  => {
                chai.request(server)
                .put(`/charities/${data._id}?_method=PUT`)
                .send({'charName': 'Updating the title'})
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.html
                    done();
                });
            });
        });


        // TEST DELETE
        it('should delete a SINGLE charity on /charities/<id> DELETE', (done) => {
            var review = new Charity(sampleReview);
            charity.save((err, data)  => {
                chai.request(server)
                .delete(`/charities/${data._id}?_method=DELETE`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.html
                    done();
                });
            });
        });
    });
});
