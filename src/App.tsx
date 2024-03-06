import { Form, Input } from 'formfusion';
import './App.css';

const MyForm = () => {
  const onSubmit = (data: object) => {
    console.log('Form submitted successfully', data);
  };

  return (
    <Form onSubmit={onSubmit} className="form">
      <Input
        id="username"
        name="username"
        type="username"
        label="Username"
        required
        classes={{
          field: 'input-field',
          label: 'input-field__label',
          error: 'input-field__error-message',
        }}
        validation={{
          patternMismatch: 'Please match the requested format.',
          valueMissing: 'This field is required.',
        }}
      />
      <button type="submit">Submit</button>
    </Form>
  );
};

export default MyForm;
