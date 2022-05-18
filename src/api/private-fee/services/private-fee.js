'use strict';

/**
 * private-fee service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::private-fee.private-fee');
