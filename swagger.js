const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Ferry Amaludin YouApp API',
      version: '1.0.0',
      description: 'This is the API documentation for YouApp, providing endpoints for authentication, profile management, and more.',
      contact: {
        name: 'Ferry Amaludin',
        email: 'ferryamludn.work@gmail.com',
      },
      license: {
        name: 'Ferry Amaludin',
        url: 'https://www.linkedin.com/in/ferry-amaludin-31a964259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      },
    },
    servers: [
      {
        url: 'https://ferryamludn-youapp-backend1.vercel.app/',
        description: 'Production server',
      },
      {
        url: 'http://localhost:3000',
        description: 'Development [NOT USE], just work when you run in locally',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./routes/*.js'],
};

module.exports = swaggerJsdoc(options);