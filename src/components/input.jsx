import React from 'react';
import { FormFeedback, FormGroup, Label, Input } from 'reactstrap';

export const MyInput = ({ field, form: { touched, errors }, label, ...props }) => (
  <FormGroup className="mb25">
    <Label for={field.name} className="form-label fw600 dark-color">{label}</Label>
    <Input
      id={field.name}
      invalid={touched[field.name] && !!errors[field.name]}
      {...field}
      {...props}
    />
    <FormFeedback>{touched[field.name] && errors[field.name]}</FormFeedback>
  </FormGroup>
);

export const MySelect = ({ field, form: { touched, errors }, label, options, ...props }) => (
  <FormGroup className="widget-wrapper sideborder-dropdown">
    <Label for={field.name} className="heading-color ff-heading fw600 mb10">{label}</Label>
    <div className="form-style2 input-group">
      <Input
        className=''
        type="select"
        id={field.name}
        invalid={touched[field.name] && !!errors[field.name]}
        {...field}
        {...props}
      >
        <option value="">--Select {label}--</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </Input>
    </div>
    <FormFeedback>{touched[field.name] && errors[field.name]}</FormFeedback>
  </FormGroup>
);

export const MyTextarea = ({ field, form: { touched, errors }, label, ...props }) => (
  <FormGroup className="mb25">
    <Label for={field.name} className="form-label fw600 dark-color">{label}</Label>
    <Input
      type="textarea"
      id={field.name}
      invalid={touched[field.name] && !!errors[field.name]}
      {...field}
      {...props}
    />
    <FormFeedback>{touched[field.name] && errors[field.name]}</FormFeedback>
  </FormGroup>
);


