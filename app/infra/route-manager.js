import FS from 'fs';

import express from 'express';
import axios from 'axios';

import nconf from 'nconf';

import React from 'react'
import {renderToString} from 'react-dom/server';
import {match, RouterContext} from 'react-router';

import baseManager from './base-manager';
import routes from '../routes';

import ContextWrapper from '../components/common/ContextWrapper';

const routeManager = Object.assign({}, baseManager, {
    configureDevelopmentEnv(app) {
        const apiRouter = this.createApiRouter();
        const pagesRouter = this.createPageRouter();
        app.use('/api', apiRouter);            
        app.use('/', pagesRouter);            
    },

    createPageRouter() {
        const router = express.Router();
    
        router.get('*', (req, res) => {
            match({routes, location: req.originalUrl}, (err, redirectLocation, renderProps) => {
                const {promises, components} = this.mapComponentsToPromises(
                    renderProps.components, renderProps.params);

                Promise.all(promises).then((values) => {
                    const data = this.prepareData(values, components);
                    const html = this.render(renderProps, data);

                    res.render('index', {
                        content: html,
                        context: JSON.stringify(data)
                    });
                }).catch((err) => {
                    res.status(500).send(err);
                });
            });
        });

        return router;
    },

    mapComponentsToPromises(components, params) {
        const filteredComponents = components.filter((Component) => {
            return (typeof Component.loadAction === 'function');
        });

        const promises = filteredComponents.map(function(Component) {
            return Component.loadAction(params, nconf.get('domain'));                  
        });

        return {promises, components: filteredComponents};
    },

    prepareData(values, components) {
        const map = {};

        values.forEach((value, index) => {
            map[components[0].NAME] = value.data;
        });

        return map;
    },

    render(renderProps, data) {      
        let html = renderToString(
            <ContextWrapper data={data}>
                <RouterContext {...renderProps}/>
            </ContextWrapper>
        );

        return html;
    },

    createApiRouter(app) {
        const router = express.Router();

        router.get('/donation/:id', (req, res) => {
            const id = req.params.id;

            this.retrieveDonations((err, data) => {
                if(!err) {
                    const donationData = data.items.filter((item) => {
                        return item.id === id;
                    })[0];

                    res.json(donationData);
                } else {
                    res.status(500).send(err);
                }
            });
        });

        router.get('/donations', (req, res) => {
            this.retrieveDonations((err, data) => {
                if(!err) {
                    res.json(data);
                } else {
                    res.status(500).send(err);
                }
            });
        });

        router.get('/charity/:id', (req, res) => {
            const id = req.params.id;

            this.retrieveCharities((err, data) => {
                if(!err) {
                    const charityData = data.items.filter((item) => {
                        return item.id === id;
                    })[0];

                    res.json(charityData);
                } else {
                    res.status(500).send(err);
                }
            });
        });

        router.get('/charities', (req, res) => {
            this.retrieveCharities((err, data) => {
                if(!err) {
                    res.json(data);
                } else {
                    res.status(500).send(err);
                }
            });
        });

        return router;
    },

    retrieveDonations(callback) {
        FS.readFile('./app/fixtures/donations.json', 'utf-8', (err, content) => {
            callback(err, JSON.parse(content));
        });
    },

    retrieveCharities(callback) {
        FS.readFile('./app/fixtures/charities.json', 'utf-8', (err, content) => {
            callback(err, JSON.parse(content));
        });
    }
});

export default routeManager;