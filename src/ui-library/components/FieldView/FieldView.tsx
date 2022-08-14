import React from "react";
import { FieldProps, createField, FieldType } from '@altiore/form';
import "./FieldView.css"

interface IField {
  label: string;
}

const FieldView = ({fieldProps, inputProps, label}: FieldProps<IField>) => {
  return (
    <div>
      <div>
        <label>{label}</label>
      </div>
      <input {...inputProps} />
      <span className="error">{fieldProps.error}</span>
    </div>
  );
};

export default {
  Email: createField<IField>(FieldType.EMAIL, FieldView),
  Phone: createField<IField>(FieldType.PHONE, FieldView),
  Pass: createField<IField>(FieldType.PASSWORD, FieldView)
}