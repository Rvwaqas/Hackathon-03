// schemas/contactForm.js
export default {
    name: 'contactForm',
    type: 'document',
    title: 'Contact Form Submissions',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
      },
      {
        name: 'email',
        type: 'string',
        title: 'Email',
      },
      {
        name: 'subject',
        type: 'string',
        title: 'Subject',
      },
      {
        name: 'message',
        type: 'text',
        title: 'Message',
      },
    ],
  };