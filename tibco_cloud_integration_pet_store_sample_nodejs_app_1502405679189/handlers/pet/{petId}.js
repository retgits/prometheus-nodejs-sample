'use strict';
var dataProvider = require('../../data/pet/{petId}.js');
/**
 * Operations on /pet/{petId}
 */
module.exports = {
    /**
     * summary: Use the POST method of this API specification to create a new pet
     * description: The POST method in an API Specification is used to create a new resource. In this case it would create a new pet with the petId you specify when calling the API and the information you add to the body (e.g. the name or the status). When you create a [Mock application](https://integration.cloud.tibco.com/docs/mockapp/creatingMockApp/index.html#APIModeler) from this specification it will also show you a sample request and a sample response.
     * parameters: Pet Information, petId
     * produces: application/json
     * responses: 200
     */
    post: function postpet(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['post']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    },
    /**
     * summary: Use the GET method of this API specification to retrieve (get) a pet from the store
     * description: The GET method in an API Specification is used to retrieve a resource from the API. In this case it would retrieve a pet with the petId you specify when calling the API. When the pet is found it will return the information to you. When you create a [Mock application](https://integration.cloud.tibco.com/docs/mockapp/creatingMockApp/index.html#APIModeler) from this specification it will also show you a sample response.
     * parameters: petId
     * produces: application/json
     * responses: 200
     */
    get: function getpet(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['get']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    },
    /**
     * summary: Use the PUT method of this API specification to update a pet
     * description: The PUT method in an API Specification is used to create a new resource or update an existing resource. Based on the ID you specify when calling the API it would create a new pet in the store if the ID isn&#39;t in use or will update the pet that has the ID if the ID already exists. It would create or update the pet with the information you add to the body (e.g. the name or the status). When you create a [Mock application](https://integration.cloud.tibco.com/docs/mockapp/creatingMockApp/index.html#APIModeler) from this specification it will also show you a sample request and a sample response.
     * parameters: Pet Information, petId
     * produces: application/json
     * responses: 200
     */
    put: function putpet(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['put']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    },
    /**
     * summary: Use the DELETE method of this API specification to remove (DELETE) a pet from the store
     * description: The DELETE method in an API Specification is used to remove a resource from the API. In this case it would remove the pet with the petId you specify when calling the API. When you create a [Mock application](https://integration.cloud.tibco.com/docs/mockapp/creatingMockApp/index.html#APIModeler) from this specification it will also show you a sample response.
     * parameters: petId
     * produces: application/json
     * responses: 200
     */
    delete: function deletepet(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['delete']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
