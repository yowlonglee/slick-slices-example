import { useState } from 'react';

export default function useForm(defaults) {
  const [values, setValues] = useState(defaults);

  function updateValue(e) {
    // Check if its a number and convert
    let { value } = e.target;
    if (e.target.type === 'number') {
      value = parseInt(value);
    }
    setValues({
      // Copy the existing values into it
      ...values,
      // update the value that changed
      [e.target.name]: value,
    });
  }
  return { values, updateValue };
}
