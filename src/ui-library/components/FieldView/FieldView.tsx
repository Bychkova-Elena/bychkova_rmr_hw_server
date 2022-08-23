import React from "react";
import { FieldProps, createField, FieldType } from '@altiore/form';
import styles from "./FieldView.module.scss";

interface IField {
  label: string;
}

const Field = ({fieldProps, inputProps, label}: FieldProps<IField>) => {
  return (
    <div>
      <div className={ styles.label}>
        <label>{label}</label>
      </div>
      <input {...inputProps} className={ styles.input} />
      <span className={ styles.error}>{fieldProps.error}</span>
    </div>
  );
};

export const FieldView = {
  Email: createField<IField>(FieldType.EMAIL, Field),
  Text: createField<IField>(FieldType.TEXT, Field),
  Pass: createField<IField>(FieldType.PASSWORD, Field)
}