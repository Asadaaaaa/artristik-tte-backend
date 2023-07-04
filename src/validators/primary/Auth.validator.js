class AuthValidator {
  register = {
    type: 'object',
    properties: {
      country_uuid: {
        type: 'string',
        maxLength: 60,
        minLength: 1,
        nullable: false
      },
      name: {
        type: 'string',
        minLength: 2,
        maxLength: 60,
        pattern: '^[A-Za-z]+(?:\\s[A-Za-z]+)*$',
        nullable: false
      },
      birthdate: {
        type: 'string',
        minLength: 10,
        maxLength: 10,
        pattern: '^\\d{4}-\\d{2}-\\d{2}$',
        nullable: false
      },
      email: {
        type: 'string',
        maxLength: 100,
        minLength: 5,
        pattern: '^\\S+@\\S+\\.\\S+$',
        nullable: false
      },
      phone_number: {
        type: 'string',
        maxLength: 20,
        minLength: 5,
        pattern: '^\\+?[0-9]+$',
        nullable: false
      },
      nik: {
        type: 'string',
        minLength: 16,
        maxLength: 16,
        pattern: '^[0-9]+$',
        allowNull: true
      },
      passport_id: {
        type: 'string',
        maxLength: 20,
        minLength: 6,
        pattern: '^[A-Z0-9]+$',
        allowNull: true
      },
      identity_proof: {
        type: 'string',
        minLength: 1,
        pattern: '^[A-Za-z0-9+/]+[=]{0,2}$',
        allowNull: false
      }
    },
    required: [
      'country_uuid', 'name', 'birthdate', 'email',
      'phone_number', 'nik', 'passport_id', 'identity_proof'
    ],
    additionalProperties: false
  }
}

export default AuthValidator;