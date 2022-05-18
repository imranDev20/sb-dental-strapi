'use strict';

/**
 * nhs-price service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::nhs-price.nhs-price');
