import React from 'react';
import { FormFeedback, FormGroup, Label, Input } from 'reactstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

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
    <FormFeedback style={touched[field.name] && { display: "block" }}>{touched[field.name] && errors[field.name]}</FormFeedback>
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

const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
  <div className="position-relative">
    <Input
      type="text"
      value={value}
      onClick={onClick}
      innerRef={ref}
      readOnly
      className="form-control"
      placeholder='yyyy'
    />
    <div
      className="position-absolute top-0 end-0 h-100 d-flex align-items-center"
      style={{ paddingRight: '8px' }}
    >
      <FontAwesomeIcon icon={faCalendarAlt} />
    </div>
  </div>
));

export const MyDatePicker = ({ field, form: { touched, errors, setFieldValue }, label, ...props }) => {
  const handleChange = (date) => {
    setFieldValue(field.name, date);
  };

  return (
    <FormGroup className="mb25">
      <Label for={field.name} className="form-label fw600 dark-color">{label}</Label>
      <br />
      <DatePicker
        id={field.name}
        selected={field.value instanceof Date ? field.value : null}
        onChange={handleChange}
        dateFormat="yyyy"
        showYearPicker
        customInput={<CustomInput name={touched[field.name]} error={errors[field.name]} />}
        {...props}
      />
      <br />
      <FormFeedback style={touched[field.name] && { display: "block" }}>{touched[field.name] && errors[field.name]}</FormFeedback>
    </FormGroup>
  );
};

