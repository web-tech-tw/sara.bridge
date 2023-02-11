"use strict";
// Get IP Address from request.

/**
 * Get IP Address from request with fallback.
 * @param {object} req the request
 * @return {string} the IP Address
 */
function getIPAddress(req) {
    return req?.clientIp || req.ip;
}

// Export (object)
module.exports = {
    getIPAddress,
};
