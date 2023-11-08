const swaggerDefinition = {
  openapi: '3.0.0', // Specify the OpenAPI version
  info: {
    title: 'Bank Application Backend API', // Title (required)
    version: '1.0.0', // Version (required)
    description: 'API documentation for your project',
  },
  servers: [
    {
      url: 'http://localhost:4000/api',
      description: 'Development server',
    },
  ],
  paths: {
    // Your existing paths

    // Add the admin routes here
    "/admin/new": {
      post: {
        summary: "Create a new admin",
        description: "Create a new admin.",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Admin"
              }
            }
          }
        },
        responses: {
          201: {
            description: "Admin created successfully"
          },
          400: {
            description: "Bad request"
          }
        }
      }
    },
    "/admin/listall": {
      get: {
        summary: "List All Admin.",
        description: "List All Admin.",
        responses: {
          200: {
            description: "Request successful"
          },
          400: {
            description: "Bad request"
          }
        }
      }
    },
    "/admin/{id}": {
      get: {
        summary: "Get an admin by ID",
        description: "Retrieve an admin user by their ID.",
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            description: "ID of the admin to retrieve",
            schema: {
              type: "string"
            }
          }
        ],
        responses: {
          200: {
            description: "Admin retrieved successfully",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Admin"
                }
              }
            }
          },
          404: {
            description: "Admin not found"
          }
        }
      }
    },
    // Add more admin routes if needed

    // Add the customer routes here
    "/customer/new": {
      post: {
        summary: "Create a new customer",
        description: "Create a new customer.",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Customer"
              }
            }
          }
        },
        responses: {
          201: {
            description: "Customer created successfully"
          },
          400: {
            description: "Bad request"
          }
        }
      }
    },
    "/customer/listall": {
      get: {
        summary: "List All Customers",
        description: "List All Customers.",
        responses: {
          200: {
            description: "Request successful"
          },
          400: {
            description: "Bad request"
          }
        }
      }
    },
    "/customer/{accountNumber}": {
      get: {
        summary: "Search a customer by Account Number",
        description: "Search a customer by their Account Number.",
        parameters: [
          {
            in: "path",
            name: "accountNumber",
            required: true,
            description: "Account Number of the customer to search",
            schema: {
              type: "string"
            }
          }
        ],
        responses: {
          200: {
            description: "Customer found successfully",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Customer"
                }
              }
            }
          },
          404: {
            description: "Customer not found"
          }
        }
      }
    },
    "/customer/login": {
      post: {
        summary: "Customer login",
        description: "Authenticate a customer user.",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  email: {
                    type: "string",
                  },
                  password: {
                    type: "string",
                  },
                },
                required: ["email", "password"],
              },
            },
          },
        },
        responses: {
          200: {
            description: "Customer logged in successfully",
          },
          401: {
            description: "Invalid email or password",
          },
          500: {
            description: "Internal server error",
          },
        },
        operationId: "authenticateUser",
        tags: ["Login"],
        responses: {},
        security: [],
      },
    },
    // Add the login route definition
    "/login/auth": {
      post: {
        summary: "Authenticate a user",
        description: "Authenticate a user based on their email, password, and userType.",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  email: {
                    type: "string",
                  },
                  password: {
                    type: "string",
                  },
                  userType: {
                    type: "string",
                  },
                },
                required: ["email", "password", "userType"],
              },
            },
          },
        },
        responses: {
          200: {
            description: "User is authenticated successfully",
            content: {},
          },
          401: {
            description: "Authentication failed",
          },
          500: {
            description: "Internal server error",
          },
        },
      },
    },
    // Add the staff routes here
    "/staff/new": {
      post: {
        summary: "Create a new staff member",
        description: "Create a new staff member.",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Staff"
              }
            }
          }
        },
        responses: {
          201: {
            description: "Staff member created successfully",
          },
          400: {
            description: "Bad request",
          },
        },
      },
    },
    "/staff/listall": {
      get: {
        summary: "List All Staff Members",
        description: "List All Staff Members.",
        responses: {
          200: {
            description: "Request successful",
          },
          400: {
            description: "Bad request",
          },
        },
      },
    },
    "/staff/{email}": {
      put: {
        summary: "Update a staff member by email",
        description: "Update a staff member by their email.",
        parameters: [
          {
            in: "path",
            name: "email",
            required: true,
            description: "Email of the staff member to update",
            schema: {
              type: "string",
            },
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Staff"
              }
            }
          },
        },
        responses: {
          200: {
            description: "Staff member updated successfully",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Staff"
                }
              }
            }
          },
          404: {
            description: "Staff member not found"
          },
        },
      },
    },
    // Add more staff routes if needed
  },
  components: {
    schemas: {
      // Your existing schemas

      // Add the Admin schema here (if it's not already defined)
      Admin: {
        type: "object",
        properties: {
          id: {
            type: "string",
            required: true,
          },
          name: {
            type: "string",
            required: true,
          },
          email: {
            type: "string",
            required: true,
            unique: true,
          },
          password: {
            type: "string",
            required: true,
          },
        },
      },
      // Add the Customer schema here (if it's not already defined)
      Customer: {
        type: "object",
        properties: {
          name: {
            type: "string",
            required: true,
          },
          email: {
            type: "string",
            required: true,
            unique: true,
          },
          password: {
            type: "string",
            required: true,
          },
          balance: {
            type: "number",
            default: 0,
          },
        },
      },
      // Add the Staff schema here
      Staff: {
        type: "object",
        properties: {
          name: {
            type: "string",
            required: true,
          },
          email: {
            type: "string",
            required: true,
            unique: true,
          },
          password: {
            type: "string",
            required: true,
          },
        },
      },
    },
  },
};

module.exports = swaggerDefinition;
