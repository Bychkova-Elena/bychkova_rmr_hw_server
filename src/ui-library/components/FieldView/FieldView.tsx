import React from "react";
import { FieldProps, createField, FieldType } from '@altiore/form';
import styles from "./FieldView.module.scss";

interface IField {
  label: string;
}

const FieldView = ({fieldProps, inputProps, label}: FieldProps<IField>) => {
  return (
    <div>
      <div className={ styles.label}>
        <label>{label}</label>
      </div>
      <input {...inputProps} />
      <span className={ styles.error}>{fieldProps.error}</span>
    </div>
  );
};

export default {
  Email: createField<IField>(FieldType.EMAIL, FieldView),
  Text: createField<IField>(FieldType.TEXT, FieldView),
  Pass: createField<IField>(FieldType.PASSWORD, FieldView)
}